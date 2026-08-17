import { CheckCircle, Star } from "lucide-react";

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

export function TestimonialsSection({
  testimonials = [],
}: TestimonialsSectionProps) {
  if (!testimonials.length) {
    return null;
  }

  return (
    <section className="bg-surface py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto mb-10 max-w-3xl text-center sm:mb-12">
          <p className="label-medium mb-2 uppercase tracking-widest text-primary">
            CLIENT STORIES
          </p>

          <h2 className="text-display-medium mb-4 font-bold leading-tight text-on-background">
            What Business Owners Say.
          </h2>

          <p className="body-large text-on-surface-variant">
            Not just developers or startups - real local businesses.
          </p>
        </div>

        {/* Testimonial Cards */}
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial) => {
            const authorDetails = [
              testimonial.designation,
              testimonial.business,
            ]
              .filter(Boolean)
              .join(" · ");

            return (
              <article
                key={testimonial._id ?? testimonial.name}
                className="rounded-shape-md border border-outline-variant bg-surface relative flex h-full min-h-[280px] flex-col p-5 sm:p-6"
              >
                {/* Rating */}
                <div
                  className="mb-5 flex items-center gap-1"
                  aria-label={`${testimonial.stars} out of 5 stars`}
                >
                  {Array.from({ length: testimonial.stars }).map((_, index) => (
                    <Star
                      key={index}
                      aria-hidden="true"
                      className="h-4 w-4 fill-tertiary text-tertiary"
                    />
                  ))}
                </div>

                {/* Testimonial */}
                <p className="body-large mb-7 flex-1 leading-relaxed text-on-background">
                  {testimonial.text}
                </p>

                {/* Author */}
                <div className="mt-auto flex items-end justify-between gap-4 border-t border-outline-variant/50 pt-5">
                  <div className="flex min-w-0 items-center gap-3">
                    <div
                      className="bg-primary-container text-on-primary-container flex h-11 w-11 shrink-0 items-center justify-center rounded-full text-sm font-semibold"
                      aria-hidden="true"
                    >
                      {testimonial.avatar}
                    </div>

                    <div className="min-w-0">
                      <p className="title-medium truncate text-on-background">
                        {testimonial.name}
                      </p>

                      {authorDetails ? (
                        <p className="body-medium line-clamp-2 text-on-surface-variant">
                          {authorDetails}
                        </p>
                      ) : null}
                    </div>
                  </div>

                  {/* Verified */}
                  <div className="bg-surface-container flex shrink-0 items-center gap-1 rounded-shape-xs px-2 py-1">
                    <CheckCircle
                      aria-hidden="true"
                      className="h-3.5 w-3.5 text-primary"
                    />

                    <span className="label-medium text-on-surface-variant">
                      Verified
                    </span>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

