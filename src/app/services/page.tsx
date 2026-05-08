"use client";
import React, { useState } from "react";
import Link from "next/link";

const addons = [
  { label: "Inside Oven", price: "$20" },
  { label: "Inside Fridge", price: "$30" },
  { label: "Dishes", price: "$15" },
  { label: "Organization", price: "$50/hr" },
  { label: "Laundry", price: "$25" },
  { label: "Blinds", price: "From $50" },
];

export default function ServicesPage() {
  const [selected, setSelected] = useState<'reset' | 'deep'>('reset');

  const baseRates = [
    { size: '1–2 Bed / 1–2 Bath', base: 140 },
    { size: '3 Bed / 2 Bath', base: 180 },
    { size: '4 Bed / 2–3 Bath', base: 220 },
    { size: '5+ Bed', base: 280 },
  ];

  return (
    <>
      {/* Header */}
      <section
        className="py-24 px-6 text-center"
        style={{ background: "linear-gradient(135deg, #F9F6F1 0%, #EDE4D6 100%)" }}
      >
        <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: "var(--accent-dark)" }}>
          Services &amp; Pricing
        </span>
        <h1 className="text-4xl md:text-5xl font-bold mt-3 mb-4" style={{ color: "var(--text)" }}>
          What We Offer
        </h1>
        <p className="text-base max-w-lg mx-auto leading-relaxed" style={{ color: "var(--text-muted)" }}>
          We specialize in residential cleaning — upholding excellence, reliability, and intentionality in every home.
        </p>
      </section>

      {/* Main Services */}
      <section className="py-20 px-6" style={{ background: "var(--bg)" }}>
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* The Reset */}
          <div
            className="p-10 rounded-3xl flex flex-col gap-6"
            style={{ background: "var(--bg-alt)", boxShadow: "var(--shadow-sm)" }}
          >
            <div>
              <h2 className="text-2xl font-bold mt-2" style={{ color: "var(--text)" }}>The Reset</h2>
              <p className="text-sm mt-2 leading-relaxed" style={{ color: "var(--text-muted)" }}>
                Our standard clean — perfect for regular maintenance and keeping your home consistently fresh.
              </p>
            </div>
            <ul className="space-y-3">
              {["Kitchen", "Bathrooms", "Surfaces / Dusting", "Floors", "General Tidying"].map((item) => (
                <li key={item} className="flex items-center gap-3 text-sm" style={{ color: "var(--text)" }}>
                  <span
                    className="w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0"
                    style={{ background: "var(--accent)", color: "var(--bg-dark)" }}
                  >
                    ✓
                  </span>
                  {item}
                </li>
              ))}
            </ul>
            <Link
              href="/booking"
              className="mt-auto block text-center py-3 rounded-full text-sm font-semibold border-2 transition hover:scale-105"
              style={{ borderColor: "var(--text)", color: "var(--text)" }}
            >
              Book The Reset
            </Link>
          </div>

          {/* Deep Clean */}
          <div
            className="p-10 rounded-3xl flex flex-col gap-6"
            style={{ background: "var(--bg-dark)", boxShadow: "var(--shadow-md)" }}
          >
            <div>
              <h2 className="text-2xl font-bold mt-2" style={{ color: "var(--bg)" }}>Deep Clean</h2>
              <p className="text-sm mt-2 leading-relaxed" style={{ color: "rgba(249,246,241,0.6)" }}>
                A top-to-bottom intensive clean for homes that need extra attention — or a fresh start.
              </p>
            </div>
            <ul className="space-y-3">
              {["Tile Grout / Mold", "Windows / Tracks", "Baseboards (Extensive)", "Fans / Vent Dusting"].map((item) => (
                <li key={item} className="flex items-center gap-3 text-sm" style={{ color: "rgba(249,246,241,0.8)" }}>
                  <span
                    className="w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0"
                    style={{ background: "var(--accent)", color: "var(--bg-dark)" }}
                  >
                    ✓
                  </span>
                  {item}
                </li>
              ))}
            </ul>
            <p className="text-xs" style={{ color: "rgba(249,246,241,0.4)" }}>+ Includes everything in The Reset</p>
            <Link
              href="/booking"
              className="mt-auto block text-center py-3 rounded-full text-sm font-semibold transition hover:scale-105"
              style={{ background: "var(--accent)", color: "var(--bg-dark)" }}
            >
              Book Deep Clean
            </Link>
          </div>
        </div>
      </section>

      {/* À La Carte */}
      <section className="py-20 px-6" style={{ background: "var(--bg-alt)" }}>
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: "var(--accent-dark)" }}>Add-Ons</span>
            <h2 className="text-3xl font-bold mt-2 mb-2" style={{ color: "var(--text)" }}>À La Carte</h2>
            <p className="text-sm" style={{ color: "var(--text-muted)" }}>Customize any service with these add-ons.</p>
          </div>
          <div
            className="rounded-2xl overflow-hidden"
            style={{ background: "var(--bg)", boxShadow: "var(--shadow-sm)" }}
          >
            {addons.map((item, i) => (
              <div
                key={item.label}
                className="flex justify-between items-center px-7 py-5"
                style={{ borderBottom: i < addons.length - 1 ? "1px solid var(--border)" : undefined }}
              >
                <span className="text-sm font-medium" style={{ color: "var(--text)" }}>{item.label}</span>
                <span
                  className="text-sm font-bold px-3 py-1 rounded-full"
                  style={{ background: "var(--bg-alt)", color: "var(--accent-dark)" }}
                >
                  {item.price}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-24 px-6" style={{ background: "var(--bg-dark)" }}>
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-14">
            <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: "var(--accent)" }}>Pricing</span>
            <h2 className="text-3xl font-bold mt-2 mb-3" style={{ color: "var(--bg)" }}>Base Rates</h2>
            <p className="text-sm max-w-md mx-auto leading-relaxed" style={{ color: "rgba(249,246,241,0.5)" }}>
              Based on bed/bath count, how often you&apos;d like service, and your location.
            </p>
          </div>

          {/* Service selector toggle */}
          <div className="text-center mb-6">
            <div className="inline-flex rounded-full bg-white/6 p-1" style={{ boxShadow: 'inset 0 0 0 1px rgba(255,255,255,0.02)' }}>
              <button
                onClick={() => setSelected('reset')}
                className={`px-4 py-2 rounded-full text-sm font-medium transition ${selected === 'reset' ? 'bg-white text-black' : 'text-white/80'}`}
                style={{
                  border: 'none',
                }}
              >
                The Reset
              </button>
              <button
                onClick={() => setSelected('deep')}
                className={`px-4 py-2 rounded-full text-sm font-medium transition ${selected === 'deep' ? 'bg-white text-black' : 'text-white/80'}`}
                style={{
                  border: 'none',
                }}
              >
                Deep Clean
              </button>
            </div>
          </div>

          <div className="rounded-2xl overflow-hidden mb-8" style={{ background: "rgba(255,255,255,0.05)" }}>
            {baseRates.map((row, i, arr) => {
              const price = row.base * (selected === 'deep' ? 1.5 : 1);
              return (
                <div
                  key={row.size}
                  className="flex justify-between items-center py-5 px-7"
                  style={{ borderBottom: i < arr.length - 1 ? "1px solid rgba(255,255,255,0.07)" : undefined }}
                >
                  <span className="text-sm" style={{ color: "rgba(249,246,241,0.8)" }}>{row.size}</span>
                  <span className="text-xl font-bold" style={{ color: "var(--accent)" }}>${price.toFixed(0)}</span>
                </div>
              );
            })}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            <div
              className="p-6 rounded-2xl text-center"
              style={{ background: "rgba(201,169,122,0.12)", border: "1px solid rgba(201,169,122,0.25)" }}
            >
              <p className="text-xs font-semibold uppercase tracking-widest mb-2" style={{ color: "var(--accent)" }}>First Time Clean</p>
              <p className="text-2xl font-bold" style={{ color: "var(--bg)" }}>5% off</p>
            </div>
            <div
              className="p-6 rounded-2xl text-center"
              style={{ background: "rgba(201,169,122,0.12)", border: "1px solid rgba(201,169,122,0.25)" }}
            >
              <p className="text-xs font-semibold uppercase tracking-widest mb-2" style={{ color: "var(--accent)" }}>Weekly Recurring Cleans</p>
              <p className="text-2xl font-bold" style={{ color: "var(--bg)" }}>10% off</p>
            </div>
          </div>
          {/* <p className="text-center text-xs" style={{ color: "rgba(249,246,241,0.4)" }}>
            ✦ &nbsp;$20 off for clients who schedule weekly cleans
          </p> */}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 text-center" style={{ background: "var(--bg-alt)" }}>
        <h2 className="text-2xl font-bold mb-3" style={{ color: "var(--text)" }}>Not sure which service fits?</h2>
        <p className="text-sm mb-8" style={{ color: "var(--text-muted)" }}>We&apos;re happy to help you figure out exactly what your home needs.</p>
        <Link
          href="/contact"
          className="inline-block px-8 py-3 rounded-full text-sm font-semibold border-2 transition hover:scale-105"
          style={{ borderColor: "var(--text)", color: "var(--text)" }}
        >
          Contact Us
        </Link>
      </section>
    </>
  );
}
