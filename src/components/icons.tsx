import type { ReactNode, SVGProps } from "react";

type Props = SVGProps<SVGSVGElement>;

const base: Props = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.8,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  "aria-hidden": true,
};

export const FacebookIcon = (p: Props) => (
  <svg {...base} {...p}>
    <path d="M14.2 8.2h2.1V5h-2.6C11.3 5 10 6.5 10 8.8V10.6H7.8v3.2H10V20h3.3v-6.2h2.4l.5-3.2h-2.9V9.2c0-.6.3-1 .9-1z" fill="currentColor" stroke="none" />
  </svg>
);

export const YoutubeIcon = (p: Props) => (
  <svg {...base} {...p}>
    <rect x="3" y="6.2" width="18" height="11.6" rx="3.4" />
    <path d="M10.3 9.6v4.8l4.2-2.4z" fill="currentColor" stroke="none" />
  </svg>
);

export const XIcon = (p: Props) => (
  <svg {...base} {...p}>
    <path d="M6 5.5l12 13M18 5.5l-5.4 6.3M6 18.5l5.5-6.2" />
  </svg>
);

export const InstagramIcon = (p: Props) => (
  <svg {...base} {...p}>
    <rect x="4" y="4" width="16" height="16" rx="4.6" />
    <circle cx="12" cy="12" r="3.6" />
    <circle cx="16.9" cy="7.1" r="0.9" fill="currentColor" stroke="none" />
  </svg>
);

export const LinkedinIcon = (p: Props) => (
  <svg {...base} {...p}>
    <path d="M6.4 9.7h2.5V18H6.4zM7.65 6a1.45 1.45 0 110 2.9 1.45 1.45 0 010-2.9zM11 9.7h2.4v1.1c.4-.8 1.4-1.3 2.5-1.3 2.4 0 3 1.5 3 3.7V18h-2.5v-4.3c0-1.1-.2-1.9-1.4-1.9s-1.6.9-1.6 1.9V18H11z" fill="currentColor" stroke="none" />
  </svg>
);

export const MenuIcon = (p: Props) => (
  <svg {...base} {...p}>
    <path d="M4 7h16M4 12h16M4 17h16" />
  </svg>
);

export const CloseIcon = (p: Props) => (
  <svg {...base} {...p}>
    <path d="M6 6l12 12M18 6L6 18" />
  </svg>
);

export const ChevronIcon = (p: Props) => (
  <svg {...base} {...p}>
    <path d="M6 9l6 6 6-6" />
  </svg>
);

export const GlobeIcon = (p: Props) => (
  <svg {...base} {...p}>
    <circle cx="12" cy="12" r="8.5" />
    <path d="M3.5 12h17M12 3.5c2.4 2.4 3.6 5.2 3.6 8.5S14.4 18.1 12 20.5C9.6 18.1 8.4 15.3 8.4 12S9.6 5.9 12 3.5z" />
  </svg>
);

/** Maçã dos selos da App Store. */
export const AppleGlyph = (p: Props) => (
  <svg viewBox="0 0 24 24" aria-hidden fill="currentColor" {...p}>
    <path d="M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.546 9.103 1.519 12.09 1.013 1.454 2.208 3.09 3.792 3.039 1.52-.065 2.09-.987 3.935-.987 1.831 0 2.35.987 3.96.948 1.637-.026 2.676-1.48 3.676-2.948 1.156-1.688 1.636-3.325 1.662-3.415-.039-.013-3.182-1.221-3.22-4.857-.026-3.04 2.48-4.494 2.597-4.559-1.429-2.09-3.623-2.324-4.39-2.376-2-.156-3.675 1.09-4.61 1.09zM15.53 3.83c.843-1.012 1.4-2.427 1.245-3.83-1.207.052-2.662.805-3.532 1.818-.78.896-1.454 2.338-1.273 3.714 1.338.104 2.715-.688 3.559-1.701" />
  </svg>
);

/** Triângulo colorido do Google Play. */
export const GooglePlayGlyph = (p: Props) => (
  <svg viewBox="0 0 24 24" aria-hidden {...p}>
    <path d="M3.6 1.9 13.6 12 3.6 22.1c-.3-.2-.4-.6-.4-1.1V3c0-.5.1-.9.4-1.1z" fill="#00a0ff" />
    <path d="M3.6 1.9c.3-.1.7 0 1.2.3l11.7 6.7-2.9 3.1z" fill="#00e07a" />
    <path d="M3.6 22.1 13.6 12l2.9 3.1-11.7 6.7c-.5.3-.9.4-1.2.3z" fill="#ff3a44" />
    <path d="m16.5 8.9 4 2.3c.6.4.6 1.2 0 1.6l-4 2.3-2.9-3.1z" fill="#ffd500" />
  </svg>
);

/** Carro com presente: o ícone de "tudo em dia" e de "veículo não cadastrado". */
export const CarroPresente = (p: Props) => (
  <svg viewBox="0 0 64 64" aria-hidden {...p}>
    <path d="m11 9 1.3 3.2L15.5 13.5 12.3 14.8 11 18l-1.3-3.2L6.5 13.5l3.200-1.300z" fill="#f6c32b" />
    <path d="m53 6 1.1 2.6 2.600 1.100-2.600 1.100L53 13.400l-1.100-2.600-2.600-1.100 2.600-1.100z" fill="#f6c32b" />
    <rect x="25" y="10" width="14" height="10" rx="1.5" fill="#f6c32b" />
    <rect x="23.500" y="8.500" width="17" height="4.500" rx="1.500" fill="#f2b100" />
    <rect x="30.800" y="8.500" width="2.400" height="11.500" fill="#e07b00" />
    <path d="M32 8.500c-3-5-8-3-5.200-.4zM32 8.500c3-5 8-3 5.200-.4z" fill="#e07b00" />
    <path d="M15 34 19 22.500c.4-1 1.200-1.500 2.200-1.500h21.600c1 0 1.800.5 2.200 1.500L49 34z" fill="#2f8a27" />
    <path d="m20.500 33 2.800-9h17.400l2.800 9z" fill="#cfeec4" />
    <rect x="8" y="32" width="48" height="19" rx="6" fill="#3fa534" />
    <rect x="12" y="38" width="9" height="5" rx="2.500" fill="#fff6c2" />
    <rect x="43" y="38" width="9" height="5" rx="2.500" fill="#fff6c2" />
    <rect x="24" y="43" width="16" height="3" rx="1.500" fill="#2a7a22" />
    <rect x="12" y="49" width="10" height="7" rx="2" fill="#26302a" />
    <rect x="42" y="49" width="10" height="7" rx="2" fill="#26302a" />
  </svg>
);

/** Ajuda (?) em círculo azul, do cartão do odômetro. */
export const AjudaGlyph = (p: Props) => (
  <svg viewBox="0 0 24 24" aria-hidden fill="none" {...p}>
    <circle cx="12" cy="12" r="10" stroke="#3b9eff" strokeWidth="1.8" />
    <path d="M9.200 9.400a2.900 2.900 0 015.600.9c0 1.900-2.800 2.300-2.800 4.100" stroke="#3b9eff" strokeWidth="1.8" strokeLinecap="round" />
    <circle cx="12" cy="17.200" r="1.100" fill="#3b9eff" />
  </svg>
);

/** Ícone de rodapé de tela do app: início, manutenções, histórico e finanças. */
export const NavGlyph = ({
  tipo,
  ...p
}: { tipo: "inicio" | "manutencoes" | "historico" | "financas" } & Props) => {
  const caminhos: Record<string, ReactNode> = {
    inicio: <path d="M4 11l8-6.5 8 6.5M6 10v9h12v-9" />,
    manutencoes: (
      <>
        <path d="M14.5 5.5a4 4 0 00-5 5L4 16l4 4 5.5-5.5a4 4 0 005-5l-2.5 2.5-2.5-.5-.5-2.5z" />
      </>
    ),
    historico: (
      <>
        <path d="M7 3.5h7l4 4V20.5H7z" />
        <path d="M14 3.5v4h4M9.5 12h5M9.5 15.5h5" />
      </>
    ),
    financas: (
      <>
        <circle cx="12" cy="12" r="8.5" />
        <path d="M14.4 9.3c-.4-.9-1.3-1.3-2.4-1.3-1.3 0-2.2.6-2.2 1.6 0 2.2 4.6 1 4.6 3.4 0 1-1 1.7-2.4 1.7-1.2 0-2.2-.5-2.6-1.4M12 6.8V8M12 16v1.2" />
      </>
    ),
  };
  return (
    <svg {...base} {...p}>
      {caminhos[tipo]}
    </svg>
  );
};
