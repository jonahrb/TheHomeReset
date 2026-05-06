export default function AboutPage() {
  return (
    <>
      {/* Header */}
      <section
        className="py-24 px-6 text-center"
        style={{ background: "linear-gradient(135deg, #F9F6F1 0%, #EDE4D6 100%)" }}
      >
        <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: "var(--accent-dark)" }}>
          Who We Are
        </span>
        <h1 className="text-4xl md:text-5xl font-bold mt-3 mb-4" style={{ color: "var(--text)" }}>
          The Home Reset
        </h1>
        <p className="text-base max-w-lg mx-auto leading-relaxed" style={{ color: "var(--text-muted)" }}>
          A locally owned residential cleaning company with 10+ years of experience — built on trust, reliability, and intentionality.
        </p>
      </section>

      {/* Story */}
      <section className="py-20 px-6" style={{ background: "var(--bg)" }}>
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: "var(--accent-dark)" }}>Our Story</span>
            <h2 className="text-3xl font-bold mt-2 mb-5" style={{ color: "var(--text)" }}>We Clean So You Can Live</h2>
            <p className="text-base leading-relaxed mb-5" style={{ color: "var(--text-muted)" }}>
              Whether you spend long days in the office, you&apos;re a stay-at-home parent, or a busy family on the go — we would love to serve you.
            </p>
            <p className="text-base leading-relaxed mb-5" style={{ color: "var(--text-muted)" }}>
              We will help you <strong style={{ color: "var(--text)" }}>Reset</strong> your space, creating an atmosphere for <strong style={{ color: "var(--text)" }}>Rest</strong> so you can <strong style={{ color: "var(--text)" }}>Create</strong> in all the areas you enjoy.
            </p>
            <p className="text-base leading-relaxed" style={{ color: "var(--text-muted)" }}>
              Family time, personal projects, work — they all await your best self. Let us handle the home.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              { value: "10+", label: "Years of Experience" },
              { value: "500+", label: "Happy Clients" },
              { value: "4,200+", label: "Cleans Completed" },
              { value: "★★★★★", label: "Consistently Rated" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="py-10 px-6 rounded-2xl text-center flex flex-col gap-2"
                style={{ background: "var(--bg-alt)", boxShadow: "var(--shadow-sm)" }}
              >
                <span className="text-2xl font-bold" style={{ color: "var(--accent-dark)" }}>{stat.value}</span>
                <span className="text-xs leading-snug" style={{ color: "var(--text-muted)" }}>{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 px-6" style={{ background: "var(--bg-alt)" }}>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: "var(--accent-dark)" }}>Our Values</span>
            <h2 className="text-3xl font-bold mt-2" style={{ color: "var(--text)" }}>What We Stand For</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              { icon: "⭐", title: "Excellence", desc: "We uphold a high standard in every home — from the first sweep to the final detail." },
              { icon: "🤝", title: "Reliability", desc: "You are not just another client. Your specific needs are met every time, on time." },
              { icon: "💚", title: "Intentionality", desc: "Clean, safe products for the whole family. We pursue the best for your home and loved ones." },
            ].map((v) => (
              <div
                key={v.title}
                className="p-8 rounded-2xl flex flex-col gap-4"
                style={{ background: "var(--bg)", boxShadow: "var(--shadow-sm)" }}
              >
                <span className="text-3xl">{v.icon}</span>
                <h3 className="text-lg font-bold" style={{ color: "var(--text)" }}>{v.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Dark banner */}
      <section
        className="py-24 px-6 text-center"
        style={{ background: "linear-gradient(135deg, var(--bg-dark) 0%, #3d2d1a 100%)" }}
      >
        <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: "var(--accent)" }}>Residential Cleaning</span>
        <blockquote className="text-3xl md:text-4xl font-bold max-w-2xl mx-auto mt-5 leading-snug" style={{ color: "var(--bg)" }}>
          &ldquo;Let us do the home reset for you.&rdquo;
        </blockquote>
        <p className="text-sm mt-6" style={{ color: "rgba(249,246,241,0.4)" }}>
          The Home Reset &nbsp;·&nbsp; 10+ Years of Experience
        </p>
      </section>
    </>
  );
}
