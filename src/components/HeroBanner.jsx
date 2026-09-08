import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";

const navLinks = [
  { label: "Home", href: "#" },
  { label: "Services", href: "#" },
  { label: "Blog", href: "#" },
  { label: "About Us", href: "#" },
  { label: "Contact Us", href: "#" },
  { label: "API", href: "#" },
];

export default function HeroBanner() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-gradient-to-br from-orange-50 via-[#fdf3ea] to-orange-100">
      <img
        src="/images/bg-img.png"
        alt="#"
        className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-90"
      />
      <div className="relative z-10">
        {/* Navbar */}
        <header className="mx-auto flex max-w-[1536px] items-center justify-between gap-4 px-6 py-6 sm:px-10">
          <div className="rounded-md border border-gray-200 bg-white px-6 py-2 shadow-sm">
            <span className="text-sm font-extrabold tracking-wide text-orange-500">
              LOGO
            </span>
          </div>

          {/* Desktop nav links — only from lg (tablet still gets the hamburger) */}
          <nav className="hidden items-center gap-6 text-[15px] font-medium lg:flex lg:gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={
                  link.label === "Home"
                    ? "text-orange-500"
                    : "text-gray-800 transition-colors duration-200 hover:text-orange-500"
                }
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop auth buttons — only from lg */}
          <div className="hidden items-center gap-3 lg:flex">
            <button
              type="button"
              onClick={() => console.log("Sign In clicked")}
              className="cursor-pointer rounded-md border border-orange-500 bg-white px-5 py-2 text-sm font-semibold text-orange-500 transition-all duration-200 hover:bg-orange-50 active:scale-95"
            >
              Sign In
            </button>
            <button
              type="button"
              onClick={() => console.log("Sign Up clicked")}
              className="cursor-pointer rounded-md bg-orange-500 px-5 py-2 text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:bg-orange-600 active:scale-95"
            >
              Sign Up
            </button>
          </div>

          {/* Hamburger button — visible on mobile AND tablet, hidden only on lg+ */}
          <button
            type="button"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
            className="relative flex h-10 w-10 cursor-pointer items-center justify-center rounded-md border border-gray-200 bg-white text-gray-800 shadow-sm transition-transform duration-200 active:scale-90 lg:hidden"
          >
            <HiMenu
              size={22}
              className={`absolute transition-all duration-300 ${
                menuOpen ? "rotate-90 opacity-0" : "rotate-0 opacity-100"
              }`}
            />
            <HiX
              size={22}
              className={`absolute transition-all duration-300 ${
                menuOpen ? "rotate-0 opacity-100" : "-rotate-90 opacity-0"
              }`}
            />
          </button>
        </header>

        <div
          className={`overflow-hidden px-6 transition-all duration-300 ease-in-out lg:hidden ${
            menuOpen
              ? "max-h-[480px] translate-y-0 opacity-100"
              : "pointer-events-none max-h-0 -translate-y-2 opacity-0"
          }`}
        >
          <div className="mb-6 rounded-md border border-gray-200 bg-white p-5 shadow-sm">
            <nav className="flex flex-col gap-4 text-[15px] font-medium">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className={
                    link.label === "Home"
                      ? "text-orange-500"
                      : "text-gray-800 transition-colors duration-200 hover:text-orange-500"
                  }
                >
                  {link.label}
                </a>
              ))}
            </nav>
            <div className="mt-5 flex flex-col gap-3">
              <button
                type="button"
                className="cursor-pointer rounded-md border border-orange-500 bg-white px-5 py-2 text-sm font-semibold text-orange-500 transition-colors duration-200 hover:bg-orange-50"
              >
                Sign In
              </button>
              <button
                type="button"
                className="cursor-pointer rounded-md bg-orange-500 px-5 py-2 text-sm font-semibold text-white shadow-sm transition-colors duration-200 hover:bg-orange-600"
              >
                Sign Up
              </button>
            </div>
          </div>
        </div>

        {/* Hero */}
        <main className="mx-auto grid max-w-[1536px] grid-cols-1 items-center gap-12 px-6 pb-20 pt-8 sm:px-10 lg:grid-cols-2">
          {/* Left column */}
          <div>
            <div className="mb-5 flex flex-wrap items-center gap-2">
              <div className="flex gap-1">
                <img className="h-6 w-6" src="/images/green-star.svg" alt="#" />
                <img
                  className="h-6 w-6"
                  src="/images/orange-star.png"
                  alt="#"
                />
                <img
                  className="h-6 w-6"
                  src="/images/orange-star.png"
                  alt="#"
                />
                <img
                  className="h-6 w-6"
                  src="/images/orange-star.png"
                  alt="#"
                />
                <img
                  className="h-6 w-6"
                  src="/images/orange-star.png"
                  alt="#"
                />
                <img
                  className="h-6 w-6"
                  src="/images/Half-orange-star.png"
                  alt="#"
                />
              </div>
              <span className="ml-1 text-sm font-semibold text-gray-900">
                Excellent 4.8 out of 5
              </span>
            </div>

            <h1 className="font-parkinsans mb-6 text-4xl font-extrabold leading-tight text-gray-900 sm:text-5xl">
              <span className="text-orange-500">Best SMM Panel</span>
              <br />
              in Bangladesh &ndash;{" "}
              <span className="text-orange-500">Fast ,Safe</span> &amp;
              <br />
              Growth in Social Media.
            </h1>

            <p className="mb-8 max-w-xl text-[15px] leading-relaxed text-gray-500">
              SMM is Bangladesh&apos;s most reliable &amp; cheap SMM panel for
              real social media growth. We built this platform for Bangladeshi
              businesses, creators, and agencies. You get fast delivery, safe
              methods, and followers that actually stay. No fake bots. No
              account risks. Just real results. Most panels chase big numbers.
              We focus on keeping those numbers. You get retention guarantees,
              delivery control, and long-term credibility.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <button
                type="button"
                onClick={() => console.log("View Services clicked")}
                className="cursor-pointer rounded-md border border-orange-500 bg-white px-6 py-3 font-semibold text-orange-500 transition-all duration-200 hover:bg-orange-50 active:scale-95"
              >
                View Services
              </button>
              <button
                type="button"
                onClick={() => console.log("Create an Account clicked")}
                className="cursor-pointer rounded-md bg-orange-500 px-6 py-3 font-semibold text-white shadow-sm transition-all duration-200 hover:bg-orange-600 active:scale-95"
              >
                Create an Account
              </button>
            </div>
          </div>

          {/* Right column — image/illustration goes here (added separately) */}
          <div className="relative flex min-h-[420px] w-full items-center justify-center text-sm text-orange-400 sm:min-h-[520px]">
            <img src="/images/hero-img.png" alt="#" />
          </div>
        </main>
      </div>
    </div>
  );
}
