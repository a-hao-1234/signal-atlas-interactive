import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Signal Atlas — Compare the plan, not the slogan",
  description: "Transparent travel eSIM comparison. Price, data, hotspot, fair-use, source and checked date on every card.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-navy text-white antialiased min-h-screen">{children}</body>
    </html>
  );
}
