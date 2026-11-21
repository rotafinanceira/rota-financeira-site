/** Cartões das funções (Odômetro, Alertas e Gráficos de gastos), desenhados em HTML. */

const moldura =
  "rounded-2xl bg-white p-6 shadow-[0_8px_30px_rgba(36,80,23,0.12)] ring-1 ring-black/5";

export function CartaoOdometro() {
  return (
    <div aria-hidden className={`${moldura} relative w-full max-w-md overflow-hidden`}>
      <p className="text-lg font-semibold text-ink">Como está seu odômetro hoje?</p>
      <p className="mt-4 text-4xl font-bold text-ink-soft">
        000.000 <span className="text-base font-semibold">KM</span>
      </p>
      <p className="mt-3 max-w-[11rem] text-sm text-ink-muted">
        Última quilometragem registrada: <b className="text-brand">0 km</b>
      </p>
      <svg
        viewBox="0 0 200 110"
        className="absolute -bottom-1 right-0 w-48"
        aria-hidden
      >
        <defs>
          <linearGradient id="gauge" x1="0" y1="1" x2="1" y2="0">
            <stop offset="0" stopColor="#d9f6c4" />
            <stop offset="1" stopColor="#8ce95f" />
          </linearGradient>
        </defs>
        <path d="M10 110a90 90 0 01180 0z" fill="url(#gauge)" opacity="0.55" />
        <g stroke="#307714" strokeWidth="2.4" strokeLinecap="round">
          {Array.from({ length: 11 }, (_, i) => {
            const a = Math.PI + (i * Math.PI) / 10;
            const x1 = 100 + 82 * Math.cos(a);
            const y1 = 110 + 82 * Math.sin(a);
            const x2 = 100 + 92 * Math.cos(a);
            const y2 = 110 + 92 * Math.sin(a);
            return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} opacity="0.55" />;
          })}
        </g>
        <path d="M100 106L52 56" stroke="#307714" strokeWidth="6" strokeLinecap="round" />
        <circle cx="100" cy="106" r="8" fill="#fff" stroke="#e0e5e7" />
      </svg>
    </div>
  );
}

export function CartaoAlertas() {
  return (
    <div aria-hidden className={`${moldura} w-full max-w-md`}>
      <div className="flex items-center justify-center gap-2 pb-4">
        <span className="grid size-9 place-items-center rounded-full bg-brand-mint text-lg">
          🚗
        </span>
        <p className="font-semibold text-ink">Você está em dia!</p>
      </div>
      <div className="space-y-3 border-t border-line pt-4 text-sm">
        <div className="flex items-center gap-4">
          <span className="w-24 font-semibold text-ink">Troca de filtro</span>
          <span className="border-l border-line pl-4 text-ink-muted">
            Próxima revisão em 10987 km.
          </span>
        </div>
        <div className="flex items-center gap-4">
          <span className="w-24 font-semibold text-ink">Limpeza de filtro</span>
          <span className="rounded-full bg-neutral-100 px-3 py-1 text-xs font-semibold text-ink-soft">
            Vence em 4 dias
          </span>
        </div>
      </div>
    </div>
  );
}

const MESES = [
  { rotulo: "Jun.", valor: 600 },
  { rotulo: "Jul.", valor: 575 },
  { rotulo: "Ago.", valor: 620 },
  { rotulo: "Set.", valor: 600 },
  { rotulo: "Out.", valor: 400 },
  { rotulo: "Nov.", valor: 300, atual: true },
];

export function CartaoGraficoGastos() {
  const maximo = 800;
  return (
    <div aria-hidden className={`${moldura} w-full max-w-md`}>
      <div className="flex items-center justify-center gap-4 border-b border-line pb-3 text-sm font-semibold">
        <span className="text-ink-muted">‹</span>Outubro
        <span className="text-ink-muted">›</span>
      </div>
      <div className="mt-4 flex gap-3">
        <div className="flex h-40 flex-col justify-between text-[0.65rem] text-ink-muted">
          {[800, 600, 400, 200, 0].map((n) => (
            <span key={n}>{n}</span>
          ))}
        </div>
        <div className="flex h-40 flex-1 items-end justify-between gap-2 border-b border-line">
          {MESES.map((m) => (
            <div key={m.rotulo} className="flex h-full flex-1 items-end">
              <div
                className={`w-full rounded-t-sm ${m.atual ? "bg-brand" : "bg-brand-lime/70"}`}
                style={{ height: `${(m.valor / maximo) * 100}%` }}
              />
            </div>
          ))}
        </div>
      </div>
      <div className="ml-7 mt-1 flex justify-between text-[0.65rem] text-ink-muted">
        {MESES.map((m) => (
          <span key={m.rotulo} className="flex-1 text-center">
            {m.rotulo}
          </span>
        ))}
      </div>
      <div className="mt-4 flex justify-center gap-2 text-xs">
        {["Dia", "Semana", "Mês", "Ano"].map((t) => (
          <span
            key={t}
            className={`rounded-full px-3 py-1 ${t === "Mês" ? "bg-brand text-white" : "bg-neutral-100 text-ink-soft"}`}
          >
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}
