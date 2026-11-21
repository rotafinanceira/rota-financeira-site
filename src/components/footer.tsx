import Image from "next/image";
import { links } from "@/lib/links";
import {
  ChevronIcon,
  FacebookIcon,
  GlobeIcon,
  InstagramIcon,
  LinkedinIcon,
  XIcon,
  YoutubeIcon,
} from "./icons";
import { StoreBadges } from "./store-badges";

const COLUNAS = [
  {
    titulo: "Companhia",
    itens: [
      { rotulo: "Funcionalidades", href: "#funcoes" },
      { rotulo: "FAQ", href: "#faq" },
    ],
  },
  {
    titulo: "Serviços",
    itens: [
      { rotulo: "Baixar App", href: "#baixar" },
      { rotulo: "Contato", href: links.contato },
    ],
  },
  {
    titulo: "Legal",
    itens: [
      { rotulo: "Termos de Uso", href: links.termos },
      { rotulo: "Política de Privacidade", href: links.privacidade },
    ],
  },
];

const REDES = [
  { href: links.facebook, rotulo: "Facebook", Icone: FacebookIcon },
  { href: links.youtube, rotulo: "YouTube", Icone: YoutubeIcon },
  { href: links.x, rotulo: "X", Icone: XIcon },
  { href: links.instagram, rotulo: "Instagram", Icone: InstagramIcon },
  { href: links.linkedin, rotulo: "LinkedIn", Icone: LinkedinIcon },
];

export function Footer() {
  return (
    <footer
      id="contato"
      className="relative bg-gradient-to-b from-[#3f8f22] to-[#245017] text-white"
    >
      <svg
        aria-hidden
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
        className="absolute inset-x-0 top-0 h-16 w-full -translate-y-[calc(100%-1px)] text-[#3f8f22] md:h-28"
      >
        <path d="M0 120V70C260 0 520 10 760 60C1000 110 1220 100 1440 30V120z" fill="currentColor" />
      </svg>

      <div className="mx-auto max-w-7xl px-5 pb-10 pt-16 sm:px-8 md:pt-20">
        <div className="text-center">
          <h2 className="text-2xl font-bold sm:text-3xl">
            Pronto para cuidar melhor do seu veículo?
          </h2>
          <StoreBadges className="mt-8 justify-center" />
        </div>

        <div className="mt-16 grid gap-10 border-t border-white/15 pt-12 md:grid-cols-[auto_1fr_auto] md:items-start md:gap-16">
          <Image
            src="/img/logo-icone.svg"
            alt="Rota Financeira"
            width={194}
            height={194}
            className="size-24 rounded-2xl"
          />

          <nav aria-label="Rodapé" className="grid grid-cols-2 gap-8 sm:grid-cols-3">
            {COLUNAS.map((coluna) => (
              <div key={coluna.titulo}>
                <h3 className="text-sm font-bold uppercase tracking-wider">
                  {coluna.titulo}
                </h3>
                <ul className="mt-4 space-y-3 text-sm text-white/80">
                  {coluna.itens.map((item) => (
                    <li key={item.rotulo}>
                      <a href={item.href} className="transition-colors hover:text-white hover:underline">
                        {item.rotulo}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>

          <div className="flex flex-col gap-5 md:items-end">
            <ul className="flex flex-wrap gap-3">
              {REDES.map(({ href, rotulo, Icone }) => (
                <li key={rotulo}>
                  <a
                    href={href}
                    aria-label={rotulo}
                    className="grid size-10 place-items-center rounded-full bg-white/15 transition-colors hover:bg-white/30"
                  >
                    <Icone className="size-5" />
                  </a>
                </li>
              ))}
            </ul>
            <div className="inline-flex items-center gap-2 rounded-lg border border-white/30 px-4 py-2 text-sm">
              <GlobeIcon className="size-4" />
              Português (BR)
              <ChevronIcon className="size-4" />
            </div>
          </div>
        </div>

        <p className="mt-14 text-center text-sm text-white/75">
          © 2026 Rota Financeira — Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}
