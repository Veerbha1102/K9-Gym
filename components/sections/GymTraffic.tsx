"use client";
import { useState, useEffect } from "react";
import { siteConfig } from "@/lib/config";

type DayKey = "monday" | "tuesday" | "wednesday" | "thursday" | "friday" | "saturday" | "sunday";
const dayKeys: DayKey[] = ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"];

function getVibeLabel(val: number): { label: string; color: string; emoji: string } {
    if (val <= 3) return { label: "Quiet", color: "#4ADE80", emoji: "🟢" };
    if (val <= 6) return { label: "Moderate", color: "#FBBF24", emoji: "🟡" };
    return { label: "Peak Energy", color: "#FF6B00", emoji: "🔴" };
}

export default function GymTraffic() {
    const [currentHour, setCurrentHour] = useState(0);
    const [currentDay, setCurrentDay] = useState<DayKey>("monday");

    useEffect(() => {
        const now = new Date();
        setCurrentHour(now.getHours());
        setCurrentDay(dayKeys[now.getDay() === 0 ? 6 : now.getDay() - 1]);
    }, []);

    const todayData = siteConfig.gymTraffic[currentDay];
    const currentTraffic = todayData[currentHour] || 1;
    const vibe = getVibeLabel(currentTraffic);

    return (
        <section id="traffic" className="section-pad" style={{ background: "#080808" }}>
            <div className="container">
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "64px", alignItems: "center" }}>
                    {/* Left: Current Vibe */}
                    <div>
                        <div className="section-label">Live Gym Status</div>
                        <h2 className="font-bebas" style={{ fontSize: "clamp(40px,6vw,80px)", lineHeight: 0.95, marginBottom: "40px" }}>
                            CURRENT <span className="text-gradient">VIBE</span>
                        </h2>

                        <div className="glass" style={{ padding: "40px", borderRadius: "20px", textAlign: "center" }}>
                            <div style={{ fontSize: "4rem", marginBottom: "16px" }}>{vibe.emoji}</div>
                            <div className="font-bebas" style={{ fontSize: "3rem", color: vibe.color, letterSpacing: "0.05em", marginBottom: "8px" }}>
                                {vibe.label}
                            </div>
                            <div style={{ color: "rgba(245,245,245,0.4)", fontSize: "0.85rem", marginBottom: "24px" }}>
                                Updated at {currentHour}:00 · {currentDay.charAt(0).toUpperCase() + currentDay.slice(1)}
                            </div>

                            {/* Pulse dot */}
                            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "8px" }}>
                                <div style={{
                                    width: "10px", height: "10px", borderRadius: "50%", background: vibe.color,
                                    animation: "pulseDot 1.5s ease-in-out infinite",
                                    boxShadow: `0 0 8px ${vibe.color}`,
                                }} />
                                <span style={{ color: "rgba(245,245,245,0.5)", fontSize: "0.85rem" }}>Live now</span>
                            </div>
                        </div>

                        <p style={{ marginTop: "20px", color: "rgba(245,245,245,0.4)", fontSize: "0.85rem" }}>
                            💡 Best time to visit: <strong style={{ color: "#4ADE80" }}>10AM – 12PM</strong> on weekdays
                        </p>
                    </div>

                    {/* Right: 24h Bar Chart */}
                    <div>
                        <h3 className="font-bebas" style={{ fontSize: "1.6rem", marginBottom: "24px", color: "rgba(245,245,245,0.7)" }}>
                            TODAY&apos;S PEAK HOURS
                        </h3>
                        <div style={{ display: "flex", alignItems: "flex-end", gap: "3px", height: "140px" }}>
                            {todayData.map((val, hour) => {
                                const v = getVibeLabel(val);
                                const isNow = hour === currentHour;
                                return (
                                    <div key={hour} title={`${hour}:00 — ${v.label}`} style={{
                                        flex: 1, height: `${(val / 10) * 100}%`, minHeight: "4px",
                                        borderRadius: "3px 3px 0 0",
                                        background: isNow
                                            ? `linear-gradient(180deg, ${v.color}, ${v.color}88)`
                                            : `${v.color}55`,
                                        border: isNow ? `1px solid ${v.color}` : "none",
                                        transition: "all 0.3s ease",
                                        cursor: "default",
                                        position: "relative",
                                    }}>
                                        {isNow && (
                                            <div style={{
                                                position: "absolute", bottom: "100%", left: "50%", transform: "translateX(-50%)",
                                                background: v.color, borderRadius: "4px", padding: "2px 6px",
                                                fontSize: "0.6rem", color: "#fff", fontFamily: "'Bebas Neue', sans-serif",
                                                whiteSpace: "nowrap", marginBottom: "4px",
                                            }}>NOW</div>
                                        )}
                                    </div>
                                );
                            })}
                        </div>
                        {/* Hour labels */}
                        <div style={{ display: "flex", justifyContent: "space-between", marginTop: "8px" }}>
                            {["12AM", "6AM", "12PM", "6PM", "11PM"].map((t) => (
                                <span key={t} style={{ fontSize: "0.65rem", color: "rgba(245,245,245,0.3)" }}>{t}</span>
                            ))}
                        </div>

                        {/* Legend */}
                        <div style={{ display: "flex", gap: "16px", marginTop: "20px" }}>
                            {[{ label: "Quiet", c: "#4ADE80" }, { label: "Moderate", c: "#FBBF24" }, { label: "Peak", c: "#FF6B00" }].map(l => (
                                <div key={l.label} style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                                    <div style={{ width: "10px", height: "10px", borderRadius: "2px", background: l.c }} />
                                    <span style={{ fontSize: "0.75rem", color: "rgba(245,245,245,0.5)" }}>{l.label}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <style>{`
        @keyframes pulseDot {
          0%, 100% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.5); opacity: 0.7; }
        }
        @media(max-width:768px){
          #traffic .container > div { grid-template-columns: 1fr !important; gap: 40px !important; }
        }
      `}</style>
        </section>
    );
}
