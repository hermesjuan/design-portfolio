import type { Metadata } from "next";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title:
    "Hermes Juan González Stark — Senior Product Designer, Asunción Paraguay | 55.design",
  description:
    "Hermes González Stark is a senior product designer and founder of 55.design based in Asunción, Paraguay. 9+ years designing B2B and B2C digital products in healthcare, compliance, SaaS, and nonprofit. Available for product design consulting and fractional design leadership.",
  keywords: [
    "Hermes Gonzalez",
    "Hermes Juan Gonzalez",
    "Hermes Gonzalez Stark",
    "Hermes Juan Gonzalez Stark",
    "Hermes Juan",
    "55.design",
    "55 design Paraguay",
    "product designer Paraguay",
    "diseñador de UX Paraguay",
    "diseñador de producto Asunción",
    "diseño UX Paraguay",
    "diseño de producto Paraguay",
    "UX designer Asunción",
    "senior product designer",
    "diseñador UX Asunción",
    "product design consulting Paraguay",
    "fractional design lead",
  ],
  alternates: {
    canonical: "https://hermesjuan.com/about",
  },
  openGraph: {
    title:
      "Hermes Juan González Stark — Senior Product Designer | 55.design",
    description:
      "Senior product designer and founder of 55.design, based in Asunción, Paraguay. 9+ years designing complex digital products across healthcare, SaaS, compliance, and nonprofit sectors. Open to consulting and collaboration.",
    url: "https://hermesjuan.com/about",
    siteName: "Hermes Juan — Product Designer",
    locale: "en_US",
    alternateLocale: "es_PY",
    type: "profile",
  },
  twitter: {
    card: "summary",
    title: "Hermes Juan González Stark — Senior Product Designer",
    description:
      "Senior product designer based in Asunción, Paraguay. Founder of 55.design. 9+ years designing B2B/B2C digital products.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function AboutPage() {
  const personJsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Hermes Juan González Stark",
    alternateName: [
      "Hermes Juan",
      "Hermes Gonzalez",
      "Hermes Juan Gonzalez",
      "Hermes Gonzalez Stark",
      "Hermes Juan González",
    ],
    jobTitle: "Senior Product Designer",
    description:
      "Senior product designer with 9+ years of experience designing complex B2B and B2C digital products across healthcare, compliance, SaaS, and nonprofit sectors. Founder of 55.design.",
    url: "https://hermesjuan.com",
    sameAs: [
      "https://www.linkedin.com/in/hermesjuan/",
      "https://www.behance.net/hermesjuan",
    ],
    worksFor: {
      "@type": "Organization",
      name: "55.design",
      url: "https://55.design",
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: "Asunción",
      addressRegion: "Asunción",
      addressCountry: "PY",
    },
    knowsAbout: [
      "Product Design",
      "UX Design",
      "UI Design",
      "Design Systems",
      "Information Architecture",
      "Accessibility",
      "User Research",
      "B2B SaaS",
      "B2C Digital Products",
      "Healthcare Technology",
      "Compliance Software",
      "Agile/Scrum",
      "AI-augmented Design",
      "Cross-functional Collaboration",
    ],
    knowsLanguage: [
      { "@type": "Language", name: "English" },
      { "@type": "Language", name: "Spanish" },
    ],
    email: "mailto:hermes@55.design",
    nationality: {
      "@type": "Country",
      name: "Paraguay",
    },
  };

  const orgJsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "55.design",
    url: "https://55.design",
    founder: {
      "@type": "Person",
      name: "Hermes Juan González Stark",
      url: "https://hermesjuan.com",
    },
    description:
      "Product design consultancy based in Asunción, Paraguay. Specializing in UX/UI design, design systems, and digital product strategy for B2B and B2C companies.",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Asunción",
      addressCountry: "PY",
    },
    areaServed: [
      { "@type": "Country", name: "Paraguay" },
      { "@type": "Place", name: "Latin America" },
    ],
    serviceType: [
      "Product Design",
      "UX Design",
      "UI Design",
      "Design Consulting",
      "Design Systems",
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
      />

      <main className="max-w-2xl mx-auto px-6 md:px-10 py-20">
        <h1 className="text-3xl md:text-4xl font-bold leading-tight">
          Hermes Juan González Stark
        </h1>
        <p className="text-gray-500 font-serif mt-2 text-lg">
          Senior Product Designer · Asunción, Paraguay ·{" "}
          <a
            href="https://55.design"
            className="underline underline-offset-4 decoration-1 hover:opacity-60 transition-opacity"
            target="_blank"
            rel="noreferrer"
          >
            55.design
          </a>
        </p>

        <article>
          <section className="mt-10 space-y-5 text-base leading-relaxed text-gray-800">
            <p>
              I&apos;m a senior product designer with 9+ years of experience
              designing complex B2B and B2C digital products across healthcare,
              compliance, SaaS, and nonprofit sectors. I specialize in
              translating intricate business requirements into intuitive,
              scalable user experiences — from discovery and research through to
              delivery.
            </p>
            <p>
              I&apos;m experienced working within structured design systems,
              Agile/Scrum teams, and regulated environments. I actively integrate
              AI tools into my design workflow and have a strong foundation in
              accessibility, information architecture, and cross-functional
              collaboration with international teams.
            </p>
            <p>
              I&apos;m also the founder of{" "}
              <a
                href="https://55.design"
                className="underline underline-offset-4 decoration-1 hover:opacity-60 transition-opacity"
                target="_blank"
                rel="noreferrer"
              >
                55.design
              </a>
              , a product design consultancy based in Asunción, Paraguay. Through
              55.design I help companies build better digital products — whether
              that means embedding with an existing team as a fractional design
              lead, running a full product design engagement, or helping
              establish a design system from scratch.
            </p>
          </section>

          <section className="mt-12">
            <h2 className="text-xl font-bold">Areas of expertise</h2>
            <ul className="mt-4 grid grid-cols-2 gap-x-8 gap-y-2 text-sm text-gray-700">
              <li>Product &amp; UX/UI Design</li>
              <li>Design Systems</li>
              <li>Information Architecture</li>
              <li>Accessibility (a11y)</li>
              <li>User Research &amp; Discovery</li>
              <li>Prototyping &amp; Validation</li>
              <li>B2B &amp; B2C SaaS</li>
              <li>Healthcare &amp; Compliance</li>
              <li>Agile / Scrum</li>
              <li>AI-augmented Design Workflows</li>
              <li>Design Leadership</li>
              <li>Cross-functional Collaboration</li>
            </ul>
          </section>

          <section className="mt-12">
            <h2 className="text-xl font-bold">Industries</h2>
            <p className="mt-4 text-sm text-gray-700 leading-relaxed">
              Healthcare, SaaS, compliance and regulatory technology, nonprofit
              and social impact, online video and media, beauty and wellness,
              fintech, and e-commerce.
            </p>
          </section>

          <section className="mt-12">
            <h2 className="text-xl font-bold">How I work with companies</h2>
            <p className="mt-4 text-base leading-relaxed text-gray-800">
              Through{" "}
              <a
                href="https://55.design"
                className="underline underline-offset-4 decoration-1 hover:opacity-60 transition-opacity"
                target="_blank"
                rel="noreferrer"
              >
                55.design
              </a>{" "}
              I offer flexible engagement models that fit the way your team
              already works:
            </p>
            <ul className="mt-4 space-y-3 text-sm text-gray-700">
              <li>
                <strong className="text-black">
                  Embedded / fractional design
                </strong>{" "}
                — I join your product team as a senior designer or design lead,
                working in your tools, attending your ceremonies, shipping with
                your engineers.
              </li>
              <li>
                <strong className="text-black">
                  End-to-end product design
                </strong>{" "}
                — From research and strategy through UI delivery. Ideal for new
                products, major redesigns, or feature expansions.
              </li>
              <li>
                <strong className="text-black">
                  Design systems &amp; foundations
                </strong>{" "}
                — Building or scaling a design system so your team ships
                consistent, accessible interfaces faster.
              </li>
            </ul>
          </section>
        </article>

        <section className="mt-12">
          <h2 className="text-xl font-bold">Get in touch</h2>
          <p className="mt-3 text-sm text-gray-600">
            Open to consulting, full-time, and collaboration opportunities.
          </p>
          <ul className="mt-4 space-y-2 text-sm">
            <li>
              <a
                href="mailto:hermes@55.design"
                className="underline underline-offset-4 decoration-1 hover:opacity-60 transition-opacity"
              >
                hermes@55.design
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/hermesjuan/"
                target="_blank"
                rel="noreferrer"
                className="underline underline-offset-4 decoration-1 hover:opacity-60 transition-opacity"
              >
                LinkedIn
              </a>
            </li>
            <li>
              <a
                href="https://www.behance.net/hermesjuan"
                target="_blank"
                rel="noreferrer"
                className="underline underline-offset-4 decoration-1 hover:opacity-60 transition-opacity"
              >
                Behance
              </a>
            </li>
            <li>
              <a
                href="https://55.design"
                target="_blank"
                rel="noreferrer"
                className="underline underline-offset-4 decoration-1 hover:opacity-60 transition-opacity"
              >
                55.design
              </a>
            </li>
          </ul>
        </section>

        <section className="mt-16 border-t border-gray-200 pt-12">
          <h2 className="text-xl font-bold" lang="es">
            Sobre mí
          </h2>
          <div
            className="mt-4 space-y-5 text-base leading-relaxed text-gray-800"
            lang="es"
          >
            <p>
              Soy un diseñador de producto senior con base en Asunción,
              Paraguay. Tengo más de 9 años de experiencia diseñando productos
              digitales complejos B2B y B2C en sectores como salud, compliance,
              SaaS y organizaciones sin fines de lucro. Me especializo en
              traducir requerimientos de negocio complejos en experiencias de
              usuario intuitivas y escalables, desde el descubrimiento e
              investigación hasta la entrega final.
            </p>
            <p>
              Cuento con experiencia trabajando con design systems estructurados,
              equipos Agile/Scrum y entornos regulados. Integro activamente
              herramientas de inteligencia artificial en mi flujo de trabajo de
              diseño y tengo una base sólida en accesibilidad, arquitectura de
              información y colaboración multidisciplinaria con equipos
              internacionales.
            </p>
            <p>
              También soy fundador de{" "}
              <a
                href="https://55.design"
                className="underline underline-offset-4 decoration-1 hover:opacity-60 transition-opacity"
                target="_blank"
                rel="noreferrer"
              >
                55.design
              </a>
              , una consultora de diseño de producto con base en Asunción.
              A través de 55.design ayudo a empresas a construir mejores
              productos digitales — ya sea integrándome a un equipo existente
              como diseñador líder, liderando un proyecto de diseño de producto
              completo, o ayudando a establecer un design system desde cero.
            </p>
          </div>

          <h3 className="text-base font-bold mt-8" lang="es">
            Cómo trabajo con empresas
          </h3>
          <ul
            className="mt-4 space-y-3 text-sm text-gray-700"
            lang="es"
          >
            <li>
              <strong className="text-black">Diseño embebido / fraccional</strong>{" "}
              — Me integro a tu equipo de producto como diseñador senior o líder
              de diseño, trabajando con tus herramientas y procesos.
            </li>
            <li>
              <strong className="text-black">Diseño de producto end-to-end</strong>{" "}
              — Desde investigación y estrategia hasta entrega de UI. Ideal para
              productos nuevos, rediseños importantes o expansión de funcionalidades.
            </li>
            <li>
              <strong className="text-black">Design systems y fundaciones</strong>{" "}
              — Construcción o escalamiento de un design system para que tu
              equipo entregue interfaces consistentes y accesibles más rápido.
            </li>
          </ul>

          <h3 className="text-base font-bold mt-8" lang="es">
            Industrias
          </h3>
          <p className="mt-3 text-sm text-gray-700 leading-relaxed" lang="es">
            Salud, SaaS, tecnología de compliance y regulación, organizaciones
            sin fines de lucro e impacto social, video y medios en línea,
            belleza y bienestar, fintech y comercio electrónico.
          </p>
        </section>
      </main>

      <Footer />
    </>
  );
}
