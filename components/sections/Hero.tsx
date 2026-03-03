"use client";
import { useEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { siteConfig } from "@/lib/config";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
    const heroRef = useRef<HTMLElement>(null);
    const spotlightRef = useRef<HTMLDivElement>(null);
    const panel1Ref = useRef<HTMLDivElement>(null);
    const panel2Ref = useRef<HTMLDivElement>(null);
    const panel3Ref = useRef<HTMLDivElement>(null);
    const subtitleRef = useRef<HTMLDivElement>(null);
    const ctaRef = useRef<HTMLDivElement>(null);
    const statsRowRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        // Spotlight follows mouse
        const handleMouse = (e: MouseEvent) => {
            if (spotlightRef.current) {
                gsap.to(spotlightRef.current, {
                    x: e.clientX - 300,
                    y: e.clientY - 300,
                    duration: 0.8,
                    ease: "power2.out",
                });
            }
        };
        window.addEventListener("mousemove", handleMouse);

        // Panel entrance animations
        const ctx = gsap.context(() => {
            const tl = gsap.timeline({ delay: 0.2 });

            tl.fromTo(panel1Ref.current,
                { x: -100, opacity: 0, rotateY: -15 },
                { x: 0, opacity: 1, rotateY: 0, duration: 1, ease: "power3.out" }
            )
                .fromTo(panel2Ref.current,
                    { y: 80, opacity: 0, scale: 0.9 },
                    { y: 0, opacity: 1, scale: 1, duration: 1, ease: "power3.out" },
                    "-=0.6"
                )
                .fromTo(panel3Ref.current,
                    { x: 100, opacity: 0, rotateY: 15 },
                    { x: 0, opacity: 1, rotateY: 0, duration: 1, ease: "power3.out" },
                    "-=0.7"
                )
                .fromTo(subtitleRef.current,
                    { opacity: 0, y: 30 },
                    { opacity: 1, y: 0, duration: 0.7 },
                    "-=0.3"
                )
                .fromTo(ctaRef.current,
                    { opacity: 0, y: 30 },
                    { opacity: 1, y: 0, duration: 0.7 },
                    "-=0.4"
                )
                .fromTo(statsRowRef.current,
                    { opacity: 0, y: 30 },
                    { opacity: 1, y: 0, duration: 0.7 },
                    "-=0.3"
                );

            // Scroll parallax on panels
            gsap.to(panel1Ref.current, {
                y: -80, scrollTrigger: { trigger: heroRef.current, start: "top top", end: "bottom top", scrub: 1.5 },
            });
            gsap.to(panel2Ref.current, {
                y: -50, scrollTrigger: { trigger: heroRef.current, start: "top top", end: "bottom top", scrub: 1 },
            });
            gsap.to(panel3Ref.current, {
                y: -100, scrollTrigger: { trigger: heroRef.current, start: "top top", end: "bottom top", scrub: 2 },
            });
        }, heroRef);

        return () => {
            ctx.revert();
            window.removeEventListener("mousemove", handleMouse);
        };
    }, []);

    const waUrl = `https://wa.me/${siteConfig.whatsapp}?text=Hi+K9,+I+want+to+book+a+Free+Trial+Session!`;

    return (
        <section
            ref={heroRef}
            id="hero"
            style={{
                position: "relative",
                minHeight: "100vh",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                overflow: "hidden",
                background: "#080808",
            }}
        >
            {/* Orange Spotlight */}
            <div
                ref={spotlightRef}
                className="spotlight"
                style={{ width: "600px", height: "600px", top: 0, left: 0, position: "absolute" }}
            />

            {/* Background grid */}
            <div style={{
                position: "absolute", inset: 0,
                backgroundImage: "linear-gradient(rgba(255,107,0,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,107,0,0.03) 1px, transparent 1px)",
                backgroundSize: "80px 80px", pointerEvents: "none",
            }} />

            {/* 3-Panel "BURN TO BE GREAT" images — right side */}
            <div
                id="hero-panels"
                style={{
                    position: "absolute",
                    right: 0, top: 0, bottom: 0,
                    width: "clamp(320px, 50vw, 760px)",
                    display: "flex",
                    gap: "3px",
                    overflow: "hidden",
                    zIndex: 1,
                }}>
                {/* Dark left fade */}
                <div style={{
                    position: "absolute", left: 0, top: 0, bottom: 0, width: "40%", zIndex: 2,
                    background: "linear-gradient(90deg, #080808 0%, transparent 100%)",
                    pointerEvents: "none",
                }} />
                {/* Bottom fade */}
                <div style={{
                    position: "absolute", left: 0, right: 0, bottom: 0, height: "30%", zIndex: 2,
                    background: "linear-gradient(0deg, #080808 0%, transparent 100%)",
                    pointerEvents: "none",
                }} />

                {/* Panel 1 — BURN */}
                <div ref={panel1Ref} style={{ flex: 1, position: "relative", opacity: 0 }}>
                    <Image src="/bg1.jpg" alt="Burn" fill style={{ objectFit: "cover", objectPosition: "center top" }} />
                    <div style={{ position: "absolute", inset: 0, background: "rgba(8,8,8,0.25)" }} />
                </div>

                {/* Panel 2 — TO BE */}
                <div ref={panel2Ref} style={{ flex: 1.2, position: "relative", opacity: 0 }}>
                    <Image src="/bg2.jpg" alt="To Be" fill style={{ objectFit: "cover", objectPosition: "center" }} />
                    <div style={{ position: "absolute", inset: 0, background: "rgba(8,8,8,0.15)" }} />
                </div>

                {/* Panel 3 — GREAT */}
                <div ref={panel3Ref} style={{ flex: 1, position: "relative", opacity: 0 }}>
                    <Image src="/bg3.jpg" alt="Great" fill style={{ objectFit: "cover", objectPosition: "center top" }} />
                    <div style={{ position: "absolute", inset: 0, background: "rgba(8,8,8,0.25)" }} />
                </div>
            </div>

            {/* Hero Content */}
            <div
                id="hero-content"
                className="container relative z-10 pt-[clamp(180px,25vh,260px)] pb-20"
            >
                <div style={{ width: "100%" }}>
                    <div className="flex justify-center mb-8">
                        <div className="section-label !mb-0" style={{ fontSize: "1.1rem", letterSpacing: "0.25em", whiteSpace: "nowrap" }}>
                            MADHAPAR · BHUJ · KUTCH
                        </div>
                    </div>

                    {/* Main Headline */}
                    <h1 className="font-bebas" style={{
                        fontSize: "clamp(60px, 12vw, 120px)",
                        lineHeight: 0.9,
                        color: "#fff",
                        marginBottom: "24px",
                    }}>
                        BURN <span className="text-orange-500">TO BE</span> <br />
                        GREAT
                    </h1>

                    <p ref={subtitleRef} style={{
                        fontSize: "clamp(1rem, 2vw, 1.25rem)",
                        color: "rgba(245,245,245,0.7)",
                        lineHeight: 1.6,
                        maxWidth: "540px",
                        marginBottom: "40px",
                    }}>
                        Madhapar & Bhuj's most elite fitness experience. 10+ years.
                        3700+ lives transformed. Female trainers available. Open 365 days.
                    </p>
                </div>

                {/* CTAs */}
                <div ref={ctaRef} style={{ marginTop: "36px", display: "flex", gap: "16px", flexWrap: "wrap", opacity: 0 }}>
                    <a href="#booking" className="btn-orange" style={{ textDecoration: "none" }}>
                        <span>🎯 Book Free Trial</span>
                    </a>
                    <a href={waUrl} target="_blank" rel="noopener noreferrer" className="btn-outline" style={{ textDecoration: "none" }}>
                        <span>💬 WhatsApp Us</span>
                    </a>
                </div>

                {/* Mini Stats */}
                <div
                    ref={statsRowRef}
                    id="hero-stats"
                    style={{
                        marginTop: "56px",
                        display: "grid",
                        gridTemplateColumns: "repeat(2, 1fr)",
                        gap: "24px",
                        maxWidth: "400px",
                        opacity: 0
                    }}
                >
                    {siteConfig.stats.map((s) => (
                        <div key={s.label}>
                            <div className="font-bebas" style={{ fontSize: "2.5rem", color: "#FF6B00", lineHeight: 1 }}>
                                {s.value}{s.suffix}
                            </div>
                            <div style={{ fontSize: "0.75rem", color: "rgba(245,245,245,0.4)", letterSpacing: "0.15em", textTransform: "uppercase", marginTop: "4px" }}>
                                {s.label}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="hero-scroll-indicator">
                <span style={{ fontSize: "0.7rem", letterSpacing: "0.3em", color: "rgba(245,245,245,0.3)", fontFamily: "'Bebas Neue',sans-serif" }}>SCROLL</span>
                <div style={{ width: "1px", height: "48px", background: "linear-gradient(180deg, rgba(255,107,0,0.8), transparent)" }} />
            </div>
        </section>
    );
}
