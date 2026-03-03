"use client";
import { useState, useRef, useCallback } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const transformations = [
    { id: 1, before: "/IMG/bg1.jpg", after: "/IMG/bg2.jpg", name: "Member 01", duration: "90 Days", result: "Weight Loss" },
    { id: 2, before: "/IMG/bg2.jpg", after: "/IMG/bg3.jpg", name: "Member 02", duration: "60 Days", result: "Muscle Gain" },
    { id: 3, before: "/IMG/bg3.jpg", after: "/IMG/bg1.jpg", name: "Member 03", duration: "120 Days", result: "Body Recomp" },
];

function BeforeAfterSlider({ before, after }: { before: string; after: string }) {
    const [sliderPos, setSliderPos] = useState(50);
    const containerRef = useRef<HTMLDivElement>(null);
    const isDragging = useRef(false);

    const updateSlider = useCallback((clientX: number) => {
        const rect = containerRef.current?.getBoundingClientRect();
        if (!rect) return;
        const pos = ((clientX - rect.left) / rect.width) * 100;
        setSliderPos(Math.min(Math.max(pos, 2), 98));
    }, []);

    const onMouseDown = () => { isDragging.current = true; };
    const onMouseUp = () => { isDragging.current = false; };
    const onMouseMove = (e: React.MouseEvent) => { if (isDragging.current) updateSlider(e.clientX); };
    const onTouchMove = (e: React.TouchEvent) => { updateSlider(e.touches[0].clientX); };

    return (
        <div
            ref={containerRef}
            className="before-after-slider"
            onMouseDown={onMouseDown}
            onMouseUp={onMouseUp}
            onMouseMove={onMouseMove}
            onMouseLeave={onMouseUp}
            onTouchMove={onTouchMove}
            style={{ position: "relative", width: "100%", aspectRatio: "3/4", borderRadius: "12px", overflow: "hidden", userSelect: "none" }}
        >
            {/* After (full) */}
            <Image src={after} alt="After" fill style={{ objectFit: "cover" }} />

            {/* Before (clipped) */}
            <div style={{ position: "absolute", inset: 0, clipPath: `inset(0 ${100 - sliderPos}% 0 0)` }}>
                <Image src={before} alt="Before" fill style={{ objectFit: "cover" }} />
                <div style={{ position: "absolute", inset: 0, background: "rgba(8,8,8,0.3)" }} />
                <div style={{ position: "absolute", top: "12px", left: "12px", background: "rgba(8,8,8,0.7)", padding: "4px 10px", borderRadius: "4px", fontFamily: "'Bebas Neue',sans-serif", fontSize: "0.85rem", color: "#fff", letterSpacing: "0.1em" }}>BEFORE</div>
            </div>

            {/* After label */}
            <div style={{ position: "absolute", top: "12px", right: "12px", background: "rgba(255,107,0,0.85)", padding: "4px 10px", borderRadius: "4px", fontFamily: "'Bebas Neue',sans-serif", fontSize: "0.85rem", color: "#fff", letterSpacing: "0.1em" }}>AFTER</div>

            {/* Divider */}
            <div style={{
                position: "absolute", top: 0, bottom: 0, left: `${sliderPos}%`, transform: "translateX(-50%)",
                width: "2px", background: "#FF6B00", cursor: "ew-resize",
            }}>
                <div style={{
                    position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)",
                    width: "36px", height: "36px", borderRadius: "50%", background: "#FF6B00",
                    display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1rem", color: "#fff",
                    boxShadow: "0 0 12px rgba(255,107,0,0.8)",
                }}>⟺</div>
            </div>
        </div>
    );
}

export default function TransformationGallery() {
    return (
        <section id="gallery" className="section-pad" style={{ background: "#0D0D0D" }}>
            <div className="container">
                <div style={{ textAlign: "center", marginBottom: "56px" }}>
                    <div className="section-label" style={{ justifyContent: "center" }}>Member Results</div>
                    <h2 className="font-bebas" style={{ fontSize: "clamp(44px,7vw,88px)", lineHeight: 0.95 }}>
                        REAL <span className="text-gradient">TRANSFORMATIONS</span>
                    </h2>
                    <p style={{ color: "rgba(245,245,245,0.5)", marginTop: "16px" }}>
                        Drag the slider to reveal real K9 member transformations. 470+ success stories and counting.
                    </p>
                </div>

                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "24px" }}>
                    {transformations.map((t, i) => (
                        <motion.div
                            key={t.id}
                            initial={{ opacity: 0, y: 60 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: i * 0.15 }}
                            viewport={{ once: true, margin: "-80px" }}
                        >
                            <BeforeAfterSlider before={t.before} after={t.after} />
                            <div style={{ marginTop: "12px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                                <div>
                                    <div style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: "1.1rem", color: "#F5F5F5" }}>{t.name}</div>
                                    <div style={{ fontSize: "0.8rem", color: "rgba(245,245,245,0.5)" }}>{t.result}</div>
                                </div>
                                <div style={{
                                    padding: "4px 12px", borderRadius: "20px", fontSize: "0.8rem",
                                    background: "rgba(255,107,0,0.1)", border: "1px solid rgba(255,107,0,0.3)",
                                    color: "#FF6B00", fontFamily: "'Bebas Neue',sans-serif",
                                }}>{t.duration}</div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
