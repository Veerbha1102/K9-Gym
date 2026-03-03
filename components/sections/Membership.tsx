"use client";
import { useEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Tilt from "react-parallax-tilt";
import { siteConfig } from "@/lib/config";

gsap.registerPlugin(ScrollTrigger);

export default function Membership() {
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo(".mem-heading", { opacity: 0, y: 50 }, {
                opacity: 1, y: 0, duration: 0.9, ease: "power3.out",
                scrollTrigger: { trigger: sectionRef.current, start: "top 80%" }
            });
            gsap.fromTo(".mem-card", { opacity: 0, y: 60, scale: 0.95 }, {
                opacity: 1, y: 0, scale: 1, duration: 0.8, ease: "power3.out", stagger: 0.15,
                scrollTrigger: { trigger: ".mem-grid", start: "top 80%" }
            });
        }, sectionRef);
        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} id="membership" className="section-pad" style={{ background: "#080808" }}>
            <div className="container">
                <div className="mem-heading" style={{ textAlign: "center", marginBottom: "64px", opacity: 0 }}>
                    <div className="section-label" style={{ justifyContent: "center" }}>Membership Plans</div>
                    <h2 className="font-bebas" style={{ fontSize: "clamp(48px,8vw,96px)", lineHeight: 0.95 }}>
                        CHOOSE YOUR <span className="text-gradient">LEVEL</span>
                    </h2>
                    <p style={{ color: "rgba(245,245,245,0.5)", marginTop: "16px", fontSize: "1rem" }}>
                        No hidden fees. No lock-in contracts. Just results.
                    </p>
                </div>

                <div
                    className="mem-grid"
                    style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "24px", alignItems: "start" }}
                >
                    {siteConfig.membership.map((plan) => (
                        <div key={plan.tier} className="mem-card" style={{ opacity: 0 }}>
                            <Tilt
                                tiltMaxAngleX={10}
                                tiltMaxAngleY={10}
                                glareEnable={true}
                                glareMaxOpacity={0.12}
                                glareColor="#FF6B00"
                                glarePosition="all"
                                glareBorderRadius="16px"
                                scale={1.02}
                                style={{ transformStyle: "preserve-3d", borderRadius: "16px" }}
                            >
                                <div
                                    style={{
                                        padding: "40px 32px",
                                        borderRadius: "16px",
                                        background: plan.popular
                                            ? "linear-gradient(160deg, #1a0a00 0%, #120800 100%)"
                                            : "linear-gradient(160deg, #141414 0%, #0e0e0e 100%)",
                                        border: `1px solid ${plan.popular ? "rgba(255,107,0,0.5)" : "rgba(255,255,255,0.06)"}`,
                                        position: "relative",
                                        overflow: "hidden",
                                    }}
                                >
                                    {/* Popular badge */}
                                    {plan.popular && (
                                        <div
                                            className="font-bebas"
                                            style={{
                                                position: "absolute", top: "16px", right: "16px",
                                                background: "linear-gradient(135deg, #FF6B00, #E64A19)",
                                                color: "#fff", padding: "4px 14px",
                                                borderRadius: "20px", fontSize: "0.8rem", letterSpacing: "0.15em",
                                            }}
                                        >
                                            MOST POPULAR
                                        </div>
                                    )}

                                    {/* Top accent line */}
                                    <div style={{
                                        position: "absolute", top: 0, left: 0, right: 0, height: "3px",
                                        background: `linear-gradient(90deg, transparent, ${plan.color}, transparent)`,
                                    }} />

                                    <div className="font-bebas" style={{ fontSize: "1.1rem", letterSpacing: "0.2em", color: plan.color, marginBottom: "12px" }}>
                                        {plan.tier}
                                    </div>
                                    <div style={{ display: "flex", alignItems: "baseline", gap: "4px", marginBottom: "32px" }}>
                                        <span className="font-bebas" style={{ fontSize: "3.5rem", color: "#F5F5F5", lineHeight: 1 }}>{plan.price}</span>
                                        <span style={{ color: "rgba(245,245,245,0.4)", fontSize: "0.9rem" }}>{plan.period}</span>
                                    </div>

                                    <div style={{ borderTop: "1px solid rgba(255,255,255,0.06)", paddingTop: "24px", marginBottom: "32px" }}>
                                        {plan.features.map((f) => (
                                            <div key={f} style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "12px" }}>
                                                <span style={{ color: plan.color, fontSize: "1rem", flexShrink: 0 }}>✓</span>
                                                <span style={{ color: "rgba(245,245,245,0.7)", fontSize: "0.9rem" }}>{f}</span>
                                            </div>
                                        ))}
                                    </div>

                                    <a
                                        href={`https://wa.me/${siteConfig.whatsapp}?text=Hi+K9,+I'm+interested+in+the+${encodeURIComponent(plan.tier)}+Plan+at+${encodeURIComponent(plan.price)}/month`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        style={{
                                            display: "block", textAlign: "center", padding: "14px",
                                            borderRadius: "8px", textDecoration: "none",
                                            fontFamily: "'Bebas Neue', sans-serif", fontSize: "1.1rem", letterSpacing: "0.1em",
                                            background: plan.popular ? "linear-gradient(135deg, #FF6B00, #E64A19)" : "transparent",
                                            border: plan.popular ? "none" : `1.5px solid ${plan.color}`,
                                            color: plan.popular ? "#fff" : plan.color,
                                            transition: "all 0.3s ease",
                                        }}
                                        onMouseEnter={(e) => {
                                            if (!plan.popular) {
                                                (e.currentTarget as HTMLElement).style.background = `${plan.color}22`;
                                            }
                                            (e.currentTarget as HTMLElement).style.boxShadow = `0 8px 24px rgba(255,107,0,0.4)`;
                                        }}
                                        onMouseLeave={(e) => {
                                            if (!plan.popular) {
                                                (e.currentTarget as HTMLElement).style.background = "transparent";
                                            }
                                            (e.currentTarget as HTMLElement).style.boxShadow = "none";
                                        }}
                                    >
                                        Get Started →
                                    </a>
                                </div>
                            </Tilt>
                        </div>
                    ))}
                </div>

                {/* Note */}
                <p style={{ textAlign: "center", marginTop: "32px", color: "rgba(245,245,245,0.3)", fontSize: "0.85rem" }}>
                    All plans include full gym access · Open 365 days including Sundays · Female trainer available
                </p>
            </div>
        </section>
    );
}
