"use client";

import Image from "next/image";
import { useState } from "react";

type Estado =
  | { tipo: "parado" }
  | { tipo: "enviando" }
  | { tipo: "ok"; mensagem: string }
  | { tipo: "erro"; mensagem: string };

export function CallToAction() {
  const [email, setEmail] = useState("");
  const [estado, setEstado] = useState<Estado>({ tipo: "parado" });

  async function enviar(evento: React.FormEvent<HTMLFormElement>) {
    evento.preventDefault();
    setEstado({ tipo: "enviando" });

    try {
      const resposta = await fetch("/api/inscricao", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const dados = (await resposta.json()) as { mensagem?: string };

      if (resposta.ok) {
        setEstado({ tipo: "ok", mensagem: dados.mensagem ?? "Pronto!" });
        setEmail("");
      } else {
        setEstado({
          tipo: "erro",
          mensagem: dados.mensagem ?? "Não foi possível enviar agora.",
        });
      }
    } catch {
      setEstado({
        tipo: "erro",
        mensagem: "Sem conexão. Tente novamente em instantes.",
      });
    }
  }

  return (
    <section id="baixar" className="relative isolate overflow-hidden text-white">
      <Image
        src="/img/pneu.png"
        alt=""
        fill
        sizes="100vw"
        className="-z-20 object-cover"
      />
      <div className="absolute inset-0 -z-10 bg-black/55" />

      {/* o verde claro do F.A.Q termina numa curva sobre a foto (Figma) */}
      <svg
        aria-hidden
        viewBox="0 0 1280 160"
        preserveAspectRatio="none"
        className="absolute inset-x-0 top-[-1px] h-[clamp(3rem,12.5vw,10rem)] w-full text-brand-mint"
      >
        <path
          d="M0 0C110 20 220 83 301 83C420 83 560 40 700 15S800 0 854 0S1100 40 1280 122V0z"
          fill="currentColor"
        />
      </svg>

      <div className="relative mx-auto max-w-5xl px-5 pb-[clamp(11rem,24vw,19rem)] pt-[clamp(9rem,21vw,17rem)] text-center sm:px-8">
        <h2 className="text-balance text-[clamp(1.5rem,2.65vw,2.15rem)] font-bold leading-tight">
          Dirija com mais controle, economia e tranquilidade!
        </h2>

        <form
          onSubmit={enviar}
          className="mx-auto mt-10 flex max-w-[27rem] flex-col gap-2.5 sm:flex-row"
        >
          <label htmlFor="email-cta" className="sr-only">
            Seu e-mail
          </label>
          <input
            id="email-cta"
            type="email"
            name="email"
            required
            autoComplete="email"
            placeholder="Digite seu email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="h-11 flex-1 rounded-[2px] bg-white px-3 text-base text-ink placeholder:text-neutral-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-lime"
          />
          <button
            type="submit"
            disabled={estado.tipo === "enviando"}
            className="h-11 rounded-[2px] bg-[#2f6f14] px-7 text-base font-semibold transition-colors hover:bg-brand-dark disabled:opacity-60 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-lime"
          >
            {estado.tipo === "enviando" ? "Enviando…" : "Cadastrar"}
          </button>
        </form>

        <p
          role="status"
          aria-live="polite"
          className={`mt-4 min-h-6 text-base ${estado.tipo === "erro" ? "text-amber-300" : "text-brand-lime"}`}
        >
          {estado.tipo === "ok" || estado.tipo === "erro"
            ? estado.mensagem
            : ""}
        </p>
      </div>

      {/* duas ondas verdes na base, como no Figma */}
      <svg
        aria-hidden
        viewBox="0 0 1280 220"
        preserveAspectRatio="none"
        className="absolute inset-x-0 bottom-[-1px] h-[clamp(5rem,17vw,13.75rem)] w-full"
      >
        <defs>
          <linearGradient
            id="cta-onda"
            gradientUnits="userSpaceOnUse"
            x1="0"
            y1="0"
            x2="1280"
            y2="0"
          >
            <stop offset="0" stopColor="#4b9f27" />
            <stop offset="0.4" stopColor="#3b8a22" />
            <stop offset="1" stopColor="#1e4f12" />
          </linearGradient>
        </defs>
        <path
          d="M0 80C200 0 480 20 700 92S1110 130 1280 10V220H0z"
          fill="#5fae38"
          opacity="0.55"
        />
        <path
          d="M0 120C230 50 520 80 760 140S1120 160 1280 70V220H0z"
          fill="url(#cta-onda)"
        />
      </svg>
    </section>
  );
}
