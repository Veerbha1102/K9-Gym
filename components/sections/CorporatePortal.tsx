"use client";
import { motion } from "framer-motion";
import { siteConfig } from "@/lib/config";
import { useState } from "react";

export default function CorporatePortal() {
    const [form, setForm] = useState({ company: "", size: "", time: "" });
    const getWaUrl = () => {
        const msg = `Hi K9 Fitness! 🏢\n\nCorporate Wellness Enquiry:\nCompany: ${form.company || "N/A"}\nTeam Size: ${form.size || "N/A"}\nPreferred Time: ${form.time || "Flexible"}\n\nPlease share your corporate packages. Thanks!`;
        return `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(msg)}`;
    };

    return (
        <section id="corporate" className="section-pad" style={{ background: "#080808" }}>
            <div className="container">
                {/* Heading */}
                <div style={{ textAlign: "center", marginBottom: "64px" }}>
                    <div className="section-label" style={{ justifyContent: "center" }}>For Businesses</div>
                    <h2 className="font-bebas" style={{ fontSize: "clamp(44px,7vw,88px)", lineHeight: 0.95 }}>
                        CORPORATE <span className="text-gradient">WELLNESS</span>
                    </h2>
                    <p style={{ color: "rgba(245,245,245,0.5)", marginTop: "16px", fontSize: "1rem", maxWidth: "560px", margin: "16px auto 0" }}>
                        Invest in your team&apos;s health. K9 Fitness partners with Madhapar businesses for group wellness sessions at unbeatable corporate rates.
                    </p>
                </div>

                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "64px", alignItems: "start" }}>
                    {/* Benefits */}
                    <div>
                        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
                            {siteConfig.corporateBenefits.map((b, i) => (
                                <motion.div
                                    key={b.title}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: i * 0.1 }}
                                    viewport={{ once: true }}
                                    className="glass card-hover"
                                    style={{ padding: "24px", borderRadius: "12px" }}
                                >
                                    <div style={{ fontSize: "2rem", marginBottom: "10px" }}>{b.icon}</div>
                                    <div className="font-bebas" style={{ fontSize: "1.1rem", color: "#FF6B00", marginBottom: "6px" }}>{b.title}</div>
                                    <div style={{ color: "rgba(245,245,245,0.5)", fontSize: "0.8rem", lineHeight: 1.5 }}>{b.desc}</div>
                                </motion.div>
                            ))}
                        </div>

                        <div style={{ marginTop: "24px", padding: "20px", borderRadius: "12px", background: "rgba(255,107,0,0.08)", border: "1px solid rgba(255,107,0,0.2)" }}>
                            <div className="font-bebas" style={{ fontSize: "1.4rem", color: "#FF6B00", marginBottom: "4px" }}>40% CORPORATE DISCOUNT</div>
                            <div style={{ color: "rgba(245,245,245,0.6)", fontSize: "0.85rem" }}>For teams of 5+ members · Flexible billing · Monthly/quarterly plans available</div>
                        </div>
                    </div>

                    {/* Form */}
                    <div className="glass" style={{ padding: "40px", borderRadius: "20px" }}>
                        <div className="font-bebas" style={{ fontSize: "1.8rem", marginBottom: "28px", color: "#FF6B00" }}>GET A QUOTE</div>

                        {[
                            { key: "company", label: "Company Name", placeholder: "e.g. Madhapar Traders Pvt Ltd" },
                            { key: "size", label: "Team Size", placeholder: "e.g. 25 employees" },
                            { key: "time", label: "Preferred Session Time", placeholder: "e.g. Morning 7-9AM" },
                        ].map((f) => (
                            <div key={f.key} style={{ marginBottom: "20px" }}>
                                <label style={{ display: "block", marginBottom: "8px", color: "rgba(245,245,245,0.6)", fontSize: "0.85rem", letterSpacing: "0.05em" }}>
                                    {f.label}
                                </label>
                                <input
                                    value={form[f.key as keyof typeof form]}
                                    onChange={(e) => setForm({ ...form, [f.key]: e.target.value })}
                                    placeholder={f.placeholder}
                                    style={{
                                        width: "100%", padding: "12px 16px",
                                        background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)",
                                        borderRadius: "8px", color: "#F5F5F5", fontSize: "0.9rem",
                                        outline: "none", transition: "border-color 0.3s",
                                    }}
                                    onFocus={(e) => (e.currentTarget.style.borderColor = "#FF6B00")}
                                    onBlur={(e) => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)")}
                                />
                            </div>
                        ))}

                        <a
                            href={getWaUrl()}
                            target="_blank" rel="noopener noreferrer"
                            className="btn-orange"
                            style={{ display: "flex", justifyContent: "center", textDecoration: "none", marginTop: "8px" }}
                        >
                            <span>💼 Send Enquiry via WhatsApp</span>
                        </a>

                        <p style={{ textAlign: "center", marginTop: "16px", color: "rgba(245,245,245,0.3)", fontSize: "0.8rem" }}>
                            We respond within 2 hours · No commitment required
                        </p>
                    </div>
                </div>
            </div>

            <style>{`
        @media(max-width:768px){
          #corporate .container > div:last-child { grid-template-columns: 1fr !important; gap: 40px !important; }
          #corporate .container > div:last-child > div:first-child > div:first-child { grid-template-columns: 1fr 1fr !important; }
        }
      `}</style>
        </section>
    );
}
