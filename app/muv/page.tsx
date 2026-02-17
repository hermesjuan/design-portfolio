import CaseLayout from "@/components/CaseLayout";
import FadeIn from "@/components/FadeIn";
import Image from "next/image";

export const metadata = { title: "MUV · Hermes Juan" };

export default function Muv() {
  return (
    <CaseLayout
      title="Creating the MVP of the first ride-sharing app of Paraguay"
      heroImage="/images/hero-case-img-muv.jpg"
      heroImageAlt="MUV ride-sharing app screens"
      otherProjects={[
        { href: "/beta", title: "Bootstrapping a methodology-based startup", image: "/images/case-img-betacards.png" },
        { href: "/devpost", title: "Researching how developers search for jobs", image: "/images/case-img-devpost.png" },
        { href: "/innovation-index", title: "Prototyping a tool that measures innovation", image: "/images/case-img-inndex.png" },
      ]}
    >
      <FadeIn>
        <h2 className="font-sans text-xs font-bold uppercase tracking-widest text-gray-600 mb-6">Project Overview</h2>
        <p className="font-sans font-light text-base leading-relaxed mb-6 text-gray-800">
          MUV is a ride-sharing app born in Paraguay before Uber was available. When the project was just beginning I was part of a team of consultants that had the goal of articulating an MVP so the idea could be tested and visualize the biggest challenges.
        </p>
        <p className="font-sans font-light text-base leading-relaxed mb-8 text-gray-800">
          This project was incubated by miut.company, an innovation laboratory based in Paraguay, which I co-founded.
        </p>
      </FadeIn>

      <FadeIn>
        <h2 className="font-sans text-xs font-bold uppercase tracking-widest text-gray-600 mb-6 mt-16">My Contributions</h2>
        <p className="font-sans font-light text-base leading-relaxed mb-6 text-gray-800">
          I was in charge of the initial branding and the design of the first screens. One constraint was that they were using a template for the app so from a UX perspective I didn&apos;t have much to change in the interactions, and which screens, so it was more of an aesthetics addition, some customization and a goal of making it feel more local to the users.
        </p>
        <Image src="/images/muv-ui-muckups.jpg" alt="MUV UI mockups" width={700} height={450} className="w-full h-auto my-8" />
      </FadeIn>

      <FadeIn>
        <h2 className="font-sans text-xs font-bold uppercase tracking-widest text-gray-600 mb-6 mt-16">Description</h2>
        <p className="font-sans font-light text-base leading-relaxed mb-4 text-gray-800">
          This is one of my favorite projects because it was one of the first ones that intersected technology and design, and I was just back from the New York course I made. There are a lot of things I would do different now, but the fact that I could implement in real life everything I had learned so far was a big deal for me. That in itself is the best kind of learning experience in my opinion.
        </p>
        <p className="font-sans font-light text-base leading-relaxed mb-4 text-gray-800">
          In terms of Branding my approach was a friendly and simple use of the letters of the name, taking advantage of it being so short. I think a three letter name is golden. It was intended for a temporary use (just for the MVP) but after it started gaining some traction they decided to keep it, just after making some fine tuning.
        </p>
        <p className="font-sans font-light text-base leading-relaxed mb-4 text-gray-800">
          On the UI side I just tried to tweak a little bit of what I could. Developed some icons and focused on consistency. I paid a lot of attention to the copy, making sure the user knew what to do every step of the way. To do so we arranged some tests with users in a controlled environment where we could correct some of the bigger issues.
        </p>
        <p className="font-sans font-light text-base leading-relaxed mb-8 text-gray-800">
          The fact that what we built (with all its errors) enabled the project to keep going and grow to this day, is what makes me think of it as a success.
        </p>
      </FadeIn>
    </CaseLayout>
  );
}
