import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import FadeIn from "@/components/FadeIn";
import Image from "next/image";

export const metadata = { title: "About · Hermes Juan" };

interface JobProps {
  company: string;
  role: string;
  period: string;
  description: string;
  url?: string;
}

function Job({ company, role, period, description, url }: JobProps) {
  return (
    <FadeIn className="border-t border-gray-200 py-10">
      <div className="grid md:grid-cols-3 gap-6">
        <div>
          {url ? (
            <a href={url} target="_blank" rel="noreferrer" className="font-sans font-semibold text-sm hover:opacity-60 transition-opacity underline underline-offset-2">
              {company}
            </a>
          ) : (
            <p className="font-sans font-semibold text-sm">{company}</p>
          )}
          <p className="font-sans text-sm text-gray-600 mt-1">{role}</p>
          <p className="font-sans text-xs text-gray-400 mt-1">{period}</p>
        </div>
        <div className="md:col-span-2">
          <p className="font-sans font-light text-base leading-relaxed text-gray-800">{description}</p>
        </div>
      </div>
    </FadeIn>
  );
}

export default function About() {
  return (
    <>
      <Nav />
      <div className="pt-24 pb-16 max-w-site mx-auto px-10">

        {/* Hero heading */}
        <FadeIn>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-12 max-w-3xl">
            From an intern at an ad agency in Paraguay to a Product designer at a US startup
          </h1>
        </FadeIn>

        <FadeIn>
          <p className="font-sans font-light text-base leading-relaxed text-gray-800 max-w-2xl mb-20">
            Since high school I&apos;ve been drawn to technology and everything it can accomplish. I didn&apos;t have a straight path to working in tech, but that gave me some time to hone my design skills as a graphic designer, later a brand designer, a web and UX designer, a founder and today as a product designer.
          </p>
        </FadeIn>

        {/* Photo */}
        <FadeIn className="mb-20">
          <div className="relative w-full max-w-lg aspect-[4/3] overflow-hidden">
            <Image src="/images/me.png" alt="Hermes Juan" fill className="object-cover" sizes="(max-width: 768px) 100vw, 512px" />
          </div>
        </FadeIn>

        {/* Work Experience */}
        <FadeIn>
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-2 mt-16">Work Experience</h2>
        </FadeIn>

        <Job
          company="Sardius Media"
          role="Product Designer"
          period="2021 – Present"
          url="https://www.sardius.media"
          description="During the company's transition from Custom Services to SaaS I'm helping building a strong and well positioned brand in the online video B2B market. Worked on the redesign of the Video Player, the UI of the analytics dashboard, new templates like an entry point layout and a VOD template, among many other things including several websites for different client's events."
        />
        <Job
          company="Betacards"
          role="Product Manager & Co-founder"
          period="2018 – 2020"
          url="https://www.beta.cards"
          description="In charge of turning an idea into a company, making several validations and pivots taking into account vital information coming from users, the business model, and design aspects of the project like the printed cards, the web and a lot of materials for the implementation of the Betacards workshops. Got in 10 new markets in 2 years, developed the methodology through several iterations of improvements cycles and kick-started the community around Beta today consistent of +100 people."
        />
        <Job
          company="Miut"
          role="Product Manager & Co-founder"
          period="2018 – 2020"
          url="https://www.miut.company"
          description="In charge of new products incubated by Miut, like beta.cards and inndex.co. Performed the role of Maker in a 6 week program designed by Miut to help companies work on new business ideas. Involved in all major company's decisions as a co-founder and shareholder."
        />
        <Job
          company="Brandon"
          role="Graphic Designer"
          period="2016 – 2019"
          url="https://www.estoesbrandon.com"
          description="Branding related projects for some of the biggest companies in Paraguay like Cervepar, a member of the ABIBev conglomerate; MUV, the first ride sharing company in the country, Zamphiropolos, a printing house giant, among many others."
        />
        <Job
          company="Freelance"
          role="Branding, UI, UX, Photography"
          period="2016 – Present"
          description="Branding and Web related projects. A lot of no code websites using Squarespace and Wix. From 2018 to 2019 became a wedding photographer during the weekends. Had the opportunity of mentoring Paraguayan entrepreneurs in acceleration programs and pitch contests. Gave a couple of talks too, biggest one to an audience of nearly 1k in 2019."
        />
        <Job
          company="B Lab"
          role="Graphic Designer"
          period="2014 – 2016"
          description="B LAB was an advertising agency created to work with the brands of the importer Distribuidora Gloria. I performed as a Senior graphic designer in charge of visual designs for different media (POS, OOH, digital, both ATL and BTL). Mostly focused on Miller Lite, Peroni and the Wines division."
        />
        <Job
          company="Oniria TBWA"
          role="Jr. Graphic Designer"
          period="2012 – 2013"
          url="https://www.oniria.com.py"
          description="Junior Designer at the first Paraguayan ad agency to win a Cannes Lion, one of the most prestigious awards in advertising. Started in the digital department and in less than a year ended up being the lead designer of the bank Itaú, arguably the most important bank of the country. Also collaborated with projects of other brands like Toyota, Shopping Mariscal, Marlboro, among others."
        />

        {/* Contact */}
        <FadeIn className="mt-20">
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-8">Contact Info</h2>
          <div className="space-y-2 font-sans font-light text-base text-gray-800">
            <p>
              Email:{" "}
              <a href="mailto:hermes@hey.com" className="underline underline-offset-2 hover:opacity-60 transition-opacity">
                hermes@hey.com
              </a>
            </p>
            <p>
              LinkedIn:{" "}
              <a href="https://linkedin.com/in/hermesjuan" target="_blank" rel="noreferrer" className="underline underline-offset-2 hover:opacity-60 transition-opacity">
                linkedin.com/in/hermesjuan
              </a>
            </p>
            <p>Location: Asunción, Paraguay</p>
          </div>
        </FadeIn>

        {/* Education */}
        <FadeIn className="mt-20">
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-8">Education</h2>
          <div className="space-y-6 font-sans font-light text-base text-gray-800">
            <div className="border-t border-gray-200 pt-6">
              <p className="font-semibold text-sm">Bachelor of Design</p>
              <p className="text-sm text-gray-600">Universidad Católica de Asunción · 2012–2017 · Graduated</p>
            </div>
            <div className="border-t border-gray-200 pt-6">
              <p className="font-semibold text-sm">Web Design Track</p>
              <p className="text-sm text-gray-600">Startup Institute New York · Feb–Apr 2014</p>
            </div>
            <div className="border-t border-gray-200 pt-6">
              <p className="font-semibold text-sm">Software Engineering</p>
              <p className="text-sm text-gray-600">Universidad Nacional de Asunción · 2010–2012 · Unfinished</p>
            </div>
          </div>
        </FadeIn>

        {/* Strengths */}
        <FadeIn className="mt-20 mb-20">
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-8">Strengths</h2>
          <ul className="grid grid-cols-2 md:grid-cols-3 gap-4 font-sans font-light text-base text-gray-800">
            {["Entrepreneurial", "Curious", "Hard Working", "Creative Problem Solver", "Growth Mindset", "Adaptable"].map((s) => (
              <li key={s} className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-black rounded-full flex-shrink-0" />
                {s}
              </li>
            ))}
          </ul>
        </FadeIn>

      </div>
      <Footer />
    </>
  );
}
