import { createFileRoute } from "@tanstack/react-router";
import heroFabric from "@/assets/hero-fabric.jpg";
import digitalPrints from "@/assets/digital-prints.jpg";
import bedsheets from "@/assets/bedsheets.jpg";
import cottonWeave from "@/assets/cotton-weave.jpg";
import craftsmanship from "@/assets/craftsmanship.jpg";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Shree Ambaji Expo Fab — Fabric & Home Textile House, Ahmedabad" },
      {
        name: "description",
        content:
          "Manufacturer & supplier of digital printed fabrics, cotton, rayon, viscose, women's apparel fabrics and bedsheets from Ahmedabad, Gujarat. Trusted by Haus & Kinder, Nestasia, Polka Tots.",
      },
    ],
  }),
});

const products = [
  { n: "01", title: "Digital Printed Fabrics", desc: "Vivid, design-led prints in custom colourways and runs of any scale." },
  { n: "02", title: "Cotton, Rayon & Viscose", desc: "Soft hand-feel base cloths, sourced and finished for premium drape." },
  { n: "03", title: "Women's Apparel Fabrics", desc: "Season-ready textiles built for India's most considered apparel brands." },
  { n: "04", title: "Custom Developments", desc: "Concept to swatch to bulk — design support woven into every order." },
  { n: "05", title: "Bulk Fabric Supply", desc: "Reliable production capacity with consistent quality at competitive prices." },
  { n: "06", title: "Bedsheets", desc: "End-to-end manufacturing of home textiles for retail and export." },
];

const strengths = [
  { k: "Design Studio", v: "In-house print & development support" },
  { k: "Specialism", v: "Digital prints & home textiles" },
  { k: "Pricing", v: "Competitive, consistent, transparent" },
  { k: "Logistics", v: "Reliable, on-time delivery" },
];

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <Hero />
      <Marquee />
      <Intro />
      <Products />
      <Strengths />
      <Clients />
      <CTA />
      <Footer />
    </div>
  );
}

function Nav() {
  return (
    <header className="absolute top-0 left-0 right-0 z-30">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 py-6 flex items-center justify-between">
        <a href="#top" className="flex items-baseline gap-2">
          <span className="font-display text-2xl tracking-tight text-cream" style={{ color: "var(--cream)" }}>
            Shree Ambaji
          </span>
          <span className="eyebrow text-cream/70" style={{ color: "color-mix(in oklab, var(--cream) 70%, transparent)" }}>
            Expo Fab
          </span>
        </a>
        <nav className="hidden md:flex items-center gap-10 eyebrow text-cream/80" style={{ color: "color-mix(in oklab, var(--cream) 80%, transparent)" }}>
          <a href="#products" className="hover:opacity-100 opacity-80 transition">Collections</a>
          <a href="#strengths" className="hover:opacity-100 opacity-80 transition">Atelier</a>
          <a href="#clients" className="hover:opacity-100 opacity-80 transition">Clients</a>
          <a href="#contact" className="hover:opacity-100 opacity-80 transition">Contact</a>
        </nav>
        <a
          href="tel:9638052342"
          className="hidden md:inline-flex eyebrow border border-cream/30 px-4 py-2.5 hover:bg-cream hover:text-foreground transition"
          style={{ borderColor: "color-mix(in oklab, var(--cream) 30%, transparent)", color: "var(--cream)" }}
        >
          +91 96380 52342
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative min-h-screen w-full overflow-hidden bg-[var(--ink)]">
      <img
        src={heroFabric}
        alt="Flowing terracotta fabric"
        width={1536}
        height={1920}
        className="absolute inset-0 w-full h-full object-cover opacity-90"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/10 to-black/70" />

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-12 pt-40 md:pt-48 pb-20 min-h-screen flex flex-col justify-between">
        <div className="max-w-3xl fade-up">
          <p className="eyebrow mb-6" style={{ color: "var(--cream)" }}>
            Ahmedabad · Est. Textile House
          </p>
          <h1
            className="font-display text-[clamp(3rem,9vw,8.5rem)] leading-[0.92] tracking-tight"
            style={{ color: "var(--cream)" }}
          >
            The quiet art<br />
            <em className="italic font-light" style={{ color: "color-mix(in oklab, var(--cream) 90%, var(--terracotta))" }}>
              of fine cloth.
            </em>
          </h1>
        </div>

        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-10 mt-16">
          <p
            className="max-w-md text-base md:text-lg leading-relaxed"
            style={{ color: "color-mix(in oklab, var(--cream) 85%, transparent)" }}
          >
            A textile house manufacturing and trading printed fabrics &
            home textiles for India's most considered brands and exporters.
          </p>
          <div className="flex items-center gap-6">
            <a
              href="#products"
              className="eyebrow inline-flex items-center gap-3 bg-[var(--terracotta)] text-[var(--cream)] px-7 py-4 hover:bg-[var(--terracotta-deep)] transition"
            >
              View Collections <span>→</span>
            </a>
            <a
              href="#contact"
              className="eyebrow underline underline-offset-8 decoration-1"
              style={{ color: "var(--cream)" }}
            >
              Enquire
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Marquee() {
  const items = ["Digital Prints", "Cotton", "Rayon", "Viscose", "Apparel Fabrics", "Bedsheets", "Custom Development", "Bulk Supply"];
  const row = [...items, ...items];
  return (
    <div className="border-y border-border bg-[var(--sand)] overflow-hidden">
      <div className="flex marquee whitespace-nowrap py-6">
        {row.map((it, i) => (
          <span key={i} className="mx-10 font-display italic text-3xl md:text-4xl text-foreground/80">
            {it} <span className="text-[var(--terracotta)] mx-6">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}

function Intro() {
  return (
    <section className="max-w-[1400px] mx-auto px-6 md:px-12 py-28 md:py-40 grid grid-cols-1 md:grid-cols-12 gap-10">
      <div className="md:col-span-4">
        <p className="eyebrow text-[var(--terracotta)]">— A House of Textiles</p>
      </div>
      <div className="md:col-span-8">
        <h2 className="font-display text-[clamp(2rem,5vw,4.5rem)] leading-[1.05] tracking-tight">
          We weave together <em className="italic">design, craft</em> and dependable supply — from a single yard of swatch to bulk production for India's leading exporters and brands.
        </h2>
        <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-y-8 gap-x-10">
          {[
            { k: "Years", v: "Decade+" },
            { k: "Clients", v: "Pan-India" },
            { k: "Studio", v: "Ahmedabad" },
            { k: "Speciality", v: "Digital Print" },
          ].map((s) => (
            <div key={s.k}>
              <p className="eyebrow text-muted-foreground mb-2">{s.k}</p>
              <p className="font-display text-2xl">{s.v}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Products() {
  return (
    <section id="products" className="bg-[var(--sand)]">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 py-28 md:py-40">
        <div className="flex items-end justify-between flex-wrap gap-6 mb-16">
          <div>
            <p className="eyebrow text-[var(--terracotta)] mb-4">— Our Range</p>
            <h2 className="font-display text-[clamp(2.25rem,6vw,5rem)] leading-[1] tracking-tight max-w-2xl">
              Collections, considered.
            </h2>
          </div>
          <p className="max-w-sm text-muted-foreground">
            Six disciplines, one studio. Each product line developed and supplied with the same exacting standard.
          </p>
        </div>

        {/* Magazine grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          <figure className="md:col-span-7 md:row-span-2 relative aspect-[4/5] md:aspect-auto md:min-h-[640px] overflow-hidden group">
            <img
              src={digitalPrints}
              alt="Digital printed fabrics stack"
              loading="lazy"
              width={1024}
              height={1280}
              className="w-full h-full object-cover transition duration-700 group-hover:scale-[1.03]"
            />
            <figcaption className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/70 to-transparent">
              <p className="eyebrow mb-2" style={{ color: "var(--cream)" }}>01 / Signature</p>
              <h3 className="font-display text-3xl md:text-5xl" style={{ color: "var(--cream)" }}>Digital Printed Fabrics</h3>
            </figcaption>
          </figure>

          <figure className="md:col-span-5 relative aspect-[5/4] overflow-hidden group">
            <img
              src={bedsheets}
              alt="Bedsheets"
              loading="lazy"
              width={1024}
              height={1280}
              className="w-full h-full object-cover transition duration-700 group-hover:scale-[1.03]"
            />
            <figcaption className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/70 to-transparent">
              <p className="eyebrow mb-1" style={{ color: "var(--cream)" }}>06 / Home</p>
              <h3 className="font-display text-2xl md:text-3xl" style={{ color: "var(--cream)" }}>Bedsheets</h3>
            </figcaption>
          </figure>

          <figure className="md:col-span-5 relative aspect-[5/4] overflow-hidden bg-card group">
            <img
              src={cottonWeave}
              alt="Cotton weave"
              loading="lazy"
              width={1024}
              height={1024}
              className="w-full h-full object-cover transition duration-700 group-hover:scale-[1.03]"
            />
            <figcaption className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/60 to-transparent">
              <p className="eyebrow mb-1" style={{ color: "var(--cream)" }}>02 / Base Cloth</p>
              <h3 className="font-display text-2xl md:text-3xl" style={{ color: "var(--cream)" }}>Cotton · Rayon · Viscose</h3>
            </figcaption>
          </figure>
        </div>

        {/* Index list */}
        <ul className="mt-20 border-t border-foreground/15">
          {products.map((p) => (
            <li
              key={p.n}
              className="grid grid-cols-12 gap-6 items-baseline py-7 border-b border-foreground/15 group hover:bg-[var(--cream)] transition px-2"
            >
              <span className="col-span-2 md:col-span-1 eyebrow text-[var(--terracotta)]">{p.n}</span>
              <h4 className="col-span-10 md:col-span-5 font-display text-2xl md:text-3xl">{p.title}</h4>
              <p className="col-span-12 md:col-span-5 text-muted-foreground md:text-base">{p.desc}</p>
              <span className="hidden md:block col-span-1 text-right text-[var(--terracotta)] opacity-0 group-hover:opacity-100 transition">→</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Strengths() {
  return (
    <section id="strengths" className="relative">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 py-28 md:py-40 grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
        <div className="md:col-span-6 relative aspect-[5/4] overflow-hidden">
          <img
            src={craftsmanship}
            alt="Craftsmanship at the Shree Ambaji studio"
            loading="lazy"
            width={1280}
            height={1024}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="md:col-span-6 md:pl-8">
          <p className="eyebrow text-[var(--terracotta)] mb-5">— Why Shree Ambaji</p>
          <h2 className="font-display text-[clamp(2rem,5vw,4rem)] leading-[1.05] tracking-tight mb-10">
            Strength in detail. Trust in delivery.
          </h2>
          <dl className="divide-y divide-foreground/15 border-y border-foreground/15">
            {strengths.map((s) => (
              <div key={s.k} className="grid grid-cols-12 gap-4 py-5 items-baseline">
                <dt className="col-span-4 eyebrow text-muted-foreground">{s.k}</dt>
                <dd className="col-span-8 font-display text-xl md:text-2xl">{s.v}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}

function Clients() {
  const clients = ["Haus & Kinder", "Nestasia", "Polka Tots"];
  return (
    <section id="clients" className="bg-[var(--ink)] text-[var(--cream)]">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 py-28 md:py-36">
        <p className="eyebrow mb-6" style={{ color: "color-mix(in oklab, var(--cream) 70%, transparent)" }}>
          — Trusted By
        </p>
        <h2 className="font-display text-[clamp(2.25rem,6vw,5.5rem)] leading-[1] tracking-tight max-w-4xl">
          Supplying the brands shaping <em className="italic" style={{ color: "var(--sage)" }}>India's modern home</em>.
        </h2>
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 border-t" style={{ borderColor: "color-mix(in oklab, var(--cream) 20%, transparent)" }}>
          {clients.map((c, i) => (
            <div
              key={c}
              className="py-12 md:py-20 px-2 border-b md:border-b-0 md:border-r last:md:border-r-0 text-center"
              style={{ borderColor: "color-mix(in oklab, var(--cream) 20%, transparent)" }}
            >
              <p className="eyebrow opacity-60 mb-4">{String(i + 1).padStart(2, "0")}</p>
              <p className="font-display text-3xl md:text-5xl italic">{c}</p>
            </div>
          ))}
        </div>
        <p
          className="mt-16 max-w-2xl text-base md:text-lg leading-relaxed"
          style={{ color: "color-mix(in oklab, var(--cream) 75%, transparent)" }}
        >
          Currently supplying to leading exporters and domestic brands across India, with active plans to expand into direct exports.
        </p>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section id="contact" className="bg-[var(--terracotta)] text-[var(--cream)]">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 py-28 md:py-40 grid grid-cols-1 md:grid-cols-12 gap-10 items-end">
        <div className="md:col-span-8">
          <p className="eyebrow opacity-80 mb-6">— Let's Connect</p>
          <h2 className="font-display text-[clamp(2.5rem,7vw,6rem)] leading-[0.95] tracking-tight">
            Begin a conversation about your next <em className="italic">collection</em>.
          </h2>
        </div>
        <div className="md:col-span-4 space-y-8">
          <div>
            <p className="eyebrow opacity-70 mb-2">Phone</p>
            <a href="tel:9638052342" className="font-display text-3xl md:text-4xl hover:underline underline-offset-8">
              +91 96380 52342
            </a>
          </div>
          <div>
            <p className="eyebrow opacity-70 mb-2">Studio</p>
            <p className="font-display text-2xl">Ahmedabad, Gujarat</p>
          </div>
          <a
            href="tel:9638052342"
            className="eyebrow inline-flex items-center gap-3 bg-[var(--cream)] text-[var(--terracotta-deep)] px-7 py-4 hover:bg-[var(--sand)] transition"
          >
            Request a Swatch <span>→</span>
          </a>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-[var(--ink)] text-[var(--cream)]/70">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 py-12 flex flex-col md:flex-row justify-between gap-6 items-start md:items-center">
        <div>
          <p className="font-display text-2xl text-[var(--cream)]">Shree Ambaji Expo Fab</p>
          <p className="eyebrow opacity-60 mt-2">Fabric & Home Textile House · Ahmedabad</p>
        </div>
        <p className="eyebrow opacity-60">© {new Date().getFullYear()} — All rights reserved</p>
      </div>
    </footer>
  );
}
