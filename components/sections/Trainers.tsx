"use client";
import { useEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { siteConfig } from "@/lib/config";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

// Trainer specialties — names kept blank until real info is confirmed
const trainers = [
    {
        id: "head",
        role: "Head Trainer & Founder",
        specialty: "Muscle Gain & Strength",
        experience: "10+ Years",
        tags: ["Strength", "Bodybuilding", "Nutrition"],
        isFemale: false,
    },
    {
        id: "female",
        role: "Certified Female Trainer",
        specialty: "Weight Loss & Toning",
        experience: "5+ Years",
        tags: ["Weight Loss", "Yoga", "Zumba", "HIIT"],
        isFemale: true,
    },
    {
        id: "crossfit",
        role: "CrossFit & Cardio Coach",
        specialty: "CrossFit & Endurance",
        experience: "4+ Years",
        tags: ["CrossFit", "Cardio", "HIIT"],
        isFemale: false,
    },
];

// Silhouette placeholder per trainer type
function TrainerAvatar({ isFemale }: { isFemale?: boolean }) {
    return (
        <div style={{
            width: "100%", height: "100%",
            display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
            background: "linear-gradient(160deg, #1a0a00 0%, #111 100%)",
        }}>
            <div style={{ fontSize: isFemale ? "7rem" : "7rem", opacity: 0.4 }}>
                {isFemale ? "👩" : "👨"}
            </div>
            <div style={{
                marginTop: "12px", fontFamily: "'Bebas Neue', sans-serif",
                fontSize: "0.85rem", letterSpacing: "0.2em",
                color: "rgba(245,245,245,0.2)",
            }}>
                PHOTO COMING SOON
            </div>
        </div>
    );
}

export default function Trainers() {
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo(".trainer-heading", { opacity: 0, y: 50 }, {
                opacity: 1, y: 0, duration: 0.9, ease: "power3.out",
                scrollTrigger: { trigger: sectionRef.current, start: "top 80%" }
            });
            gsap.fromTo(".trainer-card", { opacity: 0, y: 60 }, {
                opacity: 1, y: 0, duration: 0.8, ease: "power3.out", stagger: 0.2,
                scrollTrigger: { trigger: ".trainer-grid", start: "top 80%" }
            });
        }, sectionRef);
        return () => ctx.revert();
    }, []);

    return (
        <section
            ref={sectionRef}
            id="trainers"
            className="section-pad"
            style={{ background: "#0D0D0D", position: "relative", overflow: "hidden" }}
        >
            {/* Faded gym exterior BG */}
            <div style={{ position: "absolute", inset: 0, opacity: 0.04, zIndex: 0 }}>
                <Image src="/unnamed.webp" alt="" fill style={{ objectFit: "cover" }} />
            </div>

            <div className="container" style={{ position: "relative", zIndex: 1 }}>
                {/* Heading */}
                <div className="trainer-heading" style={{ marginBottom: "48px", opacity: 0 }}>
                    <div className="section-label">Expert Coaches</div>
                    <h2 className="font-bebas" style={{ fontSize: "clamp(48px,8vw,96px)", lineHeight: 0.95 }}>
                        MEET YOUR <span className="text-gradient">TRAINERS</span>
                    </h2>
                    <p style={{ color: "rgba(245,245,245,0.5)", marginTop: "16px", fontSize: "1rem", maxWidth: "480px" }}>
                        Certified professionals with 20+ combined years of experience. 3700+ lives transformed right here in Madhapar.
                    </p>
                </div>

                {/* Feature badges */}
                <div style={{ display: "flex", gap: "12px", flexWrap: "wrap", marginBottom: "48px" }}>
                    {["✅ Female Trainer Available", "🗓️ Open 365 Days", "⭐ 10+ Years Experience", "📍 Madhapar, Bhuj"].map((b) => (
                        <span key={b} style={{
                            padding: "8px 16px", borderRadius: "20px", fontSize: "0.85rem",
                            background: "rgba(255,107,0,0.1)", border: "1px solid rgba(255,107,0,0.25)",
                            color: "rgba(245,245,245,0.8)",
                        }}>{b}</span>
                    ))}
                </div>

                {/* Trainer Cards */}
                <div
                    className="trainer-grid"
                    style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "24px" }}
                >
                    {trainers.map((trainer) => (
                        <div
                            key={trainer.id}
                            className="trainer-card card-hover"
                            style={{
                                borderRadius: "16px", overflow: "hidden",
                                background: "linear-gradient(160deg, #141414, #0e0e0e)",
                                border: "1px solid rgba(255,107,0,0.15)",
                                opacity: 0,
                            }}
                        >
                            {/* Photo placeholder */}
                            <div style={{ position: "relative", height: "280px", overflow: "hidden" }}>
                                <TrainerAvatar isFemale={trainer.isFemale} />
                                <div style={{
                                    position: "absolute", inset: 0,
                                    background: "linear-gradient(0deg, rgba(8,8,8,1) 0%, rgba(8,8,8,0.1) 60%, transparent 100%)",
                                }} />
                                {trainer.isFemale && (
                                    <div style={{
                                        position: "absolute", top: "16px", right: "16px",
                                        background: "linear-gradient(135deg, #FF6B00, #E64A19)",
                                        color: "#fff", padding: "4px 12px", borderRadius: "20px",
                                        fontFamily: "'Bebas Neue', sans-serif", fontSize: "0.8rem", letterSpacing: "0.1em",
                                    }}>
                                        FEMALE TRAINER
                                    </div>
                                )}
                            </div>

                            {/* Info */}
                            <div style={{ padding: "24px" }}>
                                {/* Name intentionally blank — to be filled later */}
                                <div style={{ height: "28px", marginBottom: "4px" }} />
                                <div style={{ color: "#FF6B00", fontSize: "0.85rem", marginBottom: "6px", letterSpacing: "0.05em" }}>
                                    {trainer.role}
                                </div>
                                <div style={{ color: "rgba(245,245,245,0.5)", fontSize: "0.8rem", marginBottom: "4px" }}>
                                    Specialty: {trainer.specialty}
                                </div>
                                <div style={{ color: "rgba(245,245,245,0.4)", fontSize: "0.8rem", marginBottom: "16px" }}>
                                    {trainer.experience} · ⭐ 5.0
                                </div>

                                <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", marginBottom: "20px" }}>
                                    {trainer.tags.map((tag) => (
                                        <span key={tag} style={{
                                            padding: "3px 10px", borderRadius: "4px", fontSize: "0.75rem",
                                            background: "rgba(255,107,0,0.08)", border: "1px solid rgba(255,107,0,0.2)",
                                            color: "rgba(245,245,245,0.7)",
                                        }}>{tag}</span>
                                    ))}
                                </div>

                                <a
                                    href={`https://wa.me/${siteConfig.whatsapp}?text=Hi+K9,+I+want+to+book+a+PT+session+with+your+${encodeURIComponent(trainer.role)}`}
                                    target="_blank" rel="noopener noreferrer"
                                    className="btn-outline"
                                    style={{ display: "inline-flex", textDecoration: "none", width: "100%", justifyContent: "center", fontSize: "0.95rem" }}
                                >
                                    Book PT Session
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
