"use client";

import { useState } from "react";
import Link from "next/link";
import { CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center py-12 text-center space-y-4">
        <CheckCircle className="h-16 w-16 text-primary" strokeWidth={1.5} />
        <h3 className="headline-large text-on-background">Message Received!</h3>
        <p className="body-large text-on-surface-variant max-w-sm leading-relaxed">
          Thank you! I&apos;ll review your message and get back within 4 hours.
        </p>
        <Button
          asChild
          className="mt-4 bg-primary-container text-on-primary-container hover:bg-primary-container/80 rounded-shape-full"
        >
          <Link href="/">Back to Home</Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="rounded-shape-md bg-surface p-8 shadow-[0_1px_3px_rgba(0,0,0,0.08)] md:p-10">
      <h2 className="headline-medium text-on-background mb-6">Tell Me About Your Project</h2>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          setSubmitted(true);
        }}
        className="space-y-5"
        aria-label="Contact form - get a free web development quote"
      >
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <div>
            <label className="mb-2 block text-sm font-medium text-on-background">
              Name<span className="text-error ml-1">*</span>
            </label>
            <Input
              placeholder="Your Name"
              className="min-h-13 bg-surface-container-low border border-outline-variant focus-visible:ring-primary rounded-shape-xs text-base"
              required
            />
          </div>
          <div>
            <label className="mb-2 block text-sm font-medium text-on-background">
              Business Name
            </label>
            <Input
              placeholder="Company Ltd"
              className="min-h-13 bg-surface-container-low border border-outline-variant focus-visible:ring-primary rounded-shape-xs text-base"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <div>
            <label className="mb-2 block text-sm font-medium text-on-background">Phone</label>
            <div className="flex min-h-13">
              <span className="flex min-h-13 items-center bg-surface-container-low px-3 rounded-l-shape-xs border border-r-0 border-outline-variant text-base body-medium text-on-surface-variant">
                +91
              </span>
              <Input
                placeholder="9685238884"
                className="min-h-13 bg-surface-container-low border border-outline-variant focus-visible:ring-primary rounded-l-none rounded-r-shape-xs text-base"
              />
            </div>
          </div>
          <div>
            <label className="mb-2 block text-sm font-medium text-on-background">
              Email<span className="text-error ml-1">*</span>
            </label>
            <Input
              type="email"
              placeholder="hello@business.com"
              className="min-h-13 bg-surface-container-low border border-outline-variant focus-visible:ring-primary rounded-shape-xs text-base"
              required
            />
          </div>
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium text-on-background">
            Business Type<span className="text-error ml-1">*</span>
          </label>
          <Select>
            <SelectTrigger
              className="min-h-13 bg-surface-container-low border border-outline-variant rounded-shape-xs text-base"
              aria-required="true"
            >
              <SelectValue placeholder="Select Business Type" />
            </SelectTrigger>
            <SelectContent
              position="popper"
              sideOffset={6}
              className="z-70 bg-surface-container-low border-outline-variant"
            >
              <SelectItem value="Restaurant / Cafe">Restaurant / Cafe</SelectItem>
              <SelectItem value="Clinic / Hospital">Clinic / Hospital</SelectItem>
              <SelectItem value="Coaching Institute">Coaching Institute</SelectItem>
              <SelectItem value="Retail Store">Retail Store</SelectItem>
              <SelectItem value="Real Estate">Real Estate</SelectItem>
              <SelectItem value="Other">Other</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <div>
            <label className="mb-2 block text-sm font-medium text-on-background">Project timeline</label>
            <Select>
              <SelectTrigger className="min-h-13 bg-surface-container-low border border-outline-variant rounded-shape-xs text-base">
                <SelectValue placeholder="Select timeline" />
              </SelectTrigger>
              <SelectContent
                position="popper"
                sideOffset={6}
                className="z-70 bg-surface-container-low border-outline-variant"
              >
                <SelectItem value="2-4 weeks">2-4 weeks</SelectItem>
                <SelectItem value="1-2 months">1-2 months</SelectItem>
                <SelectItem value="Flexible">Flexible</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div>
            <label className="mb-2 block text-sm font-medium text-on-background">Budget range</label>
            <Select>
              <SelectTrigger className="min-h-13 bg-surface-container-low border border-outline-variant rounded-shape-xs text-base">
                <SelectValue placeholder="Select budget" />
              </SelectTrigger>
              <SelectContent
                position="popper"
                sideOffset={6}
                className="z-70 bg-surface-container-low border-outline-variant"
              >
                <SelectItem value="Under ₹50k">Under ₹50k</SelectItem>
                <SelectItem value="₹50k - ₹1L">₹50k - ₹1L</SelectItem>
                <SelectItem value="₹1L - ₹3L">₹1L - ₹3L</SelectItem>
                <SelectItem value="₹3L+">₹3L+</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium text-on-background">
            Project details<span className="text-error ml-1">*</span>
          </label>
          <Textarea
            placeholder="Tell me about your goals, current challenges, and what you want the website to achieve."
            className="min-h-30 bg-surface-container-low border border-outline-variant focus-visible:ring-primary rounded-shape-xs text-base"
            required
          />
        </div>

        <Button
          type="submit"
          className="w-full bg-primary text-on-primary hover:bg-primary/90 rounded-shape-full h-12 label-large gap-2"
        >
          Send Message
        </Button>
      </form>
    </div>
  );
}
