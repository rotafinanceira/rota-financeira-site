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
      className="relative overflow-hidden bg-gradient-to-b from-[#5b9f3d] to-[#2f6e1a] pb-0 pt-20 text-white md:pt-28"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <h2 className="titulo-secao centro claro text-center text-4xl font-semibold sm:text-5xl">
          Avaliações
        </h2>

        <dl className="mx-auto mt-14 grid max-w-3xl grid-cols-1 gap-8 text-center sm:grid-cols-3">
          {NUMEROS.map((n) => (
            <div key={n.destaque}>
              <dt className="text-2xl font-semibold">{n.destaque}</dt>
              <dd className="mt-1 text-base text-white/85">{n.texto}</dd>
            </div>
          ))}
        </dl>
      </div>

      {/* faixa de telas do app, com o recorte curvo do Figma na base */}
      <div className="relative mt-14 md:mt-20">
        <div className="mx-auto flex max-w-6xl items-end justify-center gap-3 px-4 sm:gap-5 md:gap-6">
          <div className="hidden w-40 translate-y-6 md:block lg:w-48">
            <Phone>
              <TelaHistorico />
            </Phone>
          </div>
          <div className="w-36 sm:w-44 lg:w-52">
            <Phone>
              <TelaInicio />
            </Phone>
          </div>
          <div className="w-44 sm:w-52 lg:w-60">
            <Phone escuro>
              <TelaBoasVindas />
            </Phone>
          </div>
          <div className="hidden w-36 sm:block sm:w-44 lg:w-52">
            <Phone>
              <TelaFinancas />
            </Phone>
          </div>
          <div className="hidden w-40 translate-y-6 md:block lg:w-48">
            <Phone>
              <TelaManutencoes />
            </Phone>
          </div>
        </div>
        <svg
          aria-hidden
          viewBox="0 0 1440 140"
          preserveAspectRatio="none"
          className="relative -mt-px block h-24 w-full text-brand-mint md:h-36"
        >
          <path
            d="M0 140V100C200 20 420 20 640 70C860 120 1100 110 1440 30V140z"
            fill="currentColor"
          />
        </svg>
      </div>
    </section>
  );
}
