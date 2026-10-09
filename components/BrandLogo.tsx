import { brandMainLogo } from "@/data/brand";

export function BrandLogo({
  priority,
  className = "h-11 w-auto object-contain object-left",
}: {
  priority?: boolean;
  className?: string;
}) {
  return (
    // SVG wordmark — native img keeps vectors sharp and avoids Image SVG config.
    <img
      src={brandMainLogo.src}
      alt={brandMainLogo.alt}
      width={brandMainLogo.width}
      height={brandMainLogo.height}
      className={className}
      decoding="async"
      fetchPriority={priority ? "high" : "auto"}
    />
  );
}
