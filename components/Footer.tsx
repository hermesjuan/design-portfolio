import Image from "next/image";

export default function Footer() {
  return (
    <footer>
      {/* Work together CTA */}
      <div className="bg-gray-100 text-center py-24 px-10">
        <svg
          width="48"
          height="42"
          viewBox="0 0 58 51"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="mx-auto mb-6"
          aria-hidden="true"
        >
          <path
            d="M9.66671 8.5H48.3334C50.9917 8.5 53.1667 10.4125 53.1667 12.75V38.25C53.1667 40.5875 50.9917 42.5 48.3334 42.5H9.66671C7.00837 42.5 4.83337 40.5875 4.83337 38.25V12.75C4.83337 10.4125 7.00837 8.5 9.66671 8.5Z"
            stroke="black"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M53.1667 12.75L29 27.625L4.83337 12.75"
            stroke="black"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">
          Want to work together?
        </h2>
        <a
          href="mailto:hermes@hey.com?subject=Saw%20your%20portfolio,%20let's%20chat!"
          className="font-serif text-lg hover:opacity-60 transition-opacity"
        >
          Let me know at hermes@hey.com
        </a>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-200 py-6 px-10">
        <div className="max-w-site mx-auto flex items-center justify-between">
          <p className="font-sans text-sm text-gray-600">
            Built by me © {new Date().getFullYear()}
          </p>
          <div className="flex items-center gap-6">
            <a
              href="https://www.linkedin.com/in/hermesjuan/"
              target="_blank"
              rel="noreferrer"
              className="hover:opacity-60 transition-opacity"
              aria-label="LinkedIn"
            >
              <Image src="/images/linkedin-logo.svg" alt="LinkedIn" width={20} height={20} />
            </a>
            <a
              href="https://www.instagram.com/hermesgrafia/"
              target="_blank"
              rel="noreferrer"
              className="hover:opacity-60 transition-opacity"
              aria-label="Instagram"
            >
              <Image src="/images/instagram-logo.svg" alt="Instagram" width={20} height={20} />
            </a>
            <a
              href="https://www.behance.net/hermesjuan"
              target="_blank"
              rel="noreferrer"
              className="hover:opacity-60 transition-opacity"
              aria-label="Behance"
            >
              <Image src="/images/behance-logo.svg" alt="Behance" width={20} height={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
