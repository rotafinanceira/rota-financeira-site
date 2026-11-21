import type { Metadata, Viewport } from "next";
import { Open_Sans } from "next/font/google";
import "./globals.css";

const openSans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-open-sans",
  display: "swap",
});

const DESCRICAO =
  "O Rota Financeira ajuda você a ter mais controle sobre os custos de manutenção do seu veículo e a reduzir gastos inesperados: odômetro, alertas de manutenção e gráficos de gastos.";

export const metadata: Metadata = {
  title: {
    default: "Rota Financeira — Seu copiloto financeiro na estrada",
    template: "%s | Rota Financeira",
  },
  description: DESCRICAO,
  applicationName: "Rota Financeira",
  openGraph: {
    type: "website",
    locale: "pt_BR",
    siteName: "Rota Financeira",
    title: "Rota Financeira — Seu copiloto financeiro na estrada",
    description: DESCRICAO,
  },
};

export const viewport: Viewport = {
  themeColor: "#307714",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR" className={openSans.variable}>
      <body>{children}</body>
    </html>
  );
}
