import CaseLayout from "@/components/CaseLayout";
import FadeIn from "@/components/FadeIn";
import Image from "next/image";

export const metadata = { title: "Betacards · Hermes Juan" };

export default function Beta() {
  return (
    <CaseLayout
      title="Bootstrapping a methodology-based startup"
      heroImage="/images/hero-case-img-beta.jpg"
      heroImageAlt="Betacards methodology cards"
      otherProjects={[
        { href: "/muv", title: "Creating the MVP of the first ride-sharing app of Paraguay", image: "/images/case-img-muv.png" },
        { href: "/devpost", title: "Researching how developers search for jobs", image: "/images/case-img-devpost.png" },
        { href: "/innovation-index", title: "Prototyping a tool that measures innovation", image: "/images/case-img-inndex.png" },
      ]}
    >
      <FadeIn>
        <h2 className="font-sans text-xs font-bold uppercase tracking-widest text-gray-600 mb-6">Project Overview</h2>
        <p className="font-sans font-light text-base leading-relaxed mb-6 text-gray-800">
          Betacards is a Paraguayan startup that created a step by step guide, using a set of cards, to map out an idea taking into account the most important areas involved. For instance what problem the idea is solving, who are their users, what is the business model, what is its purpose, among other things. It is meant to be used by consulting professionals, organizations that offer bootcamps, and people in general interested in using tools like business model canvas, empathy map, lego serious play and such.
        </p>
        <p className="font-sans font-light text-base leading-relaxed mb-8 text-gray-800">
          This project was incubated by miut.company, an innovation laboratory based in Paraguay which I co-founded. Over the first 2 years we focused on perfecting the product (methodology + experience + design) and also iterating business models so it can scale to LatAm (Spanish speaking countries), and eventually the rest of the world.
        </p>
      </FadeIn>

      <FadeIn>
        <h2 className="font-sans text-xs font-bold uppercase tracking-widest text-gray-600 mb-6 mt-16">My Contributions</h2>
        <p className="font-sans font-light text-base leading-relaxed mb-6 text-gray-800">
          I was the project leader for the first 2 years. Was in charge of turning this basic idea we had into something tangible, acting as a project and product manager making the first prototypes, developing the methodology itself with the other co-founders (Rodrigo and Juanma), branding the product, talking to users, exploring business models that could work and building a community around the project with the help of the rest of the team at Miut. Pretty much everything involved in moving this idea forward. We didn&apos;t have any initial angel or seed investing, so we bootstrapped it.
        </p>
        <Image src="/images/betacards-being-used.png" alt="The cards and people using them" width={700} height={450} className="w-full h-auto my-8" />
      </FadeIn>

      <FadeIn>
        <h2 className="font-sans text-xs font-bold uppercase tracking-widest text-gray-600 mb-6 mt-16">Description</h2>
        <p className="font-sans font-light text-base leading-relaxed mb-8 text-gray-800">
          Here is the evolution of Betacards as a project. In its history is reflected my way of thinking and decision-making.
        </p>

        <h3 className="font-serif text-2xl font-bold mb-4 mt-10">The idea</h3>
        <p className="font-sans font-light text-base leading-relaxed mb-4 text-gray-800">
          It all started with some workshops we did at Miut to help clients get started with their new business ideas. We realized that some steps repeated no matter the project or the client. For instance questions at the beginning of every process: &ldquo;Who&apos;s this for? What kind of problem is it solving?&rdquo; and so on. So we worked on a framework that contemplated all of those steps for working with future clients.
        </p>
        <p className="font-sans font-light text-base leading-relaxed mb-6 text-gray-800">
          It got us thinking &ldquo;What if we create a game out of it? Visualizing these steps by some sort of board? or cards maybe?&rdquo;. Me and Rodrigo (co-founder, primary shareholder of Miut and mentor of mine) started prototyping Betacards with some post-its on the wall, discussing what the main areas would be, and started calling them &ldquo;Mundos&rdquo; which is Spanish for Worlds. We started seeing some potential even at this stage, simply by seeing how a little order helped structure ideas.
        </p>
        <Image src="/images/first-version-of-betacards.png" alt="First version of the cards: just some post-its on the wall" width={700} height={450} className="w-full h-auto my-8" />

        <h3 className="font-serif text-2xl font-bold mb-4 mt-10">Experiments</h3>
        <p className="font-sans font-light text-base leading-relaxed mb-4 text-gray-800">
          Not too long after we made our first experiment. We printed some cards to try the methodology in a workshop we were invited to. That test went much better than we expected. We were able to gather a lot of feedback (since it was really an early version of the idea). We were surprised at how useful it was for people using it. We decided to give the project more attention and resources. Also it gave us some hints that it may not end up being a game, more like a tool.
        </p>
        <Image src="/images/first-betacards-printed.png" alt="First printed version of the cards" width={700} height={450} className="w-full h-auto my-8" />
        <p className="font-sans font-light text-base leading-relaxed mb-8 text-gray-800">
          From that point forward we adopted this Test-Build-Repeat approach, not too worried about not filling all the blank spaces yet. We wanted to know first hand where the value was before entering a polishing stage. From a design perspective, we focused on legibility and color coding to help guide the process. We picked yellow as the main color of Beta, a little homage to its post-its origin, and the Museo Sans font because it has personality but mostly because it worked pretty well in a printed medium and small size.
        </p>

        <h3 className="font-serif text-2xl font-bold mb-4 mt-10">Building a community</h3>
        <Image src="/images/early-community-building-of-beta.png" alt="People from Rotterdam in one of the early workshops" width={700} height={450} className="w-full h-auto my-8" />

        <h3 className="font-serif text-2xl font-bold mb-4 mt-10">Viability</h3>
        <p className="font-sans font-light text-base leading-relaxed mb-4 text-gray-800">
          While doing experiments, tests, validations, etc, we kept going to the question of how could we turn this into a business. We set the price for a typical 3 hour workshop using Betacards to be USD 300. At first we split it 100 Beta / 200 the facilitator. But it was a little messy trying to get in the way of each transaction the facilitators made, and once they had the cards, we didn&apos;t give them much incentive not to bypass us. So we knew it was a temporary model.
        </p>
        <p className="font-sans font-light text-base leading-relaxed mb-8 text-gray-800">
          We didn&apos;t let that stop us though. After 7-8 months we started to see an opportunity in building the business model around certifications. We found a potential market of people who already were in the business of helping founders and companies navigate innovation. We sell them a certification that can be renewed each year. It includes videos, the set of cards, some tools like a presentation deck and a step by step guide of the whole process and of course, access to the community.
        </p>

        <h3 className="font-serif text-2xl font-bold mb-4 mt-10">Slow-but-steady growth</h3>
        <p className="font-sans font-light text-base leading-relaxed mb-8 text-gray-800">
          Right now we are still on that path, and we also decided not to rush it. We like having a somewhat organic growth. So far it has kept the community a place where like-minded people could interact and grow around the idea of &ldquo;Starting companies in a better way&rdquo;, more focused on the user/client, aware of the global issues and with transformative purposes.
        </p>
      </FadeIn>

      <FadeIn>
        <h2 className="font-sans text-xs font-bold uppercase tracking-widest text-gray-600 mb-6 mt-16">Some final thoughts</h2>
        <p className="font-sans font-light text-base leading-relaxed mb-4 text-gray-800">
          Visual design was an important factor. As a founder having the ability to put a deck quickly to attract the first facilitators was pretty handy. Also gave me the liberty to do the web on no-code platforms (first Squarespace, and then Wix) pretty much by myself.
        </p>
        <p className="font-sans font-light text-base leading-relaxed mb-4 text-gray-800">
          Design-wise I also created the first 2 versions of the printed cards, and then decided to outsource it because it took time that I might better spend wearing a founder&apos;s hat.
        </p>
        <p className="font-sans font-light text-base leading-relaxed mb-8 text-gray-800">
          It was a really good 360 experience of starting a business by making things that didn&apos;t scale, discovering a potential market, and then put it on a growth path.
        </p>
      </FadeIn>
    </CaseLayout>
  );
}
