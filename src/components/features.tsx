import { CartaoAlertas, CartaoGraficoGastos, CartaoOdometro } from "./cards";

const TITULO =
  "text-[clamp(1.9rem,3.75vw,3rem)] font-normal leading-tight text-ink";
const TEXTO =
  "mt-5 max-w-[34rem] text-[clamp(1.05rem,2.15vw,1.75rem)] font-light leading-[1.6] text-ink-muted";

function Linha({
  titulo,
  texto,
  cartao,
  cartaoNaEsquerda = false,
  cartaoClasse = "md:justify-end",
}: {
  titulo: string;
  texto: string;
  cartao: React.ReactNode;
  cartaoNaEsquerda?: boolean;
  cartaoClasse?: string;
}) {
  return (
    <article className="grid items-center gap-10 md:grid-cols-2 md:gap-12">
      <div className={cartaoNaEsquerda ? "md:order-2" : ""}>
        <h3 className={TITULO}>{titulo}</h3>
        <p className={TEXTO}>{texto}</p>
      </div>
      <div
        className={`flex ${cartaoNaEsquerda ? "md:order-1 md:pl-6" : ""} ${cartaoClasse}`}
      >
        {cartao}
      </div>
    </article>
  );
}

export function Features() {
  return (
    <section id="funcoes" className="relative bg-white pt-16 md:pt-20">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <h2 className="titulo-secao centro text-center text-[clamp(2rem,4vw,3.25rem)] font-semibold text-ink">
          Funções
        </h2>

        <div className="mt-16 md:mt-28">
          <Linha
            titulo="Odômetro"
            texto="Odômetro para saber o quanto de percurso seu carro percorreu e assim manter sua manutenção em dia."
            cartao={<CartaoOdometro />}
          />
        </div>
      </div>

      {/* a faixa verde clara do Figma começa no meio das funções, com borda ondulada */}
      <div className="relative mt-20 pb-24 md:mt-28 md:pb-40">
        <svg
          aria-hidden
          viewBox="0 0 1280 1000"
          preserveAspectRatio="none"
          className="absolute inset-0 h-full w-full text-brand-mint"
        >
          <path
            d="M0 335C150 440 260 540 367 539S560 520 643 454C760 360 860 240 905 217S1000 90 1037 53S1200 10 1280 0V1000H0z"
            fill="currentColor"
          />
        </svg>

        <div className="relative mx-auto max-w-7xl space-y-24 px-5 sm:px-8 md:space-y-56">
          <Linha
            titulo="Alertas de manutenções"
            texto="Sempre fique por dentro das manutenções do seu carro!"
            cartao={<CartaoAlertas />}
            cartaoNaEsquerda
            cartaoClasse="md:justify-start"
          />
          <Linha
            titulo="Gráficos de gastos"
            texto="Gráfico bem simples para saber e ficar por dentro dos gastos que tem com seu carro."
            cartao={<CartaoGraficoGastos />}
            cartaoClasse="md:justify-start"
          />
        </div>
      </div>
    </section>
  );
}
