const footerLinks = {
  Services: ["Web Development", "App Development", "E-commerce", "UI/UX Design"],
  Company: ["About Us", "Portfolio", "Careers", "Contact"],
  Resources: ["Blog", "Case Studies", "Client Reviews", "Brochure"],
};

export function Footer() {
  return (
    <footer id="contact" className="bg-[#081A2C] text-white">
      <div className="mx-auto grid w-full max-w-7xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-[1.4fr_2fr] lg:px-8">
        <div>
          <div className="flex items-center gap-3">
            <span className="grid size-10 place-items-center rounded-lg bg-white text-lg font-black text-[#0D47A1]">
              E
            </span>
            <span className="text-2xl font-black">
              EDVIX<span className="text-[#FF7A00]">O</span>
            </span>
          </div>
          <p className="mt-5 max-w-md text-sm leading-7 text-slate-300">
            We build dependable websites, apps, e-commerce platforms, and digital teams for growing businesses.
          </p>
          <a
            href="mailto:hello@edvixo.com"
            className="mt-6 inline-flex rounded-md bg-[#FF7A00] px-5 py-3 text-sm font-bold text-white transition hover:bg-[#e66f00]"
          >
            hello@edvixo.com
          </a>
        </div>

        <div className="grid gap-8 sm:grid-cols-3">
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h2 className="text-sm font-bold uppercase tracking-wide text-white">{title}</h2>
              <ul className="mt-4 space-y-3 text-sm text-slate-300">
                {links.map((link) => (
                  <li key={link}>
                    <a href="#" className="transition hover:text-white">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="border-t border-white/10 px-4 py-5 text-center text-sm text-slate-400">
        Copyright 2026 Edvixo. All rights reserved.
      </div>
    </footer>
  );
}
