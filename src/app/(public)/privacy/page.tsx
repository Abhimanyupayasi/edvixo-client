import type { Metadata } from "next";
import { SITE_URL } from "@/lib/site";
import LegalLayout from "@/components/legal/LegalLayout";

export const metadata: Metadata = {
  title: "Privacy Policy - Sapnendra Jaiswal",
  description:
    "How sapnendra.dev collects, uses, and protects your personal information. No data selling. No ads. Your data stays yours.",
  alternates: { canonical: `${SITE_URL}/privacy` },
};

const PRIVACY_TOC = [
  { id: "information-we-collect", label: "Information We Collect" },
  { id: "how-we-use", label: "How We Use Your Information" },
  { id: "data-storage", label: "Data Storage & Security" },
  { id: "cookies", label: "Cookies" },
  { id: "third-party-services", label: "Third-Party Services" },
  { id: "your-rights", label: "Your Rights" },
  { id: "contact-us", label: "Contact Us" },
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

export default function PrivacyPage() {
  return (
    <LegalLayout
      title="Privacy Policy"
      lastUpdated="March 2026"
      effectiveDate="March 2026"
      summaryChips={["No data selling", "No ads", "Your data stays yours"]}
      tocItems={PRIVACY_TOC}
    >
      <LegalSection id="information-we-collect" title="Information We Collect">
        <p>
          When you use this website or contact me about a project, I may collect the
          following types of information:
        </p>
        <LegalList
          items={[
            "Contact information you provide: your name, email address, company name, and the message you send via the contact form.",
            "Project details you share: descriptions of your business, requirements, budget range, and timeline preferences.",
            "Technical information: browser type, device type, and pages visited - collected automatically via analytics tools.",
            "Communication records: emails, messages, and notes from our conversations related to your project.",
          ]}
        />
      </LegalSection>

      <LegalSection id="how-we-use" title="How We Use Your Information">
        <p>
          Your information is used solely to provide and improve the services you have
          requested. Specifically:
        </p>
        <LegalList
          items={[
            "To respond to your enquiry and discuss your project requirements.",
            "To create and manage your client portal account if you proceed with a project.",
            "To send project updates, invoices, and delivery notifications related to your specific project.",
            "To improve the website and understand how visitors use it, using anonymised analytics data.",
          ]}
        />
        <p>
          I do not sell, rent, or share your personal information with any third party
          for marketing or advertising purposes. Ever.
        </p>
      </LegalSection>

      <LegalSection id="data-storage" title="Data Storage & Security">
        <LegalHighlight variant="green">
          Your data is stored securely in encrypted MongoDB databases hosted on MongoDB
          Atlas with enterprise-grade security. I do not sell or share your personal
          information with third parties for marketing purposes.
        </LegalHighlight>
        <p>
          Project files, documents, and communications shared through the client portal
          are stored using Cloudinary (images) and MongoDB Atlas (structured data),
          both of which enforce encryption at rest and in transit.
        </p>
        <p>
          Passwords are hashed using bcrypt with a minimum of 12 salt rounds and are
          never stored in plain text. Password reset tokens are cryptographically
          generated and stored only as SHA-256 hashes.
        </p>
      </LegalSection>

      <LegalSection id="cookies" title="Cookies">
        <p>
          This website uses minimal cookies necessary for authentication and basic site
          functionality:
        </p>
        <LegalList
          items={[
            "Session cookies: used to keep you logged in to the client portal during your session. These expire when you close the browser.",
            "Authentication tokens: used to securely identify your account when you are signed in to the client portal.",
            "Analytics cookies: anonymised usage data collected via privacy-focused analytics. No personally identifiable data is stored in analytics cookies.",
          ]}
        />
        <p>
          This website does not use advertising cookies, tracking pixels, or any
          third-party marketing cookies.
        </p>
      </LegalSection>

      <LegalSection id="third-party-services" title="Third-Party Services">
        <p>
          This website uses a small number of trusted third-party services to operate:
        </p>
        <LegalList
          items={[
            "Resend - for sending transactional emails (enquiry confirmations, portal credentials). Your email address is transmitted to Resend solely for this purpose.",
            "Cloudinary - for storing and serving images and files shared through the client portal.",
            "MongoDB Atlas - for secure database hosting of your project data and account information.",
            "Vercel - for website hosting and delivery. Standard web server logs may be retained for security purposes.",
          ]}
        />
        <p>
          None of these services are provided with your data for marketing or
          advertising purposes. Each service is bound by its own privacy policy and
          GDPR-compliant data processing agreements.
        </p>
      </LegalSection>

      <LegalSection id="your-rights" title="Your Rights">
        <p>You have the following rights regarding your personal data:</p>
        <LegalList
          items={[
            "Access: You can request a copy of the personal data I hold about you at any time.",
            "Correction: If any information is inaccurate, you can request that it be corrected.",
            "Deletion: You can request that your personal data be deleted. Note that some data may need to be retained for legal or contractual reasons (e.g. invoice records).",
            "Portability: You can request your data in a structured, machine-readable format.",
            "Objection: You can object to the processing of your data for any purpose.",
          ]}
        />
        <p>
          To exercise any of these rights, email support@sapnendra.tech with the subject
          line &quot;Data Request - [Your Name]&quot;. I will respond within 30 days.
        </p>
      </LegalSection>

      <LegalSection id="contact-us" title="Contact Us">
        <p>
          If you have questions, concerns, or requests regarding this Privacy Policy or
          the way your data is handled, please get in touch:
        </p>
        <LegalList
          items={[
            "Email: support@sapnendra.tech",
            "Website: sapnendra.dev/contact",
            "Response time: within 24–48 hours on business days",
          ]}
        />
        <p>
          This Privacy Policy was last updated in March 2026. Any significant changes
          to this policy will be communicated to active clients by email.
        </p>
      </LegalSection>
    </LegalLayout>
  );
}

