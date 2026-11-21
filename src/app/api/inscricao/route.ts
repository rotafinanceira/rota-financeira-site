import { NextResponse } from "next/server";

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

/**
 * Recebe o e-mail do formulário da chamada final. Não guarda nada por conta
 * própria: encaminha para o endereço de `SIGNUP_WEBHOOK_URL` (qualquer serviço
 * que aceite um POST em JSON, como Zapier, Make, n8n ou uma planilha). Sem essa
 * variável o cadastro fica desligado e a resposta diz isso, para não prometer
 * um contato que ninguém vai receber.
 */
export async function POST(request: Request) {
  let email = "";
  try {
    const corpo = (await request.json()) as { email?: unknown };
    email = typeof corpo.email === "string" ? corpo.email.trim() : "";
  } catch {
    return NextResponse.json(
      { mensagem: "Pedido inválido." },
      { status: 400 },
    );
  }

  if (!EMAIL.test(email) || email.length > 254) {
    return NextResponse.json(
      { mensagem: "Digite um e-mail válido." },
      { status: 400 },
    );
  }

  const destino = process.env.SIGNUP_WEBHOOK_URL;
  if (!destino) {
    return NextResponse.json(
      {
        mensagem:
          "O cadastro por e-mail ainda não está ativo. Baixe o app nas lojas.",
      },
      { status: 503 },
    );
  }

  try {
    const resposta = await fetch(destino, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, origem: "site", em: new Date().toISOString() }),
      signal: AbortSignal.timeout(8000),
    });
    if (!resposta.ok) throw new Error(`destino respondeu ${resposta.status}`);
  } catch {
    return NextResponse.json(
      { mensagem: "Não foi possível registrar agora. Tente novamente." },
      { status: 502 },
    );
  }

  return NextResponse.json({ mensagem: "Pronto! Avisaremos você por e-mail." });
}
