"use client";

import Link from "next/link";

export default function Nav() {
  return (
    <header className="sticky top-0 z-50 bg-white h-12 flex items-center border-b border-[#fafafa]">
      <div className="max-w-site mx-auto w-full px-6 md:px-10">
        <Link
          href="/"
          className="font-serif text-base font-semibold underline underline-offset-4 decoration-1 hover:opacity-60 transition-opacity"
        >
          Hermes Juan
        </Link>
      </div>
    </header>
  );
}
