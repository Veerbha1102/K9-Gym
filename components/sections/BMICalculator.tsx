"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { siteConfig } from "@/lib/config";

function getBMICategory(bmi: number) {
    if (bmi < 18.5) return { label: "Underweight", color: "#60A5FA", advice: "You need to build muscle mass and strength.", goal: "Muscle Gain" };
    if (bmi < 25) return { label: "Normal Weight ✓", color: "#4ADE80", advice: "You're in a healthy range. Keep pushing!", goal: "Maintain & Tone" };
    if (bmi < 30) return { label: "Overweight", color: "#FBBF24", advice: "A structured program can transform you in 90 days.", goal: "Weight Loss" };
    return { label: "Obese", color: "#FF6B00", advice: "K9's expert trainers will give you a life-changing program.", goal: "Weight Loss" };
}

function getKgFromGoal(bmi: number, weight: number) {
    if (bmi < 25 && bmi >= 18.5) return null;
    const targetBmi = bmi > 25 ? 24.9 : 18.5;
    const heightM = weight / (bmi / 1);
    // approximate
    return Math.abs(Math.round(weight - targetBmi));
}

export default function BMICalculator() {
    const [height, setHeight] = useState(170);
    const [weight, setWeight] = useState(70);
    const [showResult, setShowResult] = useState(false);

    const bmi = parseFloat((weight / ((height / 100) ** 2)).toFixed(1));
    const category = getBMICategory(bmi);
    const kgDiff = Math.abs(Math.round(weight - (24.9 * (height / 100) ** 2)));

    const waMsg = `Hi K9, my BMI is ${bmi} (${category.label}). I want to start a ${category.goal} program!`;

    return (
        <section id="bmi" className="section-pad" style={{ background: "#0A0A0A", position: "relative", overflow: "hidden" }}>
            {/* BG glow */}
            <div style={{
                position: "absolute", top: "50%", right: "-10%", transform: "translateY(-50%)",
                width: "500px", height: "500px",
                background: "radial-gradient(circle, rgba(255,107,0,0.08) 0%, transparent 70%)",
                pointerEvents: "none",
            }} />

            <div className="container">
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "64px", alignItems: "center" }}>
                    {/* Left: Inputs */}
                    <div>
                        <div className="section-label">Smart Fitness Tool</div>
                        <h2 className="font-bebas" style={{ fontSize: "clamp(40px,6vw,80px)", lineHeight: 0.95, marginBottom: "16px" }}>
                            CHECK YOUR <span className="text-gradient">BMI</span>
                        </h2>
                        <p style={{ color: "rgba(245,245,245,0.5)", fontSize: "0.95rem", marginBottom: "40px" }}>
                            Get instant results and a personalised K9 training recommendation.
                        </p>

                        {/* Height Slider */}
                        <div style={{ textAlign: "center", marginBottom: "64px" }}>
                            <div className="flex justify-center mb-4">
                                <div className="section-label !mb-0">BMI Calculator</div>
                            </div>
                            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "12px" }}>
                                <label style={{ color: "rgba(245,245,245,0.7)", fontFamily: "'Bebas Neue',sans-serif", letterSpacing: "0.1em" }}>HEIGHT</label>
                                <span className="font-bebas" style={{ color: "#FF6B00", fontSize: "1.4rem" }}>{height} cm</span>
                            </div>
                            <input
                                type="range" min={140} max={220} value={height}
                                onChange={(e) => { setHeight(Number(e.target.value)); setShowResult(false); }}
                                style={{ width: "100%", accentColor: "#FF6B00" }}
                            />
                            <div style={{ display: "flex", justifyContent: "space-between", marginTop: "6px" }}>
                                <span style={{ color: "rgba(245,245,245,0.3)", fontSize: "0.75rem" }}>140cm</span>
                                <span style={{ color: "rgba(245,245,245,0.3)", fontSize: "0.75rem" }}>220cm</span>
                            </div>
                        </div>

                        {/* Weight Slider */}
                        <div style={{ marginBottom: "40px" }}>
                            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "12px" }}>
                                <label style={{ color: "rgba(245,245,245,0.7)", fontFamily: "'Bebas Neue',sans-serif", letterSpacing: "0.1em" }}>WEIGHT</label>
                                <span className="font-bebas" style={{ color: "#FF6B00", fontSize: "1.4rem" }}>{weight} kg</span>
                            </div>
                            <input
                                type="range" min={30} max={180} value={weight}
                                onChange={(e) => { setWeight(Number(e.target.value)); setShowResult(false); }}
                                style={{ width: "100%", accentColor: "#FF6B00" }}
                            />
                            <div style={{ display: "flex", justifyContent: "space-between", marginTop: "6px" }}>
                                <span style={{ color: "rgba(245,245,245,0.3)", fontSize: "0.75rem" }}>30kg</span>
                                <span style={{ color: "rgba(245,245,245,0.3)", fontSize: "0.75rem" }}>180kg</span>
                            </div>
                        </div>

                        <button
                            onClick={() => setShowResult(true)}
                            className="btn-orange"
                            style={{ width: "100%", justifyContent: "center", fontSize: "1.2rem" }}
                        >
                            <span>⚡ Calculate My BMI</span>
                        </button>
                    </div>

                    {/* Right: Result */}
                    <div style={{ minHeight: "400px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                        <AnimatePresence mode="wait">
                            {!showResult ? (
                                <motion.div
                                    key="placeholder"
                                    initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                                    style={{ textAlign: "center" }}
                                >
                                    <div style={{ fontSize: "6rem", marginBottom: "16px" }}>📊</div>
                                    <p style={{ color: "rgba(245,245,245,0.3)", fontSize: "1rem" }}>
                                        Adjust sliders and calculate to see your results
                                    </p>
                                </motion.div>
                            ) : (
                                <motion.div
                                    key="result"
                                    initial={{ opacity: 0, scale: 0.8, y: 30 }}
                                    animate={{ opacity: 1, scale: 1, y: 0 }}
                                    exit={{ opacity: 0, scale: 0.8 }}
                                    transition={{ type: "spring", duration: 0.6 }}
                                    style={{
                                        width: "100%", padding: "40px", borderRadius: "16px",
                                        background: "linear-gradient(160deg, #141414, #0e0e0e)",
                                        border: `1px solid ${category.color}44`,
                                        textAlign: "center",
                                        boxShadow: `0 0 40px ${category.color}22`,
                                    }}
                                >
                                    {/* BMI Number */}
                                    <div
                                        className="font-bebas"
                                        style={{ fontSize: "6rem", lineHeight: 1, color: category.color, textShadow: `0 0 30px ${category.color}66` }}
                                    >
                                        {bmi}
                                    </div>
                                    <div className="font-bebas" style={{ fontSize: "1.4rem", color: category.color, letterSpacing: "0.1em", marginBottom: "20px" }}>
                                        BMI — {category.label}
                                    </div>

                                    {/* BMI Scale */}
                                    <div style={{ margin: "20px 0", position: "relative", height: "8px", borderRadius: "4px", background: "linear-gradient(90deg, #60A5FA, #4ADE80, #FBBF24, #FF6B00, #EF4444)" }}>
                                        <div style={{
                                            position: "absolute", top: "50%", transform: "translate(-50%, -50%)",
                                            left: `${Math.min(Math.max(((bmi - 10) / 40) * 100, 2), 98)}%`,
                                            width: "16px", height: "16px", borderRadius: "50%",
                                            background: "#fff", border: `3px solid ${category.color}`,
                                            boxShadow: `0 0 10px ${category.color}`,
                                        }} />
                                    </div>
                                    <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "24px" }}>
                                        {["10", "18.5", "25", "30", "50"].map(v => (
                                            <span key={v} style={{ fontSize: "0.7rem", color: "rgba(245,245,245,0.3)" }}>{v}</span>
                                        ))}
                                    </div>

                                    {/* Advice */}
                                    <p style={{ color: "rgba(245,245,245,0.7)", fontSize: "0.95rem", lineHeight: 1.6, marginBottom: "24px" }}>
                                        {category.advice}
                                        {bmi >= 25 && (
                                            <strong style={{ color: "#FF6B00" }}>
                                                {" "}You are ~{kgDiff}kg from your ideal weight.
                                            </strong>
                                        )}
                                    </p>

                                    <p style={{ color: "rgba(245,245,245,0.5)", fontSize: "0.85rem", marginBottom: "24px" }}>
                                        Recommended: <strong style={{ color: category.color }}>{category.goal}</strong> Program at K9
                                    </p>

                                    <a
                                        href={`https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(waMsg)}`}
                                        target="_blank" rel="noopener noreferrer"
                                        className="btn-orange"
                                        style={{ display: "inline-flex", textDecoration: "none", width: "100%", justifyContent: "center" }}
                                    >
                                        <span>Start My K9 Journey 🔥</span>
                                    </a>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </div>
            </div>

            {/* Mobile: stack */}
            <style>{`
        @media(max-width:768px){
          #bmi .container > div { grid-template-columns: 1fr !important; gap: 40px !important; }
        }
      `}</style>
        </section>
    );
}
