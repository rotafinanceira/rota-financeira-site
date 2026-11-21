import {
  ChevronIcon,
  FacebookIcon,
  GlobeIcon,
  InstagramIcon,
  LinkedinIcon,
  XIcon,
  YoutubeIcon,
} from "./icons";
import { links } from "@/lib/links";
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

/** Logo do rodapé: quadrado verde com a marca e o nome (Figma). */
function LogoDoRodape() {
  return (
    <div
      aria-hidden
      className="flex size-[5.7rem] shrink-0 flex-col items-center justify-center gap-1 rounded-xl bg-gradient-to-br from-[#58b02c] to-[#1f5a12] shadow-md"
    >
      <svg viewBox="0 0 40 40" className="size-10">
        <ellipse
          cx="20"
          cy="20"
          rx="10"
          ry="14"
          fill="none"
          stroke="#fff"
          strokeWidth="6"
          transform="rotate(18 20 20)"
        />
        <path d="M14 23c4 1 8-1 9-8" stroke="#fff" strokeWidth="3" fill="none" strokeLinecap="round" />
      </svg>
      <span className="text-center text-[0.58rem] font-bold italic leading-[1.05] text-white">
        Rota
        <br />
        Financeira
      </span>
    </div>
  );
}

export function Footer() {
  return (
    <footer
      id="contato"
      className="relative bg-[linear-gradient(90deg,#4b9f27_0%,#3b8a22_40%,#1e4f12_100%)] text-white"
    >
      {/* escurece para baixo sem criar emenda com a onda da seção de cima */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent to-black/25"
      />
      <div className="relative mx-auto max-w-[60rem] px-5 pb-12 pt-16 sm:px-8 md:pt-24">
        <div className="text-center">
          <h2 className="text-[clamp(1.4rem,2.65vw,2.15rem)] font-bold leading-tight">
            Pronto para cuidar melhor do seu veículo?
          </h2>
          <StoreBadges className="mt-12 justify-center" />
        </div>

        <div className="mt-20 flex flex-col gap-10 md:mt-28 md:flex-row md:items-start md:justify-between">
          <LogoDoRodape />

          <nav aria-label="Rodapé" className="flex flex-wrap gap-x-10 gap-y-8 md:flex-nowrap">
            {COLUNAS.map((coluna) => (
              <div key={coluna.titulo}>
                <h3 className="text-sm font-bold uppercase tracking-wide">
                  {coluna.titulo}
                </h3>
                <ul className="mt-5 space-y-3 whitespace-nowrap text-sm text-white/85">
                  {coluna.itens.map((item) => (
                    <li key={item.rotulo}>
                      <a
                        href={item.href}
                        className="transition-colors hover:text-white hover:underline"
                      >
                        {item.rotulo}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>

          <div className="flex flex-col gap-6 md:items-end">
            <ul className="flex gap-2.5">
              {REDES.map(({ href, rotulo, Icone }) => (
                <li key={rotulo}>
                  <a
                    href={href}
                    aria-label={rotulo}
                    className="grid size-9 place-items-center rounded-full bg-white/20 transition-colors hover:bg-white/35"
                  >
                    <Icone className="size-5" />
                  </a>
                </li>
              ))}
            </ul>
            <div className="inline-flex w-[11.5rem] items-center gap-2 rounded-md border border-white/50 px-3.5 py-2 text-sm">
              <GlobeIcon className="size-4" />
              Português (BR)
              <ChevronIcon className="ml-auto size-4" />
            </div>
          </div>
        </div>

        <p className="mx-auto mt-20 max-w-[20rem] text-center text-sm text-white/80 md:mt-28">
          © 2026 Rota Financeira — Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}
