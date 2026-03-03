"use client";
import { useEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { siteConfig } from "@/lib/config";

gsap.registerPlugin(ScrollTrigger);

const PROGRAM_ICONS: Record<string, string> = {
    "weight-training": "🏋️",
    cardio: "🏃‍♂️",
    crossfit: "⚡",
    hiit: "🔥",
    yoga: "🧘",
    zumba: "💃",
};

export default function Programs() {
    const sectionRef = useRef<HTMLElement>(null);
    const trackRef = useRef<HTMLDivElement>(null);
    const labelRef = useRef<HTMLDivElement>(null);
    const titleRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Entrance animations
            gsap.fromTo(
                labelRef.current,
                { opacity: 0, x: -40 },
                {
                    opacity: 1, x: 0, duration: 0.7,
                    scrollTrigger: { trigger: sectionRef.current, start: "top 80%" }
                }
            );
            gsap.fromTo(
                titleRef.current,
                { opacity: 0, y: 40 },
                {
                    opacity: 1, y: 0, duration: 0.9, ease: "power3.out",
                    scrollTrigger: { trigger: sectionRef.current, start: "top 75%" }
                }
            );

            // Horizontal scroll - Only on Desktop/Laptop
            const mm = gsap.matchMedia();

            mm.add("(min-width: 1024px)", () => {
                if (trackRef.current) {
                    const totalWidth = trackRef.current.scrollWidth - window.innerWidth + 120;

                    gsap.to(trackRef.current, {
                        x: () => -(trackRef.current!.scrollWidth - window.innerWidth + 150),
                        ease: "none",
                        scrollTrigger: {
                            trigger: sectionRef.current,
                            start: "top top",
                            end: () => `+=${trackRef.current!.scrollWidth}`,
                            scrub: 1.2,
                            pin: true,
                            anticipatePin: 1,
                            invalidateOnRefresh: true,
                        },
                    });

                    // Smooth reveal for cards
                    const cards = trackRef.current.querySelectorAll(".prog-card");
                    gsap.fromTo(
                        cards,
                        { opacity: 0, x: 50, filter: "blur(10px)" },
                        {
                            opacity: 1, x: 0, filter: "blur(0px)",
                            stagger: 0.1,
                            duration: 0.6,
                            scrollTrigger: {
                                trigger: sectionRef.current,
                                start: "top 20%",
                                toggleActions: "play none none reverse"
                            }
                        }
                    );
                }
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section
            ref={sectionRef}
            id="programs"
            style={{
                background: "linear-gradient(180deg, #080808 0%, #0D0D0D 100%)",
                overflow: "hidden",
                paddingTop: "100px",
            }}
        >
            {/* Header */}
            <div className="container" style={{ marginBottom: "60px" }}>
                <div ref={labelRef} className="section-label" style={{ opacity: 0 }}>
                    Training Programs
                </div>
                <div ref={titleRef} style={{ opacity: 0 }}>
                    <h2
                        className="font-bebas"
                        style={{
                            fontSize: "clamp(48px, 7vw, 88px)",
                            lineHeight: 0.95,
                            color: "#F5F5F5",
                        }}
                    >
                        CHOOSE YOUR{" "}
                        <span className="text-gradient">WEAPON</span>
                    </h2>
                    <p
                        style={{
                            color: "rgba(245,245,245,0.5)",
                            marginTop: "16px",
                            fontSize: "1rem",
                            maxWidth: "500px",
                        }}
                    >
                        Six elite training disciplines. One gym. Scroll to explore every program K9 Fitness offers.
                    </p>
                </div>
            </div>

            {/* Horizontal Track */}
            <div
                id="programs-track"
                ref={trackRef}
                className="hide-scrollbar"
                style={{
                    display: "flex",
                    gap: "24px",
                    paddingBottom: "80px",
                }}
            >
                {siteConfig.programs.map((prog) => (
                    <div
                        key={prog.id}
                        className="prog-card"
                        style={{
                            flexShrink: 0,
                            borderRadius: "16px",
                            position: "relative",
                            overflow: "hidden",
                            background: `linear-gradient(160deg, #1A1A1A 0%, #111 100%)`,
                            border: "1px solid rgba(255,107,0,0.12)",
                            cursor: "pointer",
                            transition: "transform 0.4s ease, box-shadow 0.4s ease",
                        }}
                        onMouseEnter={(e) => {
                            if (window.innerWidth > 1024) {
                                (e.currentTarget as HTMLElement).style.transform = "scale(1.03) translateY(-8px)";
                                (e.currentTarget as HTMLElement).style.boxShadow = `0 32px 80px rgba(255,107,0,0.3)`;
                                (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,107,0,0.5)";
                            }
                        }}
                        onMouseLeave={(e) => {
                            if (window.innerWidth > 1024) {
                                (e.currentTarget as HTMLElement).style.transform = "scale(1) translateY(0px)";
                                (e.currentTarget as HTMLElement).style.boxShadow = "none";
                                (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,107,0,0.12)";
                            }
                        }}
                    >
                        {/* Gradient overlay */}
                        <div
                            style={{
                                position: "absolute",
                                inset: 0,
                                background: `radial-gradient(circle at 30% 30%, ${prog.color}22 0%, transparent 60%)`,
                            }}
                        />

                        {/* Tag */}
                        <div
                            className="font-bebas"
                            style={{
                                position: "absolute",
                                top: "20px",
                                right: "20px",
                                background: `${prog.color}22`,
                                border: `1px solid ${prog.color}55`,
                                color: prog.color,
                                padding: "4px 12px",
                                borderRadius: "4px",
                                fontSize: "0.8rem",
                                letterSpacing: "0.2em",
                            }}
                        >
                            {prog.tag}
                        </div>

                        {/* Content */}
                        <div
                            style={{
                                position: "absolute",
                                bottom: 0,
                                left: 0,
                                right: 0,
                                padding: "32px",
                                background: "linear-gradient(0deg, rgba(8,8,8,0.98) 0%, transparent 100%)",
                                paddingTop: "80px",
                            }}
                        >
                            {/* Icon */}
                            <div style={{ fontSize: "3rem", marginBottom: "16px" }}>
                                {PROGRAM_ICONS[prog.id]}
                            </div>

                            <h3
                                className="font-bebas"
                                style={{
                                    fontSize: "2.2rem",
                                    color: "#F5F5F5",
                                    letterSpacing: "0.05em",
                                    marginBottom: "8px",
                                }}
                            >
                                {prog.title}
                            </h3>
                            <p
                                style={{
                                    color: "rgba(245,245,245,0.55)",
                                    fontSize: "0.9rem",
                                    lineHeight: 1.6,
                                }}
                            >
                                {prog.description}
                            </p>

                            {/* CTA */}
                            <a
                                href={`https://wa.me/${siteConfig.whatsapp}?text=Hi+K9,+I'm+interested+in+${encodeURIComponent(prog.title)}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{
                                    display: "inline-flex",
                                    alignItems: "center",
                                    gap: "6px",
                                    marginTop: "20px",
                                    color: prog.color,
                                    fontFamily: "'Bebas Neue', sans-serif",
                                    fontSize: "1rem",
                                    letterSpacing: "0.1em",
                                    textDecoration: "none",
                                    transition: "gap 0.3s ease",
                                }}
                                onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.gap = "12px")}
                                onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.gap = "6px")}
                            >
                                ENQUIRE NOW →
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
