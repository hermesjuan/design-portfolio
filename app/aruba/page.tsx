import CaseLayout from "@/components/CaseLayout";
import FadeIn from "@/components/FadeIn";
import Image from "next/image";

export const metadata = { title: "Aruba · Hermes Juan" };

export default function Aruba() {
  return (
    <CaseLayout
      title="Admin panel for professionals of the beauty industry"
      heroImage="/images/hero-case-img-aruba.jpg"
      heroImageAlt="Aruba admin panel screens"
      otherProjects={[
        { href: "/beta", title: "Bootstrapping a methodology-based startup", image: "/images/case-img-betacards.png" },
        { href: "/devpost", title: "Researching how developers search for jobs", image: "/images/case-img-devpost.png" },
        { href: "/sepsa", title: "Rethinking a web after rethinking a company", image: "/images/case-img-sepsa.png" },
      ]}
    >
      <FadeIn>
        <h2 className="font-sans text-xs font-bold uppercase tracking-widest text-gray-600 mb-6">Project Overview</h2>
        <p className="font-sans font-light text-base leading-relaxed mb-8 text-gray-800">
          Aruba is a beauty service platform that helps connect professionals of the cosmetics and well being industry to new customers. They already had a design for a professional-sided dashboard but they had changed their logo, colors, typography, etc. And were also needing to turn their web dashboard into an app for professionals.
        </p>
      </FadeIn>

      <FadeIn>
        <h2 className="font-sans text-xs font-bold uppercase tracking-widest text-gray-600 mb-6 mt-16">My Contributions</h2>
        <p className="font-sans font-light text-base leading-relaxed mb-8 text-gray-800">
          My first task was to update every screen according to the new brand guidelines. In doing so I dedicated a lot of time organizing the Figma file into components, establishing text and color styles and also taking advantage of the variants feature of Figma when it suited. I also made adaptations of every screen into their mobile version, and then the adjustments necessary to be a hybrid app (it was going to be developed using Flutter so I took some time reading the documentation).
        </p>
      </FadeIn>

      <FadeIn>
        <h2 className="font-sans text-xs font-bold uppercase tracking-widest text-gray-600 mb-6 mt-16">First Look</h2>
        <p className="font-sans font-light text-base leading-relaxed mb-6 text-gray-800">
          This is a sample of the overall look and feel of the platform at the beginning.
        </p>
        <Image src="/images/aruba-pantallas-al-empezar.png" alt="Aruba initial screens" width={700} height={450} className="w-full h-auto my-8" />
      </FadeIn>

      <FadeIn>
        <h2 className="font-sans text-xs font-bold uppercase tracking-widest text-gray-600 mb-6 mt-16">Organizing the file a.k.a. making components</h2>
        <Image src="/images/aruba-components.png" alt="Aruba component organization" width={700} height={450} className="w-full h-auto my-8" />
        <Image src="/images/aruba-shapes.png" alt="Aruba shapes" width={700} height={450} className="w-full h-auto my-8" />
        <Image src="/images/aruba-home-screen-web-and-app-mockup.png" alt="Aruba home screen web and app mockup" width={700} height={450} className="w-full h-auto my-8" />
        <Image src="/images/aruba-profile.png" alt="Aruba profile screen" width={700} height={450} className="w-full h-auto my-8" />
      </FadeIn>
    </CaseLayout>
  );
}
