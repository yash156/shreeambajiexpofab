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

const partners = [
  {
    name: "Akshay Shah",
    role: "Co-Founder · Operations & Trade",
    bio: "Four decades in the textile industry with deep, hands-on command of the courtdroid (cord-routing) process and the broader weaving-to-finishing pipeline. Akshay leads sourcing, costing, vendor relationships and large-format production planning — bringing the kind of judgement only a lifetime on the shop floor can build.",
  },
  {
    name: "Bhaumik Shah",
    role: "Co-Founder · Design & Print Development",
    bio: "Specialist in contemporary print design and modern surface development across digital, rotary and flat-bed techniques. Bhaumik drives the in-house design studio, colour & repeat development, sampling and brand-facing creative — translating trend direction into production-ready artwork for exporters and D2C brands.",
  },
];

const facilities = [
  {
    code: "A",
    title: "In-House Operations",
    desc: "A fully integrated unit under one roof — built to serve export-oriented brands end-to-end.",
    items: [
      {
        n: "A1",
        title: "Stitching — Swaddles & Bedsheets",
        desc: "Dedicated stitching lines for swaddles and bedsheets calibrated to export tolerances, with size-set approvals, hem & seam consistency and audit-ready workflows.",
      },
      {
        n: "A2",
        title: "Quality Control",
        desc: "Multi-stage QC across greige, post-print and post-stitch — covering shade, GSM, shrinkage, fastness and visual defects to AQL standards expected by global buyers.",
      },
      {
        n: "A3",
        title: "Warehousing",
        desc: "Organised warehousing for greige, finished goods and packed cartons with batch-level traceability, ensuring on-time despatch for both domestic and export consignments.",
      },
      {
        n: "A4",
        title: "Customised Packaging",
        desc: "Brand-specific packaging — printed sleeves, belly bands, hangtags, polybags and master cartons developed to each buyer's barcode, labelling and retail-ready specifications.",
      },
      {
        n: "A5",
        title: "Design Studio",
        desc: "An in-house studio for print design, repeats, colourways, mock-ups and seasonal collections — supporting brands from mood-board to production-ready artwork.",
      },
    ],
  },
  {
    code: "B",
    title: "Custom Weaving",
    desc: "Made-to-spec base cloth in cotton, rayon and viscose blends — engineered to required width, GSM, count and construction for printing or finished-fabric programmes.",
  },
  {
    code: "C",
    title: "Dobby Weaving",
    desc: "Dobby looms for textured and small-figured weaves — adding structure, geometric motifs and tactile interest to apparel and home-textile bases.",
  },
  {
    code: "D",
    title: "Yarn-Dyed Fabrics",
    desc: "Yarn-dyed programmes with strong colour penetration and fastness — checks, stripes and engineered patterns woven from pre-dyed yarns for a richer, longer-lasting finish.",
  },
];

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <Hero />
      <About />
      <Partners />
      <Products />
      <Showcase />
      <Facilities />
      <Forte />
      <Strengths />
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
          <a href="#partners" className="hover:text-foreground transition">Partners</a>
          <a href="#products" className="hover:text-foreground transition">Products</a>
          <a href="#facilities" className="hover:text-foreground transition">Facilities</a>
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

function Partners() {
  return (
    <section id="partners" className="border-b border-border">
      <div className="max-w-[1280px] mx-auto px-6 md:px-10 py-24 md:py-32">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 mb-14">
          <div className="md:col-span-4">
            <p className="eyebrow text-muted-foreground">— Partners</p>
          </div>
          <div className="md:col-span-8">
            <h2 className="font-display text-[clamp(2rem,4.5vw,3.5rem)] leading-[1.1] tracking-tight">
              Two generations of textile craft, working side by side.
            </h2>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 border-t border-border pt-14">
          {partners.map((p) => (
            <article key={p.name} className="space-y-4">
              <p className="eyebrow text-muted-foreground">{p.role}</p>
              <h3 className="font-display text-3xl md:text-4xl">{p.name}</h3>
              <p className="text-foreground/75 leading-relaxed text-lg max-w-md">
                {p.bio}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Facilities() {
  return (
    <section id="facilities" className="border-b border-border">
      <div className="max-w-[1280px] mx-auto px-6 md:px-10 py-24 md:py-32">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 mb-14">
          <div className="md:col-span-4">
            <p className="eyebrow text-muted-foreground">— Our Facility</p>
          </div>
          <div className="md:col-span-8">
            <h2 className="font-display text-[clamp(2rem,4.5vw,3.75rem)] leading-[1.05] tracking-tight">
              An integrated set-up — from yarn to packed carton.
            </h2>
            <p className="mt-6 text-foreground/75 leading-relaxed text-lg max-w-2xl">
              Our facility brings weaving, printing, stitching, quality control
              and packaging under one roof, supported by custom weaving and
              yarn-dyed capabilities for buyers who need full programme control.
            </p>
          </div>
        </div>

        <div className="border-t border-border">
          {facilities.map((f) => (
            <div key={f.code} className="grid grid-cols-12 gap-6 py-10 border-b border-border">
              <div className="col-span-12 md:col-span-4">
                <p className="eyebrow text-muted-foreground mb-3">{f.code}</p>
                <h3 className="font-display text-2xl md:text-3xl">{f.title}</h3>
              </div>
              <div className="col-span-12 md:col-span-8">
                <p className="text-foreground/80 leading-relaxed text-lg max-w-2xl">
                  {f.desc}
                </p>
                {f.items && (
                  <ul className="mt-8 border-t border-border">
                    {f.items.map((it) => (
                      <li key={it.n} className="grid grid-cols-12 gap-4 py-5 border-b border-border last:border-b-0">
                        <span className="col-span-2 md:col-span-1 eyebrow text-muted-foreground">{it.n}</span>
                        <div className="col-span-10 md:col-span-11">
                          <h4 className="font-display text-xl md:text-2xl mb-1">{it.title}</h4>
                          <p className="text-foreground/70 leading-relaxed">{it.desc}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Forte() {
  return (
    <section id="forte" className="border-b border-border">
      <div className="max-w-[1280px] mx-auto px-6 md:px-10 py-24 md:py-32 grid grid-cols-1 md:grid-cols-12 gap-10">
        <div className="md:col-span-4">
          <p className="eyebrow text-muted-foreground">— Our Forte</p>
        </div>
        <div className="md:col-span-8 space-y-10">
          <h2 className="font-display text-[clamp(2rem,4.5vw,3.5rem)] leading-[1.1] tracking-tight">
            Screen printing — at scale, in depth.
          </h2>
          <p className="text-foreground/80 leading-relaxed text-lg max-w-2xl">
            Decades of specialisation in screen printing give us a clear edge
            in colour depth, registration and run-to-run consistency across
            both apparel and home-textile programmes.
          </p>

          <div className="border-t border-border">
            <div className="grid grid-cols-12 gap-6 py-7 border-b border-border">
              <span className="col-span-2 md:col-span-1 eyebrow text-muted-foreground">01</span>
              <div className="col-span-10 md:col-span-11">
                <h3 className="font-display text-xl md:text-2xl mb-1">Rotary Screen Printing</h3>
                <p className="text-foreground/70 leading-relaxed max-w-xl">
                  High-speed continuous printing for long-yardage runs — sharp
                  repeats, clean halftones and consistent shade across full
                  production lots, ideal for bedsheets and apparel base cloth.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-12 gap-6 py-7 border-b border-border">
              <span className="col-span-2 md:col-span-1 eyebrow text-muted-foreground">02</span>
              <div className="col-span-10 md:col-span-11">
                <h3 className="font-display text-xl md:text-2xl mb-1">Flat-Bed Screen Printing</h3>
                <p className="text-foreground/70 leading-relaxed max-w-xl">
                  Flat-bed lines for placement prints, larger repeats and
                  speciality effects — giving brands flexibility for limited
                  runs, panel prints and engineered designs.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-12 gap-6 py-7 border-b border-border">
              <span className="col-span-2 md:col-span-1 eyebrow text-muted-foreground">03</span>
              <div className="col-span-10 md:col-span-11">
                <h3 className="font-display text-xl md:text-2xl mb-1">Solid / Plain Dyed</h3>
                <p className="text-foreground/70 leading-relaxed max-w-xl">
                  Solid-dyed (plain-dyed) fabrics with reliable shade matching,
                  fastness and lot-to-lot consistency — supplied as base cloth
                  or as finished, ready-to-cut yardage.
                </p>
              </div>
            </div>
          </div>
        </div>
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
