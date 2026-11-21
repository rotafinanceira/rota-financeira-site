"use client";

import Image from "next/image";
import { useId, useState } from "react";
import { ChevronIcon } from "./icons";

/**
 * As perguntas vêm do Figma; só a primeira resposta está desenhada lá. As demais
 * foram escritas a partir do comportamento do app e podem ser trocadas aqui.
 */
const PERGUNTAS = [
  {
    pergunta: "O que é a RotaFinanceira",
    resposta: "É um aplicativo para gerenciar os gastos financeiros do carro",
  },
  {
    pergunta: "Como cadastro meu primeiro veículo?",
    resposta:
      "Depois de criar a conta, toque em “Cadastrar veículo” e informe o chassi, a placa e a quilometragem atual. Marca, modelo, ano, cor e combustível deixam o cadastro mais completo.",
  },
  {
    pergunta: "Como atualizo a quilometragem ?",
    resposta:
      "Na tela inicial, toque em “Inserir quilometragem do dia” e digite o valor que aparece no painel do carro. Ele precisa ser maior que o último registrado.",
  },
  {
    pergunta: "O app envia lembretes de manutenção ?",
    resposta:
      "O app acompanha o intervalo de cada serviço, por quilometragem e por tempo, e mostra quando uma manutenção está perto de vencer ou já venceu.",
  },
  {
    pergunta: "Meus dados estão seguros ?",
    resposta:
      "Seus dados são usados só para o funcionamento do app. Os detalhes estão nos Termos de Uso e na Política de Privacidade.",
  },
];

export function Faq() {
  const [aberta, setAberta] = useState<number | null>(0);
  const id = useId();

  return (
    <section id="faq" className="bg-brand-mint pb-28 pt-10 md:pb-52 md:pt-16">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 md:grid-cols-[1fr_minmax(0,34.5rem)] md:gap-16">
        <div>
          <h2 className="titulo-secao escuro text-[clamp(2rem,4vw,3.25rem)] font-semibold text-ink">
            FAQ
          </h2>
          <Image
            src="/img/mecanico-sem-fundo.png"
            alt="Mecânico com dúvidas"
            width={288}
            height={352}
            className="mt-10 hidden h-auto w-[11rem] md:ml-[12%] md:mt-48 md:block lg:w-[13.5rem]"
          />
        </div>

        <ul className="space-y-3.5">
          {PERGUNTAS.map((item, i) => {
            const aberto = aberta === i;
            return (
              <li
                key={item.pergunta}
                className="overflow-hidden rounded-lg bg-white shadow-[0_1px_6px_rgba(0,0,0,0.05)]"
              >
                <h3>
                  <button
                    type="button"
                    id={`${id}-b${i}`}
                    aria-expanded={aberto}
                    aria-controls={`${id}-p${i}`}
                    onClick={() => setAberta(aberto ? null : i)}
                    className={`flex w-full items-center justify-between gap-4 px-6 py-5 text-left text-[clamp(1rem,1.75vw,1.4rem)] transition-colors md:py-6 ${aberto ? "bg-[#2f6f14] font-semibold text-white" : "font-medium text-ink hover:bg-brand-soft"}`}
                  >
                    {item.pergunta}
                    <ChevronIcon
                      className={`size-5 shrink-0 transition-transform ${aberto ? "rotate-180" : ""}`}
                    />
                  </button>
                </h3>
                <div
                  id={`${id}-p${i}`}
                  role="region"
                  aria-labelledby={`${id}-b${i}`}
                  hidden={!aberto}
                  className="px-6 py-5 text-[clamp(1rem,1.75vw,1.4rem)] font-semibold leading-snug text-ink md:py-6"
                >
                  {item.resposta}
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
