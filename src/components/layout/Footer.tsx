import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Linkedin,
  Github,
  Twitter,
  Instagram,
  Youtube,
  Phone,
  Mail,
  MapPin,
  Clock,
} from "lucide-react";

const serviceLinks = [
  {
    href: "/services/web-development",
    label: "Web Development",
  },
  {
    href: "/services/app-development",
    label: "App Development",
  },
  {
    href: "/services/ecom-development",
    label: "Ecom Development",
  },
  {
    href: "/services/design",
    label: "Design",
  },
  {
    href: "/services/miscellaneous",
    label: "Miscellaneous",
  },
];

const workLinks = [
  {
    href: "/portfolio",
    label: "Our Works",
  },
  {
    href: "/services",
    label: "Services",
  },
  {
    href: "/portfolio/restaurant-ordering-experience",
    label: "Case Study",
  },
  {
    href: "/contact",
    label: "Contact",
  },
];

const socialLinks = [
  {
    href: "https://www.linkedin.com/company/edvixo",
    label: "LinkedIn",
    icon: Linkedin,
  },
  {
    href: "https://github.com",
    label: "GitHub",
    icon: Github,
  },
  {
    href: "https://x.com/edvixo",
    label: "Twitter/X",
    icon: Twitter,
  },
  {
    href: "https://www.instagram.com/edvixo",
    label: "Instagram",
    icon: Instagram,
  },
  {
    href: "https://youtube.com",
    label: "YouTube",
    icon: Youtube,
  },
];

export function Footer() {
  return (
    <footer
      className="bg-surface-container-highest border-t border-outline-variant"
      role="contentinfo"
    >
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        {/* Main grid */}
        <div className="grid grid-cols-1 gap-10 py-12 lg:grid-cols-4">
          {/* Brand */}
          <div className="space-y-4 text-center lg:text-left">
            <Link
              href="/"
              className="flex items-center justify-center lg:justify-start"
            >
              <span className="title-large font-semibold text-on-background">
                EDVIXO
              </span>
            </Link>

            <p className="body-medium leading-relaxed text-on-surface-variant">
              A digital solutions company building modern web experiences,
              growth platforms, and business technology for ambitious teams.
            </p>

            {/* Social icons */}
            <div className="flex items-center justify-center gap-2 lg:justify-start">
              {socialLinks.map(({ href, label, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-surface-container text-on-surface-variant transition-all duration-300 hover:-translate-y-1 hover:bg-primary-container hover:text-primary"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>

            <p className="body-medium text-on-surface-variant">
              Built to grow your business.
            </p>
          </div>

          {/* Services */}
          <nav
            className="space-y-4 text-center lg:text-left"
            aria-label="Footer services navigation"
          >
            <h3 className="title-medium text-on-background">
              Services
            </h3>

            <ul className="space-y-2">
              {serviceLinks.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    title={`${label} - Services by Edvixo`}
                    className="body-medium text-on-surface-variant transition-all duration-200 hover:pl-1 hover:text-primary hover:underline"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Quick Links */}
          <nav
            className="space-y-4 text-center lg:text-left"
            aria-label="Footer quick navigation"
          >
            <h3 className="title-medium text-on-background">
              Quick Links
            </h3>

            <ul className="space-y-2">
              {workLinks.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    title={`${label} - Edvixo Digital Solutions`}
                    className="body-medium text-on-surface-variant transition-all duration-200 hover:pl-1 hover:text-primary hover:underline"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact */}
          <div className="space-y-4 text-center lg:text-left">
            <h3 className="title-medium text-on-background">
              Get in Touch
            </h3>

            <address className="not-italic">
              <ul className="space-y-3">
                {/* WhatsApp / Phone */}
                <li>
                  <a
                    href="https://wa.me/919685238884"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Chat with Edvixo on WhatsApp"
                    className="body-medium flex items-center justify-center gap-2 text-on-surface-variant transition-colors hover:text-primary lg:justify-start"
                  >
                    <Phone className="h-4 w-4 shrink-0 text-primary" />
                    <span>+91 96852 38884</span>
                  </a>
                </li>

                {/* Email */}
                <li>
                  <a
                    href="mailto:hello@edvixo.com"
                    className="body-medium flex items-center justify-center gap-2 text-on-surface-variant transition-colors hover:text-primary lg:justify-start"
                  >
                    <Mail className="h-4 w-4 shrink-0 text-primary" />
                    <span>hello@edvixo.com</span>
                  </a>
                </li>

                {/* Location */}
                <li className="body-medium flex items-center justify-center gap-2 text-on-surface-variant lg:justify-start">
                  <MapPin className="h-4 w-4 shrink-0 text-primary" />
                  <span>Remote · Worldwide</span>
                </li>

                {/* Working hours */}
                <li className="body-medium flex items-center justify-center gap-2 text-on-surface-variant lg:justify-start">
                  <Clock className="h-4 w-4 shrink-0 text-primary" />
                  <span>Mon–Sat, 10am–7pm IST</span>
                </li>
              </ul>
            </address>

            <Button
              asChild
              className="h-9 w-full rounded-full bg-primary px-5 label-large text-on-primary hover:bg-primary/90 lg:w-auto"
              size="sm"
            >
              <Link href="/contact">
                Book Free Call
              </Link>
            </Button>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col gap-4 border-t border-outline-variant py-6 lg:flex-row lg:items-center lg:justify-between">
          <p className="order-2 text-center body-medium text-on-surface-variant lg:order-1 lg:text-left">
            © {new Date().getFullYear()} Edvixo. All rights reserved.
          </p>

          <div className="order-1 grid grid-cols-2 gap-x-4 gap-y-2 md:flex md:items-center md:justify-center lg:order-2 lg:justify-end">
            <Link
              href="/privacy"
              className="text-center text-sm text-on-surface-variant transition-colors hover:text-primary"
            >
              Privacy Policy
            </Link>

            <Link
              href="/terms"
              className="text-center text-sm text-on-surface-variant transition-colors hover:text-primary"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}