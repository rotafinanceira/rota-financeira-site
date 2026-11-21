"use client";

import Image from "next/image";
import { useState } from "react";
import { links } from "@/lib/links";
import {
  CloseIcon,
  FacebookIcon,
  InstagramIcon,
  MenuIcon,
  XIcon,
  YoutubeIcon,
} from "./icons";

const NAVEGACAO = [
  { href: "#funcoes", rotulo: "Funções" },
  { href: "#baixar", rotulo: "Baixar APP", destaque: true },
  { href: "#faq", rotulo: "F.A.Q" },
  { href: "#contato", rotulo: "Contato" },
];

const REDES = [
  { href: links.facebook, rotulo: "Facebook", Icone: FacebookIcon },
  { href: links.youtube, rotulo: "YouTube", Icone: YoutubeIcon },
  { href: links.x, rotulo: "X", Icone: XIcon },
  { href: links.instagram, rotulo: "Instagram", Icone: InstagramIcon },
];

export function Header() {
  const [aberto, setAberto] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-white/95 backdrop-blur">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between gap-6 px-5 sm:px-8">
        <a href="#topo" aria-label="Rota Financeira, início">
          <Image
            src="/img/logo.svg"
            alt="Rota Financeira"
            width={201}
            height={64}
            priority
            className="h-12 w-auto"
          />
        </a>

        <nav aria-label="Principal" className="hidden md:block">
          <ul className="flex items-center gap-9 text-[1.05rem] font-medium">
            {NAVEGACAO.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className={`transition-colors hover:text-brand ${item.destaque ? "font-semibold text-brand" : "text-ink"}`}
                >
                  {item.rotulo}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <ul className="hidden items-center gap-3 lg:flex">
          {REDES.map(({ href, rotulo, Icone }) => (
            <li key={rotulo}>
              <a
                href={href}
                aria-label={rotulo}
                className="grid size-9 place-items-center rounded-full bg-neutral-300 text-white transition-colors hover:bg-brand"
              >
                <Icone className="size-5" />
              </a>
            </li>
          ))}
        </ul>

        <button
          type="button"
          className="grid size-11 place-items-center rounded-lg text-ink md:hidden"
          aria-expanded={aberto}
          aria-controls="menu-mobile"
          aria-label={aberto ? "Fechar menu" : "Abrir menu"}
          onClick={() => setAberto((v) => !v)}
        >
          {aberto ? <CloseIcon className="size-6" /> : <MenuIcon className="size-6" />}
        </button>
      </div>

      {aberto ? (
        <nav
          id="menu-mobile"
          aria-label="Principal (celular)"
          className="border-t border-line bg-white md:hidden"
        >
          <ul className="mx-auto flex max-w-7xl flex-col px-5 py-2 sm:px-8">
            {NAVEGACAO.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={() => setAberto(false)}
                  className={`block py-3 text-lg ${item.destaque ? "font-semibold text-brand" : "text-ink"}`}
                >
                  {item.rotulo}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      ) : null}
    </header>
  );
}
