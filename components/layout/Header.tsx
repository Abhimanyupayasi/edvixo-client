"use client";

import { useState } from "react";
import { Bars, ChevronDown, Xmark } from "@gravity-ui/icons";

const navItems = [
  { label: "Company", href: "#about", menu: "company" },
  { label: "Services", href: "#services", menu: "services" },
  { label: "Games", href: "#games" },
  { label: "Solutions", href: "#solutions", menu: "solutions" },
  { label: "Industries", href: "#industries" },
  { label: "Portfolio", href: "#portfolio" },
];

const companyLinks = [
  ["Home", "About The Company"],
  ["Meet The Team", "Career"],
  ["Client Reviews", "Blog Resources"],
  ["Company Brochure", "Life@Edvixo"],
];

const serviceColumns = [
  {
    title: "Web Development",
    links: ["Website Development", "PHP Development", "WordPress Development", "HTML Development", "Angular Development"],
  },
  {
    title: "App Development",
    links: ["Mobile App Development", "IOS App Development", "Android App Development", "Hybrid App Development"],
  },
  {
    title: "Ecom Development",
    links: ["E-Commerce Development", "WooCommerce Development", "Magento Development", "Opencart Development"],
  },
  {
    title: "Design",
    links: ["UI/UX Design", "Graphic Design", "App Prototype", "Web Design"],
  },
  {
    title: "Miscellaneous",
    links: ["Software Development", "Digital Marketing", "Technical Support"],
  },
];

const solutionLinks = [
  "Hire Dedicated Developers",
  "Startup Product Development",
  "Business Automation",
  "Cloud & DevOps Solutions",
  "Maintenance & Support",
  "Digital Transformation",
];

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[#171717] shadow-lg">
      <div className="mx-auto flex min-h-20 w-full max-w-7xl flex-wrap items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <a href="#" className="flex items-center gap-3" aria-label="Edvixo home">
          <span className="grid size-11 place-items-center rounded-md bg-[#0D47A1] text-lg font-black text-white ring-2 ring-[#FF7A00]">
            E
          </span>
          <span className="text-xl font-black tracking-normal text-white sm:text-2xl">
            EDVIX<span className="text-[#FF7A00]">O</span>
          </span>
        </a>

        <nav className="order-3 flex w-full flex-wrap items-center justify-center gap-1 text-sm font-bold text-white md:order-none md:w-auto md:flex-1 xl:text-[15px]">
          {navItems.map((item) => (
            <div key={item.label} className="group relative">
              <a
                href={item.href}
                className="flex h-11 items-center gap-1 rounded-md px-2 transition hover:bg-white/10 hover:text-[#63B9E9] xl:px-3"
              >
                {item.label}
                {item.menu ? <ChevronDown className="size-3" aria-hidden /> : null}
              </a>

              {item.menu === "company" ? (
                <div className="invisible absolute left-1/2 top-12 w-[min(36rem,calc(100vw-2rem))] -translate-x-1/2 rounded-b-md bg-white p-6 text-[#171717] opacity-0 shadow-2xl transition group-hover:visible group-hover:opacity-100 lg:p-8">
                  <div className="grid grid-cols-2 gap-x-8 gap-y-8">
                    {companyLinks.flat().map((link) => (
                      <a key={link} href="#" className="font-semibold transition hover:text-[#0D47A1]">
                        {link}
                      </a>
                    ))}
                  </div>
                </div>
              ) : null}

              {item.menu === "services" ? (
                <div className="invisible absolute left-1/2 top-12 w-[min(66rem,calc(100vw-2rem))] -translate-x-1/2 rounded-b-md bg-white/90 p-5 text-[#171717] opacity-0 shadow-2xl backdrop-blur transition group-hover:visible group-hover:opacity-100 lg:p-7">
                  <div className="grid grid-cols-2 gap-6 lg:grid-cols-5">
                    {serviceColumns.map((column) => (
                      <div key={column.title} className="border-r border-slate-200 pr-5 last:border-r-0">
                        <h2 className="text-sm font-black uppercase text-[#081A2C]">{column.title}</h2>
                        <div className="mt-4 h-px bg-slate-200" />
                        <ul className="mt-6 space-y-6 text-sm font-semibold">
                          {column.links.map((link) => (
                            <li key={link}>
                              <a href="#" className="transition hover:text-[#0D47A1]">
                                {link}
                              </a>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              ) : null}

              {item.menu === "solutions" ? (
                <div className="invisible absolute left-1/2 top-12 w-[min(28rem,calc(100vw-2rem))] -translate-x-1/2 rounded-b-md bg-white p-5 text-[#171717] opacity-0 shadow-2xl transition group-hover:visible group-hover:opacity-100 lg:p-7">
                  <h2 className="text-sm font-black uppercase text-[#081A2C]">Solutions</h2>
                  <div className="mt-4 h-px bg-slate-200" />
                  <div className="mt-5 grid grid-cols-2 gap-4">
                    {solutionLinks.map((link) => (
                      <a key={link} href="#" className="text-sm font-semibold transition hover:text-[#0D47A1]">
                        {link}
                      </a>
                    ))}
                  </div>
                </div>
              ) : null}
            </div>
          ))}
        </nav>

        <div className="hidden shrink-0 items-center gap-2 lg:flex xl:gap-3">
          <a
            href="#contact"
            className="rounded-full bg-white px-4 py-3 text-sm font-black text-[#171717] shadow-sm transition hover:text-[#0D47A1] xl:px-5"
          >
            Contact Us
          </a>
          <a
            href="#quote"
            className="rounded-full bg-white px-4 py-3 text-sm font-black text-[#171717] shadow-sm transition hover:text-[#0D47A1] xl:px-5"
          >
            Request Quote
          </a>
        </div>

        <button
          type="button"
          onClick={() => setIsMenuOpen((current) => !current)}
          className="grid size-11 place-items-center rounded-md border border-white/25 text-white md:hidden"
          aria-expanded={isMenuOpen}
          aria-label={isMenuOpen ? "Close navigation" : "Open navigation"}
        >
          {isMenuOpen ? <Xmark className="size-5" aria-hidden /> : <Bars className="size-5" aria-hidden />}
        </button>
      </div>

      {isMenuOpen ? (
        <div className="border-t border-white/10 bg-[#171717] px-4 pb-6 text-white md:hidden">
          <nav className="mx-auto grid w-full max-w-7xl gap-2 pt-4">
            {navItems.map((item) =>
              item.menu ? (
                <details key={item.label} className="rounded-md bg-white/5">
                  <summary className="flex cursor-pointer list-none items-center justify-between px-4 py-3 text-sm font-bold">
                    <span>{item.label}</span>
                    <ChevronDown className="size-4" aria-hidden />
                  </summary>

                  {item.menu === "company" ? (
                    <div className="grid gap-3 border-t border-white/10 px-4 py-4 text-sm text-slate-200">
                      {companyLinks.flat().map((link) => (
                        <a key={link} href="#" onClick={() => setIsMenuOpen(false)}>
                          {link}
                        </a>
                      ))}
                    </div>
                  ) : null}

                  {item.menu === "services" ? (
                    <div className="grid gap-5 border-t border-white/10 px-4 py-4 text-sm text-slate-200">
                      {serviceColumns.map((column) => (
                        <div key={column.title}>
                          <h2 className="font-black uppercase text-white">{column.title}</h2>
                          <div className="mt-3 grid gap-2">
                            {column.links.map((link) => (
                              <a key={link} href="#" onClick={() => setIsMenuOpen(false)}>
                                {link}
                              </a>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : null}

                  {item.menu === "solutions" ? (
                    <div className="grid gap-3 border-t border-white/10 px-4 py-4 text-sm text-slate-200">
                      {solutionLinks.map((link) => (
                        <a key={link} href="#" onClick={() => setIsMenuOpen(false)}>
                          {link}
                        </a>
                      ))}
                    </div>
                  ) : null}
                </details>
              ) : (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="rounded-md bg-white/5 px-4 py-3 text-sm font-bold"
                >
                  {item.label}
                </a>
              ),
            )}
          </nav>

          <div className="mx-auto mt-5 grid w-full max-w-7xl gap-3 sm:grid-cols-2">
            <a
              href="#contact"
              onClick={() => setIsMenuOpen(false)}
              className="rounded-full bg-white px-5 py-3 text-center text-sm font-black text-[#171717]"
            >
              Contact Us
            </a>
            <a
              href="#quote"
              onClick={() => setIsMenuOpen(false)}
              className="rounded-full bg-white px-5 py-3 text-center text-sm font-black text-[#171717]"
            >
              Request Quote
            </a>
          </div>
        </div>
      ) : null}
    </header>
  );
}
