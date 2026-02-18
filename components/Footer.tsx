export default function Footer() {
  return (
    <footer className="py-10 px-6 md:px-10">
      <div className="max-w-site mx-auto flex items-center justify-center gap-8">
        <a
          href="https://www.linkedin.com/in/hermesjuan/"
          target="_blank"
          rel="noreferrer"
          className="font-sans text-sm underline underline-offset-4 decoration-1 hover:opacity-60 transition-opacity"
        >
          Linkedin
        </a>
        <a
          href="mailto:hermes@55.design"
          className="font-sans text-sm underline underline-offset-4 decoration-1 hover:opacity-60 transition-opacity"
        >
          hermes@55.design
        </a>
        <a
          href="https://www.behance.net/hermesjuan"
          target="_blank"
          rel="noreferrer"
          className="font-sans text-sm underline underline-offset-4 decoration-1 hover:opacity-60 transition-opacity"
        >
          Behance
        </a>
      </div>
    </footer>
  );
}
