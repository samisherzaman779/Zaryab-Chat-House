import { MessageCircle, Navigation, Phone } from "lucide-react";
import { directionsHref, telHref, whatsappHref } from "@/data/business";

const item = "flex min-h-14 flex-1 flex-col items-center justify-center gap-0.5 text-sm font-semibold";

export function ActionBar() {
  return (
    <nav
      aria-label="Quick actions"
      className="on-dark fixed inset-x-0 bottom-0 z-50 flex bg-ink pb-[env(safe-area-inset-bottom)] text-cream md:hidden"
    >
      {telHref && (
        <a href={telHref} className={item}>
          <Phone aria-hidden size={20} /> Call
        </a>
      )}
      <a href={directionsHref} target="_blank" rel="noopener noreferrer" className={`${item} bg-saffron text-ink`}>
        <Navigation aria-hidden size={20} /> Directions
      </a>
      {whatsappHref ? (
        <a href={whatsappHref} target="_blank" rel="noopener noreferrer" className={item}>
          <MessageCircle aria-hidden size={20} /> WhatsApp
        </a>
      ) : (
        <span className={`${item} text-cream/75`}>
          <MessageCircle aria-hidden size={20} /> WhatsApp
          <span className="sr-only">, not available yet</span>
          <span aria-hidden className="-mt-1 text-xs font-normal">soon</span>
        </span>
      )}
    </nav>
  );
}
