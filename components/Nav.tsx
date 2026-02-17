"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 h-12 flex items-center px-10 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 backdrop-blur-sm border-b border-gray-200 shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-site mx-auto w-full flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 hover:opacity-70 transition-opacity">
          <Image src="/images/Logo.svg" alt="Hermes Juan logo" width={32} height={32} />
          <span className="font-sans text-sm font-medium tracking-wide">
            Hermes Juan &middot; Product Designer
          </span>
        </Link>
        <Link
          href="/about"
          className="font-sans text-sm font-medium hover:opacity-60 transition-opacity"
        >
          About me
        </Link>
      </div>
    </header>
  );
}
