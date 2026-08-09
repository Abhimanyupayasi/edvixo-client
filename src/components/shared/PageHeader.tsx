import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

interface PageHeaderProps {
  overline?: string;
  title: string;
  subtitle?: string;
  className?: string;
  centered?: boolean;
  icon?: LucideIcon;
}

export function PageHeader({
  overline,
  title,
  subtitle,
  className,
  centered = false,
  icon: Icon,
}: PageHeaderProps) {
  return (
    <div
      className={cn(
        "space-y-2",
        centered && "text-center",
        className
      )}
    >
      {overline && (
        <p className="label-medium text-primary uppercase tracking-widest">
          {overline}
        </p>
      )}
      <div className={cn("flex items-center gap-3", centered && "justify-center")}>
        {Icon && (
          <Icon className="h-8 w-8 text-primary shrink-0" />
        )}
        <h2 className="display-small text-on-background">{title}</h2>
      </div>
      {subtitle && (
        <p className="body-large text-on-surface-variant max-w-2xl">
          {subtitle}
        </p>
      )}
    </div>
  );
}
