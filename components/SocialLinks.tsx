
import { business } from "@/data/business";

const profiles = [
  { id: "instagram", label: "Instagram" },
  { id: "facebook", label: "Facebook" },
  { id: "youtube", label: "YouTube" },
  { id: "tiktok", label: "TikTok" },
] as const;

export function SocialLinks({
  theme = "dark",
}: {
  theme?: "dark" | "light";
}) {
  const link =
    theme === "dark"
      ? "inline-flex min-h-11 items-center gap-2 transition-colors hover:text-saffron"
      : "inline-flex min-h-11 items-center gap-2 underline decoration-chili decoration-2 underline-offset-4 transition-colors hover:text-chili";

  const pending =
    theme === "dark"
      ? "inline-flex min-h-11 flex-wrap items-center gap-2 text-cream/55"
      : "inline-flex min-h-11 flex-wrap items-center gap-2 text-ink/55";

  return (
    <ul className="flex flex-col">
      {profiles.map(({ id, label }) => {
        const profile = business[id];

        return (
          <li key={id}>
            {profile.status === "verified" ? (
              <a
                href={profile.value}
                target="_blank"
                rel="noopener noreferrer"
                className={link}
                aria-label={`Visit our ${label} profile (opens in a new tab)`}
              >
                {label}
              </a>
            ) : (
              <span className={pending}>
                {label}

                <span className="rounded-full border border-dashed border-current px-2 py-0.5 text-xs font-normal">
                  Coming soon
                </span>
              </span>
            )}
          </li>
        );
      })}
    </ul>
  );
}