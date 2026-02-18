"use client";

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
  /** Case study title */
  title: string;
  /** Short metadata: role, year, etc. */
  subtitle?: string;
  /** Brief description shown in the sticky left panel */
  description: string;
  /** Tags shown below the description */
  tags?: string[];
  /** Sections of images that scroll on the right */
  sections: {
    label?: string;
    images: { src: string; alt: string }[];
  }[];
  otherProjects?: OtherProject[];
}

export default function CaseLayout({
  title,
  subtitle,
  description,
  tags = [],
  sections,
  otherProjects = [],
}: CaseLayoutProps) {
  return (
    <>
      <Nav />

      {/* Sticky left + scrolling right */}
      <div className="pt-16 md:pt-20">
        <div className="max-w-site mx-auto px-6 md:px-10">
          <div className="md:grid md:grid-cols-[2fr_3fr] md:gap-12 lg:gap-20 md:items-start">
            {/* Left panel — sticky */}
            <div className="md:sticky md:top-[3.5rem] md:py-10 md:max-h-[calc(100vh-3.5rem)] md:overflow-y-auto">
              <FadeIn>
                {subtitle && (
                  <p className="font-sans text-xs font-medium uppercase tracking-widest text-gray-600 mb-4">
                    {subtitle}
                  </p>
                )}
                <h1 className="font-serif text-3xl md:text-4xl lg:text-[2.75rem] font-bold leading-tight mb-6">
                  {title}
                </h1>
                <p className="font-sans text-sm md:text-base font-light leading-relaxed text-gray-800 mb-6">
                  {description}
                </p>
                {tags.length > 0 && (
                  <div className="flex flex-wrap gap-2 mb-8">
                    {tags.map((tag) => (
                      <span
                        key={tag}
                        className="font-sans text-xs px-3 py-1 border border-gray-400 rounded-full text-gray-600"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
                <Link
                  href="/"
                  className="font-sans text-sm font-medium inline-flex items-center gap-2 hover:opacity-60 transition-opacity text-gray-600"
                >
                  &larr; Back Home
                </Link>
              </FadeIn>
            </div>

            {/* Right panel — scrolling images */}
            <div className="mt-8 md:mt-0 space-y-4">
              {sections.map((section, si) => (
                <div key={si}>
                  {section.label && (
                    <FadeIn>
                      <p className="font-sans text-xs font-medium uppercase tracking-widest text-gray-600 mb-4 mt-8">
                        {section.label}
                      </p>
                    </FadeIn>
                  )}
                  {section.images.map((img, ii) => (
                    <FadeIn key={ii} className="mb-4">
                      <div className="bg-[#f5f5f5] rounded-md overflow-hidden">
                        <Image
                          src={img.src}
                          alt={img.alt}
                          width={1200}
                          height={800}
                          className="w-full h-auto"
                          sizes="(max-width: 768px) 100vw, 60vw"
                        />
                      </div>
                    </FadeIn>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Other projects */}
      {otherProjects.length > 0 && (
        <div className="max-w-site mx-auto px-6 md:px-10 py-20 border-t border-gray-200 mt-20">
          <h3 className="font-sans text-xs font-bold uppercase tracking-widest mb-8 text-gray-600">
            More projects
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {otherProjects.map((p) => (
              <Link
                key={p.href}
                href={p.href}
                className="group block border border-gray-400 hover:border-black transition-colors"
              >
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
                  <p className="font-serif text-lg font-bold leading-snug">
                    {p.title}
                  </p>
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
