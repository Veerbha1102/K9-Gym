"use client";
import { siteConfig } from "@/lib/config";
import Image from "next/image";

export default function Footer() {
    return (
        <footer style={{ background: "#000", borderTop: "1px solid rgba(255,107,0,0.1)" }}>
            {/* CTA Banner */}
            <div style={{
                background: "linear-gradient(135deg, #FF6B00 0%, #E64A19 100%)",
                padding: "60px 0", textAlign: "center",
            }}>
                <div className="container">
                    <h2 className="font-bebas" style={{ fontSize: "clamp(40px,6vw,80px)", color: "#fff", marginBottom: "16px" }}>
                        READY TO START YOUR JOURNEY?
                    </h2>
                    <p style={{ color: "rgba(255,255,255,0.85)", fontSize: "1rem", marginBottom: "32px" }}>
                        Join 3700+ members who chose K9 Fitness Madhapar. First trial is FREE.
                    </p>
                    <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}>
                        <a
                            href="#booking"
                            style={{
                                padding: "14px 36px", background: "#fff", color: "#FF6B00",
                                fontFamily: "'Bebas Neue', sans-serif", fontSize: "1.2rem", letterSpacing: "0.08em",
                                borderRadius: "4px", textDecoration: "none", transition: "all 0.3s",
                            }}
                            onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)"; (e.currentTarget as HTMLElement).style.boxShadow = "0 8px 24px rgba(0,0,0,0.3)"; }}
                            onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.transform = "translateY(0)"; (e.currentTarget as HTMLElement).style.boxShadow = "none"; }}
                        >
                            🎯 Book Free Trial
                        </a>
                        <a
                            href={`https://wa.me/${siteConfig.whatsapp}?text=Hi+K9+Fitness!+I+want+to+join+the+gym.+Please+share+membership+details.`}
                            target="_blank" rel="noopener noreferrer"
                            style={{
                                padding: "13px 36px", background: "transparent", color: "#fff",
                                fontFamily: "'Bebas Neue', sans-serif", fontSize: "1.2rem", letterSpacing: "0.08em",
                                border: "2px solid rgba(255,255,255,0.7)", borderRadius: "4px", textDecoration: "none", transition: "all 0.3s",
                            }}
                        >
                            💬 WhatsApp Now
                        </a>
                    </div>
                </div>
            </div>

            {/* Footer Content */}
            <div className="container" style={{ padding: "60px 24px 40px" }}>
                <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr", gap: "48px", marginBottom: "48px" }}>
                    {/* Brand */}
                    <div>
                        <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "20px" }}>
                            <Image src="/logo.jpg" alt="K9 Fitness" width={56} height={56} style={{ borderRadius: "50%" }} />
                            <div>
                                <div className="font-bebas" style={{ fontSize: "1.5rem", color: "#FF6B00", lineHeight: 1 }}>K9 Gym</div>
                                <div style={{ fontSize: "0.75rem", color: "rgba(245,245,245,0.4)", letterSpacing: "0.15em" }}>MADHAPAR</div>
                            </div>
                        </div>
                        <p style={{ color: "rgba(245,245,245,0.4)", fontSize: "0.9rem", lineHeight: 1.7, maxWidth: "300px", marginBottom: "24px" }}>
                            10+ years of elite fitness training in Madhapar, Bhuj. 3700+ clients transformed. Open 365 days — because your goals don&apos;t take days off.
                        </p>
                        <div style={{ display: "flex", gap: "12px" }}>
                            <a href={siteConfig.instagramUrl} target="_blank" rel="noopener noreferrer"
                                style={{ width: "40px", height: "40px", borderRadius: "8px", background: "rgba(255,107,0,0.1)", border: "1px solid rgba(255,107,0,0.2)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.2rem", textDecoration: "none", transition: "all 0.3s" }}
                                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = "rgba(255,107,0,0.25)"; }}
                                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = "rgba(255,107,0,0.1)"; }}
                            >📸</a>
                            <a href={`https://wa.me/${siteConfig.whatsapp}`} target="_blank" rel="noopener noreferrer"
                                style={{ width: "40px", height: "40px", borderRadius: "8px", background: "rgba(37,211,102,0.1)", border: "1px solid rgba(37,211,102,0.2)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.2rem", textDecoration: "none", transition: "all 0.3s" }}
                                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = "rgba(37,211,102,0.25)"; }}
                                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = "rgba(37,211,102,0.1)"; }}
                            >💬</a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <div className="font-bebas" style={{ fontSize: "1rem", letterSpacing: "0.2em", color: "#FF6B00", marginBottom: "20px" }}>QUICK LINKS</div>
                        {[
                            { label: "Programs", href: "#programs" },
                            { label: "Membership Plans", href: "#membership" },
                            { label: "BMI Calculator", href: "#bmi" },
                            { label: "Book Free Trial", href: "#booking" },
                            { label: "Our Trainers", href: "#trainers" },
                            { label: "In-Gym Shop", href: "#supplements" },
                            { label: "Corporate", href: "#corporate" },
                        ].map((l) => (
                            <a key={l.label} href={l.href} style={{ display: "block", color: "rgba(245,245,245,0.5)", textDecoration: "none", fontSize: "0.875rem", marginBottom: "10px", transition: "color 0.3s" }}
                                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = "#FF6B00"; }}
                                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = "rgba(245,245,245,0.5)"; }}
                            >{l.label}</a>
                        ))}
                    </div>

                    {/* Contact */}
                    <div>
                        <div className="font-bebas" style={{ fontSize: "1rem", letterSpacing: "0.2em", color: "#FF6B00", marginBottom: "20px" }}>CONTACT</div>
                        <div style={{ color: "rgba(245,245,245,0.5)", fontSize: "0.875rem", lineHeight: 1.8 }}>
                            <div style={{ marginBottom: "12px" }}>
                                <div style={{ color: "rgba(245,245,245,0.3)", fontSize: "0.75rem", letterSpacing: "0.1em", marginBottom: "4px" }}>PHONE</div>
                                <a href={`tel:${siteConfig.phone}`} style={{ color: "#FF6B00", textDecoration: "none" }}>{siteConfig.phone}</a>
                            </div>
                            <div style={{ marginBottom: "12px" }}>
                                <div style={{ color: "rgba(245,245,245,0.3)", fontSize: "0.75rem", letterSpacing: "0.1em", marginBottom: "4px" }}>INSTAGRAM</div>
                                <a href={siteConfig.instagramUrl} target="_blank" rel="noopener noreferrer" style={{ color: "rgba(245,245,245,0.6)", textDecoration: "none" }}>@{siteConfig.instagram}</a>
                            </div>
                            <div style={{ marginBottom: "16px" }}>
                                <div style={{ color: "#FF6B00", fontSize: "0.75rem", letterSpacing: "0.1em", marginBottom: "4px" }}>MADHAPAR BRANCH</div>
                                <a href={siteConfig.branches[0].mapUrl} target="_blank" rel="noopener noreferrer" style={{ color: "rgba(245,245,245,0.6)", textDecoration: "none", display: "block", marginBottom: "4px" }}>
                                    {siteConfig.branches[0].address}
                                </a>
                            </div>
                            <div style={{ marginBottom: "16px" }}>
                                <div style={{ color: "#FF6B00", fontSize: "0.75rem", letterSpacing: "0.1em", marginBottom: "4px" }}>BHUJ BRANCH</div>
                                <a href={siteConfig.branches[1].mapUrl} target="_blank" rel="noopener noreferrer" style={{ color: "rgba(245,245,245,0.6)", textDecoration: "none", display: "block" }}>
                                    {siteConfig.branches[1].address}
                                </a>
                            </div>
                            <div>
                                <div style={{ color: "rgba(245,245,245,0.3)", fontSize: "0.75rem", letterSpacing: "0.1em", marginBottom: "4px" }}>HOURS</div>
                                <span style={{ color: "#4ADE80" }}>Open 365 Days/Year</span>
                                <div style={{ color: "rgba(245,245,245,0.5)", fontSize: "0.8rem" }}>5:00 AM – 10:00 PM</div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div style={{ borderTop: "1px solid rgba(255,255,255,0.05)", paddingTop: "24px", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "12px" }}>
                    <div style={{ color: "rgba(245,245,245,0.25)", fontSize: "0.8rem" }}>
                        © 2024 K9 Fitness Madhapar. All rights reserved.
                    </div>
                    <div style={{ color: "rgba(245,245,245,0.25)", fontSize: "0.8rem" }}>
                        Built by{" "}
                        <span style={{ color: "#FF6B00" }}>SkillBridge Ladder</span>
                    </div>
                </div>
            </div>

            {/* Mobile grid fix */}
            <style>{`
        @media(max-width:768px){
          footer .container > div:nth-child(2) { grid-template-columns: 1fr !important; gap: 36px !important; }
        }
      `}</style>
        </footer>
    );
}
