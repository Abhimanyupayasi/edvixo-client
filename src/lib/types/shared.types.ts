import { Types } from "mongoose";

// ─── Reusable building blocks ────────────────────────────────────────────────

/** Every document we create will extend this so timestamps are always typed */
export interface BaseDocument {
  _id: Types.ObjectId;
  createdAt: Date;
  updatedAt: Date;
}

/** A key-value pair used for flexible metadata across schemas */
export interface MetaField {
  key: string;
  value: string;
}

/** SEO fields reused across Blog posts and Portfolio items */
export interface SEOFields {
  metaTitle?: string;
  metaDescription?: string;
  ogImage?: string;       // Open Graph image URL
  keywords?: string[];
  canonicalUrl?: string;
}

/** Monetary amount - always store in smallest unit (paise/cents) to avoid floating point bugs */
export interface Money {
  amount: number;         // e.g. 5000000 = ₹50,000.00 (in paise)
  currency: string;       // ISO 4217 code, e.g. "INR", "USD"
}

/** A file attachment that can be linked to projects, invoices, messages, etc. */
export interface Attachment {
  name: string;
  url: string;            // Cloudinary / S3 URL
  fileType: string;       // MIME type, e.g. "application/pdf"
  sizeBytes: number;
  uploadedAt: Date;
}

// ─── Enums (use string enums so MongoDB stores readable values) ───────────────

export enum UserRole {
  ADMIN  = "admin",
  CLIENT = "client",
}

export enum LeadStatus {
  NEW            = "new",
  CONTACTED      = "contacted",
  QUALIFIED      = "qualified",
  CONVERTED      = "converted",
  PROPOSAL_SENT  = "proposal_sent",
  WON            = "won",
  LOST           = "lost",
}

export enum LeadSource {
  CONTACT_FORM   = "contact_form",
  REFERRAL       = "referral",
  LINKEDIN       = "linkedin",
  UPWORK         = "upwork",
  FIVERR         = "fiverr",
  DIRECT_EMAIL   = "direct_email",
  OTHER          = "other",
}

export enum ProjectStatus {
  LEAD         = "lead",        // Not yet confirmed
  PLANNING     = "planning",    // Discovery / scoping
  IN_PROGRESS  = "in_progress",
  ON_HOLD      = "on_hold",
  IN_REVIEW    = "in_review",   // Client review / UAT
  COMPLETED    = "completed",
  CANCELLED    = "cancelled",
}

export enum MilestoneStatus {
  PENDING     = "pending",
  IN_PROGRESS = "in_progress",
  COMPLETED   = "completed",
  BLOCKED     = "blocked",
}

export enum InvoiceStatus {
  DRAFT    = "draft",
  SENT     = "sent",
  VIEWED   = "viewed",     // Client opened the invoice
  PARTIALLY_PAID = "partially_paid",
  PAID     = "paid",
  OVERDUE  = "overdue",
  VOID     = "void",
}

export enum PaymentMethod {
  BANK_TRANSFER = "bank_transfer",
  UPI           = "upi",
  PAYPAL        = "paypal",
  STRIPE        = "stripe",
  CASH          = "cash",
  OTHER         = "other",
}

export enum MessageSenderType {
  ADMIN  = "admin",
  CLIENT = "client",
}

export enum BlogStatus {
  DRAFT     = "draft",
  PUBLISHED = "published",
  ARCHIVED  = "archived",
}

export enum PortfolioStatus {
  DRAFT     = "draft",
  PUBLISHED = "published",
  ARCHIVED  = "archived",
}
