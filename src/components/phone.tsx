import Image from "next/image";
import { NavGlyph } from "./icons";

/**
 * Celular decorativo com uma tela do app desenhada em HTML (nada de imagem
 * pesada). Todo o conteúdo usa a unidade `cqw`, que acompanha a largura do
 * aparelho, então a tela inteira escala junto com ele.
 */
export function Phone({
  children,
  className = "",
  escuro = false,
}: {
  children: React.ReactNode;
  className?: string;
  escuro?: boolean;
}) {
  return (
    <div
      aria-hidden
      className={`relative aspect-[9/19] overflow-hidden rounded-[13%/6.2%] border-[0.55rem] border-neutral-900 shadow-2xl shadow-black/25 ${escuro ? "bg-neutral-900" : "bg-[#eff3f5]"} ${className}`}
      style={{ containerType: "inline-size" }}
    >
      <div className="absolute left-1/2 top-0 z-20 h-[4.2cqw] w-[34cqw] -translate-x-1/2 rounded-b-[3cqw] bg-neutral-900" />
      <div className="flex h-full flex-col pt-[6cqw]">{children}</div>
    </div>
  );
}

function BarraDoApp() {
  return (
    <div className="flex items-center justify-between bg-white px-[5cqw] py-[2.6cqw]">
      <span className="size-[5cqw] rounded-full border-[0.5cqw] border-ink-soft/70" />
      <Image
        src="/img/logo-icone.svg"
        alt=""
        width={64}
        height={64}
        className="h-[7cqw] w-auto"
      />
      <span className="size-[5cqw] rounded-b-[2cqw] rounded-t-full border-[0.5cqw] border-ink-soft/70" />
    </div>
  );
}

function NavegacaoDoApp({ ativa }: { ativa: number }) {
  const itens = [
    ["inicio", "Início"],
    ["manutencoes", "Manutenções"],
    ["historico", "Histórico"],
    ["financas", "Finanças"],
  ] as const;
  return (
    <div className="mt-auto grid grid-cols-4 border-t border-line bg-white pb-[3cqw] pt-[2cqw]">
      {itens.map(([tipo, rotulo], i) => (
        <div
          key={tipo}
          className={`flex flex-col items-center gap-[0.6cqw] text-[2.5cqw] ${i === ativa ? "font-semibold text-brand" : "text-ink-muted/70"}`}
        >
          <NavGlyph tipo={tipo} className="size-[5.5cqw]" />
          {rotulo}
        </div>
      ))}
    </div>
  );
}

const cartao =
  "rounded-[2.4cqw] bg-white p-[4cqw] shadow-[0_0.4cqw_2cqw_rgba(0,0,0,0.06)]";

export function TelaBoasVindas() {
  return (
    <div className="relative flex h-full flex-col justify-end text-white">
      <Image
        src="/img/pneu.png"
        alt=""
        fill
        sizes="320px"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/55 to-black/30" />
      <div className="relative flex flex-col gap-[3.5cqw] p-[7cqw]">
        <Image
          src="/img/logo.svg"
          alt=""
          width={201}
          height={64}
          className="mb-[6cqw] h-[11cqw] w-auto self-start brightness-0 invert"
        />
        <p className="text-[8.4cqw] font-bold leading-[1.1]">
          Seu veículo na palma da sua mão!
        </p>
        <p className="text-[3.5cqw] leading-snug text-white/85">
          Simplificamos as manutenções e o controle financeiro do seu veículo
          para você ter mais praticidade e menos preocupações!
        </p>
        <span className="mt-[2cqw] rounded-[1.8cqw] bg-brand py-[3cqw] text-center text-[3.6cqw] font-semibold">
          Criar uma conta
        </span>
        <span className="rounded-[1.8cqw] bg-white py-[3cqw] text-center text-[3.6cqw] font-semibold text-brand-dark">
          Continuar com o Google
        </span>
      </div>
    </div>
  );
}

export function TelaInicio() {
  return (
    <>
      <BarraDoApp />
      <div className="flex flex-col gap-[3cqw] p-[4cqw]">
        <div className={cartao}>
          <p className="text-[3.6cqw] font-semibold">
            Como está seu odômetro hoje?
          </p>
          <p className="mt-[2cqw] text-[6cqw] font-bold leading-none">
            000.000 <span className="text-[3cqw] font-semibold">KM</span>
          </p>
          <p className="mt-[2cqw] text-[2.5cqw] text-ink-muted">
            Última quilometragem registrada: 0 km
          </p>
          <div className="mt-[3cqw] rounded-[1.6cqw] bg-[#e5e8ea] py-[2.4cqw] text-center text-[3cqw] text-ink-soft">
            Inserir quilometragem do dia
          </div>
        </div>
        <div className={`${cartao} flex flex-col items-center gap-[2cqw] text-center`}>
          <Image
            src="/img/logo-icone.svg"
            alt=""
            width={64}
            height={64}
            className="size-[13cqw]"
          />
          <p className="text-[3.4cqw] font-semibold">Veículo não cadastrado</p>
          <p className="text-[2.6cqw] text-ink-muted">
            Cadastre seu veículo para acompanhar manutenções e gastos.
          </p>
          <span className="mt-[1cqw] w-full rounded-[1.6cqw] bg-brand py-[2.6cqw] text-[3cqw] font-semibold text-white">
            Cadastrar veículo
          </span>
        </div>
      </div>
      <NavegacaoDoApp ativa={0} />
    </>
  );
}

export function TelaHistorico() {
  const itens = [
    ["Troca do filtro de combustível", "R$ 400,00", "10.570 km"],
    ["Troca do filtro de combustível", "R$ 400,00", "10.570 km"],
    ["Troca de óleo", "R$ 280,90", "12.000 km"],
  ];
  return (
    <>
      <BarraDoApp />
      <div className="flex flex-col gap-[3cqw] p-[4cqw]">
        <p className="text-[4.4cqw] font-bold">Histórico</p>
        <p className="text-[3cqw] font-semibold">outubro</p>
        {itens.map(([nome, valor, km], i) => (
          <div key={i} className={cartao}>
            <div className="flex justify-between text-[2.4cqw] text-ink-muted">
              <span>quarta-feira, 29 de out. de 2025</span>
              <span className="font-semibold text-brand">{km}</span>
            </div>
            <p className="mt-[1.6cqw] text-[3.2cqw] font-semibold">{nome}</p>
            <p className="text-[2.6cqw] text-ink-muted">{valor}</p>
          </div>
        ))}
      </div>
      <NavegacaoDoApp ativa={2} />
    </>
  );
}

export function TelaFinancas() {
  return (
    <>
      <BarraDoApp />
      <div className="flex flex-col gap-[3cqw] p-[4cqw]">
        <p className="text-[4.4cqw] font-bold">Finanças</p>
        <div className={cartao}>
          <p className="text-[3.4cqw] font-semibold">Quanto guardar por dia?</p>
          <div className="mt-[2cqw] flex justify-between text-[2.6cqw] text-ink-muted">
            <span>Valor recomendado</span>
            <span className="font-semibold text-brand">R$ 20,00</span>
          </div>
          <span className="mt-[3cqw] block rounded-[1.6cqw] bg-brand py-[2.6cqw] text-center text-[3cqw] font-semibold text-white">
            Guardar dinheiro
          </span>
        </div>
        <div className={cartao}>
          <p className="text-[3.4cqw] font-semibold">Reserva de manutenção</p>
          <p className="mt-[2cqw] text-[5cqw] font-bold">R$ 200,00</p>
          <p className="mt-[1.6cqw] text-[2.5cqw] text-ink-muted">
            Progresso da última semana
          </p>
        </div>
      </div>
      <NavegacaoDoApp ativa={3} />
    </>
  );
}

export function TelaManutencoes() {
  const itens = [
    "Troca de óleo",
    "Troca do filtro de combustível",
    "Alinhamento e balanceamento",
    "Troca de bateria",
    "Freio",
  ];
  return (
    <>
      <BarraDoApp />
      <div className="flex flex-col gap-[2.6cqw] p-[4cqw]">
        <p className="text-[4.4cqw] font-bold">Manutenções</p>
        {itens.map((nome) => (
          <div
            key={nome}
            className={`${cartao} flex items-center justify-between !p-[3.4cqw] text-[3cqw] font-medium`}
          >
            {nome}
            <span className="text-ink-muted">›</span>
          </div>
        ))}
      </div>
      <NavegacaoDoApp ativa={1} />
    </>
  );
}
