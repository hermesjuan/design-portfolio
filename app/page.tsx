import Image from "next/image";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import CaseStudySection from "@/components/CaseStudySection";
import FadeIn from "@/components/FadeIn";

export default function Home() {
  return (
    <>
      <Nav />

      {/* Hero */}
      <section className="min-h-[85vh] flex items-center">
        <div className="max-w-site mx-auto px-6 md:px-10 w-full grid md:grid-cols-[1.1fr_1fr] gap-12 items-center py-20">
          <FadeIn>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-[3.5rem] font-bold leading-[1.1]">
              A purpose driven generalist product designer
            </h1>
            <p className="font-sans text-base text-gray-600 leading-relaxed mt-6 max-w-lg">
              Embracing change while creatively solving problems that helps
              people use technology for good.
            </p>
          </FadeIn>
          <FadeIn
            delay={0.15}
            className="relative aspect-square w-full max-w-[280px] md:max-w-[340px] mx-auto"
          >
            <Image
              src="/images/drawn-hand.png"
              alt=""
              fill
              className="object-contain"
              priority
            />
          </FadeIn>
        </div>
      </section>

      {/* Case Studies — all inline, single page */}
      <main>
        {/* 1. Sardius Media */}
        <CaseStudySection
          year="2021"
          category="Product"
          company="Sardius Media"
          title="Re-design of a Video Player"
          description="As a product designer working at a SaaS startup focused on online video solutions I led the process of re-designing its video player."
          images={[
            {
              src: "/images/sardius-1.gif",
              alt: "Sardius Media video player — animated overview",
            },
            {
              src: "/images/sardius-2.avif",
              alt: "Sardius Media video player — UI details",
            },
            {
              src: "/images/sardius-3.mp4",
              alt: "Sardius Media video player — interaction demo",
            },
          ]}
        />

        {/* 2. Aruba */}
        <CaseStudySection
          year="2021"
          category="Product"
          company="Aruba"
          title="App for beauty professionals"
          description="Aruba is a beauty service platform that helps connect professionals of the cosmetics and well being industry to new customers."
          images={[
            {
              src: "/images/aruba-1.avif",
              alt: "Aruba app — main screens",
            },
            {
              src: "/images/aruba-2.avif",
              alt: "Aruba app — booking and calendar",
            },
            {
              src: "/images/aruba-3.avif",
              alt: "Aruba app — design system components",
            },
          ]}
        />

        {/* 3. Helping Hands */}
        <CaseStudySection
          year="2023"
          category="Product"
          company="Helping Hands"
          title="Donation app"
          description="End to end process of designing a mobile app that helps people donate to the charities that interest them. I took a look at how they might discover and select charities, set up recurring donations, and track total donations over time. This was made as a passion project."
          images={[
            {
              src: "/images/donationapp-1.avif",
              alt: "Helping Hands — charity discovery and onboarding",
            },
            {
              src: "/images/donationapp-2.avif",
              alt: "Helping Hands — donation flow and tracking",
            },
          ]}
        />

        {/* 4. Freelance Branding */}
        <CaseStudySection
          year="2020–2023"
          category="Branding"
          company="Freelance"
          title="A selection of brand design for different organizations"
          description="I've always enjoyed working on branding projects as side projects, they range from non profits to tech companies and beyond."
          images={[
            {
              src: "/images/branding-1.avif",
              alt: "Branding project 1",
            },
            {
              src: "/images/branding-2.avif",
              alt: "Branding project 2",
            },
            {
              src: "/images/branding-3.avif",
              alt: "Branding project 3",
            },
            {
              src: "/images/branding-4.avif",
              alt: "Branding project 4",
            },
            {
              src: "/images/branding-5.avif",
              alt: "Branding project 5",
            },
            {
              src: "/images/branding-6.avif",
              alt: "Branding project 6",
            },
          ]}
        />
      </main>

      {/* Want more? */}
      <section className="max-w-site mx-auto px-6 md:px-10 py-24">
        <FadeIn>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-center mb-12">
            Want more?
          </h2>
        </FadeIn>
        <FadeIn delay={0.1}>
          <div className="grid md:grid-cols-3 gap-6">
            {/* My experience as a founder */}
            <a href="/beta" className="group block">
              <div className="relative aspect-[4/3] overflow-hidden rounded-xl mb-3 bg-[#f5f5f5]">
                <Image
                  src="/images/my-experience-as-a-founder.avif"
                  alt="My experience as a founder"
                  fill
                  className="object-cover group-hover:scale-[1.02] transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <p className="font-sans text-sm font-medium">
                My experience as a founder
              </p>
            </a>

            {/* Photography */}
            <a
              href="https://hermesjuan.framer.website"
              target="_blank"
              rel="noreferrer"
              className="group block"
            >
              <div className="relative aspect-[4/3] overflow-hidden rounded-xl mb-3 bg-[#f5f5f5]">
                <Image
                  src="/images/photography.avif"
                  alt="Photography"
                  fill
                  className="object-cover group-hover:scale-[1.02] transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <p className="font-sans text-sm font-medium">Photography</p>
            </a>

            {/* Illustration */}
            <a
              href="https://hermesjuan.framer.website"
              target="_blank"
              rel="noreferrer"
              className="group block"
            >
              <div className="relative aspect-[4/3] overflow-hidden rounded-xl mb-3 bg-[#f5f5f5]">
                <Image
                  src="/images/illustration.avif"
                  alt="Illustration"
                  fill
                  className="object-cover group-hover:scale-[1.02] transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <p className="font-sans text-sm font-medium">Illustration</p>
            </a>
          </div>
        </FadeIn>
      </section>

      <Footer />
    </>
  );
}
