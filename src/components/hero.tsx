import { Phone, TelaBoasVindas } from "./phone";
import { StoreBadges } from "./store-badges";

export function Hero() {
  return (
    <section
      id="topo"
      className="relative overflow-hidden bg-white pt-28 md:pt-32"
    >
      {/* formas verdes do canto direito (Figma) */}
      <svg
        aria-hidden
        viewBox="0 0 900 900"
        preserveAspectRatio="xMaxYMid slice"
        className="pointer-events-none absolute inset-y-0 right-0 hidden h-full w-[62%] md:block"
      >
        <defs>
          <linearGradient id="hero-verde" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#8fcf6a" />
            <stop offset="1" stopColor="#2f7a1c" />
          </linearGradient>
        </defs>
        <path
          d="M420 0C330 160 250 290 420 470C560 610 360 760 480 900H900V0z"
          fill="#cdeeb7"
        />
        <path
          d="M560 0C480 150 420 280 560 440C690 590 560 760 640 900H900V0z"
          fill="url(#hero-verde)"
        />
      </svg>

      <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-5 pb-20 sm:px-8 md:grid-cols-2 md:pb-28 md:pt-8">
        <div className="max-w-xl">
          <h1 className="text-[2.6rem] font-semibold leading-[1.1] tracking-tight text-ink sm:text-5xl lg:text-[3.4rem]">
            Seu <span className="font-bold text-brand">Copiloto Financeiro</span>{" "}
            na estrada
          </h1>
          <p className="mt-6 text-xl leading-relaxed text-ink-muted/90">
            Ajudamos você a ter maior controle sobre os custos de manutenção do
            seu veículo e reduzir gastos inesperados.
          </p>
          <StoreBadges className="mt-9 [&_a]:bg-neutral-900" />
        </div>

        <div className="relative flex justify-center md:justify-end">
          <div className="w-[15.5rem] rotate-[5deg] sm:w-[18rem] lg:w-[20rem]">
            <Phone escuro>
              <TelaBoasVindas />
            </Phone>
          </div>
        </div>
      </div>
    </section>
  );
}
