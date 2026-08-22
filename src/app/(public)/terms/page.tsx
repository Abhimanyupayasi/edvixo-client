import type { Metadata } from "next";
import { SITE_URL } from "@/lib/site";
import LegalLayout from "@/components/legal/LegalLayout";

export const metadata: Metadata = {
  title: "Terms of Service - Sapnendra Jaiswal",
  description:
    "Terms and conditions for web development services at sapnendra.dev. Clear scope, fair payment terms, and honest revision policy.",
  alternates: { canonical: `${SITE_URL}/terms` },
};

const TERMS_TOC = [
  { id: "services-provided", label: "Services Provided" },
  { id: "project-process", label: "Project Process & Timelines" },
  { id: "payment-terms", label: "Payment Terms" },
  { id: "intellectual-property", label: "Intellectual Property" },
  { id: "revisions-scope", label: "Revisions & Scope Changes" },
  { id: "liability", label: "Limitation of Liability" },
  { id: "termination", label: "Termination" },
  { id: "governing-law", label: "Governing Law" },
];

function LegalSection({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="mb-14 scroll-mt-8">
      <h2 className="mb-3 text-title-large font-bold text-on-background">{title}</h2>
      <div className="mb-6 h-px w-full bg-outline-variant" />
      <div className="space-y-4 text-[15px] leading-relaxed text-on-surface-variant">
        {children}
      </div>
    </section>
  );
}

function LegalHighlight({
  children,
  variant = "green",
}: {
  children: React.ReactNode;
  variant?: "green" | "amber";
}) {
  return (
    <div
      className={`my-4 rounded-shape-md border-l-4 p-5 ${
        variant === "green"
          ? "border-primary bg-surface-container-low"
          : "border-tertiary bg-tertiary-container"
      }`}
    >
      <p
        className={`text-sm leading-relaxed font-medium ${
          variant === "green"
            ? "text-on-primary-container"
            : "text-on-tertiary-container"
        }`}
      >
        {children}
      </p>
    </div>
  );
}

function LegalList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-2.5 pl-1">
      {items.map((item, i) => (
        <li key={i} className="flex items-start gap-3">
          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export default function TermsPage() {
  return (
    <LegalLayout
      title="Terms of Service"
      lastUpdated="March 2026"
      effectiveDate="March 2026"
      summaryChips={["Clear terms", "Fixed pricing", "Fair refunds"]}
      tocItems={TERMS_TOC}
    >
      <LegalSection id="services-provided" title="Services Provided">
        <p>
          Sapnendra Jaiswal (&quot;I&quot;, &quot;me&quot;, or &quot;the developer&quot;) provides custom web
          development services including but not limited to:
        </p>
        <LegalList
          items={[
            "Custom website design and development for businesses.",
            "E-commerce store development and configuration.",
            "Online booking and appointment system development.",
            "Business dashboard and data visualisation development.",
            "Website redesign, performance optimisation, and SEO setup.",
            "Ongoing website maintenance and support packages.",
          ]}
        />
        <p>
          All services are provided on a project-by-project basis unless a separate
          maintenance agreement is in place. Each project begins with a written
          proposal that defines the exact scope, deliverables, price, and timeline.
        </p>
      </LegalSection>

      <LegalSection id="project-process" title="Project Process & Timelines">
        <p>
          Every project follows a structured process to ensure clear expectations and
          timely delivery:
        </p>
        <LegalList
          items={[
            "Discovery call: a free 15-minute consultation to understand your requirements before any work or payment is committed.",
            "Written proposal: a document outlining exact scope, deliverables, price, and estimated timeline. Work begins only after you approve this document.",
            "Design approval: the homepage design is completed first and submitted for your review before development of other pages begins.",
            "Development and delivery: remaining pages are built following your approved design. You are kept informed throughout.",
            "Review period: you have 7 days after delivery to review and request revisions within the agreed scope.",
          ]}
        />
        <p>
          Timelines stated in proposals are estimates based on prompt feedback from
          you. Delays caused by slow responses or changes outside the agreed scope may
          extend the timeline.
        </p>
      </LegalSection>

      <LegalSection id="payment-terms" title="Payment Terms">
        <LegalHighlight variant="amber">
          A deposit is required before project work begins, with the remaining balance
          due upon completion. The exact split, currency, and payment schedule are
          agreed in writing in your project proposal before any work starts.
        </LegalHighlight>
        <p>
          Accepted payment methods will be specified in your proposal. Invoice payment
          is due within 7 days of the invoice date unless otherwise agreed in writing.
        </p>
        <LegalList
          items={[
            "The deposit is non-refundable once development work has begun, as it covers design and planning time already invested.",
            "If you cancel after work has begun, you are liable for payment proportional to the work completed up to the cancellation date.",
            "Final deliverables, including website files, access credentials, and source code (where applicable), are released only upon receipt of final payment.",
            "Late payments beyond 14 days may incur a late fee of 2% per month on the outstanding balance.",
          ]}
        />
      </LegalSection>

      <LegalSection id="intellectual-property" title="Intellectual Property">
        <p>
          Upon receipt of full payment, you own the final deliverables of your project,
          including:
        </p>
        <LegalList
          items={[
            "The custom design created specifically for your project.",
            "All written content developed as part of your project.",
            "The compiled website files deployed to your hosting.",
          ]}
        />
        <p>The following are not transferred as part of the project:</p>
        <LegalList
          items={[
            "Third-party libraries, frameworks, and open-source software used in development (these remain under their respective licences).",
            "Stock images or fonts licensed for the project (you receive usage rights, not ownership).",
            "My development tools, workflows, and internal processes.",
          ]}
        />
        <p>
          I retain the right to display the completed project in my portfolio and case
          studies unless you request otherwise in writing.
        </p>
      </LegalSection>

      <LegalSection id="revisions-scope" title="Revisions & Scope Changes">
        <p>
          Each project proposal includes a defined number of revision rounds. Standard
          terms are:
        </p>
        <LegalList
          items={[
            "Up to 2 rounds of revisions on the homepage design before development begins.",
            "Up to 2 rounds of revisions on completed pages during the 7-day review period after delivery.",
            "Revisions must address issues within the agreed scope - not new features or significant design direction changes.",
          ]}
        />
        <p>
          Any changes requested outside the agreed scope - including new pages, new
          features, or significant design pivots - will be quoted separately as a
          change order before work proceeds.
        </p>
        <LegalHighlight variant="green">
          I aim to get things right the first time. If something isn&apos;t working as
          agreed in the proposal, it will be fixed at no additional cost, regardless
          of revision rounds.
        </LegalHighlight>
      </LegalSection>

      <LegalSection id="liability" title="Limitation of Liability">
        <p>
          While I take every precaution to deliver high-quality, reliable work, I
          cannot be held liable for:
        </p>
        <LegalList
          items={[
            "Loss of revenue, data, or business opportunities resulting from website downtime, bugs, or third-party service failures after the project is handed over.",
            "Issues arising from changes you or a third party make to the website after delivery.",
            "Search engine ranking changes - while I implement SEO best practices, I cannot guarantee specific positions.",
            "Data loss due to hosting provider failures after delivery.",
          ]}
        />
        <p>
          My total liability for any claim arising from a project is limited to the
          total amount you paid for that project.
        </p>
      </LegalSection>

      <LegalSection id="termination" title="Termination">
        <p>
          Either party may terminate a project with written notice. In the event of
          termination:
        </p>
        <LegalList
          items={[
            "You are liable for payment covering all work completed up to the termination date, calculated proportionally.",
            "The deposit is non-refundable in all circumstances once work has commenced.",
            "All work completed and paid for up to that point will be delivered to you within 7 business days of final payment.",
            "Any unpaid balance for completed work remains due and payable.",
          ]}
        />
        <p>
          I reserve the right to terminate a project and retain all payments received
          if you engage in abusive, threatening, or unethical behaviour toward me or
          my work.
        </p>
      </LegalSection>

      <LegalSection id="governing-law" title="Governing Law">
        <p>
          These Terms of Service are governed by the laws of India. Any disputes
          arising from these terms or the services provided shall be resolved by
          good-faith negotiation in the first instance.
        </p>
        <p>
          If a dispute cannot be resolved by negotiation, both parties agree to
          attempt mediation before pursuing legal action. The courts of Bhopal, Madhya
          Pradesh, India shall have jurisdiction over any unresolved disputes.
        </p>
        <p>
          These terms were last updated in March 2026. Continued use of services after
          any update constitutes acceptance of the revised terms.
        </p>
      </LegalSection>
    </LegalLayout>
  );
}

