import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Phone, Clock, MapPin, ArrowRight } from "lucide-react";

export function CTABanner() {
  return (
    <section className="bg-primary/80 py-20">
      <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="display-medium text-white mb-4 leading-tight">
          Let&apos;s Talk About Your Business
        </h2>
        <p className="body-large text-white mb-8 leading-relaxed">
          A free 30-minute call. I&apos;ll listen to what your business needs and tell
          you exactly how I can help - no pressure, no jargon.
        </p>

        {/* Buttons */}
        <div className="flex flex-col gap-3 sm:flex-row sm:justify-center mb-8">
          <Button
            asChild
            className="bg-white text-primary hover:bg-white/90 rounded-shape-md h-12 px-8 label-large text-base font-semibold"
          >
            <Link href="/contact">Book Free Consultation</Link>
          </Button>
          <Button
            asChild
            className="bg-tertiary-container text-on-tertiary-container hover:bg-tertiary-container/90 rounded-shape-md h-12 px-8 label-large text-base font-semibold inline-flex items-center gap-2"
          >
            <a
              href="https://wa.me/919685238884?text=Hi%2C%20I%20want%20to%20book%20a%20free%20consultation."
              target="_blank"
              rel="noopener noreferrer"
            >
              Chat on WhatsApp
              <ArrowRight className="w-4 h-4" />
            </a>
          </Button>
        </div>

        {/* Trust signals */}
        <div className="flex flex-wrap justify-center gap-4">
          <p className="label-medium text-white flex items-center gap-1.5">
            <Phone className="h-3.5 w-3.5" />
            +91 96852 38884
          </p>
          <p className="label-medium text-white">·</p>
          <p className="label-medium text-white flex items-center gap-1.5">
            <Clock className="h-3.5 w-3.5" />
            Reply within 4 hours
          </p>
          <p className="label-medium text-white">·</p>
          <p className="label-medium text-white flex items-center gap-1.5">
            <MapPin className="h-3.5 w-3.5" />
            Remote · Worldwide
          </p>
        </div>
      </div>
    </section>
  );
}
