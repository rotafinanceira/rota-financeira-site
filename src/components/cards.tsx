import { useId } from "react";
import { AjudaGlyph, CarroPresente } from "./icons";

/**
 * Cartões das funções (Odômetro, Alertas e Gráficos de gastos), desenhados em
 * HTML. Todo tamanho de texto usa `cqw`, que acompanha a largura do cartão:
 * ele encolhe inteiro no celular sem reflow.
 */

const moldura =
  "rounded-lg bg-white shadow-[0_2px_14px_rgba(0,0,0,0.07)] ring-1 ring-black/[0.06]";

/** Mostrador do odômetro: marcas ao redor, ponteiro verde e leque claro. */
export function Velocimetro({ className = "" }: { className?: string }) {
  const gradiente = useId();
  const ponto = (graus: number, raio: number) => {
    const a = (graus * Math.PI) / 180;
    return [100 + raio * Math.cos(a), 108 - raio * Math.sin(a)] as const;
  };
  const marcas = Array.from({ length: 24 }, (_, i) => {
    const g = 196 - i * (212 / 23);
    const [x1, y1] = ponto(g, 78);
    const [x2, y2] = ponto(g, i % 4 === 0 ? 92 : 87);
    return { x1, y1, x2, y2, i };
  });
  const [ax, ay] = ponto(142, 90);
  const [bx, by] = ponto(-16, 90);
  const [nx, ny] = ponto(142, 80);
  return (
    <svg viewBox="0 0 200 120" aria-hidden className={className}>
      <defs>
        <linearGradient id={gradiente} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#b7f08f" />
          <stop offset="1" stopColor="#ffffff" />
        </linearGradient>
      </defs>
      <path
        d={`M100 108L${ax} ${ay}A90 90 0 0 1 ${bx} ${by}Z`}
        fill={`url(#${gradiente})`}
      />
      <g stroke="#3f9d1f" strokeWidth="2.2" strokeLinecap="round">
        {marcas.map((m) => (
          <line
            key={m.i}
            x1={m.x1}
            y1={m.y1}
            x2={m.x2}
            y2={m.y2}
            opacity={m.i > 14 ? 0.45 : 0.9}
          />
        ))}
      </g>
      <path
        d={`M100 108L${nx} ${ny}`}
        stroke="#2f8a17"
        strokeWidth="7"
        strokeLinecap="round"
      />
      <circle cx="100" cy="108" r="9" fill="#fff" stroke="#dfe5e7" />
    </svg>
  );
}

export function CartaoOdometro() {
  return (
    <div
      aria-hidden
      className={`${moldura} relative w-full max-w-[32rem] overflow-hidden`}
      style={{ containerType: "inline-size" }}
    >
      <div className="p-[5.5cqw]">
        <div className="flex items-start justify-between gap-[3cqw]">
          <p className="text-[5.3cqw] font-semibold leading-tight text-ink">
            Como está seu odômetro hoje?
          </p>
          <AjudaGlyph className="size-[6.6cqw] shrink-0" />
        </div>
        <p className="mt-[3.2cqw] text-[8.4cqw] font-bold leading-none text-[#3d4349]">
          000.000 <span className="text-[4.4cqw] font-semibold">KM</span>
        </p>
        <p className="mt-[3.4cqw] max-w-[42cqw] text-[3.8cqw] leading-snug text-ink-soft">
          Última quilometragem registrada: <b className="text-brand">0 km</b>
        </p>
      </div>
      <Velocimetro className="absolute -bottom-[1cqw] right-[2cqw] w-[44cqw]" />
    </div>
  );
}

export function CartaoAlertas() {
  return (
    <div
      aria-hidden
      className={`${moldura} w-full max-w-[27.7rem]`}
      style={{ containerType: "inline-size" }}
    >
      <div className="p-[5.5cqw]">
        <div className="flex items-center justify-center gap-[3.5cqw] pb-[4.5cqw]">
          <CarroPresente className="size-[14cqw]" />
          <p className="text-[5.2cqw] font-bold text-ink">Você está em dia!</p>
        </div>
        <div className="space-y-[4cqw] border-t border-line pt-[4.5cqw]">
          <div className="flex items-center gap-[4cqw]">
            <span className="w-[34cqw] shrink-0 text-[4.4cqw] font-medium leading-tight text-ink">
              Troca de filtro
            </span>
            <span className="border-l border-dashed border-ink-muted/60 pl-[4cqw] text-[3.9cqw] leading-snug text-ink-soft">
              Próxima revisão em 10987 km.
            </span>
          </div>
          <div className="flex items-center gap-[4cqw]">
            <span className="w-[34cqw] shrink-0 text-[4.4cqw] font-medium leading-tight text-ink">
              Limpeza de filtro
            </span>
            <span className="border-l border-dashed border-ink-muted/60 pl-[4cqw]">
              <span className="inline-block rounded-full bg-[#e4e6e8] px-[4cqw] py-[1.6cqw] text-[3.9cqw] font-medium text-ink-soft">
                Vence em 4 dias
              </span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

const MESES = [
  { rotulo: "Mai.", valor: 600 },
  { rotulo: "Jun.", valor: 565 },
  { rotulo: "Jul.", valor: 620 },
  { rotulo: "Ago.", valor: 600 },
  { rotulo: "Set.", valor: 400 },
  { rotulo: "Out.", valor: 300, atual: true },
];

export function CartaoGraficoGastos() {
  const maximo = 800;
  return (
    <div
      aria-hidden
      className={`${moldura} w-full max-w-[26rem]`}
      style={{ containerType: "inline-size" }}
    >
      <div className="px-[5cqw] pb-[5.5cqw] pt-[4.5cqw]">
        <div className="flex items-center justify-center gap-[6cqw] border-b border-line pb-[3.5cqw] text-[5.6cqw] font-bold text-ink">
          <span className="font-normal text-ink-soft">‹</span>
          Outubro
          <span className="font-normal text-ink-soft">›</span>
        </div>

        <div className="mt-[4cqw] flex gap-[2cqw]">
          <div className="flex h-[40cqw] w-[11cqw] flex-col justify-between text-right text-[3.5cqw] text-ink-soft">
            {["800", "600", "400", "200", "R$ 0"].map((n) => (
              <span key={n} className="leading-none">
                {n}
              </span>
            ))}
          </div>
          <div className="relative h-[40cqw] flex-1 border-b border-l border-neutral-300">
            {[0, 25, 50, 75].map((p) => (
              <span
                key={p}
                className="absolute inset-x-0 border-t border-dashed border-neutral-200"
                style={{ top: `${p}%` }}
              />
            ))}
            <div className="absolute inset-0 flex items-end justify-around">
              {MESES.map((m) => (
                <div
                  key={m.rotulo}
                  className="relative flex h-full w-[3.8cqw] items-end"
                >
                  <span className="absolute inset-y-0 left-1/2 border-l border-dashed border-neutral-200" />
                  <div
                    className={`relative w-full ${m.atual ? "bg-[#2d6a0e]" : "bg-[#b8f28f]"}`}
                    style={{ height: `${(m.valor / maximo) * 100}%` }}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="ml-[13cqw] mt-[1.8cqw] flex justify-around text-[3.5cqw] text-ink-soft">
          {MESES.map((m) => (
            <span key={m.rotulo} className={m.atual ? "font-medium text-brand" : ""}>
              {m.rotulo}
            </span>
          ))}
        </div>

        <div className="mt-[5cqw] flex justify-center gap-[2.4cqw]">
          {["Dia", "Semana", "Mês", "Ano"].map((t) => (
            <span
              key={t}
              className={`rounded-full border px-[4cqw] py-[1.2cqw] text-[3.9cqw] ${t === "Mês" ? "border-[#e2e2e2] bg-[#e2e2e2] font-medium text-ink" : "border-neutral-300 bg-white text-ink"}`}
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
