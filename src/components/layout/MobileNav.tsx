"use client";

import Link from "next/link";
import { X } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface MobileNavProps {
  open: boolean;
  onClose: () => void;
  navLinks: { href: string; label: string }[];
  pathname: string;
}

export function MobileNav({ open, onClose, navLinks, pathname }: MobileNavProps) {
  return (
    <Sheet open={open} onOpenChange={onClose}>
      <SheetContent
        side="right"
        showCloseButton={false}
        className="w-72 p-0 border-l border-outline-variant bg-surface-container"
      >
        <SheetHeader className="flex flex-row items-center justify-between px-5 py-4 border-b border-outline-variant bg-surface-container-high">
          <div>
            <SheetTitle className="sr-only">Mobile navigation menu</SheetTitle>
            <SheetDescription className="sr-only">
              Navigate to pages on the public website
            </SheetDescription>
          </div>
          <Link href="/" onClick={onClose} className="flex items-center">
            <span className="title-large text-on-background font-semibold">EDVIXO</span>
          </Link>
          <Button
            variant="ghost"
            size="icon"
            className="h-9 w-9 rounded-full"
            onClick={onClose}
            aria-label="Close menu"
          >
            <X className="h-4 w-4" />
          </Button>
        </SheetHeader>

        <nav className="flex flex-col gap-1.5 p-4" aria-label="Mobile navigation">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={onClose}
              className={cn(
                "flex h-14 items-center px-4 label-large rounded-shape-sm transition-colors",
                pathname === link.href || pathname.startsWith(link.href + "/")
                  ? "text-on-primary bg-primary"
                  : "text-on-surface-variant hover:text-on-background hover:bg-surface-container-high"
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-outline-variant bg-surface-container-high">
          <Button
            asChild
            className="w-full bg-primary text-on-primary hover:bg-primary/90 rounded-md label-large h-11"
          >
            <Link href="/contact" onClick={onClose}>
              Get Free Consultation
            </Link>
          </Button>
        </div>
      </SheetContent>
    </Sheet>
  );
}
