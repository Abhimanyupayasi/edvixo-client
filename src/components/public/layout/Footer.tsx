import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Linkedin, Github, Twitter, Instagram, Youtube, Phone, Mail, MapPin, Clock } from "lucide-react";

const serviceLinks = [
  { href: "/services/business-websites", label: "Business Websites" },
  { href: "/services/online-stores", label: "Online Stores" },
  { href: "/services/booking-systems", label: "Booking Systems" },
  { href: "/services/local-seo", label: "Local SEO" },
  { href: "/services/website-redesign", label: "Website Redesign" },
  { href: "/services/dashboards", label: "Dashboards" },
];

const workLinks = [
  { href: "/work", label: "Our Works" },
  { href: "/services", label: "Services" },
  { href: "/work/arya-family-restaurant", label: "Case Study" },
  { href: "/contact", label: "Contact" },
];

const socialLinks = [
  { href: "https://www.linkedin.com/company/edvixo", label: "LinkedIn", icon: Linkedin },
  { href: "https://github.com", label: "GitHub", icon: Github },
  { href: "https://x.com/edvixo", label: "Twitter/X", icon: Twitter },
  { href: "https://www.instagram.com/edvixo", label: "Instagram", icon: Instagram },
  { href: "https://youtube.com", label: "YouTube", icon: Youtube },
];

export function Footer() {
  return (
    <footer className="bg-surface-container-highest border-t border-outline-variant" role="contentinfo">
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        {/* Main grid */}
        <div className="grid grid-cols-1 gap-10 py-12 lg:grid-cols-4">
          {/* Column 1 - Brand */}
          <div className="space-y-4 text-center lg:text-left">
            <Link href="/" className="flex items-center justify-center lg:justify-start">
              <span className="title-large text-on-background font-semibold">EDVIXO</span>
            </Link>
            <p className="body-medium text-on-surface-variant leading-relaxed">
              A digital solutions company building modern web experiences, growth platforms, and business technology for ambitious teams.
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
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-surface-container text-on-surface-variant transition-colors hover:bg-primary-container hover:text-primary"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
            <p className="body-medium text-on-surface-variant">
              Built to grow your business.
            </p>
          </div>

          {/* Column 2 - Services */}
          <nav
            className="space-y-4 text-center lg:text-left"
            aria-label="Footer navigation"
          >
            <h3 className="title-medium text-on-background">Services</h3>
            <ul className="space-y-2">
              {serviceLinks.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    title={`${label} - Services by Edvixo`}
                    className="body-medium text-on-surface-variant transition-colors hover:text-primary hover:underline"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Column 3 - Work */}
          <nav
            className="space-y-4 text-center lg:text-left"
            aria-label="Footer navigation"
          >
            <h3 className="title-medium text-on-background">Quick Links</h3>
            <ul className="space-y-2">
              {workLinks.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    title={`${label} - Edvixo Digital Solutions`}
                    className="body-medium text-on-surface-variant transition-colors hover:text-primary hover:underline"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Column 4 - Contact */}
          <div className="space-y-4 text-center lg:text-left">
            <h3 className="title-medium text-on-background">Get in Touch</h3>
            <address className="not-italic">
            <ul className="space-y-3">
              <li>
                <a
                  href="https://wa.me/919685238884"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Chat with Edvixo on WhatsApp"
                  className="flex items-center justify-center gap-2 body-medium text-on-surface-variant hover:text-primary transition-colors lg:justify-start"
                >
                  <Phone className="h-4 w-4 shrink-0 text-primary" />
                  <span>+91 96852 38884</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:hello@edvixo.com"
                  className="flex items-center justify-center gap-2 body-medium text-on-surface-variant hover:text-primary transition-colors lg:justify-start"
                >
                  <Mail className="h-4 w-4 shrink-0 text-primary" />
                  <span>hello@edvixo.com</span>
                </a>
              </li>
              <li className="flex items-center justify-center gap-2 body-medium text-on-surface-variant lg:justify-start">
                <MapPin className="h-4 w-4 shrink-0 text-primary" />
                <span>Remote · Worldwide</span>
              </li>
              <li className="flex items-center justify-center gap-2 body-medium text-on-surface-variant lg:justify-start">
                <Clock className="h-4 w-4 shrink-0 text-primary" />
                <span>Mon–Sat, 10am–7pm IST</span>
              </li>
            </ul>
            </address>
            <Button
              asChild
              className="w-full bg-primary text-on-primary hover:bg-primary/90 rounded-full h-9 px-5 label-large lg:w-auto"
              size="sm"
            >
              <Link href="/contact">Book Free Call</Link>
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
