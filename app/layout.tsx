import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "K9 Fitness Madhapar | Best Gym in Bhuj, Kutch",
  description: "K9 Fitness Madhapar — 10+ Years, 3700+ Clients, 470+ Transformations. Weight Training, Cardio, CrossFit, Yoga & Zumba. Female trainer available. Open 365 Days. Near Gandhi Circle, Madhapar, Bhuj.",
  keywords: ["gym in madhapar", "gym in bhuj", "best gym kutch", "k9 fitness", "k9 gym madhapar", "kapil hirani trainer", "weight loss bhuj", "crossfit madhapar", "female trainer bhuj"],
  authors: [{ name: "SkillBridge Ladder" }],
  openGraph: {
    title: "K9 Fitness Madhapar | Best Gym in Bhuj, Kutch",
    description: "10+ Years · 3700+ Clients · 470+ Transformations. The most premium gym in Madhapar, Bhuj.",
    url: "https://k9fitness.in",
    siteName: "K9 Fitness Madhapar",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "K9 Fitness Madhapar | Best Gym in Bhuj, Kutch",
    description: "10+ Years · 3700+ Clients · 470+ Transformations. Open 365 Days.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
