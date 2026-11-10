"use client";
import { useState } from "react";
import Link from "next/link";

const DESTINATIONS = [
  { id: "japan", name: "Japan", image: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=800" },
  { id: "thailand", name: "Thailand", image: "https://images.unsplash.com/photo-1528183429752-a97d0bf99b5a?w=800" },
  { id: "greece", name: "Greece", image: "https://images.unsplash.com/photo-1533105079780-92b9be482077?w=800" },
  { id: "usa", name: "USA", image: "https://images.unsplash.com/photo-1485738422979-f5c462d49f74?w=800" },
  { id: "europe", name: "Europe", image: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=800" },
];

export default function Home() {
  const [place, setPlace] = useState("japan");

  return (
    <div className="min-h-screen">
      <nav className="flex items-center justify-between px-6 py-4 border-b border-white/10">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-teal flex items-center justify-center text-sm font-bold">SA</div>
          <span className="font-semibold">Signal Atlas</span>
        </div>
        <div className="hidden md:flex items-center gap-6 text-sm">
          <Link href="/" className="bg-white/10 px-3 py-1 rounded-full">Compare</Link>
          <Link href="/trip">Trip</Link>
          <Link href="/dashboard">Dashboard</Link>
          <Link href="/install">Install</Link>
          <Link href="/saved">Saved</Link>
        </div>
        <div className="text-sm border border-white/20 rounded-full px-3 py-1">English</div>
      </nav>

      <section className="px-6 py-16 max-w-4xl mx-auto">
        <p className="text-teal text-sm mb-2">Transparent travel data</p>
        <h1 className="text-5xl md:text-6xl font-serif leading-tight mb-4">
          Compare the plan,<br />not the slogan.
        </h1>
        <p className="text-slate-300 max-w-xl">
          Price, data, hotspot rules, and fair-use limits stay on the card, with the source and the day that source was checked. These are list prices, not a live checkout.{" "}
          <Link href="/trip" className="text-sunset">Fit a trip first.</Link>
        </p>
      </section>

      <div className="px-6 flex gap-2 overflow-x-auto pb-4">
        {DESTINATIONS.map((d) => (
          <button
            key={d.id}
            onClick={() => setPlace(d.id)}
            className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm whitespace-nowrap ${
              place === d.id ? "bg-sunset text-white" : "bg-white/10"
            }`}
          >
            <img src={d.image} alt="" className="w-6 h-6 rounded-full object-cover" />
            {d.name}
          </button>
        ))}
        <button className="ml-auto text-sm border border-white/20 px-4 py-2 rounded-full">Export CSV</button>
      </div>

      <div className="px-6 flex gap-2 mb-8">
        <button className="px-4 py-2 rounded-full bg-white/10 text-sm">Unlimited</button>
        <button className="px-4 py-2 rounded-full bg-white/10 text-sm">Hotspot</button>
        <button className="px-4 py-2 rounded-full bg-white/10 text-sm">Any data ▾</button>
        <button className="px-4 py-2 rounded-full bg-white/10 text-sm">Sort by price ▾</button>
      </div>

      <div className="px-6 grid md:grid-cols-2 gap-4 max-w-5xl">
        {[1, 2].map((i) => (
          <div key={i} className="bg-white/5 rounded-2xl overflow-hidden border border-white/10">
            <div className="relative h-40">
              <img src={DESTINATIONS.find(d => d.id === place)?.image} alt="" className="w-full h-full object-cover" />
              <span className="absolute top-3 right-3 bg-sunset text-xs px-2 py-1 rounded-full">Recheck · 46d old</span>
            </div>
            <div className="p-4">
              <h3 className="text-xl font-semibold capitalize">{place}</h3>
              <p className="text-sm text-slate-400 mt-1">List price · Source + checked date on card</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
