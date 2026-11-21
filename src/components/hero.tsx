import { Phone, TelaSplash } from "./phone";
import { StoreBadges } from "./store-badges";

/** Pontilhado verde do canto inferior esquerdo (Figma). */
function Pontilhado({ className = "" }: { className?: string }) {
  const pontos = [
    [18, 22], [44, 14], [70, 26], [30, 44], [58, 40], [82, 52], [16, 66],
    [46, 62], [72, 74], [28, 84], [60, 88], [88, 30], [10, 40],
  ];
  return (
    <svg
      aria-hidden
      viewBox="0 0 100 100"
      className={`size-28 ${className}`}
    >
      <rect x="6" y="6" width="88" height="88" rx="14" fill="#d9f6c4" />
      {pontos.map(([x, y]) => (
        <circle key={`${x}-${y}`} cx={x} cy={y} r="3.4" fill="#4fc424" />
      ))}
    </svg>
  );
}

export function Hero() {
  return (
    <section
      id="topo"
      className="relative overflow-hidden bg-white pb-20 pt-28 md:min-h-[49rem] md:pb-28 md:pt-[10.6rem]"
    >
      {/* formas verdes do canto direito (Figma), só de md para cima */}
      <svg
        aria-hidden
        viewBox="0 0 1280 800"
        preserveAspectRatio="xMaxYMin slice"
        className="pointer-events-none absolute inset-0 hidden h-full w-full md:block"
      >
        <defs>
          <linearGradient id="hero-verde" x1="0.15" y1="0.95" x2="0.95" y2="0">
            <stop offset="0" stopColor="#2b6d12" />
            <stop offset="0.55" stopColor="#3f8a25" />
            <stop offset="1" stopColor="#78b45c" />
          </linearGradient>
        </defs>
        <path
          d="M851 0C812 90 742 240 736 410C730 520 800 572 900 600C1050 646 1180 618 1280 578V0z"
          fill="#9ccf88"
        />
        <path
          d="M905 0C868 85 802 240 792 400C786 498 850 552 960 584C1080 620 1200 588 1280 556V0z"
          fill="url(#hero-verde)"
        />
      </svg>

      <Pontilhado className="absolute bottom-16 left-[5.5%] hidden md:block" />

      <div className="relative mx-auto grid max-w-7xl items-start gap-14 px-5 sm:px-8 md:grid-cols-[1.12fr_1fr] md:gap-8">
        <div>
          <h1 className="text-[clamp(2.1rem,3.75vw,3.25rem)] font-normal leading-[1.3] text-ink">
            Seu{" "}
            <span className="font-bold text-brand">Copiloto Financeiro</span>
            <br className="hidden md:block" /> na estrada
          </h1>
          <p className="mt-8 max-w-[34rem] text-[clamp(1.05rem,2.1vw,1.75rem)] font-light leading-[1.65] text-ink-muted">
            Ajudamos você a ter maior controle sobre os custos de manutenção do
            seu veículo e reduzir gastos inesperados.
          </p>
          <StoreBadges className="mt-12" />
        </div>

        <div className="relative flex justify-center md:justify-center md:pt-2">
          <div className="absolute inset-x-6 bottom-4 -z-0 top-8 rounded-full bg-gradient-to-br from-[#9ccf88] to-[#2f7a1c] md:hidden" />
          <div className="relative w-[clamp(11rem,17.6vw,15rem)] min-w-[11rem] rotate-[8deg]">
            <Phone>
              <TelaSplash />
            </Phone>
            <div className="absolute -bottom-7 left-1/2 h-5 w-[130%] -translate-x-1/2 rounded-[50%] bg-black/30 blur-md" />
          </div>
        </div>
      </div>
    </section>
  );
}
