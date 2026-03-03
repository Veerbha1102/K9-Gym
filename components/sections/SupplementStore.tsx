"use client";
import { siteConfig } from "@/lib/config";
import { motion } from "framer-motion";

export default function SupplementStore() {
    const colors = ["#FF6B00", "#E64A19", "#FF3D00", "#FF8C00"];
    const emojis = ["🥛", "⚗️", "⚡", "💊"];

    return (
        <section id="supplements" className="section-pad" style={{ background: "#0A0A0A" }}>
            <div className="container">
                <div style={{ textAlign: "center", marginBottom: "56px" }}>
                    <div className="section-label" style={{ justifyContent: "center" }}>In-Gym Store</div>
                    <h2 className="font-bebas" style={{ fontSize: "clamp(44px,7vw,88px)", lineHeight: 0.95 }}>
                        FUEL YOUR <span className="text-gradient">GAINS</span>
                    </h2>
                    <p style={{ color: "rgba(245,245,245,0.5)", marginTop: "16px" }}>
                        Premium supplements available for in-gym pickup. Order via WhatsApp — ready when you arrive.
                    </p>
                </div>

                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "20px" }}>
                    {siteConfig.supplements.map((supp, i) => (
                        <motion.div
                            key={supp.id}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: i * 0.1 }}
                            viewport={{ once: true, margin: "-60px" }}
                            style={{
                                borderRadius: "16px",
                                background: "linear-gradient(160deg, #141414, #0e0e0e)",
                                border: `1px solid ${colors[i]}22`,
                                overflow: "hidden",
                                cursor: "pointer",
                                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                            }}
                            whileHover={{ scale: 1.03, boxShadow: `0 20px 60px ${colors[i]}30` }}
                        >
                            {/* 3D-style supplement tub */}
                            <div style={{
                                height: "200px", display: "flex", alignItems: "center", justifyContent: "center",
                                background: `linear-gradient(160deg, ${colors[i]}18 0%, transparent 60%)`,
                                position: "relative",
                            }}>
                                {/* Tub visual */}
                                <div style={{
                                    width: "110px", height: "140px",
                                    background: `linear-gradient(160deg, ${colors[i]}, ${colors[i]}88)`,
                                    borderRadius: "12px 12px 16px 16px",
                                    display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
                                    boxShadow: `0 8px 32px ${colors[i]}44, inset 0 2px 0 rgba(255,255,255,0.2)`,
                                    position: "relative",
                                    animation: `rotateTub${i} 6s ease-in-out infinite`,
                                }}>
                                    <div style={{ fontSize: "2.5rem", marginBottom: "8px" }}>{emojis[i]}</div>
                                    <div style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: "0.75rem", letterSpacing: "0.15em", color: "#fff", textAlign: "center", padding: "0 8px" }}>
                                        K9<br />FITNESS
                                    </div>
                                    {/* Label band */}
                                    <div style={{
                                        position: "absolute", bottom: "20px", left: 0, right: 0, height: "28px",
                                        background: "rgba(0,0,0,0.3)", display: "flex", alignItems: "center", justifyContent: "center",
                                    }}>
                                        <span style={{ fontSize: "0.6rem", letterSpacing: "0.1em", color: "rgba(255,255,255,0.8)", fontFamily: "'Bebas Neue',sans-serif" }}>{supp.weight}</span>
                                    </div>
                                    {/* Lid */}
                                    <div style={{ position: "absolute", top: "-8px", left: "-4px", right: "-4px", height: "16px", borderRadius: "8px", background: `${colors[i]}cc`, boxShadow: "inset 0 2px 4px rgba(255,255,255,0.2)" }} />
                                </div>

                                {/* Price badge */}
                                <div style={{
                                    position: "absolute", top: "16px", right: "16px",
                                    background: "rgba(8,8,8,0.85)", border: `1px solid ${colors[i]}55`,
                                    padding: "4px 10px", borderRadius: "8px",
                                    fontFamily: "'Bebas Neue',sans-serif", fontSize: "1.1rem", color: colors[i],
                                }}>{supp.price}</div>
                            </div>

                            <div style={{ padding: "20px 24px 24px" }}>
                                <h3 className="font-bebas" style={{ fontSize: "1.4rem", color: "#F5F5F5", marginBottom: "8px" }}>{supp.name}</h3>
                                <p style={{ color: "rgba(245,245,245,0.5)", fontSize: "0.85rem", lineHeight: 1.5, marginBottom: "20px" }}>{supp.description}</p>

                                <a
                                    href={`https://wa.me/${siteConfig.whatsapp}?text=Hi+K9,+I+want+to+order+${encodeURIComponent(supp.name)}+(${supp.weight})+for+in-gym+pickup.+How+do+I+pay%3F`}
                                    target="_blank" rel="noopener noreferrer"
                                    className="btn-orange"
                                    style={{ display: "flex", textDecoration: "none", justifyContent: "center", padding: "10px" }}
                                >
                                    <span>🛒 Order for Pickup</span>
                                </a>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <p style={{ textAlign: "center", marginTop: "32px", color: "rgba(245,245,245,0.3)", fontSize: "0.85rem" }}>
                    💡 Members get up to 20% OFF on Elite plan · Cash & UPI accepted at gym counter
                </p>
            </div>

            <style>{`
        ${[0, 1, 2, 3].map(i => `
        @keyframes rotateTub${i} {
          0%, 100% { transform: perspective(200px) rotateY(0deg) translateY(0); }
          25% { transform: perspective(200px) rotateY(8deg) translateY(-4px); }
          75% { transform: perspective(200px) rotateY(-8deg) translateY(-2px); }
        }`).join("")}
      `}</style>
        </section>
    );
}
