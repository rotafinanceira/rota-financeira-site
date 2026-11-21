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

export const PhoneGlyph = (p: Props) => (
  <svg {...base} {...p}>
    <rect x="7" y="3" width="10" height="18" rx="2.4" />
    <path d="M11 18h2" />
  </svg>
);

export const PlayGlyph = (p: Props) => (
  <svg viewBox="0 0 24 24" aria-hidden {...p}>
    <path d="M5 3.4v17.2c0 .5.5.8.9.5l15-8.6c.4-.2.4-.8 0-1L5.9 2.9c-.4-.3-.9 0-.9.5z" fill="currentColor" />
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
