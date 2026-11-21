import Image from "next/image";
import { Velocimetro } from "./cards";
import { AjudaGlyph, CarroPresente, NavGlyph } from "./icons";

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
      className={`relative aspect-[9/19.4] ${className}`}
      style={{ containerType: "inline-size" }}
    >
      <div className="absolute inset-0 rounded-[13cqw] bg-[#0d0d0f] p-[2.3cqw] shadow-2xl shadow-black/30">
        <div
          className={`relative flex h-full flex-col overflow-hidden rounded-[10.8cqw] ${escuro ? "bg-neutral-900 text-white" : "bg-[#eff3f5] text-ink"}`}
        >
          <div className="absolute left-1/2 top-[2.4cqw] z-20 h-[5cqw] w-[28cqw] -translate-x-1/2 rounded-full bg-black" />
          <span className="absolute left-[9cqw] top-[2.7cqw] z-20 text-[3.6cqw] font-semibold leading-none">
            9:41
          </span>
          <span className="absolute right-[8cqw] top-[3cqw] z-20 flex items-center gap-[1.2cqw]">
            <span className="flex items-end gap-[0.5cqw]">
              {[1.4, 2, 2.7, 3.4].map((h) => (
                <i
                  key={h}
                  className="block w-[0.9cqw] rounded-[0.2cqw] bg-current"
                  style={{ height: `${h}cqw` }}
                />
              ))}
            </span>
            <i className="block h-[2.8cqw] w-[5cqw] rounded-[0.8cqw] border-[0.35cqw] border-current" />
          </span>
          {children}
        </div>
      </div>
    </div>
  );
}

function BarraDoApp() {
  return (
    <div className="mt-[10cqw] flex items-center justify-between bg-white px-[5cqw] py-[2.4cqw]">
      <span className="size-[4.6cqw] rounded-full border-[0.5cqw] border-ink-soft/70" />
      <Image
        src="/img/logo.svg"
        alt=""
        width={201}
        height={64}
        className="h-[6.4cqw] w-auto"
      />
      <span className="size-[4.6cqw] rounded-b-[2cqw] rounded-t-full border-[0.5cqw] border-ink-soft/70" />
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
    <div className="mt-auto grid grid-cols-4 border-t border-line bg-white pb-[4cqw] pt-[2cqw]">
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

/** Primeira tela do app: fundo branco e a logo no centro (celular do topo). */
export function TelaSplash() {
  return (
    <div className="grid flex-1 place-items-center bg-[#f9fafb]">
      <Image
        src="/img/logo.svg"
        alt=""
        width={201}
        height={64}
        className="h-auto w-[62cqw]"
      />
    </div>
  );
}

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
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-black/40" />
      <Image
        src="/img/logo.svg"
        alt=""
        width={201}
        height={64}
        className="absolute left-[7cqw] top-[16cqw] h-[8cqw] w-auto brightness-0 invert"
      />
      <div className="relative flex flex-col gap-[3.5cqw] p-[7cqw] pb-[9cqw]">
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
        <span className="flex items-center justify-center gap-[2cqw] rounded-[1.8cqw] bg-white py-[3cqw] text-[3.6cqw] font-semibold text-ink">
          <b className="text-[4.2cqw] font-bold text-[#4285f4]">G</b>
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
        <div className={`${cartao} relative overflow-hidden`}>
          <div className="flex items-start justify-between">
            <p className="text-[3.5cqw] font-semibold">
              Como está seu odômetro hoje?
            </p>
            <AjudaGlyph className="size-[4cqw] shrink-0" />
          </div>
          <p className="mt-[2cqw] text-[5.6cqw] font-bold leading-none">
            000.000 <span className="text-[2.8cqw] font-semibold">KM</span>
          </p>
          <p className="mt-[2cqw] max-w-[22cqw] text-[2.3cqw] leading-tight text-ink-muted">
            Última quilometragem registrada: 0 km
          </p>
          <Velocimetro className="absolute -bottom-[1cqw] right-[1cqw] w-[28cqw]" />
        </div>
        <div className="rounded-[2.4cqw] bg-[#e5e8ea] py-[2.6cqw] text-center text-[3cqw] text-ink-soft">
          Inserir quilometragem do dia
        </div>
        <div className={`${cartao} flex flex-col items-center gap-[2cqw] text-center`}>
          <CarroPresente className="size-[14cqw]" />
          <p className="text-[3.4cqw] font-semibold">Veículo não cadastrado</p>
          <p className="text-[2.6cqw] text-ink-muted">
            Cadastre seu veículo para acompanhar manutenções e gastos.
          </p>
        </div>
        <span className="rounded-[1.8cqw] bg-brand py-[2.8cqw] text-center text-[3cqw] font-semibold text-white">
          Cadastrar veículo
        </span>
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
        <p className="text-[3cqw] font-semibold">Outubro</p>
        {itens.map(([nome, valor, km], i) => (
          <div key={i} className={cartao}>
            <div className="flex justify-between text-[2.4cqw] text-ink-muted">
              <span>25 set 2024</span>
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
        <p className="flex items-center gap-[1.6cqw] text-[4.4cqw] font-bold">
          <NavGlyph tipo="financas" className="size-[5cqw]" />
          Finanças
        </p>
        <div className={cartao}>
          <div className="flex items-start justify-between">
            <p className="text-[3.4cqw] font-semibold">Quanto guardar por dia?</p>
            <AjudaGlyph className="size-[4cqw] shrink-0" />
          </div>
          <div className="mt-[2cqw] flex justify-between text-[2.6cqw] text-ink-muted">
            <span>Valor recomendado</span>
            <span className="font-semibold text-ink">R$ 20,00</span>
          </div>
        </div>
        <span className="block rounded-[1.8cqw] bg-brand py-[3cqw] text-center text-[3.2cqw] font-semibold text-white">
          Guardar dinheiro
        </span>
        <div className={cartao}>
          <p className="text-[3.4cqw] font-semibold">Reserva de manutenção</p>
          <p className="mt-[2cqw] text-[3.8cqw] font-bold">R$ 200,00</p>
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
    "Alinhamento e balanceamento",
    "Bateria",
    "Troca de óleo",
    "Filtro de ar do motor",
    "Freio",
  ];
  return (
    <>
      <BarraDoApp />
      <div className="flex flex-col gap-[2.6cqw] p-[4cqw]">
        <p className="flex items-center gap-[1.6cqw] text-[4.4cqw] font-bold">
          <NavGlyph tipo="manutencoes" className="size-[5cqw]" />
          Manutenções
        </p>
        {itens.map((nome) => (
          <div
            key={nome}
            className={`${cartao} flex items-center gap-[2.4cqw] !p-[3.4cqw] text-[3cqw] font-medium`}
          >
            <NavGlyph tipo="manutencoes" className="size-[4.4cqw] text-ink-soft" />
            {nome}
          </div>
        ))}
      </div>
      <NavegacaoDoApp ativa={1} />
    </>
  );
}
