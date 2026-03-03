"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { siteConfig } from "@/lib/config";

const goals = ["Weight Loss", "Muscle Gain", "General Fitness", "CrossFit", "Yoga & Flexibility"];

export default function BookingSystem() {
    const [step, setStep] = useState<1 | 2 | 3>(1);
    const [selectedDate, setSelectedDate] = useState<number | null>(null);
    const [selectedTime, setSelectedTime] = useState<string | null>(null);
    const [selectedGoal, setSelectedGoal] = useState<string | null>(null);
    const [name, setName] = useState("");

    // Generate next 14 days
    const today = new Date();
    const days = Array.from({ length: 14 }, (_, i) => {
        const d = new Date(today);
        d.setDate(today.getDate() + i);
        return d;
    });

    const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

    const getWhatsAppUrl = () => {
        const d = days[selectedDate!];
        const dateStr = `${dayNames[d.getDay()]} ${d.getDate()} ${monthNames[d.getMonth()]}`;
        const msg = `Hi K9 Fitness! 🏋️\n\nName: ${name || "New Member"}\nFree Trial Booking Request:\n📅 Date: ${dateStr}\n⏰ Time: ${selectedTime}\n🎯 Goal: ${selectedGoal}\n\nLooking forward to starting my fitness journey! 💪`;
        return `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(msg)}`;
    };

    return (
        <section id="booking" className="section-pad" style={{ background: "#0A0A0A", position: "relative", overflow: "hidden" }}>
            {/* BG glow */}
            <div style={{ position: "absolute", top: "50%", left: "-5%", transform: "translateY(-50%)", width: "500px", height: "500px", background: "radial-gradient(circle, rgba(255,107,0,0.07) 0%, transparent 70%)", pointerEvents: "none" }} />

            <div className="container">
                <div style={{ textAlign: "center", marginBottom: "56px" }}>
                    <div className="flex justify-center mb-4">
                        <div className="section-label !mb-0">Zero-Admin Booking</div>
                    </div>
                    <h2 className="font-bebas" style={{ fontSize: "clamp(44px,7vw,88px)", lineHeight: 0.95 }}>
                        BOOK A <span className="text-gradient">FREE TRIAL</span>
                    </h2>
                    <p style={{ color: "rgba(245,245,245,0.5)", marginTop: "16px", fontSize: "1rem" }}>
                        Pick your day, pick your time, tell us your goal — we handle the rest via WhatsApp.
                    </p>
                </div>

                {/* Step Indicator */}
                <div style={{ display: "flex", justifyContent: "center", gap: "12px", marginBottom: "48px" }}>
                    {[1, 2, 3].map((s) => (
                        <div key={s} style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                            <div style={{
                                width: "36px", height: "36px", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center",
                                background: step >= s ? "linear-gradient(135deg, #FF6B00, #E64A19)" : "rgba(255,255,255,0.06)",
                                border: step >= s ? "none" : "1px solid rgba(255,255,255,0.1)",
                                fontFamily: "'Bebas Neue', sans-serif", fontSize: "1rem", color: "#fff",
                                transition: "all 0.3s ease",
                            }}>{s}</div>
                            {s < 3 && <div style={{ width: "40px", height: "1px", background: step > s ? "#FF6B00" : "rgba(255,255,255,0.1)", transition: "background 0.3s" }} />}
                        </div>
                    ))}
                </div>

                <div style={{ maxWidth: "760px", margin: "0 auto" }}>
                    <AnimatePresence mode="wait">

                        {/* Step 1: Date */}
                        {step === 1 && (
                            <motion.div key="step1" initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -40 }} transition={{ duration: 0.4 }}>
                                <h3 className="font-bebas" style={{ fontSize: "1.8rem", marginBottom: "24px", color: "#FF6B00" }}>PICK A DATE</h3>
                                <div style={{ display: "grid", gridTemplateColumns: "repeat(7, 1fr)", gap: "8px", marginBottom: "32px" }}>
                                    {days.map((d, i) => (
                                        <button key={i} onClick={() => setSelectedDate(i)} style={{
                                            padding: "10px 6px", borderRadius: "8px", border: selectedDate === i ? "2px solid #FF6B00" : "1px solid rgba(255,255,255,0.08)",
                                            background: selectedDate === i ? "rgba(255,107,0,0.15)" : "rgba(255,255,255,0.02)",
                                            cursor: "pointer", textAlign: "center", transition: "all 0.2s ease",
                                            color: selectedDate === i ? "#FF6B00" : "rgba(245,245,245,0.7)",
                                        }}>
                                            <div style={{ fontSize: "0.65rem", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "4px" }}>{dayNames[d.getDay()]}</div>
                                            <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "1.3rem" }}>{d.getDate()}</div>
                                            <div style={{ fontSize: "0.6rem", opacity: 0.5 }}>{monthNames[d.getMonth()]}</div>
                                        </button>
                                    ))}
                                </div>
                                <button className="btn-orange" disabled={selectedDate === null} onClick={() => setStep(2)} style={{ opacity: selectedDate === null ? 0.4 : 1 }}>
                                    <span>Next: Pick Time →</span>
                                </button>
                            </motion.div>
                        )}

                        {/* Step 2: Time + Goal */}
                        {step === 2 && (
                            <motion.div key="step2" initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -40 }} transition={{ duration: 0.4 }}>
                                <h3 className="font-bebas" style={{ fontSize: "1.8rem", marginBottom: "24px", color: "#FF6B00" }}>PICK TIME & GOAL</h3>
                                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(110px, 1fr))", gap: "8px", marginBottom: "28px" }}>
                                    {siteConfig.timeSlots.map((t) => (
                                        <button key={t} onClick={() => setSelectedTime(t)} style={{
                                            padding: "10px", borderRadius: "8px", border: selectedTime === t ? "2px solid #FF6B00" : "1px solid rgba(255,255,255,0.08)",
                                            background: selectedTime === t ? "rgba(255,107,0,0.15)" : "rgba(255,255,255,0.02)",
                                            color: selectedTime === t ? "#FF6B00" : "rgba(245,245,245,0.7)",
                                            cursor: "pointer", fontFamily: "'Bebas Neue', sans-serif", fontSize: "1rem", transition: "all 0.2s",
                                        }}>{t}</button>
                                    ))}
                                </div>
                                <h4 className="font-bebas" style={{ fontSize: "1.4rem", marginBottom: "16px", color: "rgba(245,245,245,0.8)" }}>YOUR GOAL</h4>
                                <div style={{ display: "flex", flexWrap: "wrap", gap: "10px", marginBottom: "32px" }}>
                                    {goals.map((g) => (
                                        <button key={g} onClick={() => setSelectedGoal(g)} style={{
                                            padding: "10px 18px", borderRadius: "20px", border: selectedGoal === g ? "2px solid #FF6B00" : "1px solid rgba(255,255,255,0.1)",
                                            background: selectedGoal === g ? "rgba(255,107,0,0.15)" : "transparent",
                                            color: selectedGoal === g ? "#FF6B00" : "rgba(245,245,245,0.6)",
                                            cursor: "pointer", fontSize: "0.9rem", transition: "all 0.2s",
                                        }}>{g}</button>
                                    ))}
                                </div>
                                <div style={{ display: "flex", gap: "12px" }}>
                                    <button className="btn-outline" onClick={() => setStep(1)}><span>← Back</span></button>
                                    <button className="btn-orange" disabled={!selectedTime || !selectedGoal} onClick={() => setStep(3)} style={{ opacity: !selectedTime || !selectedGoal ? 0.4 : 1 }}>
                                        <span>Next: Confirm →</span>
                                    </button>
                                </div>
                            </motion.div>
                        )}

                        {/* Step 3: Confirm */}
                        {step === 3 && (
                            <motion.div key="step3" initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -40 }} transition={{ duration: 0.4 }}>
                                <h3 className="font-bebas" style={{ fontSize: "1.8rem", marginBottom: "24px", color: "#FF6B00" }}>CONFIRM BOOKING</h3>
                                <div className="glass" style={{ padding: "32px", borderRadius: "16px", marginBottom: "28px" }}>
                                    {[
                                        { label: "📅 Date", val: days[selectedDate!] ? `${dayNames[days[selectedDate!].getDay()]}, ${days[selectedDate!].getDate()} ${monthNames[days[selectedDate!].getMonth()]}` : "" },
                                        { label: "⏰ Time", val: selectedTime || "" },
                                        { label: "🎯 Goal", val: selectedGoal || "" },
                                    ].map((r) => (
                                        <div key={r.label} style={{ display: "flex", justifyContent: "space-between", padding: "12px 0", borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
                                            <span style={{ color: "rgba(245,245,245,0.5)", fontSize: "0.9rem" }}>{r.label}</span>
                                            <span style={{ color: "#F5F5F5", fontWeight: 600, fontSize: "0.9rem" }}>{r.val}</span>
                                        </div>
                                    ))}
                                </div>
                                <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Your name (optional)"
                                    style={{
                                        width: "100%", padding: "14px 16px", marginBottom: "20px", background: "rgba(255,255,255,0.04)",
                                        border: "1px solid rgba(255,255,255,0.1)", borderRadius: "8px", color: "#F5F5F5", fontSize: "1rem",
                                    }}
                                />
                                <div style={{ display: "flex", gap: "12px" }}>
                                    <button className="btn-outline" onClick={() => setStep(2)}><span>← Back</span></button>
                                    <a href={getWhatsAppUrl()} target="_blank" rel="noopener noreferrer"
                                        className="btn-orange" style={{ flex: 1, textDecoration: "none", justifyContent: "center" }}
                                    >
                                        <span>✅ Confirm via WhatsApp</span>
                                    </a>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
}
