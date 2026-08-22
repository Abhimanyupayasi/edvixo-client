interface Solution {
  title: string;
  heroTitle: string;
  heroDescription: string;
  whoItsFor: string[];
  problems: string[];
  solutions: string[];
  features: string[];
  benefits: string[];
  process: string[];
  faqs: {
    question: string;
    answer: string;
  }[];
  finalCta: string;
}

interface SolutionDetailProps {
  solution: Solution;
}

export default function SolutionDetail({
  solution,
}: SolutionDetailProps) {
  return (
    <main className="bg-background text-on-background">

      {/* Hero */}
      <section className="bg-surface py-24">
        <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">

          <p className="uppercase tracking-widest text-xs font-semibold text-primary mb-4">
            EDVIXO SOLUTIONS
          </p>

          <h1 className="text-4xl md:text-6xl font-bold max-w-4xl leading-tight">
            {solution.heroTitle}
          </h1>

          <p className="mt-6 text-lg md:text-xl text-on-surface-variant max-w-3xl leading-relaxed">
            {solution.heroDescription}
          </p>

        </div>
      </section>

      {/* Who it's for */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">

          <p className="uppercase tracking-widest text-xs font-semibold text-primary mb-3">
            WHO IT&apos;S FOR
          </p>

          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            Built for Your Business
          </h2>

          <div className="flex flex-wrap gap-3">
            {solution.whoItsFor.map((item) => (
              <span
                key={item}
                className="px-4 py-2 rounded-full bg-secondary-container text-on-secondary-container"
              >
                {item}
              </span>
            ))}
          </div>

        </div>
      </section>

      {/* Problems */}
      <section className="bg-surface py-20">
        <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">

          <p className="uppercase tracking-widest text-xs font-semibold text-primary mb-3">
            COMMON CHALLENGES
          </p>

          <h2 className="text-3xl md:text-4xl font-bold mb-10">
            Problems We Help Solve
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {solution.problems.map((problem) => (
              <div
                key={problem}
                className="p-6 rounded-shape-md border border-outline-variant bg-surface-container-lowest"
              >
                <p className="text-on-surface-variant leading-relaxed">
                  {problem}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Solutions */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">

          <p className="uppercase tracking-widest text-xs font-semibold text-primary mb-3">
            OUR APPROACH
          </p>

          <h2 className="text-3xl md:text-4xl font-bold mb-10">
            How We Help
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {solution.solutions.map((item) => (
              <div
                key={item}
                className="p-6 rounded-shape-md bg-primary-container"
              >
                <h3 className="font-semibold text-lg">
                  {item}
                </h3>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Features */}
      <section className="bg-surface py-20">
        <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">

          <p className="uppercase tracking-widest text-xs font-semibold text-primary mb-3">
            WHAT YOU GET
          </p>

          <h2 className="text-3xl md:text-4xl font-bold mb-10">
            Key Features
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {solution.features.map((feature) => (
              <div
                key={feature}
                className="p-6 rounded-shape-md border border-outline-variant bg-surface-container-lowest"
              >
                <h3 className="font-semibold">
                  {feature}
                </h3>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Benefits */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">

          <p className="uppercase tracking-widest text-xs font-semibold text-primary mb-3">
            BUSINESS BENEFITS
          </p>

          <h2 className="text-3xl md:text-4xl font-bold mb-10">
            Why Choose This Solution?
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {solution.benefits.map((benefit) => (
              <div
                key={benefit}
                className="p-6 rounded-shape-md bg-surface-container"
              >
                <h3 className="font-semibold">
                  {benefit}
                </h3>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Process */}
      <section className="bg-surface py-20">
        <div className="mx-auto max-w-4xl px-4 md:px-6 lg:px-8">

          <p className="uppercase tracking-widest text-xs font-semibold text-primary mb-3">
            OUR PROCESS
          </p>

          <h2 className="text-3xl md:text-4xl font-bold mb-10">
            How We Work
          </h2>

          <div className="space-y-6">
            {solution.process.map((step, index) => (
              <div
                key={step}
                className="flex items-start gap-5"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary-container font-bold">
                  {index + 1}
                </div>

                <p className="pt-2 text-on-surface-variant leading-relaxed">
                  {step}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* FAQs */}
      <section className="py-20">
        <div className="mx-auto max-w-4xl px-4 md:px-6 lg:px-8">

          <p className="uppercase tracking-widest text-xs font-semibold text-primary mb-3">
            FAQ
          </p>

          <h2 className="text-3xl md:text-4xl font-bold mb-10">
            Frequently Asked Questions
          </h2>

          <div className="space-y-6">
            {solution.faqs.map((faq) => (
              <div
                key={faq.question}
                className="border-b border-outline-variant pb-6"
              >
                <h3 className="text-lg font-semibold mb-2">
                  {faq.question}
                </h3>

                <p className="text-on-surface-variant leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="bg-surface py-20">
        <div className="mx-auto max-w-4xl px-4 md:px-6 lg:px-8 text-center">

          <h2 className="text-3xl md:text-5xl font-bold">
            {solution.finalCta}
          </h2>

          <p className="mt-5 text-on-surface-variant">
            Talk to the Edvixo team about your requirements and find the right
            digital solution for your business.
          </p>

        </div>
      </section>

    </main>
  );
}