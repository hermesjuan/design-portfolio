import Image from "next/image";
import FadeIn from "./FadeIn";

interface ImageItem {
  src: string;
  alt: string;
  /** Set to true for mp4/webm video files */
  isVideo?: boolean;
}

interface CaseStudySectionProps {
  year: string;
  category: string;
  company: string;
  title: string;
  description: string;
  images: ImageItem[];
}

export default function CaseStudySection({
  year,
  category,
  company,
  title,
  description,
  images,
}: CaseStudySectionProps) {
  return (
    <section className="relative">
      {/*
        Sticky separator bar — sticks just below the nav (nav = ~3rem tall).
        Full-width, sits on top of the scrolling content.
      */}
      <div className="sticky top-[3rem] z-40 bg-white border-y border-[#fafafa]">
        <div className="max-w-site mx-auto px-4 md:px-10 py-3 relative flex items-center">
          <span className="font-serif text-xs tracking-wide text-black">{year}</span>
          <span className="font-serif text-xs uppercase tracking-widest text-black absolute left-1/2 -translate-x-1/2">
            {category}
          </span>
          <span className="font-serif text-xs uppercase tracking-widest text-black ml-auto">
            {company}
          </span>
        </div>
      </div>

      {/* Two-column layout: sticky left text + scrolling right images */}
      <div className="max-w-site mx-auto px-6 md:px-10">
        <div className="md:grid md:grid-cols-[2fr_3fr] md:gap-12 lg:gap-20 md:items-start pb-24">

          {/* Left panel — sticky below separator bar */}
          <div className="md:sticky md:top-[6.5rem] pt-10 pb-6 md:pb-0">
            <FadeIn>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-[2.75rem] font-bold leading-tight mb-5">
                {title}
              </h2>
              <p className="font-sans text-sm md:text-base leading-relaxed text-gray-600">
                {description}
              </p>
            </FadeIn>
          </div>

          {/* Right panel — images scroll past the sticky left */}
          <div className="pt-10 space-y-4">
            {images.map((img, i) => (
              <FadeIn key={i}>
                <div className="bg-[#f5f5f5] rounded-xl overflow-hidden">
                  {img.isVideo || img.src.endsWith(".mp4") || img.src.endsWith(".webm") ? (
                    <video
                      src={img.src}
                      autoPlay
                      muted
                      loop
                      playsInline
                      className="w-full h-auto"
                    />
                  ) : (
                    <Image
                      src={img.src}
                      alt={img.alt}
                      width={900}
                      height={600}
                      className="w-full h-auto"
                      sizes="(max-width: 768px) 100vw, 58vw"
                      unoptimized={img.src.endsWith(".gif")}
                    />
                  )}
                </div>
              </FadeIn>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
