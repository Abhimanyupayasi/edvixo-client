import { Star, CheckCircle } from "lucide-react";

type TestimonialItem = {
  _id?: string;
  stars: number;
  text: string;
  name: string;
  designation?: string;
  business?: string;
  avatar: string;
};

type TestimonialsSectionProps = {
  testimonials?: TestimonialItem[];
};

export function TestimonialsSection({ testimonials = [] }: TestimonialsSectionProps) {
  return (
    <section className="bg-surface py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12 text-center">
          <p className="label-medium text-primary mb-2 tracking-widest uppercase">
            CLIENT STORIES
          </p>
          <h2 className="text-display-medium text-on-background mb-4 leading-tight font-bold">
            What Business Owners Says.
          </h2>
          <p className="body-large text-on-surface-variant">
            Not just developers or startups - real local businesses.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t) => (
            <div
              key={t._id ?? t.name}
              className="rounded-shape-md border-outline-variant bg-surface relative flex flex-col border p-6"
            >
              {/* Decorative quote mark */}
              <span
                className="text-primary-container absolute top-4 left-5 text-7xl leading-none font-black select-none"
                aria-hidden
              >
                &ldquo;
              </span>

              {/* Stars */}
              <div className="relative z-10 mb-3 flex gap-0.5">
                {Array.from({ length: t.stars }).map((_, i) => (
                  <Star key={i} className="fill-tertiary text-tertiary h-4 w-4" />
                ))}
              </div>

              {/* Text */}
              <p className="body-large text-on-background relative z-10 mb-6 flex-1 leading-relaxed">
                {t.text}
              </p>

              {/* Author */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="bg-primary-container text-on-primary-container flex h-12 w-12 items-center justify-center rounded-full text-sm font-semibold">
                    {t.avatar}
                  </div>
                  <div>
                    <p className="title-medium text-on-background">{t.name}</p>
                    <p className="body-medium text-on-surface-variant">
                      {[t.designation, t.business].filter(Boolean).join(" · ")}
                    </p>
                  </div>
                </div>
                <div className="rounded-shape-xs bg-surface-container flex items-center gap-1 px-2 py-1">
                  <CheckCircle className="text-primary h-3.5 w-3.5" />
                  <span className="label-medium text-on-surface-variant">Verified</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
