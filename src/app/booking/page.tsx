"use client";
import { useState } from "react";

const serviceOptions = [
  "The Reset (Standard Clean)",
  "Deep Clean",
  "Short Term Rental / AirBnB",
];

type FormData = {
  name: string;
  email: string;
  phone: string;
  service: string;
  frequency: string;
  date: string;
  bedrooms: string;
  bathrooms: string;
  notes: string;
};

const initialForm: FormData = {
  name: "",
  email: "",
  phone: "",
  service: "",
  frequency: "",
  date: "",
  bedrooms: "1",
  bathrooms: "1",
  notes: "",
};

export default function BookingPage() {
  const [form, setForm] = useState<FormData>(initialForm);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function formatPhone(value: string) {
    const digits = value.replace(/\D/g, "").slice(0, 10);
    const len = digits.length;
    if (len === 0) return "";
    if (len < 4) return `(${digits}`;
    if (len < 7) return `(${digits.slice(0, 3)}) ${digits.slice(3)}`;
    return `(${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6)}`;
  }

  function handlePhoneChange(e: React.ChangeEvent<HTMLInputElement>) {
    const formatted = formatPhone(e.target.value);
    setForm({ ...form, phone: formatted });
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");
    try {
      const res = await fetch("/api/booking", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || "Something went wrong.");
      }
      setStatus("success");
      setForm(initialForm);
    } catch (err: unknown) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Something went wrong.");
    }
  }

  const inputClass = "w-full rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 transition";
  const inputStyle = {
    background: "var(--bg)",
    border: "1.5px solid var(--border)",
    color: "var(--text)",
  };
  const labelClass = "block text-xs font-semibold mb-1.5";
  const labelStyle = { color: "var(--text-muted)" };

  return (
    <>
      {/* Header */}
      <section
        className="py-24 px-6 text-center"
        style={{ background: "linear-gradient(135deg, #F9F6F1 0%, #EDE4D6 100%)" }}
      >
        <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: "var(--accent-dark)" }}>
          Schedule
        </span>
        <h1 className="text-4xl md:text-5xl font-bold mt-3 mb-4" style={{ color: "var(--text)" }}>
          Book a Cleaning
        </h1>
        <p className="text-base max-w-md mx-auto leading-relaxed" style={{ color: "var(--text-muted)" }}>
          Fill out the form and we&apos;ll confirm your appointment within 24 hours.
        </p>
      </section>

      <section className="py-20 px-6" style={{ background: "var(--bg-alt)" }}>
        <div className="max-w-xl mx-auto">
          {status === "success" ? (
            <div
              className="py-20 text-center flex flex-col items-center gap-5 rounded-3xl"
              style={{ background: "var(--bg)", boxShadow: "var(--shadow-md)" }}
            >
              <span className="text-6xl">🎉</span>
              <h2 className="text-2xl font-bold" style={{ color: "var(--text)" }}>Reset Incoming!</h2>
              <p className="text-sm max-w-xs leading-relaxed" style={{ color: "var(--text-muted)" }}>
                We received your request and will be in touch within 24 hours to confirm your appointment.
              </p>
              <button
                onClick={() => setStatus("idle")}
                className="mt-2 px-6 py-2.5 rounded-full text-sm font-semibold transition hover:scale-105"
                style={{ background: "var(--text)", color: "var(--bg)" }}
              >
                Book Another
              </button>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-6 p-10 rounded-3xl"
              style={{ background: "var(--bg)", boxShadow: "var(--shadow-md)" }}
            >
              <h2 className="text-xl font-bold mb-1" style={{ color: "var(--text)" }}>Your Details</h2>
              {status === "error" && (
                <p className="text-sm p-3 rounded-xl" style={{ background: "#fef2f2", color: "#c0392b" }}>
                  {errorMsg}
                </p>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className={labelClass} style={labelStyle}>Full Name</label>
                  <input type="text" name="name" required value={form.name} onChange={handleChange} placeholder="Jane Smith" className={inputClass} style={inputStyle} />
                </div>
                <div>
                  <label className={labelClass} style={labelStyle}>Email</label>
                  <input type="email" name="email" required value={form.email} onChange={handleChange} placeholder="jane@example.com" className={inputClass} style={inputStyle} />
                </div>
                <div>
                  <label className={labelClass} style={labelStyle}>Phone</label>
                  <input
                    type="tel"
                    name="phone"
                    inputMode="tel"
                    pattern="\(\d{3}\) \d{3}-\d{4}"
                    required
                    value={form.phone}
                    onChange={handlePhoneChange}
                    placeholder="(817) 000-0000"
                    className={inputClass}
                    style={inputStyle}
                    aria-label="Phone number"
                  />
                </div>
                <div>
                  <label className={labelClass} style={labelStyle}>Service</label>
                  <select name="service" required value={form.service} onChange={handleChange} className={inputClass} style={inputStyle}>
                    <option value="">Select...</option>
                    {serviceOptions.map((s) => <option key={s} value={s}>{s}</option>)}
                  </select>
                </div>
                <div>
                  <label className={labelClass} style={labelStyle}>Frequency</label>
                  <select name="frequency" required value={form.frequency} onChange={handleChange} className={inputClass} style={inputStyle}>
                    <option value="">Select...</option>
                    <option value="Weekly">Weekly (10% off!)</option>
                    <option value="Bi-weekly">Bi-weekly</option>
                    <option value="Monthly">Monthly</option>
                    <option value="One-time">One-time</option>
                  </select>
                </div>
                <div>
                  <label className={labelClass} style={labelStyle}>Preferred Date</label>
                  <input type="date" name="date" required value={form.date} onChange={handleChange} className={inputClass} style={inputStyle} />
                </div>
                <div>
                  <label className={labelClass} style={labelStyle}>Bedrooms</label>
                  <select name="bedrooms" value={form.bedrooms} onChange={handleChange} className={inputClass} style={inputStyle}>
                    {["1", "2", "3", "4", "5+"].map((n) => <option key={n} value={n}>{n}</option>)}
                  </select>
                </div>
                <div>
                  <label className={labelClass} style={labelStyle}>Bathrooms</label>
                  <select name="bathrooms" value={form.bathrooms} onChange={handleChange} className={inputClass} style={inputStyle}>
                    {["1", "2", "3", "4+"].map((n) => <option key={n} value={n}>{n}</option>)}
                  </select>
                </div>
              </div>

              <div>
                <label className={labelClass} style={labelStyle}>Additional Notes</label>
                <textarea
                  name="notes"
                  value={form.notes}
                  onChange={handleChange}
                  rows={3}
                  placeholder="Special instructions, access info, pets, add-on requests..."
                  className={inputClass + " resize-none"}
                  style={inputStyle}
                />
              </div>

              <button
                type="submit"
                disabled={status === "loading"}
                className="w-full py-4 rounded-full text-sm font-bold transition hover:scale-105 disabled:opacity-50"
                style={{ background: "var(--text)", color: "var(--bg)", boxShadow: "var(--shadow-sm)" }}
              >
                {status === "loading" ? "Submitting..." : "Request My Reset →"}
              </button>
              <p className="text-xs text-center" style={{ color: "var(--text-muted)" }}>
                No payment required now. We&apos;ll confirm and arrange payment together.
              </p>
            </form>
          )}
        </div>
      </section>
    </>
  );
}
