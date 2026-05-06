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
          "Manufacturer & supplier of digital printed fabrics, cotton, rayon, viscose, women's apparel fabrics and bedsheets from Ahmedabad, Gujarat.",
      },
    ],
  }),
});

const products = [
  { n: "01", title: "Digital Printed Fabrics" },
  { n: "02", title: "Cotton, Rayon & Viscose" },
  { n: "03", title: "Women's Apparel Fabrics" },
  { n: "04", title: "Custom Fabric Developments" },
  { n: "05", title: "Bulk Fabric Supply" },
  { n: "06", title: "Bedsheets — Manufacturing & Supply" },
];

const strengths = [
  "Strong design & development support",
  "Expertise in digital prints & bedsheets",
  "Competitive pricing with consistent quality",
  "Reliable and timely delivery",
];

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <Hero />
      <About />
      <Products />
      <Showcase />
      <Strengths />
      <Clients />
      <Contact />
      <Footer />
    </div>
  );
}

function Nav() {
  return (
    <header className="border-b border-border">
      <div className="max-w-[1280px] mx-auto px-6 md:px-10 py-6 flex items-center justify-between">
        <a href="#top" className="flex flex-col leading-tight">
          <span className="font-display text-xl tracking-tight">Shree Ambaji Expo Fab</span>
          <span className="eyebrow text-muted-foreground mt-1">Ahmedabad · Est. Textile House</span>
        </a>
        <nav className="hidden md:flex items-center gap-10 eyebrow text-foreground/70">
          <a href="#about" className="hover:text-foreground transition">About</a>
          <a href="#products" className="hover:text-foreground transition">Products</a>
          <a href="#clients" className="hover:text-foreground transition">Clients</a>
          <a href="#contact" className="hover:text-foreground transition">Contact</a>
        </nav>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="border-b border-border">
      <div className="max-w-[1280px] mx-auto px-6 md:px-10 py-20 md:py-28 grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16 items-center">
        <div className="md:col-span-6 fade-up">
          <p className="eyebrow text-muted-foreground mb-8">— A House of Textiles</p>
          <h1 className="font-display text-[clamp(2.75rem,6vw,5.5rem)] leading-[1.02] tracking-tight">
            Fabric & home textiles, made with <em className="italic">considered</em> care.
          </h1>
          <p className="mt-8 text-lg leading-relaxed text-foreground/75 max-w-xl">
            We manufacture and trade fabrics and home textile products,
            supplying to leading exporters and brands across India from our
            studio in Ahmedabad, Gujarat.
          </p>
          <div className="mt-10 flex items-center gap-8">
            <a
              href="#contact"
              className="eyebrow inline-flex items-center gap-3 bg-foreground text-background px-6 py-3.5 hover:bg-foreground/85 transition"
            >
              Enquire <span aria-hidden>→</span>
            </a>
            <a href="#products" className="eyebrow underline underline-offset-8 decoration-1">
              View Range
            </a>
          </div>
        </div>
        <div className="md:col-span-6">
          <div className="aspect-[3/4] overflow-hidden bg-muted">
            <img
              src={heroFabric}
              alt="Folded fabrics"
              width={1536}
              height={2048}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="border-b border-border">
      <div className="max-w-[1280px] mx-auto px-6 md:px-10 py-24 md:py-32 grid grid-cols-1 md:grid-cols-12 gap-10">
        <div className="md:col-span-4">
          <p className="eyebrow text-muted-foreground">— About</p>
        </div>
        <div className="md:col-span-8">
          <p className="font-display text-[clamp(1.75rem,3.2vw,2.75rem)] leading-[1.2] tracking-tight text-foreground/90">
            From a single yard of swatch to bulk production — we work
            closely with brands and exporters who value design,
            consistency and dependable supply.
          </p>
        </div>
      </div>
    </section>
  );
}

function Products() {
  return (
    <section id="products" className="border-b border-border">
      <div className="max-w-[1280px] mx-auto px-6 md:px-10 py-24 md:py-32">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 mb-14">
          <div className="md:col-span-4">
            <p className="eyebrow text-muted-foreground">— Our Range</p>
          </div>
          <div className="md:col-span-8">
            <h2 className="font-display text-[clamp(2rem,4.5vw,3.75rem)] leading-[1.05] tracking-tight">
              Six product lines, one standard.
            </h2>
          </div>
        </div>

        <ul className="border-t border-border">
          {products.map((p) => (
            <li
              key={p.n}
              className="grid grid-cols-12 gap-6 items-baseline py-7 border-b border-border"
            >
              <span className="col-span-2 md:col-span-1 eyebrow text-muted-foreground">{p.n}</span>
              <h3 className="col-span-10 md:col-span-11 font-display text-2xl md:text-3xl">
                {p.title}
              </h3>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Showcase() {
  return (
    <section className="border-b border-border">
      <div className="max-w-[1280px] mx-auto px-6 md:px-10 py-24 md:py-32 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
        {[
          { src: digitalPrints, label: "Digital Prints" },
          { src: bedsheets, label: "Bedsheets" },
          { src: cottonWeave, label: "Base Cloth" },
        ].map((it) => (
          <figure key={it.label} className="space-y-4">
            <div className="aspect-[4/5] overflow-hidden bg-muted">
              <img
                src={it.src}
                alt={it.label}
                loading="lazy"
                className="w-full h-full object-cover"
              />
            </div>
            <figcaption className="eyebrow text-muted-foreground">{it.label}</figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}

function Strengths() {
  return (
    <section className="border-b border-border">
      <div className="max-w-[1280px] mx-auto px-6 md:px-10 py-24 md:py-32 grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
        <div className="md:col-span-6">
          <div className="aspect-[5/6] overflow-hidden bg-muted">
            <img
              src={craftsmanship}
              alt="Craftsmanship"
              loading="lazy"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        <div className="md:col-span-6 md:pl-6">
          <p className="eyebrow text-muted-foreground mb-6">— Our Strengths</p>
          <h2 className="font-display text-[clamp(2rem,4vw,3.25rem)] leading-[1.1] tracking-tight mb-10">
            Trusted for the details.
          </h2>
          <ul className="border-t border-border">
            {strengths.map((s) => (
              <li
                key={s}
                className="py-5 border-b border-border font-display text-xl md:text-2xl"
              >
                {s}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function Clients() {
  const clients = ["Haus & Kinder", "Nestasia", "Polka Tots"];
  return (
    <section id="clients" className="border-b border-border">
      <div className="max-w-[1280px] mx-auto px-6 md:px-10 py-24 md:py-32">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 mb-12">
          <div className="md:col-span-4">
            <p className="eyebrow text-muted-foreground">— Clients</p>
          </div>
          <div className="md:col-span-8">
            <h2 className="font-display text-[clamp(2rem,4.5vw,3.5rem)] leading-[1.1] tracking-tight">
              A short list of brands we are proud to supply.
            </h2>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 border-t border-border">
          {clients.map((c) => (
            <div
              key={c}
              className="py-12 border-b md:border-b-0 md:border-r last:md:border-r-0 border-border text-center"
            >
              <p className="font-display text-3xl md:text-4xl italic">{c}</p>
            </div>
          ))}
        </div>
        <p className="mt-12 text-foreground/70 max-w-xl">
          Currently supplying to exporters and domestic brands, with plans
          to expand into direct exports.
        </p>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="border-b border-border">
      <div className="max-w-[1280px] mx-auto px-6 md:px-10 py-24 md:py-32 grid grid-cols-1 md:grid-cols-12 gap-12">
        <div className="md:col-span-7">
          <p className="eyebrow text-muted-foreground mb-6">— Contact</p>
          <h2 className="font-display text-[clamp(2.25rem,5vw,4.25rem)] leading-[1.02] tracking-tight">
            Let's connect for your fabric & home textile requirements.
          </h2>
        </div>
        <div className="md:col-span-5 md:pt-10 space-y-8">
          <div>
            <p className="eyebrow text-muted-foreground mb-2">Telephone</p>
            <a href="tel:9638052342" className="font-display text-2xl md:text-3xl hover:underline underline-offset-8">
              +91 96380 52342
            </a>
          </div>
          <div>
            <p className="eyebrow text-muted-foreground mb-2">Studio</p>
            <p className="font-display text-2xl">Ahmedabad, Gujarat</p>
          </div>
          <div>
            <p className="eyebrow text-muted-foreground mb-2">GSTIN</p>
            <p className="font-display text-2xl tracking-wide">24AFTFS2858G1ZH</p>
          </div>
          <a
            href="tel:9638052342"
            className="eyebrow inline-flex items-center gap-3 bg-foreground text-background px-6 py-3.5 hover:bg-foreground/85 transition"
          >
            Request a Swatch <span aria-hidden>→</span>
          </a>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer>
      <div className="max-w-[1280px] mx-auto px-6 md:px-10 py-10 flex flex-col md:flex-row justify-between gap-4 items-start md:items-center">
        <div>
          <p className="font-display text-lg">Shree Ambaji Expo Fab</p>
          <p className="eyebrow text-muted-foreground mt-1">GSTIN: 24AFTFS2858G1ZH</p>
        </div>
        <p className="eyebrow text-muted-foreground">
          © {new Date().getFullYear()} — All rights reserved
        </p>
      </div>
    </footer>
  );
}
