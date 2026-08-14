import { ArrowRight, Check, Code, PlanetEarth, Rocket, Shield, ShoppingBag, Smartphone } from "@gravity-ui/icons";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";

const stats = [
  { value: "500+", label: "Projects Delivered" },
  { value: "250+", label: "Happy Clients" },
  { value: "200+", label: "Expert Developers" },
  { value: "98%", label: "Client Satisfaction" },
];

const services = [
  {
    icon: Code,
    title: "Web Development",
    text: "Fast, scalable websites and custom web apps for modern companies.",
  },
  {
    icon: Smartphone,
    title: "App Development",
    text: "Android, iOS, and hybrid applications with clean product thinking.",
  },
  {
    icon: ShoppingBag,
    title: "E-commerce",
    text: "WooCommerce, Shopify, and custom stores built to convert.",
  },
  {
    icon: PlanetEarth,
    title: "Digital Solutions",
    text: "Practical automation, integrations, and support for business growth.",
  },
];

const highlights = [
  "Dedicated developers for flexible hiring",
  "Clean communication and transparent delivery",
  "Modern UI with reliable engineering practices",
  "Support from idea to launch and beyond",
];

export function HomePage() {
  return (
    <div className="min-h-screen bg-[#F5F7FA] text-[#081A2C]">
      <Header />

      <main>
        <section className="relative overflow-hidden bg-[#081A2C]">
          <div className="absolute inset-0 opacity-70">
            <div className="absolute right-[-11rem] top-20 h-[24rem] w-[24rem] rounded-full border border-[#5E9BFF]/30 bg-[#0D47A1]/20 shadow-[0_0_120px_rgba(13,71,161,0.7)] sm:right-[-8rem] sm:top-12 sm:h-[32rem] sm:w-[32rem]" />
            <div className="absolute right-[-2rem] top-28 h-[18rem] w-[18rem] rounded-full border border-[#5E9BFF]/25 sm:right-4 sm:top-24 sm:h-[24rem] sm:w-[24rem]" />
            <div className="absolute right-20 top-48 h-[10rem] w-[10rem] rounded-full border border-[#5E9BFF]/30 sm:right-24 sm:top-44 sm:h-[13rem] sm:w-[13rem]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_45%,rgba(94,155,255,0.28),transparent_35%),linear-gradient(90deg,#081A2C_0%,rgba(8,26,44,0.92)_48%,rgba(8,26,44,0.55)_100%)]" />
          </div>

          <div className="relative mx-auto grid w-full max-w-7xl gap-10 px-4 py-14 sm:px-6 sm:py-20 lg:grid-cols-[1fr_0.9fr] lg:px-8 lg:py-28">
            <div className="max-w-3xl">
              <p className="mb-5 inline-flex rounded-md bg-white/10 px-3 py-2 text-xs font-bold text-[#E3F2FD] sm:px-4 sm:text-sm">
                Trusted digital partner for growing teams
              </p>
              <h1 className="text-3xl font-black leading-tight text-white sm:text-5xl lg:text-6xl">
                Empowering Businesses with <span className="text-[#FF7A00]">Tech Talent</span> & Digital Solutions
              </h1>
              <p className="mt-6 max-w-2xl text-base leading-8 text-slate-200 sm:text-lg">
                We provide skilled developers and end-to-end digital solutions to help your business grow, innovate, and scale.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href="#quote"
                  className="inline-flex items-center justify-center gap-2 rounded-md bg-[#FF7A00] px-5 py-4 text-sm font-bold text-white transition hover:bg-[#e66f00] sm:px-6"
                >
                  Hire Developers <ArrowRight className="size-4" aria-hidden />
                </a>
                <a
                  href="#services"
                  className="inline-flex items-center justify-center rounded-md border border-white/35 px-6 py-4 text-sm font-bold text-white transition hover:bg-white/10"
                >
                  Explore Services
                </a>
              </div>
            </div>

            <div className="hidden items-center justify-center lg:flex">
              <div className="grid w-full max-w-md gap-4">
                {["Web", "App", "Store", "Brand"].map((item, index) => (
                  <div
                    key={item}
                    className="ml-auto flex w-[72%] items-center gap-4 rounded-md border border-white/15 bg-white/10 p-4 text-white shadow-2xl backdrop-blur"
                    style={{ marginRight: `${index * 2.5}rem` }}
                  >
                    <span className="grid size-11 place-items-center rounded-md bg-[#0D47A1] font-black">{item.slice(0, 1)}</span>
                    <span className="text-sm font-bold">{item} Solutions</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-7xl px-4 pb-8 sm:px-6 sm:pb-10 lg:px-8">
            <div className="grid gap-4 rounded-lg bg-white p-4 shadow-xl sm:grid-cols-2 sm:p-5 lg:grid-cols-4">
              {stats.map((stat) => (
                <div key={stat.label} className="border-slate-200 px-4 py-3 lg:border-r last:lg:border-r-0">
                  <strong className="block text-3xl font-black text-[#081A2C]">{stat.value}</strong>
                  <span className="text-sm font-semibold text-slate-600">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="services" className="mx-auto w-full max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-sm font-black uppercase text-[#0D47A1]">Our Services</p>
            <h2 className="mt-3 text-2xl font-black sm:text-4xl">Innovative Solutions. Future Ready.</h2>
            <p className="mt-4 leading-7 text-slate-600">
              From idea to implementation, Edvixo delivers practical digital services that create real business impact.
            </p>
          </div>

          <div className="mt-8 grid gap-5 sm:mt-10 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service) => {
              const Icon = service.icon;

              return (
                <article key={service.title} className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
                  <span className="grid size-12 place-items-center rounded-md bg-[#E3F2FD] text-[#0D47A1]">
                    <Icon className="size-6" aria-hidden />
                  </span>
                  <h3 className="mt-5 text-lg font-black">{service.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-600">{service.text}</p>
                </article>
              );
            })}
          </div>
        </section>

        <section id="about" className="bg-white">
          <div className="mx-auto grid w-full max-w-7xl gap-8 px-4 py-12 sm:px-6 sm:py-16 lg:grid-cols-[0.9fr_1.1fr] lg:gap-10 lg:px-8">
            <div className="rounded-lg bg-[#081A2C] p-6 text-white sm:p-8">
              <Rocket className="size-10 text-[#FF7A00]" aria-hidden />
              <h2 className="mt-5 text-2xl font-black sm:text-3xl">Build With a Team That Understands Delivery</h2>
              <p className="mt-4 leading-7 text-slate-300">
                We combine strategy, design, and development so your website or product feels polished from the first screen.
              </p>
            </div>

            <div className="grid content-center gap-4">
              {highlights.map((item) => (
                <div key={item} className="flex items-start gap-4 rounded-md border border-slate-200 bg-[#F5F7FA] p-5">
                  <span className="grid size-9 shrink-0 place-items-center rounded-md bg-[#E3F2FD] text-[#0D47A1]">
                    <Check className="size-5" aria-hidden />
                  </span>
                  <p className="font-semibold text-slate-700">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="quote" className="mx-auto w-full max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
          <div className="grid gap-8 rounded-lg bg-[#0D47A1] p-6 text-white shadow-lg sm:p-8 md:grid-cols-[1fr_auto] md:items-center">
            <div>
              <Shield className="size-10 text-[#FF7A00]" aria-hidden />
              <h2 className="mt-4 text-2xl font-black sm:text-3xl">Ready to Start Your Edvixo Project?</h2>
              <p className="mt-3 max-w-2xl text-slate-200">
                Tell us what you want to build and we will help shape the right plan, team, and timeline.
              </p>
            </div>
            <a
              href="mailto:hello@edvixo.com"
              className="inline-flex items-center justify-center gap-2 rounded-md bg-[#FF7A00] px-6 py-4 text-sm font-bold text-white transition hover:bg-[#e66f00]"
            >
              Get a Quote <ArrowRight className="size-4" aria-hidden />
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
