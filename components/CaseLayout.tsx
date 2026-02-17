import Image from "next/image";
import Link from "next/link";
import Nav from "./Nav";
import Footer from "./Footer";
import FadeIn from "./FadeIn";

interface OtherProject {
  href: string;
  title: string;
  image: string;
}

interface CaseLayoutProps {
  title: string;
  heroImage: string;
  heroImageAlt: string;
  children: React.ReactNode;
  otherProjects?: OtherProject[];
}

export default function CaseLayout({
  title,
  heroImage,
  heroImageAlt,
  children,
  otherProjects = [],
}: CaseLayoutProps) {
  return (
    <>
      <Nav />

      {/* Hero image */}
      <div className="relative w-full aspect-[2.5/1] mt-12">
        <Image
          src={heroImage}
          alt={heroImageAlt}
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
      </div>

      {/* Content */}
      <article className="max-w-3xl mx-auto px-10 py-16">
        <FadeIn>
          <h1 className="font-serif text-4xl md:text-5xl font-bold leading-tight mb-16">
            {title}
          </h1>
        </FadeIn>
        {children}
      </article>

      {/* Back home */}
      <div className="max-w-3xl mx-auto px-10 pb-8">
        <Link
          href="/"
          className="font-sans text-sm font-medium inline-flex items-center gap-2 hover:opacity-60 transition-opacity"
        >
          ← Back Home
        </Link>
      </div>

      {/* Other projects */}
      {otherProjects.length > 0 && (
        <div className="max-w-site mx-auto px-10 py-16 border-t border-gray-200">
          <h3 className="font-sans text-xs font-bold uppercase tracking-widest mb-8 text-gray-600">
            See more projects
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {otherProjects.map((p) => (
              <Link key={p.href} href={p.href} className="group block border border-gray-400 hover:border-black transition-colors">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={p.image}
                    alt={p.title}
                    fill
                    className="object-cover group-hover:scale-[1.02] transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <div className="p-5">
                  <p className="font-serif text-lg font-bold leading-snug">{p.title}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}

      <Footer />
    </>
  );
}
