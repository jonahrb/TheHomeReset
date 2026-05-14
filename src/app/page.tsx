import Link from "next/link";

const features = [
  { icon: "✨", title: "Spotless Every Time", desc: "Our multi-point checklist ensures consistent, thorough results on every visit." },
  { icon: "🔒", title: "Trusted & Secure", desc: "Every cleaner is background-checked. Your home is in safe, professional hands." },
  { icon: "🌿", title: "Safe Products", desc: "We use clean, non-toxic products that are safe for kids, pets, and the whole family." },
  { icon: "📅", title: "Flexibility", desc: "Weekly, bi-weekly, or monthly. We work around your life, not the other way around." },
];

const testimonials = [
  { name: "Sarah M.", text: "The Home Reset transformed my house! I came home to a place that literally sparkled. Worth every penny.", stars: 5 },
  { name: "James T.", text: "Incredibly professional. On time, thorough, and they even cleaned behind the appliances. Highly recommend!", stars: 5 },
  { name: "Linda R.", text: "I've tried many cleaning services and none compare. The attention to detail is unmatched.", stars: 5 },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section
        className="relative min-h-[88vh] flex flex-col items-center justify-center text-center px-6 py-24 overflow-hidden"
        style={{ background: "linear-gradient(135deg, #F9F6F1 0%, #EDE4D6 60%, #F0EAE0 100%)" }}
      >
        {/* Decorative circle */}
        <div
          className="absolute -top-32 -right-32 w-96 h-96 rounded-full opacity-30 pointer-events-none"
          style={{ background: "radial-gradient(circle, var(--accent) 0%, transparent 70%)" }}
        />
        <div
          className="absolute -bottom-20 -left-20 w-72 h-72 rounded-full opacity-20 pointer-events-none"
          style={{ background: "radial-gradient(circle, var(--accent-dark) 0%, transparent 70%)" }}
        />

        <h1 className="text-5xl md:text-7xl font-bold mb-3 tracking-wide" style={{ color: "var(--accent-dark)" }}>
          The Home Reset
        </h1>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-5 leading-tight" style={{ color: "var(--text)" }}>
          Reset <span className="mx-3" style={{ color: "var(--accent-dark)" }}>·</span>
          Rest <span className="mx-3" style={{ color: "var(--accent-dark)" }}>·</span>
          Create
        </h2>
        <p className="text-lg md:text-xl max-w-2xl leading-relaxed mb-10" style={{ color: "var(--text-muted)" }}>
          Whether you&apos;re a busy family, a stay-at-home parent, or working long days,
          we will reset your space so you can get back to creating the life you want.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/booking"
            className="px-8 py-4 rounded-full text-sm font-semibold shadow-lg transition hover:scale-105 hover:shadow-xl"
            style={{ background: "var(--text)", color: "var(--bg)", boxShadow: "var(--shadow-md)" }}
          >
            Book a Cleaning →
          </Link>
          <Link
            href="/services"
            className="px-8 py-4 rounded-full text-sm font-semibold border-2 transition hover:scale-105"
            style={{ borderColor: "var(--text)", color: "var(--text)", background: "rgba(255,255,255,0.6)" }}
          >
            See Services & Pricing
          </Link>
        </div>
      </section>

      {/* We Serve */}
      <section className="py-20 px-6" style={{ background: "var(--bg)" }}>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: "var(--accent-dark)" }}>What We Clean</span>
            <h2 className="text-3xl font-bold mt-2" style={{ color: "var(--text)" }}>We Serve</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              { icon: "🏡", label: "Personal Residences", desc: "Your home, reset to its best." },
              { icon: "🛏️", label: "Short Term Rentals", desc: "Turnover cleans between guests." },
            ].map((item) => (
              <div
                key={item.label}
                className="p-8 rounded-2xl text-center flex flex-col items-center gap-3"
                style={{ background: "var(--bg-alt)", boxShadow: "var(--shadow-sm)" }}
              >
                <span className="text-4xl">{item.icon}</span>
                <p className="font-semibold" style={{ color: "var(--text)" }}>{item.label}</p>
                <p className="text-sm" style={{ color: "var(--text-muted)" }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 px-6" style={{ background: "var(--bg-alt)" }}>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: "var(--accent-dark)" }}>Why Choose Us</span>
            <h2 className="text-3xl font-bold mt-2" style={{ color: "var(--text)" }}>What Sets Us Apart</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((f) => (
              <div
                key={f.title}
                className="p-6 rounded-2xl flex flex-col gap-3"
                style={{ background: "var(--bg)", boxShadow: "var(--shadow-sm)" }}
              >
                <span className="text-3xl">{f.icon}</span>
                <p className="font-semibold" style={{ color: "var(--text)" }}>{f.title}</p>
                <p className="text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Snapshot */}
      <section className="py-24 px-6" style={{ background: "var(--bg-dark)" }}>
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: "var(--accent)" }}>Pricing</span>
          <h2 className="text-3xl font-bold mt-2 mb-3" style={{ color: "var(--bg)" }}>Transparent Rates</h2>
          <p className="text-sm mb-12 max-w-md mx-auto leading-relaxed" style={{ color: "rgba(249,246,241,0.6)" }}>
            Based on bed/bath count, frequency, and location. À la carte add-ons available.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {[
              { label: "1–2 bed / 1–2 bath", price: "$140" },
              { label: "3 bed / 2 bath", price: "$180" },
              { label: "4 bed / 2–3 bath", price: "$220" },
              { label: "5+ bed", price: "$280" },
            ].map((tier) => (
              <div
                key={tier.label}
                className="py-8 px-4 rounded-2xl flex flex-col items-center gap-2"
                style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(201,169,122,0.2)" }}
              >
                <span className="text-3xl font-bold" style={{ color: "var(--accent)" }}>{tier.price}</span>
                <span className="text-xs text-center leading-relaxed" style={{ color: "rgba(249,246,241,0.55)" }}>{tier.label}</span>
              </div>
            ))}
          </div>
          <p className="text-xs mb-8" style={{ color: "rgba(249,246,241,0.4)" }}>
            Weekly cleans: 10% off &nbsp;·&nbsp; First clean: 5% off &nbsp;·&nbsp; Deep clean: 1.5x
          </p>
          <Link
            href="/services"
            className="inline-block px-8 py-3 rounded-full text-sm font-semibold transition hover:scale-105"
            style={{ background: "var(--accent)", color: "var(--bg-dark)" }}
          >
            View Full Pricing
          </Link>
        </div>
      </section>

      {/* How it works */}
      <section className="py-24 px-6" style={{ background: "var(--bg)" }}>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: "var(--accent-dark)" }}>Our Process</span>
            <h2 className="text-3xl font-bold mt-2" style={{ color: "var(--text)" }}>How It Works</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-5 gap-6">
            {[
              { num: "01", title: "Plan", desc: "Review our services and pricing, then reach out." },
              { num: "02", title: "Consult", desc: "Tell us your home's needs and preferences." },
              { num: "03", title: "Schedule", desc: "Pick your frequency — weekly, bi-weekly, or monthly." },
              { num: "04", title: "Payment", desc: "Zelle, Venmo, Cash, or Check." },
              { num: "05", title: "Reset!", desc: "Come home to a fresh, peaceful space." },
            ].map((step) => (
              <div key={step.num} className="flex flex-col items-center text-center gap-3">
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center text-sm font-bold"
                  style={{ background: "var(--bg-alt)", color: "var(--accent-dark)" }}
                >
                  {step.num}
                </div>
                <p className="font-semibold text-sm" style={{ color: "var(--text)" }}>{step.title}</p>
                <p className="text-xs leading-relaxed" style={{ color: "var(--text-muted)" }}>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-6" style={{ background: "var(--bg-alt)" }}>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: "var(--accent-dark)" }}>Reviews</span>
            <h2 className="text-3xl font-bold mt-2" style={{ color: "var(--text)" }}>What Clients Say</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div
                key={t.name}
                className="p-7 rounded-2xl flex flex-col gap-4"
                style={{ background: "var(--bg)", boxShadow: "var(--shadow-sm)" }}
              >
                <div className="text-yellow-500 text-base tracking-tight">{"★".repeat(t.stars)}</div>
                <p className="text-sm leading-relaxed italic" style={{ color: "var(--text-muted)" }}>"{t.text}"</p>
                <p className="font-semibold text-sm" style={{ color: "var(--text)" }}>— {t.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        className="py-24 px-6 text-center"
        style={{ background: "linear-gradient(135deg, var(--bg-dark) 0%, #3d2d1a 100%)" }}
      >
        <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: "var(--accent)" }}>Let's Reset</span>
        <h2 className="text-4xl font-bold mt-3 mb-4" style={{ color: "var(--bg)" }}>Ready for Your Home Reset?</h2>
        <p className="text-base mb-10 max-w-md mx-auto" style={{ color: "rgba(249,246,241,0.6)" }}>
          Schedule your first cleaning today and experience the difference.
        </p>
        <Link
          href="/booking"
          className="inline-block px-10 py-4 rounded-full text-sm font-bold transition hover:scale-105 hover:shadow-xl"
          style={{ background: "var(--accent)", color: "var(--bg-dark)", boxShadow: "var(--shadow-md)" }}
        >
          Book Now — It's Free to Inquire
        </Link>
      </section>
    </>
  );
}
