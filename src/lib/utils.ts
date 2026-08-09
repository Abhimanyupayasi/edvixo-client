/**
 * @file src/lib/utils.ts
 * Shared utility functions used across the entire application.
 * Import from "@/lib/utils".
 */

import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import {
  format,
  formatDistanceToNow,
  parseISO,
  isValid as isValidDate,
} from "date-fns";
import slugify from "slugify";

// ── Tailwind class merger ──────────────────────────────────────────────────────

/**
 * Merges Tailwind CSS classes safely, resolving conflicts via tailwind-merge.
 * Conditionals are handled by clsx before merging.
 *
 * @example cn("px-4 py-2", isActive && "bg-primary", "text-sm")
 */
export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}

// ── Currency formatting ────────────────────────────────────────────────────────

/**
 * Converts an amount in the smallest currency unit to a human-readable string.
 *
 * @param amountInSmallestUnit - Amount in paise (INR) or cents (USD).
 * @param currency - ISO 4217 currency code, e.g. "INR" or "USD".
 * @returns Formatted string, e.g. "₹50,000.00" or "$100.00".
 *
 * @example formatCurrency(5000000, "INR") → "₹50,000.00"
 * @example formatCurrency(10000, "USD")   → "$100.00"
 */
export function formatCurrency(
  amountInSmallestUnit: number,
  currency: string = "INR"
): string {
  const amount = amountInSmallestUnit / 100;
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency,
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(amount);
}

// ── Date formatting ────────────────────────────────────────────────────────────

/**
 * Formats a date into a human-readable string using date-fns.
 *
 * @param date  - A Date object or ISO date string.
 * @param fmt   - A date-fns format string. Defaults to "dd MMM yyyy".
 * @returns Formatted date string, e.g. "15 Jan 2025".
 *
 * @example formatDate(new Date()) → "15 Jan 2025"
 * @example formatDate("2025-06-01", "MMMM d, yyyy") → "June 1, 2025"
 */
export function formatDate(
  date: Date | string,
  fmt: string = "dd MMM yyyy"
): string {
  const parsed = typeof date === "string" ? parseISO(date) : date;
  if (!isValidDate(parsed)) return "Invalid date";
  return format(parsed, fmt);
}

/**
 * Returns a relative time string from the given date to now.
 *
 * @param date - A Date object or ISO date string.
 * @returns A human-readable relative time, e.g. "2 hours ago", "3 days ago".
 *
 * @example formatRelativeTime(new Date(Date.now() - 3600000)) → "about 1 hour ago"
 */
export function formatRelativeTime(date: Date | string): string {
  const parsed = typeof date === "string" ? parseISO(date) : date;
  if (!isValidDate(parsed)) return "Invalid date";
  return formatDistanceToNow(parsed, { addSuffix: true });
}

// ── Slug generation ────────────────────────────────────────────────────────────

/**
 * Generates a URL-safe slug from any text string.
 * Uses the `slugify` package for consistent, predictable output.
 *
 * @param text - Input text, e.g. a blog title or portfolio item name.
 * @returns A lowercase, hyphen-separated slug.
 *
 * @example generateSlug("My New Blog Post!") → "my-new-blog-post"
 * @example generateSlug("Arya Restaurant - Case Study") → "arya-restaurant-case-study"
 */
export function generateSlug(text: string): string {
  return slugify(text, {
    lower: true,
    strict: true,   // strips special characters
    trim: true,
  });
}

// ── Invoice number generation ──────────────────────────────────────────────────

/**
 * Generates a formatted invoice number in INV-YYYY-XXXX format.
 *
 * @param sequenceNumber - The sequential invoice count (fetched from DB).
 * @returns A formatted invoice number, e.g. "INV-2025-0042".
 *
 * @example generateInvoiceNumber(42) → "INV-2025-0042"
 */
export function generateInvoiceNumber(sequenceNumber: number): string {
  const year = new Date().getFullYear();
  const padded = String(sequenceNumber).padStart(4, "0");
  return `INV-${year}-${padded}`;
}

// ── Text utilities ─────────────────────────────────────────────────────────────

/**
 * Truncates a string to a maximum length, appending an ellipsis if needed.
 *
 * @param text      - The source string.
 * @param maxLength - Maximum allowed character length (including ellipsis).
 * @returns Truncated string ending in "…" if over the limit.
 *
 * @example truncate("Hello, world!", 8) → "Hello, …"
 */
export function truncate(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength - 1).trimEnd() + "…";
}

/**
 * Estimates the reading time for a block of text content.
 * Uses an average reading speed of 200 words per minute.
 *
 * @param content - Raw text or HTML content.
 * @returns Estimated minutes to read, rounded up to the nearest integer.
 *
 * @example calculateReadTime("Lorem ipsum …") → 2
 */
export function calculateReadTime(content: string): number {
  // Strip HTML tags if content contains markup
  const plainText = content.replace(/<[^>]+>/g, " ");
  const wordCount = plainText.trim().split(/\s+/).filter(Boolean).length;
  const wordsPerMinute = 200;
  return Math.max(1, Math.ceil(wordCount / wordsPerMinute));
}
