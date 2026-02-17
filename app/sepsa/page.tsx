import CaseLayout from "@/components/CaseLayout";
import FadeIn from "@/components/FadeIn";
import Image from "next/image";

export const metadata = { title: "SEPSA · Hermes Juan" };

export default function Sepsa() {
  return (
    <CaseLayout
      title="Rethinking a web after rethinking a company"
      heroImage="/images/hero-case-img-sepsa.jpg"
      heroImageAlt="SEPSA website redesign"
      otherProjects={[
        { href: "/beta", title: "Bootstrapping a methodology-based startup", image: "/images/case-img-betacards.png" },
        { href: "/devpost", title: "Researching how developers search for jobs", image: "/images/case-img-devpost.png" },
        { href: "/innovation-index", title: "Prototyping a tool that measures innovation", image: "/images/case-img-inndex.png" },
      ]}
    >
      <FadeIn>
        <h2 className="font-sans text-xs font-bold uppercase tracking-widest text-gray-600 mb-6">Project Overview</h2>
        <p className="font-sans font-light text-base leading-relaxed mb-8 text-gray-800">
          Sepsa is a company that works in the supermarket retail business. It handles everything related to the purchases between supermarkets and their providers, inventory control and some Business Intelligence all using software. It&apos;s the first company in Paraguay to develop these types of B2B solutions. At the moment of the project, they needed to start opening up to more clients, and even creating products for consumers. They began that journey with a rebranding and a redesign of their landing page.
        </p>
      </FadeIn>

      <FadeIn>
        <h2 className="font-sans text-xs font-bold uppercase tracking-widest text-gray-600 mb-6 mt-16">My Contributions</h2>
        <p className="font-sans font-light text-base leading-relaxed mb-8 text-gray-800">
          This was a freelance project made in 2018. They asked me to re-design their website based on the new brand identity recently developed for them. I was in charge of getting all the information about what they wanted to achieve with their website, setting objectives, implementing the best possible design that reflected those necessities via prototypes and then handing off the elements to their developers. Tools used: Google Docs, Sketch and Invision.
        </p>
      </FadeIn>

      <FadeIn>
        <h2 className="font-sans text-xs font-bold uppercase tracking-widest text-gray-600 mb-6 mt-16">Description</h2>
        <p className="font-sans font-light text-base leading-relaxed mb-4 text-gray-800">
          This was their website at the moment:
        </p>
        <Image src="/images/sepsa-before.png" alt="SEPSA website before redesign" width={700} height={450} className="w-full h-auto my-8" />
        <p className="font-sans font-light text-base leading-relaxed mb-4 text-gray-800">
          They really didn&apos;t need much more, they had really good contracts closed and were already serving all the big supermarket chains. But now, some of what they do was starting to get commoditized and they were faced with a challenge of re-thinking their business or they would be vulnerable to no longer be needed by their clients. They started exploring consumer-oriented solutions, and that meant, for the first time since the company started, they needed to work on their public appearance. They started with a new logo and a new website.
        </p>
        <p className="font-sans font-light text-base leading-relaxed mb-6 text-gray-800">
          The main goal of the website was to be informative of what they do, a more institutional presence on the web, that painted the picture of the scope of what they do as a company, and to communicate future products for mass markets (apps and such).
        </p>
        <p className="font-sans font-light text-base leading-relaxed mb-4 text-gray-800">
          Taking that into account this is what I created:
        </p>
        <Image src="/images/sepsa-home.jpg" alt="SEPSA home page redesign" width={700} height={450} className="w-full h-auto my-8" />
        <Image src="/images/sepsa-transacciones.jpg" alt="SEPSA transactions section" width={700} height={450} className="w-full h-auto my-8" />
        <Image src="/images/sepsa-benefits.jpg" alt="SEPSA benefits section" width={700} height={450} className="w-full h-auto my-8" />
        <Image src="/images/sepsa-services.jpg" alt="SEPSA services section" width={700} height={450} className="w-full h-auto my-8" />
        <Image src="/images/sepsa-text-and-color.jpg" alt="SEPSA typography and color guide" width={700} height={450} className="w-full h-auto my-8" />
      </FadeIn>
    </CaseLayout>
  );
}
