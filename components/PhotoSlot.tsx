import Image from "next/image";
import type { Field } from "@/data/business";
import type { Photo } from "@/data/menu";

/** Renders a real photo when verified, otherwise an honest placeholder. Never implies a fake photo is real. */
export function PhotoSlot({ photo, tone }: { photo: Field<Photo>; tone: string }) {
  if (photo.status === "verified") {
    const p = photo.value;
    return <Image src={p.src} alt={p.alt} width={p.width} height={p.height} sizes="(min-width:768px) 50vw, 100vw" className="h-full w-full object-cover" />;
  }
  return (
    <div className={`${tone} stripes relative h-full w-full`}>
      <span className="absolute bottom-4 left-4 rounded-full bg-cream/90 px-3 py-1 text-sm text-ink/80">Photography coming soon</span>
    </div>
  );
}
