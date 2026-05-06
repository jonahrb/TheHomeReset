"use client";
import Link from "next/link";
import { useState } from "react";

const links = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav
      className="sticky top-0 z-50 backdrop-blur-md"
      style={{
        background: "rgba(249,246,241,0.85)",
        borderBottom: "1px solid var(--border)",
      }}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="flex flex-col leading-none">
          <span className="text-[10px] font-semibold uppercase tracking-widest" style={{ color: "var(--text-muted)" }}>
            The Home
          </span>
          <span className="text-lg font-bold tracking-wide" style={{ color: "var(--text)" }}>
            RESET
          </span>
        </Link>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-7">
          {links.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                className="text-sm font-medium transition hover:opacity-60"
                style={{ color: "var(--text)" }}
              >
                {l.label}
              </Link>
            </li>
          ))}
          <li>
            <Link
              href="/booking"
              className="px-5 py-2.5 rounded-full text-sm font-semibold transition hover:scale-105"
              style={{ background: "var(--text)", color: "var(--bg)", boxShadow: "var(--shadow-sm)" }}
            >
              Book Now
            </Link>
          </li>
        </ul>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2 rounded-lg"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          style={{ color: "var(--text)" }}
        >
          <div className="w-5 h-0.5 bg-current mb-1 transition-all" />
          <div className="w-5 h-0.5 bg-current mb-1 transition-all" />
          <div className="w-5 h-0.5 bg-current transition-all" />
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div
          className="md:hidden px-6 pb-6"
          style={{ background: "var(--bg)", borderTop: "1px solid var(--border)" }}
        >
          <ul className="flex flex-col gap-4 pt-5">
            {links.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className="text-sm font-medium"
                  style={{ color: "var(--text)" }}
                  onClick={() => setOpen(false)}
                >
                  {l.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/booking"
                className="inline-block px-5 py-2.5 rounded-full text-sm font-semibold"
                style={{ background: "var(--text)", color: "var(--bg)" }}
                onClick={() => setOpen(false)}
              >
                Book Now
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
