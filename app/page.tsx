import Image from "next/image";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import CaseCard from "@/components/CaseCard";
import FadeIn from "@/components/FadeIn";

export default function Home() {
  return (
    <>
      <Nav />

      {/* Hero */}
      <section className="min-h-screen flex items-center pt-12">
        <div className="max-w-site mx-auto px-10 w-full grid md:grid-cols-2 gap-16 items-center py-24">
          <FadeIn>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-8">
              Hey! I&apos;m Hermes and I like doing UI, UX and Product design
            </h1>
            <p className="font-sans text-base text-gray-600 leading-relaxed max-w-md">
              You can learn a little more{" "}
              <Link href="/about" className="underline underline-offset-2 hover:opacity-60 transition-opacity">
                about me
              </Link>{" "}
              or keep scrolling to see some of the work I&apos;ve done.
            </p>
          </FadeIn>
          <FadeIn delay={0.15} className="relative aspect-[1.1] w-full">
            <Image
              src="/images/Hand.svg"
              alt=""
              fill
              className="object-contain"
              priority
            />
          </FadeIn>
        </div>
      </section>

      {/* Case studies label */}
      <div className="max-w-site mx-auto px-10 mb-4">
        <FadeIn>
          <div className="flex items-center gap-4">
            <h2 className="font-sans text-xs font-bold uppercase tracking-widest text-gray-600">
              Some things I made
            </h2>
            <Image src="/images/stuff-i-did-pointer.svg" alt="" width={32} height={32} />
          </div>
        </FadeIn>
      </div>

      {/* Case study cards */}
      <main className="pb-24">
        <CaseCard
          href="/aruba"
          title="Admin panel for professionals of the beauty industry"
          image="/images/case-img-aruba.png"
          imageAlt="Aruba admin panel case study"
          imageLeft={false}
        />
        <CaseCard
          href="/innovation-index"
          title="Prototyping a tool that measures innovation"
          image="/images/case-img-inndex.png"
          imageAlt="Innovation Index case study"
          imageLeft={true}
        />
        <CaseCard
          href="/muv"
          title="Creating the MVP of the first ride-sharing app of Paraguay"
          image="/images/case-img-muv.png"
          imageAlt="MUV ride-sharing app case study"
          imageLeft={false}
        />
        <CaseCard
          href="/devpost"
          title="Researching how developers search for new jobs"
          image="/images/case-img-devpost.png"
          imageAlt="Devpost research case study"
          imageLeft={true}
        />
        <CaseCard
          href="/beta"
          title="Bootstrapping a methodology-based startup"
          image="/images/case-img-betacards.png"
          imageAlt="Betacards startup case study"
          imageLeft={false}
        />
        <CaseCard
          href="/sepsa"
          title="Rethinking a web after rethinking a company"
          image="/images/case-img-sepsa.png"
          imageAlt="SEPSA website case study"
          imageLeft={true}
        />
        <CaseCard
          href="https://www.notion.so/Memorize-App-Dipped-my-toes-in-SwiftUI-during-lockdown-e4ce4a8c6643471d968b9a03b34bf2f1"
          title="Dipped my toes in SwiftUI during lockdown"
          image="/images/case-img-memorize.png"
          imageAlt="Memorize SwiftUI app case study"
          imageLeft={false}
          external
        />
      </main>

      <Footer />
    </>
  );
}
