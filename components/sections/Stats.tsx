"use client";
import { useEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { siteConfig } from "@/lib/config";

gsap.registerPlugin(ScrollTrigger);

export default function Stats() {
    const sectionRef = useRef<HTMLElement>(null);
    const countersRef = useRef<HTMLDivElement>(null);
    const imagesRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Animate section label + title
            gsap.fromTo(
                ".stats-heading",
                { opacity: 0, y: 50 },
                {
                    opacity: 1, y: 0, duration: 0.9, ease: "power3.out",
                    scrollTrigger: { trigger: sectionRef.current, start: "top 80%" }
                }
            );

            // Count-up animations
            const counters = countersRef.current?.querySelectorAll(".counter-val");
            counters?.forEach((el) => {
                const target = parseInt((el as HTMLElement).dataset.target || "0", 10);
                const obj = { val: 0 };
                gsap.to(obj, {
                    val: target,
                    duration: 2.2,
                    ease: "power2.out",
                    onUpdate: () => { el.textContent = Math.round(obj.val).toLocaleString(); },
                    scrollTrigger: { trigger: sectionRef.current, start: "top 65%" },
                });
            });

            // Mask-reveal athlete images
            const images = imagesRef.current?.querySelectorAll(".athlete-img-wrap");
            images?.forEach((el, i) => {
                gsap.fromTo(
                    el,
                    { clipPath: "inset(100% 0% 0% 0%)", opacity: 0 },
                    {
                        clipPath: "inset(0% 0% 0% 0%)", opacity: 1,
                        duration: 1.0, ease: "power3.out", delay: i * 0.15,
                        scrollTrigger: { trigger: imagesRef.current, start: "top 75%" },
                    }
                );
            });
        }, sectionRef);
        return () => ctx.revert();
    }, []);

    const athletes = [
        { label: "Body Recomp", emoji: "💪", bg: "linear-gradient(135deg,#1a0a00,#2d1500)" },
        { label: "Weight Loss", emoji: "🔥", bg: "linear-gradient(135deg,#0a0d1a,#001525)" },
        { label: "Muscle Gain", emoji: "⚡", bg: "linear-gradient(135deg,#1a0000,#2d0a00)" },
    ];

    return (
        <section
            ref={sectionRef}
            id="stats"
            className="section-pad"
            style={{ background: "#0D0D0D", position: "relative", overflow: "hidden" }}
        >
            {/* BG accent */}
            <div style={{
                position: "absolute", top: "50%", left: "50%",
                transform: "translate(-50%, -50%)",
                width: "800px", height: "800px",
                background: "radial-gradient(circle, rgba(255,107,0,0.05) 0%, transparent 70%)",
                pointerEvents: "none",
            }} />

            <div className="container">
                {/* Heading */}
                <div className="stats-heading" style={{ textAlign: "center", marginBottom: "72px", opacity: 0 }}>
                    <div className="section-label" style={{ justifyContent: "center" }}>Our Numbers</div>
                    <h2 className="font-bebas" style={{ fontSize: "clamp(48px,8vw,96px)", lineHeight: 0.95 }}>
                        RESULTS THAT{" "}
                        <span className="text-gradient">SPEAK</span>
                    </h2>
                </div>

                {/* Counter Grid */}
                <div
                    ref={countersRef}
                    style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
                        gap: "2px",
                        marginBottom: "80px",
                    }}
                >
                    {siteConfig.stats.map((stat) => (
                        <div
                            key={stat.label}
                            className="glass"
                            style={{
                                padding: "40px 32px",
                                textAlign: "center",
                                position: "relative",
                                overflow: "hidden",
                            }}
                        >
                            <div
                                style={{
                                    position: "absolute", top: 0, left: "50%", transform: "translateX(-50%)",
                                    width: "60%", height: "2px",
                                    background: "linear-gradient(90deg, transparent, #FF6B00, transparent)",
                                }}
                            />
                            <div
                                className="font-bebas counter-val"
                                data-target={stat.value}
                                style={{
                                    fontSize: "clamp(56px, 8vw, 88px)",
                                    lineHeight: 1,
                                    color: "#FF6B00",
                                    textShadow: "0 0 30px rgba(255,107,0,0.4)",
                                }}
                            >
                                0
                            </div>
                            <div
                                className="font-bebas"
                                style={{ fontSize: "1.1rem", color: "#FF6B00", lineHeight: 1, marginBottom: "8px" }}
                            >
                                {stat.suffix}
                            </div>
                            <div style={{ color: "rgba(245,245,245,0.5)", fontSize: "0.85rem", letterSpacing: "0.1em", textTransform: "uppercase" }}>
                                {stat.label}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Athlete Mask Reveal */}
                <div
                    ref={imagesRef}
                    style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "16px" }}
                >
                    {athletes.map((a) => (
                        <div
                            key={a.label}
                            className="athlete-img-wrap"
                            style={{
                                height: "320px", borderRadius: "12px",
                                background: a.bg,
                                border: "1px solid rgba(255,107,0,0.15)",
                                display: "flex", flexDirection: "column",
                                alignItems: "center", justifyContent: "center",
                                position: "relative", overflow: "hidden",
                            }}
                        >
                            <div style={{ fontSize: "5rem" }}>{a.emoji}</div>
                            <div
                                className="font-bebas"
                                style={{ marginTop: "16px", fontSize: "1.4rem", letterSpacing: "0.1em", color: "rgba(245,245,245,0.8)" }}
                            >
                                {a.label}
                            </div>
                            <div
                                style={{
                                    position: "absolute", bottom: 0, left: 0, right: 0, height: "60px",
                                    background: "linear-gradient(0deg, rgba(8,8,8,0.9), transparent)",
                                }}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
