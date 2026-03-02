import { useState } from "react";
import Navbar from "./components/Navbar";
import ProductCard from "./components/ProductCard";
import ProductDetail from "./components/ProductDetail";
import AdminPanel from "./components/AdminPanel";
import globalStyles from "./styles";
import { INITIAL_PRODUCTS, CATS, WHATSAPP } from "./mockData";
import Logo from "./components/Logo";

const WaIcon = ({ size = 20, color = "white" }) => (
  <svg viewBox="0 0 24 24" fill={color} style={{ width: size, height: size }}>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
    <path d="M12 0C5.373 0 0 5.373 0 12c0 2.098.544 4.12 1.585 5.896L.057 23.25l5.488-1.438A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.898 0-3.712-.522-5.274-1.498l-.377-.224-3.916 1.026.989-3.819-.246-.394A9.944 9.944 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
  </svg>
);

function Home({ products, onView, cat, setCat, search }) {
  const filtered = products.filter(p =>
    (cat === "All" || p.category === cat) &&
    (p.name.toLowerCase().includes(search.toLowerCase()) || p.category.toLowerCase().includes(search.toLowerCase()))
  );

  return (
    <div style={{ maxWidth: 1200, margin: "0 auto", padding: "16px 14px 40px" }}>

      {/* ── Hero ── */}
      <div style={{ borderRadius: 22, overflow: "hidden", background: "linear-gradient(135deg,#1C1C1E 55%,#2C1F0E 100%)", position: "relative", marginBottom: 28, minHeight: 200 }}>
        <div style={{ position: "absolute", inset: 0, backgroundImage: "url('https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=1200&q=80')", backgroundSize: "cover", backgroundPosition: "center", opacity: .18 }} />
        <div className="hero-padding" style={{ position: "relative", zIndex: 1, display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: 20 }}>
          <div>
            <div style={{ fontSize: 10, color: "var(--gold)", letterSpacing: "0.25em", textTransform: "uppercase", fontFamily: "'Jost',sans-serif", fontWeight: 700 }}>New Eid Collection 2025</div>
            <div className="font-display hero-title" style={{ fontWeight: 600, color: "#FAF8F5", lineHeight: 1.1, margin: "8px 0 10px" }}>
              Modesty,<br /><span style={{ color: "var(--gold-light, #E8C96A)" }}>Redefined.</span>
            </div>
            <p style={{ color: "rgba(250,248,245,.6)", fontFamily: "'Jost',sans-serif", fontSize: 13, maxWidth: 300, lineHeight: 1.75 }}>
              Premium abayas for every occasion — from everyday grace to royal elegance.
            </p>
          </div>
          {/* Logo badge — hidden on tiny screens via CSS */}
          <Logo size={110} />
        </div>
      </div>

      {/* ── Category Pills ── */}
      <div className="pills-row">
        {CATS.map(c => (
          <button key={c} className="cat-pill" onClick={() => setCat(c)}
            style={{ background: cat === c ? "var(--charcoal)" : "#fff", color: cat === c ? "var(--gold)" : "var(--charcoal)", borderColor: cat === c ? "var(--charcoal)" : "rgba(201,168,76,.3)", boxShadow: cat === c ? "0 4px 15px rgba(0,0,0,.15)" : "none" }}>
            {c}
          </button>
        ))}
      </div>

      {/* Search result count */}
      {search && (
        <div style={{ fontFamily: "'Jost',sans-serif", fontSize: 13, color: "var(--text-muted)", marginBottom: 16 }}>
          {filtered.length} result{filtered.length !== 1 ? "s" : ""} for "<strong style={{ color: "var(--charcoal)" }}>{search}</strong>"
        </div>
      )}

      {/* ── Product Grid ── */}
      {filtered.length === 0 ? (
        <div style={{ textAlign: "center", padding: "60px 0" }}>
          <div style={{ fontSize: 44 }}>🕌</div>
          <div className="font-display" style={{ fontSize: 22, marginTop: 12, color: "var(--charcoal)" }}>No products found</div>
          <div style={{ color: "var(--text-muted)", fontFamily: "'Jost',sans-serif", marginTop: 6, fontSize: 14 }}>Try a different search or category</div>
        </div>
      ) : (
        <div className="product-grid">
          {filtered.map(p => <ProductCard key={p.id} p={p} onView={onView} />)}
        </div>
      )}

      {/* ── Features Strip ── */}
      <div className="features-grid">
        {[["🪡", "Premium Fabrics", "Nida, Crepe, Chiffon"], ["📏", "Sizes 52–58", "Perfect fit guarantee"], ["🚚", "Fast Delivery", "Pan-India 3–5 days"], ["💬", "WhatsApp Order", "No app needed"]].map(([icon, t, s]) => (
          <div key={t} style={{ background: "#fff", borderRadius: 16, padding: 16, textAlign: "center", boxShadow: "0 2px 12px rgba(0,0,0,.05)" }}>
            <div style={{ fontSize: 24 }}>{icon}</div>
            <div className="font-display" style={{ fontSize: 15, fontWeight: 600, color: "var(--charcoal)", margin: "5px 0 2px" }}>{t}</div>
            <div style={{ fontSize: 11, color: "var(--text-muted)", fontFamily: "'Jost',sans-serif" }}>{s}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

function Footer({ onNav }) {
  return (
    <footer style={{ background: "var(--charcoal)", color: "rgba(250,248,245,.65)", marginTop: 48 }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "36px 16px 20px" }}>
        <div className="footer-grid">
          {/* Brand */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 14 }}>
              <Logo size={44} />
              <div>
                <div className="font-display" style={{ fontSize: 19, color: "#FAF8F5" }}>Faraz Abaya</div>
                <div style={{ fontSize: 10, color: "var(--gold)", fontFamily: "'Jost',sans-serif", letterSpacing: "0.15em" }}>فراز عبايه</div>
              </div>
            </div>
            <p style={{ fontFamily: "'Jost',sans-serif", fontSize: 13, lineHeight: 1.8 }}>Premium abayas crafted with love and modesty. Serving women across India since 2018.</p>
          </div>

          {/* Collections */}
          <div>
            <div style={{ fontSize: 10, color: "var(--gold)", fontFamily: "'Jost',sans-serif", fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", marginBottom: 14 }}>Collections</div>
            {CATS.slice(1).map(c => (
              <button key={c} onClick={() => onNav("home")} style={{ display: "block", background: "none", border: "none", cursor: "pointer", fontFamily: "'Jost',sans-serif", fontSize: 13, color: "rgba(250,248,245,.65)", marginBottom: 8, padding: 0, textAlign: "left" }}>{c}</button>
            ))}
          </div>

          {/* Contact */}
          <div>
            <div style={{ fontSize: 10, color: "var(--gold)", fontFamily: "'Jost',sans-serif", fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", marginBottom: 14 }}>Contact</div>
            <div style={{ fontFamily: "'Jost',sans-serif", fontSize: 13, marginBottom: 8, display: "flex", alignItems: "center", gap: 8 }}>
              <WaIcon size={14} color="#25D366" /> WhatsApp: +91 70123 45678
            </div>
            <div style={{ fontFamily: "'Jost',sans-serif", fontSize: 13, color: "var(--text-muted)" }}>Mon–Sat · 9am–8pm IST</div>
          </div>
        </div>

        <div style={{ height: 1, background: "linear-gradient(90deg,transparent,var(--gold),transparent)", margin: "0 0 18px" }} />

        <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: 10 }}>
          <div style={{ fontFamily: "'Jost',sans-serif", fontSize: 12 }}>© 2025 Faraz Abaya. All rights reserved.</div>
          <div style={{ fontFamily: "'Jost',sans-serif", fontSize: 12, color: "var(--gold)" }}>Made with ♡ for modest fashion</div>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  const [products, setProducts] = useState(INITIAL_PRODUCTS);
  const [page, setPage] = useState("home");
  const [selected, setSelected] = useState(null);
  const [cat, setCat] = useState("All");
  const [search, setSearch] = useState("");

  const nav = (to) => { setPage(to); window.scrollTo({ top: 0, behavior: "smooth" }); };
  const viewProduct = (p) => { setSelected(p); nav("detail"); };

  return (
    <div style={{ minHeight: "100vh", background: "var(--pearl)" }}>
      <style>{globalStyles}</style>
      {page !== "admin" && <Navbar onNav={nav} search={search} setSearch={setSearch} cat={cat} setCat={setCat} />}
      <main style={{ minHeight: "70vh" }}>
        {page === "home" && <Home products={products} onView={viewProduct} cat={cat} setCat={setCat} search={search} />}
        {page === "detail" && selected && <ProductDetail p={selected} onBack={() => nav("home")} />}
        {page === "admin" && <AdminPanel products={products} setProducts={setProducts} onBack={() => nav("home")} />}
      </main>
      {page !== "admin" && <Footer onNav={nav} />}
      {page !== "admin" && (
        <button className="float-wa" onClick={() => window.open(`https://wa.me/${WHATSAPP}`, "_blank")} aria-label="Order on WhatsApp">
          <WaIcon size={24} />
        </button>
      )}
    </div>
  );
}
