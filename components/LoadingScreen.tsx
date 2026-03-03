"use client";
import { useEffect, useRef, useState } from "react";
import { gsap } from "@/lib/gsap";

interface LoadingScreenProps {
    onComplete: () => void;
}

export default function LoadingScreen({ onComplete }: LoadingScreenProps) {
    const containerRef = useRef<HTMLDivElement>(null);
    const counterRef = useRef<HTMLSpanElement>(null);
    const logoRef = useRef<HTMLDivElement>(null);
    const progressRef = useRef<HTMLDivElement>(null);
    const [count, setCount] = useState(0);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline({
                onComplete: () => {
                    // Zoom-through transition
                    gsap.to(containerRef.current, {
                        scale: 20,
                        opacity: 0,
                        duration: 0.8,
                        ease: "power3.in",
                        onComplete: () => {
                            // Small delay to ensure React unmount is smooth
                            setTimeout(onComplete, 10);
                        },
                    });
                },
            });

            // Logo pulse in
            tl.fromTo(
                logoRef.current,
                { scale: 0.5, opacity: 0 },
                { scale: 1, opacity: 1, duration: 0.8, ease: "back.out(1.7)" }
            );

            // Counter
            const obj = { val: 0 };
            tl.to(
                obj,
                {
                    val: 100,
                    duration: 2.2,
                    ease: "power2.inOut",
                    onUpdate: () => {
                        const v = Math.round(obj.val);
                        setCount(v);
                        if (progressRef.current) {
                            progressRef.current.style.width = v + "%";
                        }
                    },
                },
                "-=0.2"
            );
        }, containerRef);

        return () => ctx.revert();
    }, [onComplete]);

    return (
        <div
            ref={containerRef}
            className="fixed inset-0 z-[99999] bg-[#000] flex flex-col items-center justify-center loading-container overflow-hidden"
        >
            {/* Glow background */}
            <div
                style={{
                    position: "absolute",
                    width: "max(600px, 60vw)",
                    height: "max(600px, 60vw)",
                    background: "radial-gradient(circle, rgba(255,107,0,0.18) 0%, transparent 70%)",
                    borderRadius: "50%",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    animation: "pulse-glow 2s ease-in-out infinite",
                    pointerEvents: "none",
                }}
            />

            {/* K9 Logo */}
            <div
                ref={logoRef}
                className="relative mb-36 md:mb-48"
                style={{ opacity: 0 }}
            >
                {/* Glitch text */}
                <div
                    className="glitch font-bebas text-center"
                    data-text="K9"
                    style={{
                        fontSize: "clamp(100px, 15vmax, 180px)",
                        lineHeight: 0.9,
                        color: "#FF6B00",
                        textShadow: "0 0 30px rgba(255,107,0,0.8), 0 0 80px rgba(255,107,0,0.3)",
                    }}
                >
                    K9
                </div>
                <div
                    className="font-bebas text-center"
                    style={{
                        fontSize: "clamp(20px, 3vmin, 28px)",
                        letterSpacing: "0.25em",
                        color: "rgba(245,245,245,0.6)",
                        marginTop: "4px",
                    }}
                >
                    GYM
                </div>

                {/* Shield SVG outline */}
                <svg
                    viewBox="0 0 100 120"
                    style={{
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                        width: "130%",
                        height: "130%",
                        overflow: "visible",
                        pointerEvents: "none",
                    }}
                >
                    <path
                        d="M50 5 L95 20 L95 65 Q95 95 50 115 Q5 95 5 65 L5 20 Z"
                        fill="none"
                        stroke="#FF6B00"
                        strokeWidth="1"
                        strokeDasharray="400"
                        strokeDashoffset="400"
                        style={{
                            animation: "drawShield 1.6s ease forwards 0.2s",
                            opacity: 0.25,
                        }}
                    />
                </svg>
            </div>

            {/* Counter */}
            <div
                className="font-bebas mt-12 md:mt-16"
                style={{
                    fontSize: "clamp(32px, 5vmin, 48px)",
                    color: "#fff",
                    letterSpacing: "0.1em",
                    lineHeight: 1,
                    position: "relative",
                    zIndex: 10,
                }}
            >
                <span ref={counterRef}>{count}</span>
                <span style={{ color: "#FF6B00" }}>%</span>
            </div>

            {/* Progress Bar */}
            <div
                style={{
                    width: "min(240px, 70vw)",
                    height: "1px",
                    background: "rgba(255,255,255,0.05)",
                    borderRadius: "1px",
                    marginTop: "20px",
                    overflow: "hidden",
                }}
            >
                <div
                    ref={progressRef}
                    style={{
                        height: "100%",
                        width: "0%",
                        background: "linear-gradient(90deg, #FF6B00, #FFB700)",
                        boxShadow: "0 0 10px rgba(255,107,0,0.5)",
                        transition: "width 0.05s linear",
                    }}
                />
            </div>

            <div
                className="font-bebas text-center px-6"
                style={{
                    marginTop: "16px",
                    fontSize: "12px",
                    letterSpacing: "0.2em",
                    lineHeight: 1.5,
                    color: "rgba(245,245,245,0.25)",
                    maxWidth: "280px"
                }}
            >
                LOADING YOUR ELITE EXPERIENCE
            </div>
        </div>
    );
}
