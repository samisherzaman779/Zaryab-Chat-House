"use client";

import dynamic from "next/dynamic";

const ActionBar = dynamic(() => import("./ActionBar").then((m) => m.ActionBar), { ssr: false });

/** Mobile bottom bar — client-only to avoid hydration mismatches from viewport/chrome tweaks. */
export function ActionBarClient() {
  return <ActionBar />;
}
