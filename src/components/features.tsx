import { CartaoAlertas, CartaoGraficoGastos, CartaoOdometro } from "./cards";

const FUNCOES = [
  {
    titulo: "Odômetro",
    texto:
      "Odômetro para saber o quanto de percurso seu carro percorreu e assim manter sua manutenção em dia.",
    cartao: <CartaoOdometro />,
  },
  {
    titulo: "Alertas de manutenções",
    texto: "Sempre fique por dentro das manutenções do seu carro!",
    cartao: <CartaoAlertas />,
  },
  {
    titulo: "Gráficos de gastos",
    texto:
      "Gráfico bem simples para saber e ficar por dentro dos gastos que tem com seu carro.",
    cartao: <CartaoGraficoGastos />,
  },
];

export function Features() {
  return (
    <section id="funcoes" className="relative bg-brand-mint py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <h2 className="titulo-secao centro text-center text-4xl font-semibold text-ink sm:text-5xl">
          Funções
        </h2>

        <div className="mt-16 space-y-16 md:mt-24 md:space-y-28">
          {FUNCOES.map((funcao, i) => (
            <article
              key={funcao.titulo}
              className="grid items-center gap-8 md:grid-cols-2 md:gap-16"
            >
              <div className={i % 2 === 1 ? "md:order-2" : ""}>
                <h3 className="text-3xl font-semibold text-ink sm:text-[2.2rem]">
                  {funcao.titulo}
                </h3>
                <p className="mt-4 max-w-md text-lg leading-relaxed text-ink-muted">
                  {funcao.texto}
                </p>
              </div>
              <div
                className={`flex ${i % 2 === 1 ? "md:order-1 md:justify-start" : "md:justify-end"}`}
              >
                {funcao.cartao}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
