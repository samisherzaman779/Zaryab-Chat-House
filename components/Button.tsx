import type { ReactNode } from "react";

const styles = {
  primary: "bg-saffron text-ink hover:bg-[#f5b448]",
  danger: "bg-chili text-cream hover:bg-[#c42f26]",
  outline: "border-2 border-current hover:bg-current/10",
} as const;

export function Button({
  href, variant = "outline", external, children, className = "",
}: { href: string; variant?: keyof typeof styles; external?: boolean; children: ReactNode; className?: string }) {
  return (
    <a
      href={href}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className={`inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-6 font-semibold transition-colors ${styles[variant]} ${className}`}
    >
      {children}
    </a>
  );
}
