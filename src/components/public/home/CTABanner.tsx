import Link from "next/link";
import { Button } from "@/components/ui/button";

export function CTABanner() {
  return (
    <section className="bg-primary/80 py-20">
      <div className="mx-auto max-w-2xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="display-medium mb-4 leading-tight text-white">Ready to Build Your Website?</h2>
        <p className="body-large mb-8 leading-relaxed text-white">Tell us about your business and what you need. We&apos;ll help you understand the best next step.</p>
        <Button asChild className="h-12 rounded-shape-md bg-white px-8 text-base font-semibold text-primary hover:bg-white/90">
          <Link href="/contact">Start Your Project</Link>
        </Button>
      </div>
    </section>
  );
}
