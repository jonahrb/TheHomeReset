import Link from "next/link";

export default function Footer() {
  return (
    <footer style={{ background: "var(--bg-dark)" }}>
      <div className="max-w-6xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-3 gap-10">
        <div>
          <div className="flex flex-col leading-none mb-5">
            <span className="text-[10px] font-semibold uppercase tracking-widest" style={{ color: "rgba(249,246,241,0.4)" }}>The Home</span>
            <span className="text-xl font-bold tracking-wide" style={{ color: "var(--bg)" }}>RESET</span>
          </div>
          <p className="text-sm leading-relaxed max-w-xs" style={{ color: "rgba(249,246,241,0.45)" }}>
            Reset &middot; Rest &middot; Create. Residential cleaning for families who deserve to come home to peace.
          </p>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-widest mb-5" style={{ color: "rgba(249,246,241,0.35)" }}>Navigation</p>
          <ul className="space-y-3">
            {[
              ["Home", "/"],
              ["Services", "/services"],
              ["Book Now", "/booking"],
              ["About", "/about"],
              ["Contact", "/contact"],
            ].map(([label, href]) => (
              <li key={href}>
                <Link
                  href={href}
                  className="text-sm font-medium transition hover:opacity-100"
                  style={{ color: "rgba(249,246,241,0.55)" }}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-widest mb-5" style={{ color: "rgba(249,246,241,0.35)" }}>Contact</p>
          <ul className="space-y-3 text-sm" style={{ color: "rgba(249,246,241,0.55)" }}>
            <li>
              <a href="mailto:thehome.reset00@gmail.com" className="hover:opacity-100 transition">
                thehome.reset00@gmail.com
              </a>
            </li>
            <li>
              <a href="https://instagram.com/thehome.reset" target="_blank" rel="noopener noreferrer" className="hover:opacity-100 transition">
                @thehome.reset
              </a>
            </li>
          </ul>
          <div className="mt-6">
            <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: "rgba(249,246,241,0.35)" }}>Payment</p>
            <div className="flex flex-wrap gap-2">
              {["Zelle", "Venmo", "Cash", "Check"].map((p) => (
                <span
                  key={p}
                  className="px-3 py-1 rounded-full text-xs font-medium"
                  style={{ background: "rgba(201,169,122,0.15)", color: "var(--accent)" }}
                >
                  {p}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div
        className="max-w-6xl mx-auto px-6 py-5 text-center text-xs"
        style={{ borderTop: "1px solid rgba(255,255,255,0.07)", color: "rgba(249,246,241,0.25)" }}
      >
        &copy; {new Date().getFullYear()} The Home Reset &middot; Residential Cleaning
      </div>
    </footer>
  );
}
