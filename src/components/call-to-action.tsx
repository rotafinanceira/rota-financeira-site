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
      <div className="absolute inset-0 -z-10 bg-black/70" />

      <div className="mx-auto max-w-4xl px-5 py-28 text-center sm:px-8 md:py-40">
        <h2 className="text-balance text-3xl font-bold leading-tight sm:text-5xl">
          Dirija com mais controle, economia e tranquilidade!
        </h2>

        <form
          onSubmit={enviar}
          noValidate={false}
          className="mx-auto mt-10 flex max-w-xl flex-col gap-3 sm:flex-row"
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
            className="h-14 flex-1 rounded-md bg-white px-4 text-lg text-ink placeholder:text-neutral-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-lime"
          />
          <button
            type="submit"
            disabled={estado.tipo === "enviando"}
            className="h-14 rounded-md bg-brand px-8 text-lg font-semibold transition-colors hover:bg-brand-dark disabled:opacity-60 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-lime"
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
    </section>
  );
}
