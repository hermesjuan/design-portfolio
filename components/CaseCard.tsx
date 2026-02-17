import Image from "next/image";
import Link from "next/link";
import FadeIn from "./FadeIn";

interface CaseCardProps {
  href: string;
  title: string;
  image: string;
  imageAlt: string;
  /** If true, image is on the left; if false, image is on the right */
  imageLeft?: boolean;
  external?: boolean;
}

export default function CaseCard({
  href,
  title,
  image,
  imageAlt,
  imageLeft = true,
  external = false,
}: CaseCardProps) {
  const content = (
    <div
      className={`grid md:grid-cols-2 items-center gap-0 border border-gray-400 group cursor-pointer hover:border-black transition-colors duration-300`}
    >
      {/* Image */}
      <div
        className={`relative aspect-[4/3] overflow-hidden ${
          imageLeft ? "md:order-1" : "md:order-2"
        } order-1`}
      >
        <Image
          src={image}
          alt={imageAlt}
          fill
          className="object-cover group-hover:scale-[1.02] transition-transform duration-500"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>

      {/* Text */}
      <div
        className={`p-10 ${imageLeft ? "md:order-2" : "md:order-1"} order-2`}
      >
        <h3 className="font-serif text-2xl md:text-3xl font-bold leading-tight mb-6">
          {title}
        </h3>
        <div className="flex items-center gap-3 font-sans text-sm font-medium">
          <span>Take a look</span>
          <svg
            width="34"
            height="8"
            viewBox="0 0 34 8"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="group-hover:translate-x-1 transition-transform duration-300"
          >
            <path
              d="M33.3536 4.35355C33.5488 4.15829 33.5488 3.84171 33.3536 3.64645L30.1716 0.464466C29.9763 0.269204 29.6597 0.269204 29.4645 0.464466C29.2692 0.659728 29.2692 0.976311 29.4645 1.17157L32.2929 4L29.4645 6.82843C29.2692 7.02369 29.2692 7.34027 29.4645 7.53553C29.6597 7.7308 29.9763 7.7308 30.1716 7.53553L33.3536 4.35355ZM0 4.5H33V3.5H0V4.5Z"
              fill="black"
            />
          </svg>
        </div>
      </div>
    </div>
  );

  return (
    <FadeIn className="max-w-site mx-auto px-10 my-16">
      {external ? (
        <a href={href} target="_blank" rel="noreferrer">
          {content}
        </a>
      ) : (
        <Link href={href}>{content}</Link>
      )}
    </FadeIn>
  );
}
