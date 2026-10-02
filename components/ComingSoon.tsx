export function ComingSoon({ label = "Coming soon" }: { label?: string }) {
  return (
    <span className="inline-flex items-center rounded-full border border-dashed border-ink/40 px-3 py-1 text-sm text-ink/70">
      {label}
    </span>
  );
}
