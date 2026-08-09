export const BLOG_CATEGORIES = [
  "Getting Online",
  "Customer Growth",
  "Success Stories",
  "Local SEO",
  "E-Commerce",
] as const;

export const BLOG_FILTER_CATEGORIES = [
  "All",
  "Getting Online",
  "Customer Growth",
  "Success Stories",
  "Local SEO",
  "E-Commerce",
] as const;

export type BlogCategory = (typeof BLOG_CATEGORIES)[number];
export type BlogFilterCategory = (typeof BLOG_FILTER_CATEGORIES)[number];
