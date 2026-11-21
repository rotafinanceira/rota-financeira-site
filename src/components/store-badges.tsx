import { links } from "@/lib/links";
import { PhoneGlyph, PlayGlyph } from "./icons";

function Selo({
  href,
  pequeno,
  grande,
  icone,
}: {
  href: string;
  pequeno: string;
  grande: string;
  icone: React.ReactNode;
}) {
  return (
    <a
      href={href}
      className="inline-flex h-12 items-center gap-2.5 rounded-lg bg-black px-4 text-white ring-1 ring-white/25 transition hover:bg-neutral-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-lime"
      {...(href.startsWith("http")
        ? { target: "_blank", rel: "noopener noreferrer" }
        : {})}
    >
      <span className="size-6 shrink-0">{icone}</span>
      <span className="flex flex-col leading-none">
        <span className="text-[0.6rem] uppercase tracking-wide opacity-80">
          {pequeno}
        </span>
        <span className="mt-0.5 text-[1.05rem] font-semibold">{grande}</span>
      </span>
    </a>
  );
}

/** Selos de download. Os endereços vêm de `NEXT_PUBLIC_APP_STORE_URL` e `NEXT_PUBLIC_PLAY_STORE_URL`. */
export function StoreBadges({ className = "" }: { className?: string }) {
  return (
    <div className={`flex flex-wrap items-center gap-3 ${className}`}>
      <Selo
        href={links.appStore}
        pequeno="Disponível na"
        grande="App Store"
        icone={<PhoneGlyph className="size-6" />}
      />
      <Selo
        href={links.playStore}
        pequeno="Disponível no"
        grande="Google Play"
        icone={<PlayGlyph className="size-6 text-brand-lime" />}
      />
    </div>
  );
}
