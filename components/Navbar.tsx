"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { siteConfig } from "@/lib/config";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const navRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 60);
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        document.body.style.overflow = menuOpen ? "hidden" : "auto";
    }, [menuOpen]);

    const links = [
        { label: "Programs", href: "#programs" },
        { label: "Pricing", href: "#membership" },
        { label: "BMI Check", href: "#bmi" },
        { label: "Trainers", href: "#trainers" },
        { label: "Gallery", href: "#gallery" },
        { label: "Shop", href: "#supplements" },
    ];

    return (
        <nav
            ref={navRef}
            style={{
                position: "fixed",
                top: 0,
                left: 0,
                width: "100%",
                zIndex: 1000,
                transition: "all 0.5s ease",
                background: scrolled || menuOpen ? "rgba(8,8,8,0.92)" : "transparent",
                backdropFilter: scrolled || menuOpen ? "blur(24px)" : "none",
                WebkitBackdropFilter: scrolled || menuOpen ? "blur(24px)" : "none",
                borderBottom: scrolled || menuOpen ? "1px solid rgba(255,255,255,0.06)" : "1px solid transparent",
                padding: scrolled || menuOpen ? "14px 0" : "24px 0",
                boxShadow: scrolled || menuOpen ? "0 8px 32px rgba(0,0,0,0.5)" : "none",
            }}
        >
            <div className="container" style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                {/* === LEFT: Logo === */}
                <a
                    href="#"
                    onClick={() => setMenuOpen(false)}
                    style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "12px",
                        textDecoration: "none",
                        flexShrink: 0,
                    }}
                >
                    <div style={{
                        position: "relative",
                        width: "44px",
                        height: "44px",
                        borderRadius: "50%",
                        overflow: "hidden",
                        border: "1px solid rgba(255,107,0,0.25)",
                    }}>
                        <Image src="/logo.jpg" alt="K9 Gym Logo" fill className="object-cover" />
                    </div>
                    <div style={{ display: "flex", alignItems: "baseline", gap: "6px" }}>
                        <span className="font-bebas" style={{ fontSize: "1.8rem", color: "#fff", letterSpacing: "-0.02em" }}>
                            K9
                        </span>
                        <span className="font-bebas" style={{ fontSize: "1.2rem", color: "#FF6B00", letterSpacing: "0.2em" }}>
                            GYM
                        </span>
                    </div>
                </a>

                {/* === CENTER: Desktop Links === */}
                <div style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "32px",
                }}
                    className="hide-mobile"
                >
                    {links.map((l) => (
                        <a
                            key={l.label}
                            href={l.href}
                            style={{
                                fontSize: "0.72rem",
                                fontWeight: 700,
                                color: "rgba(255,255,255,0.5)",
                                letterSpacing: "0.25em",
                                textTransform: "uppercase",
                                textDecoration: "none",
                                position: "relative",
                                transition: "color 0.3s ease",
                                whiteSpace: "nowrap",
                            }}
                            onMouseEnter={(e) => (e.currentTarget.style.color = "#fff")}
                            onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.5)")}
                        >
                            {l.label}
                        </a>
                    ))}
                </div>

                {/* === RIGHT: CTA + Hamburger === */}
                <div style={{ display: "flex", alignItems: "center", gap: "16px", flexShrink: 0 }}>
                    {/* Desktop CTA */}
                    <a
                        href={`https://wa.me/${siteConfig.whatsapp}?text=Hi+K9,+I+want+to+book+a+Free+Trial+Session!`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-orange hide-mobile"
                        style={{
                            padding: "10px 24px",
                            fontSize: "0.72rem",
                            borderRadius: "999px",
                            boxShadow: "0 4px 20px rgba(255,107,0,0.15)",
                        }}
                    >
                        <span>JOIN FREE TRIAL</span>
                    </a>

                    {/* Mobile Hamburger */}
                    <button
                        className="hide-desktop"
                        onClick={() => setMenuOpen(!menuOpen)}
                        aria-label="Toggle Menu"
                        style={{
                            background: "rgba(255,255,255,0.05)",
                            border: "1px solid rgba(255,255,255,0.1)",
                            borderRadius: "50%",
                            width: "48px",
                            height: "48px",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            cursor: "pointer",
                            position: "relative",
                            zIndex: 50,
                        }}
                    >
                        <div style={{ display: "flex", flexDirection: "column", gap: "5px", width: "20px", alignItems: "flex-end" }}>
                            <motion.span
                                animate={menuOpen ? { rotate: 45, y: 7, width: "20px" } : { rotate: 0, y: 0, width: "20px" }}
                                style={{ height: "2px", background: "#FF6B00", borderRadius: "2px", display: "block" }}
                            />
                            <motion.span
                                animate={menuOpen ? { opacity: 0, x: -10 } : { opacity: 1, x: 0, width: "14px" }}
                                style={{ height: "2px", background: "#FF6B00", borderRadius: "2px", display: "block" }}
                            />
                            <motion.span
                                animate={menuOpen ? { rotate: -45, y: -7, width: "20px" } : { rotate: 0, y: 0, width: "20px" }}
                                style={{ height: "2px", background: "#FF6B00", borderRadius: "2px", display: "block" }}
                            />
                        </div>
                    </button>
                </div>
            </div>

            {/* === Mobile Menu Overlay === */}
            <AnimatePresence>
                {menuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                        className="hide-desktop"
                        style={{
                            position: "fixed",
                            inset: 0,
                            width: "100%",
                            height: "100dvh",
                            background: "#080808",
                            zIndex: 40,
                            display: "flex",
                            flexDirection: "column",
                            padding: "32px",
                            paddingTop: "120px",
                        }}
                    >
                        <div style={{ display: "flex", flexDirection: "column", gap: "24px", position: "relative", zIndex: 10 }}>
                            {links.map((l, i) => (
                                <motion.a
                                    key={l.label}
                                    href={l.href}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: i * 0.08 }}
                                    onClick={() => setMenuOpen(false)}
                                    className="font-bebas"
                                    style={{
                                        fontSize: "2.5rem",
                                        color: "rgba(255,255,255,0.9)",
                                        letterSpacing: "0.15em",
                                        textDecoration: "none",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "space-between",
                                        transition: "color 0.3s ease",
                                    }}
                                    onMouseEnter={(e) => (e.currentTarget.style.color = "#FF6B00")}
                                    onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.9)")}
                                >
                                    <span>{l.label}</span>
                                    <span style={{ color: "#FF6B00", fontSize: "1.5rem" }}>→</span>
                                </motion.a>
                            ))}

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: links.length * 0.08 }}
                                style={{ marginTop: "32px", paddingTop: "32px", borderTop: "1px solid rgba(255,255,255,0.05)" }}
                            >
                                <a
                                    href={`https://wa.me/${siteConfig.whatsapp}?text=Hi+K9,+I+want+to+book+a+Free+Trial+Session!`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn-orange"
                                    style={{ width: "100%", display: "flex", justifyContent: "center", padding: "18px" }}
                                >
                                    <span>BOOK A FREE TRIAL SESSION</span>
                                </a>
                                <p className="font-bebas" style={{
                                    textAlign: "center",
                                    color: "rgba(255,255,255,0.25)",
                                    fontSize: "0.75rem",
                                    marginTop: "24px",
                                    letterSpacing: "0.3em",
                                }}>
                                    MADHAPAR · BHUJ · KUTCH
                                </p>
                            </motion.div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
