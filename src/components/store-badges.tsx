import { links } from "@/lib/links";
import { AppleGlyph, GooglePlayGlyph } from "./icons";

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
      className="inline-flex h-[2.8rem] w-[10.2rem] items-center gap-2 whitespace-nowrap rounded-md border border-[#a6a6a6] bg-black px-3 text-white transition hover:bg-neutral-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-lime"
      {...(href.startsWith("http")
        ? { target: "_blank", rel: "noopener noreferrer" }
        : {})}
    >
      <span className="grid size-7 shrink-0 place-items-center">{icone}</span>
      <span className="flex flex-col leading-none">
        <span className="text-[0.56rem] font-medium uppercase tracking-wide">
          {pequeno}
        </span>
        <span className="mt-[0.18rem] text-[1.15rem] font-semibold tracking-tight">
          {grande}
        </span>
      </span>
    </a>
  );
}

/** Selos de download. Os endereços vêm de `NEXT_PUBLIC_APP_STORE_URL` e `NEXT_PUBLIC_PLAY_STORE_URL`. */
export function StoreBadges({ className = "" }: { className?: string }) {
  return (
    <div className={`flex flex-wrap items-center gap-4 ${className}`}>
      <Selo
        href={links.appStore}
        pequeno="Disponível na"
        grande="App Store"
        icone={<AppleGlyph className="size-6" />}
      />
      <Selo
        href={links.playStore}
        pequeno="Disponível no"
        grande="Google Play"
        icone={<GooglePlayGlyph className="size-6" />}
      />
    </div>
  );
}
