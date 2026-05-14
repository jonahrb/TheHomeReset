"use client";
import { useState } from "react";

type ContactForm = { name: string; email: string; phone: string; message: string };
const initialForm: ContactForm = { name: "", email: "", phone: "", message: "" };

const faqs = [
  {
    q: "What kind of supplies do you use?",
    a: "We use clean, safe products that are gentle on your home and family. If you have sensitivities or preferences, just let us know.",
  },
  {
    q: "Can I provide my own supplies?",
    a: "Absolutely! Just be sure to communicate your preference ahead of your clean so we can plan accordingly.",
  },
  {
    q: "Do I have to be home during my reset?",
    a: "Nope! You are free to leave a spare key or code with instructions. We keep all access information secure in your profile.",
  },
];

export default function ContactPage() {
  const [form, setForm] = useState<ContactForm>(initialForm);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
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
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error();
      setStatus("success");
      setForm(initialForm);
    } catch {
      setStatus("error");
    }
  }

  const inputClass = "w-full rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 transition";
  const inputStyle = {
    background: "var(--bg)",
    border: "1.5px solid var(--border)",
    color: "var(--text)",
  };

  return (
    <>
      {/* Header */}
      <section
        className="py-24 px-6 text-center"
        style={{ background: "linear-gradient(135deg, #F9F6F1 0%, #EDE4D6 100%)" }}
      >
        <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: "var(--accent-dark)" }}>
          How to Book
        </span>
        <h1 className="text-4xl md:text-5xl font-bold mt-3 mb-4" style={{ color: "var(--text)" }}>Get in Touch</h1>
        <p className="text-base max-w-md mx-auto leading-relaxed" style={{ color: "var(--text-muted)" }}>
          Reach out via email or social media — we&apos;d love to hear from you.
        </p>
      </section>

      {/* Contact grid */}
      <section className="py-20 px-6" style={{ background: "var(--bg-alt)" }}>
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Info panel */}
          <div className="flex flex-col gap-8">
            <div
              className="p-8 rounded-2xl flex flex-col gap-6"
              style={{ background: "var(--bg)", boxShadow: "var(--shadow-sm)" }}
            >
              <h2 className="text-xl font-bold" style={{ color: "var(--text)" }}>Contact Info</h2>
              <ul className="space-y-5">
                <li className="flex items-start gap-4">
                  <span className="text-2xl">📧</span>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-widest mb-1" style={{ color: "var(--text-muted)" }}>Email</p>
                    <a href="mailto:hello@thehomereset.us" className="text-sm font-medium hover:underline" style={{ color: "var(--text)" }}>
                      hello@thehomereset.us
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <span className="text-2xl">📞</span>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-widest mb-1" style={{ color: "var(--text-muted)" }}>Text / Call</p>
                    <a href="tel:+16822330863" className="text-sm font-medium hover:underline" style={{ color: "var(--text)" }}>
                      (682) 233-0863
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <span className="text-2xl">📸</span>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-widest mb-1" style={{ color: "var(--text-muted)" }}>Instagram</p>
                    <a href="https://instagram.com/thehome.reset" target="_blank" rel="noopener noreferrer" className="text-sm font-medium hover:underline" style={{ color: "var(--text)" }}>
                      @thehome.reset
                    </a>
                  </div>
                </li>
              </ul>
            </div>

            <div
              className="p-8 rounded-2xl"
              style={{ background: "var(--bg)", boxShadow: "var(--shadow-sm)" }}
            >
              <h3 className="text-sm font-bold mb-4" style={{ color: "var(--text)" }}>Payment Accepted</h3>
              <div className="flex flex-wrap gap-2">
                {["Zelle", "Venmo", "Cash", "Check"].map((p) => (
                  <span
                    key={p}
                    className="px-4 py-2 rounded-full text-xs font-semibold"
                    style={{ background: "var(--bg-alt)", color: "var(--accent-dark)" }}
                  >
                    {p}
                  </span>
                ))}
              </div>
            </div>

            <div
              className="p-8 rounded-2xl"
              style={{ background: "var(--bg)", boxShadow: "var(--shadow-sm)" }}
            >
              <h3 className="text-sm font-bold mb-4" style={{ color: "var(--text)" }}>Days of Operation</h3>
                <div className="flex flex-wrap gap-2">
                {["Monday – Saturday"].map((d) => (
                    <span key={d} className="px-3 py-1 rounded-full text-sm font-medium" style={{ background: "var(--bg-alt)", color: "var(--accent-dark)" }}>
                    {d}
                    </span>
                ))}
                </div>
            </div>
          </div>

          {/* Form */}
          {status === "success" ? (
            <div
              className="flex flex-col items-center justify-center py-16 text-center gap-5 rounded-2xl"
              style={{ background: "var(--bg)", boxShadow: "var(--shadow-sm)" }}
            >
              <span className="text-5xl">✉️</span>
              <h2 className="text-2xl font-bold" style={{ color: "var(--text)" }}>Message Sent!</h2>
              <p className="text-sm max-w-xs" style={{ color: "var(--text-muted)" }}>
                Thanks for reaching out. We&apos;ll get back to you within 24 hours.
              </p>
              <button
                onClick={() => setStatus("idle")}
                className="mt-2 px-6 py-2.5 rounded-full text-sm font-semibold transition hover:scale-105"
                style={{ background: "var(--text)", color: "var(--bg)" }}
              >
                Send Another
              </button>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-5 p-8 rounded-2xl"
              style={{ background: "var(--bg)", boxShadow: "var(--shadow-sm)" }}
            >
              <h2 className="text-xl font-bold mb-1" style={{ color: "var(--text)" }}>Send a Message</h2>
              {status === "error" && (
                <p className="text-sm p-3 rounded-xl" style={{ background: "#fef2f2", color: "#c0392b" }}>
                  Something went wrong. Please try again.
                </p>
              )}
              {[
                { name: "name", label: "Your Name", type: "text", placeholder: "Jane Smith", required: true },
                { name: "email", label: "Email Address", type: "email", placeholder: "jane@example.com", required: true },
                { name: "phone", label: "Phone (optional)", type: "tel", placeholder: "(817) 000-0000", required: false },
              ].map((field) => (
                <div key={field.name}>
                  <label className="block text-xs font-semibold mb-1.5" style={{ color: "var(--text-muted)" }}>
                    {field.label}
                  </label>
                  <input
                    type={field.type}
                    name={field.name}
                    required={field.required}
                    value={(form as Record<string, string>)[field.name]}
                    onChange={field.name === 'phone' ? handlePhoneChange : handleChange}
                    inputMode={field.name === 'phone' ? 'tel' : undefined}
                    pattern={field.name === 'phone' ? "\\(\\d{3}\\) \\d{3}-\\d{4}" : undefined}
                    aria-label={field.name === 'phone' ? 'Phone number' : undefined}
                    placeholder={field.placeholder}
                    className={inputClass}
                    style={inputStyle}
                  />
                </div>
              ))}
              <div>
                <label className="block text-xs font-semibold mb-1.5" style={{ color: "var(--text-muted)" }}>Message</label>
                <textarea
                  name="message"
                  required
                  value={form.message}
                  onChange={handleChange}
                  rows={4}
                  placeholder="How can we help?"
                  className={inputClass + " resize-none"}
                  style={inputStyle}
                />
              </div>
              <button
                type="submit"
                disabled={status === "loading"}
                className="w-full py-3.5 rounded-full text-sm font-bold transition hover:scale-105 disabled:opacity-50"
                style={{ background: "var(--text)", color: "var(--bg)" }}
              >
                {status === "loading" ? "Sending..." : "Send Message"}
              </button>
            </form>
          )}
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-6" style={{ background: "var(--bg)" }}>
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: "var(--accent-dark)" }}>FAQ</span>
            <h2 className="text-3xl font-bold mt-2" style={{ color: "var(--text)" }}>Common Questions</h2>
          </div>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <div
                key={faq.q}
                className="p-7 rounded-2xl"
                style={{ background: "var(--bg-alt)", boxShadow: "var(--shadow-sm)" }}
              >
                <p className="font-semibold mb-2" style={{ color: "var(--text)" }}>{faq.q}</p>
                <p className="text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
