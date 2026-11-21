import {
  Phone,
  TelaBoasVindas,
  TelaFinancas,
  TelaHistorico,
  TelaInicio,
  TelaManutencoes,
} from "./phone";

const NUMEROS = [
  { destaque: "Google Play", texto: "Disponível para Android" },
  { destaque: "App Store", texto: "Disponível para iPhone" },
  { destaque: "+50 mil", texto: "downloads" },
];

export function Reviews() {
  return (
    <section
      id="avaliacoes"
      className="relative overflow-hidden bg-gradient-to-br from-[#70ae58] via-[#4e9a34] to-[#2c6a17] text-white"
    >
      {/* o verde claro da seção anterior termina numa curva (Figma) */}
      <svg
        aria-hidden
        viewBox="0 0 1280 350"
        preserveAspectRatio="none"
        className="absolute inset-x-0 top-0 h-[clamp(5rem,27vw,21.9rem)] w-full text-brand-mint"
      >
        <path
          d="M0 250C100 320 220 342 308 342S480 290 617 197C740 120 820 100 906 66S1200 0 1278 0L1280 0H0z"
          fill="currentColor"
        />
      </svg>

      <div className="relative mx-auto max-w-7xl px-5 pt-[clamp(8.5rem,31vw,24.5rem)] sm:px-8">
        <h2 className="titulo-secao centro text-center text-[clamp(2rem,4vw,3.25rem)] font-semibold">
          Avaliações
        </h2>

        <dl className="mx-auto mt-14 grid max-w-[56rem] grid-cols-1 gap-8 text-center sm:grid-cols-3 md:mt-24">
          {NUMEROS.map((n) => (
            <div key={n.destaque}>
              <dt className="text-[clamp(1.4rem,2.4vw,1.95rem)] font-semibold leading-tight">
                {n.destaque}
              </dt>
              <dd className="mt-2 text-[clamp(1rem,1.55vw,1.25rem)] text-white/90">
                {n.texto}
              </dd>
            </div>
          ))}
        </dl>
      </div>

      {/* faixa de telas do app; a onda clara da seção de baixo corta as bases (Figma) */}
      {/* medidas em vw até 1280 px (largura do desenho) e travadas dali em diante */}
      <div className="relative mt-14 h-[92vw] overflow-hidden md:mt-20 md:h-[min(48vw,38.4rem)]">
        <div className="absolute inset-x-0 top-0 flex items-start justify-center gap-2">
          <div className="mt-[min(12.5vw,10rem)] hidden w-[min(21vw,16.8rem)] md:block">
            <Phone>
              <TelaHistorico />
            </Phone>
          </div>
          <div className="mt-[8vw] w-[40vw] md:mt-[min(6.6vw,5.3rem)] md:w-[min(21vw,16.8rem)]">
            <Phone>
              <TelaInicio />
            </Phone>
          </div>
          <div className="w-[46vw] md:w-[min(22.1vw,17.7rem)]">
            <Phone escuro>
              <TelaBoasVindas />
            </Phone>
          </div>
          <div className="mt-[8vw] w-[40vw] md:mt-[min(6.6vw,5.3rem)] md:w-[min(21vw,16.8rem)]">
            <Phone>
              <TelaFinancas />
            </Phone>
          </div>
          <div className="mt-[min(12.5vw,10rem)] hidden w-[min(21vw,16.8rem)] md:block">
            <Phone>
              <TelaManutencoes />
            </Phone>
          </div>
        </div>

        <svg
          aria-hidden
          viewBox="0 0 1280 260"
          preserveAspectRatio="none"
          className="absolute inset-x-0 bottom-[-1px] block h-[min(20.3vw,16.25rem)] w-full text-brand-mint"
        >
          <path
            d="M0 99C80 190 150 228 209 228S420 262 512 257S700 190 775 112S980 20 1103 0S1230 40 1278 86V261H0z"
            fill="currentColor"
          />
        </svg>
      </div>
    </section>
  );
}
