# Rota Financeira — site

Página de apresentação do app Rota Financeira, feita em Next.js (App Router) a
partir do desenho do Figma "Rota Financeira (Atual)". Seções: início, Funções,
Avaliações, F.A.Q, chamada com cadastro de e-mail e rodapé.

## Rodar

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # build de produção
npm run lint
```

Node 20 ou mais novo.

## Configuração (variáveis de ambiente)

Copie `.env.example` para `.env.local` para rodar local; na Vercel, use
Settings > Environment Variables. Nenhuma é obrigatória: sem elas o site abre
normalmente, os links ficam apontando para o topo da página e o cadastro de
e-mail responde que ainda não está ativo.

| Variável | Para quê |
| --- | --- |
| `NEXT_PUBLIC_APP_STORE_URL`, `NEXT_PUBLIC_PLAY_STORE_URL` | Botões das lojas (topo e rodapé) |
| `NEXT_PUBLIC_FACEBOOK_URL`, `…_YOUTUBE_URL`, `…_X_URL`, `…_INSTAGRAM_URL`, `…_LINKEDIN_URL` | Ícones de redes sociais |
| `NEXT_PUBLIC_TERMS_URL`, `NEXT_PUBLIC_PRIVACY_URL`, `NEXT_PUBLIC_CONTACT_URL` | Links do rodapé |
| `SIGNUP_WEBHOOK_URL` | Destino do formulário de e-mail (só no servidor) |

`NEXT_PUBLIC_*` entram no build: depois de mudar, é preciso publicar de novo.

### Cadastro por e-mail

O formulário da chamada final envia para `POST /api/inscricao`, que valida o
e-mail e repassa `{ "email", "origem": "site", "em": "<data ISO>" }` em JSON para
`SIGNUP_WEBHOOK_URL` (Zapier, Make, n8n, uma planilha, qualquer URL que aceite
POST). O site não guarda e-mail nenhum. Sem a variável, a resposta é 503 e a
tela diz que o cadastro não está ativo, em vez de fingir que gravou.

## Onde mexer

- `src/app/globals.css` — cores e tipografia da marca (tokens do Tailwind).
- `src/components/` — uma seção por arquivo; `phone.tsx` e `cards.tsx` desenham
  em HTML/CSS os celulares e cartões das telas do app.
- `src/components/faq.tsx` — perguntas e respostas. Só a primeira resposta vem
  do Figma; as outras foram escritas a partir do comportamento do app e devem
  ser revisadas.
- `src/lib/links.ts` — endereços externos, lidos das variáveis acima.
- `public/img/` — logo, ilustração do mecânico e foto de fundo.

## Publicar na Vercel

Importe o repositório em vercel.com/new (preset Next.js, sem mudar comandos) e
cadastre as variáveis acima. Cada push na branch de produção publica de novo.
