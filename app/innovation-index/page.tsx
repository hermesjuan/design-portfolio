import CaseLayout from "@/components/CaseLayout";
import FadeIn from "@/components/FadeIn";
import Image from "next/image";

export const metadata = { title: "Innovation Index · Hermes Juan" };

export default function InnovationIndex() {
  return (
    <CaseLayout
      title="Prototyping a tool that measures innovation"
      heroImage="/images/hero-case-img-inndex.jpg"
      heroImageAlt="Innovation Index dashboard screens"
      otherProjects={[
        { href: "/beta", title: "Bootstrapping a methodology-based startup", image: "/images/case-img-betacards.png" },
        { href: "/devpost", title: "Researching how developers search for jobs", image: "/images/case-img-devpost.png" },
        { href: "/aruba", title: "Admin panel for beauty professionals", image: "/images/case-img-aruba.png" },
      ]}
    >
      <FadeIn>
        <h2 className="font-sans text-xs font-bold uppercase tracking-widest text-gray-600 mb-6">Project Overview</h2>
        <p className="font-sans font-light text-base leading-relaxed mb-8 text-gray-800">
          Inndex is a tool that measures the potential of innovation within organizations. It takes a theoretical framework that analyzes four areas: people, purpose, platforms and processes. The analysis takes information from collaborators of the organization through some short tests that are then processed and outputs a report.
        </p>
      </FadeIn>

      <FadeIn>
        <h2 className="font-sans text-xs font-bold uppercase tracking-widest text-gray-600 mb-6 mt-16">My Contributions</h2>
        <p className="font-sans font-light text-base leading-relaxed mb-8 text-gray-800">
          I was in charge of building the MVP using no code (a combination of Google Sheets, Typeform and Zapier) and, after some validations, with the design of the UI for a more custom platform.
        </p>
      </FadeIn>

      <FadeIn>
        <h2 className="font-sans text-xs font-bold uppercase tracking-widest text-gray-600 mb-6 mt-16">Description</h2>
        <p className="font-sans font-light text-base leading-relaxed mb-4 text-gray-800">
          The biggest challenge of this project was that I&apos;m both the designer and client. Although there is a team behind this project, regarding UX I&apos;m the one taking most of the decisions. This means that my job was to figure out what needs to be designed. I set two priorities at first: 1. Clean the steps a person would make from start to finish for a more streamlined experience and 2. Explore how the report would be shown in a clear way after some data has been collected.
        </p>
        <p className="font-sans font-light text-base leading-relaxed mb-6 text-gray-800">
          The MVP&apos;s User Journey had some unnecessary steps because of the technical limitations it had. Just to name two: The first step while using Inndex is to complete a form with information about the company. When it was completed the user received two separate emails with instructions; and also sharing the test&apos;s link with coworkers was a little confusing because it was a default email that wasn&apos;t always correctly addressed.
        </p>
        <Image src="/images/inndex-1-steps-with-mvp.jpg" alt="MVP user journey steps" width={700} height={450} className="w-full h-auto my-8" />
        <p className="font-sans font-light text-base leading-relaxed mb-6 text-gray-800">
          A week later I came up with a proposal that tried to eliminate those unnecessary steps in order to have a more streamlined process, and taking advantage of the fact that we no longer have the constraints of the no-code MVP.
        </p>
        <Image src="/images/inndex-2-new-steps.jpg" alt="Improved user journey steps" width={700} height={450} className="w-full h-auto my-8" />
        <p className="font-sans font-light text-base leading-relaxed mb-4 text-gray-800">
          Once we decided on some details I started designing each screen, and came up with this.
        </p>
        <Image src="/images/inndex-3-all-screens.jpg" alt="All Inndex screens" width={700} height={450} className="w-full h-auto my-8" />
        <Image src="/images/inndex-4-home-page.jpg" alt="Inndex home page" width={700} height={450} className="w-full h-auto my-8" />
        <Image src="/images/inndex-5-empty-dashboard.jpg" alt="Empty dashboard state" width={700} height={450} className="w-full h-auto my-8" />
        <Image src="/images/inndex-6-org-form.jpg" alt="Organization info form" width={700} height={450} className="w-full h-auto my-8" />
        <Image src="/images/inndex-7-share-test.jpg" alt="Share test with coworkers" width={700} height={450} className="w-full h-auto my-8" />
        <Image src="/images/inndex-8-email.jpg" alt="Email invitation design" width={700} height={450} className="w-full h-auto my-8" />
        <Image src="/images/inndex-9-report.jpg" alt="Innovation report" width={700} height={450} className="w-full h-auto my-8" />
        <p className="font-sans font-light text-base leading-relaxed mb-8 text-gray-800">
          And that&apos;s it! This proved to be a really nice experience of designing a product from beginning to end. Although it&apos;s never finished I think this first version came up pretty good and hope to keep improving on it. The tools I used were Figma for all the wireframes and Mural for working on the User Journey with the rest of the team.
        </p>
      </FadeIn>
    </CaseLayout>
  );
}
