import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export default function NotFound() {
  return (
    <>
      <Nav />

      <main className="max-w-site mx-auto px-6 md:px-10">
        <div className="pt-32 md:pt-48 pb-16">
          <h1 className="font-serif text-[15vw] md:text-[10vw] font-bold leading-[0.95] tracking-tight uppercase">
            Page
            <br className="md:hidden" />{" "}
            Not
            <br className="md:hidden" />{" "}
            Found
          </h1>
        </div>

        <hr className="border-black" />

        <div className="max-w-xl py-12 md:py-16 md:ml-auto md:mr-[10%]">
          <p className="text-lg md:text-xl leading-relaxed">
            Looks like this page took a wrong turn somewhere. Don&apos;t worry
            though - let&apos;s get you back on track and find what you&apos;re
            looking for instead.
          </p>

          <Link
            href="/"
            className="inline-block mt-10 text-lg underline underline-offset-4 decoration-1 hover:opacity-60 transition-opacity"
          >
            Go back to home &rarr;
          </Link>
        </div>
      </main>

      <Footer />
    </>
  );
}
