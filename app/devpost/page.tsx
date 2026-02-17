import CaseLayout from "@/components/CaseLayout";
import FadeIn from "@/components/FadeIn";
import Image from "next/image";

export const metadata = { title: "Devpost · Hermes Juan" };

export default function Devpost() {
  return (
    <CaseLayout
      title="Researching how developers search for new jobs"
      heroImage="/images/hero-case-img-devpost.jpg"
      heroImageAlt="Devpost research process"
      otherProjects={[
        { href: "/beta", title: "Bootstrapping a methodology-based startup", image: "/images/case-img-betacards.png" },
        { href: "/muv", title: "Creating the MVP of the first ride-sharing app of Paraguay", image: "/images/case-img-muv.png" },
        { href: "/innovation-index", title: "Prototyping a tool that measures innovation", image: "/images/case-img-inndex.png" },
      ]}
    >
      <FadeIn>
        <h2 className="font-sans text-xs font-bold uppercase tracking-widest text-gray-600 mb-6">Project Overview</h2>
        <p className="font-sans font-light text-base leading-relaxed mb-8 text-gray-800">
          This project was a UX research engagement for Devpost, a New York based startup. The goal was to understand how developers search for new jobs and use those insights to improve the Devpost platform&apos;s job-matching features.
        </p>
      </FadeIn>

      <FadeIn>
        <h2 className="font-sans text-xs font-bold uppercase tracking-widest text-gray-600 mb-6 mt-16">My Contributions</h2>
        <p className="font-sans font-light text-base leading-relaxed mb-6 text-gray-800">
          I was in charge of turning this basic idea we had into something tangible. I acted as a project and product manager making the first prototypes, developing the methodology itself with the other co-founders, branding the product, talking to users, exploring business models that could work and building a community around the project. Pretty much everything involved in moving this idea forward.
        </p>
        <Image src="/images/devpost-intro.jpg" alt="Devpost research intro" width={700} height={450} className="w-full h-auto my-8" />
      </FadeIn>

      <FadeIn>
        <h2 className="font-sans text-xs font-bold uppercase tracking-widest text-gray-600 mb-6 mt-16">Description</h2>
        <p className="font-sans font-light text-base leading-relaxed mb-6 text-gray-800">
          The research pipeline was designed like this: First, gather all the information relevant about developers salaries in the US. Then send some surveys and schedule interviews. After that identify trends, create user personas, and make a presentation to the product manager with our findings.
        </p>
        <Image src="/images/devpost-process.svg" alt="Devpost research process diagram" width={700} height={300} className="w-full h-auto my-8" />
        <p className="font-sans font-light text-base leading-relaxed mb-6 text-gray-800">
          The first survey was meant to get a sense of the priorities of developers looking for new jobs and to spot people open to be interviewed. It was just 7 questions in order to maximize the response and paint a first picture of the dev job hunting scene. After that I sent some follow up mails to try to get some one on one calls to show the current state of the product and finding some areas of improvement.
        </p>
        <p className="font-sans font-light text-base leading-relaxed mb-6 text-gray-800">
          Then we started to map the concerns and interests of the people we had interviewed. We used some post-its on the wall and got this big picture, differentiating senior, mid-level and junior developers.
        </p>
        <Image src="/images/devpost-anotations.jpg" alt="Research annotation post-its" width={700} height={450} className="w-full h-auto my-8" />
        <p className="font-sans font-light text-base leading-relaxed mb-4 text-gray-800">
          With that information I came up with this User Persona.
        </p>
        <Image src="/images/devpost-user-persona.png" alt="Developer user persona" width={700} height={450} className="w-full h-auto my-8" />
        <p className="font-sans font-light text-base leading-relaxed mb-4 text-gray-800">
          This led us to rethink some of the aspects of the current state of the Team Pages.
        </p>
        <Image src="/images/devpost-evolution-1.png" alt="Devpost evolution step 1" width={700} height={450} className="w-full h-auto my-8" />
        <p className="font-sans font-light text-base leading-relaxed mb-4 text-gray-800">
          First, trying to achieve a cleaner look in the landing page. Most of the developers we interviewed had a pretty clear sense of what they were looking for. So instead of showing some of the companies listed looking for hires, we gave more importance to the search process.
        </p>
        <Image src="/images/devpost-evolution-2.png" alt="Devpost evolution step 2" width={700} height={450} className="w-full h-auto my-8" />
        <p className="font-sans font-light text-base leading-relaxed mb-4 text-gray-800">
          We moved from a pop-up window to a more streamlined process of answering questions about location, the positions they were interested in, what level of experience they had, their tech stack and finally the company size.
        </p>
        <Image src="/images/devpost-evolution-3.png" alt="Devpost evolution step 3" width={700} height={450} className="w-full h-auto my-8" />
        <p className="font-sans font-light text-base leading-relaxed mb-8 text-gray-800">
          And finally the results page. We decided to give a direct overview of the company with the best match. Showing the positions available, then a quick view of the company&apos;s interview process, internships, benefits, among other things.
        </p>
      </FadeIn>

      <FadeIn>
        <h2 className="font-sans text-xs font-bold uppercase tracking-widest text-gray-600 mb-6 mt-16">Some final thoughts</h2>
        <p className="font-sans font-light text-base leading-relaxed mb-4 text-gray-800">
          This project was significant to me because it was my first experience doing UX, and the fact that it was within a New York based startup made it pretty exciting. It was for a brief period but I could get a taste of what it meant to be a UX researcher, and how I could contribute to a team from that role going through a whole iteration.
        </p>
        <p className="font-sans font-light text-base leading-relaxed mb-4 text-gray-800">
          I ended up pretty satisfied with the results, and had a great time working with the folks at Devpost who were all super nice.
        </p>
        <p className="font-sans font-light text-base leading-relaxed mb-8 text-gray-800">
          Check out more about them at{" "}
          <a href="https://devpost.com/" target="_blank" rel="noreferrer" className="underline underline-offset-2 hover:opacity-60 transition-opacity">
            devpost.com
          </a>
        </p>
      </FadeIn>
    </CaseLayout>
  );
}
