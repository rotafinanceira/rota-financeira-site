/**
 * Endereços que ainda não estão no Figma. Defina as variáveis na Vercel
 * (Settings > Environment Variables) para os links passarem a funcionar;
 * enquanto estiverem vazias, apontam para o topo da página.
 */
const ou = (valor: string | undefined) => (valor && valor.trim()) || "#";

export const links = {
  appStore: ou(process.env.NEXT_PUBLIC_APP_STORE_URL),
  playStore: ou(process.env.NEXT_PUBLIC_PLAY_STORE_URL),
  facebook: ou(process.env.NEXT_PUBLIC_FACEBOOK_URL),
  youtube: ou(process.env.NEXT_PUBLIC_YOUTUBE_URL),
  x: ou(process.env.NEXT_PUBLIC_X_URL),
  instagram: ou(process.env.NEXT_PUBLIC_INSTAGRAM_URL),
  linkedin: ou(process.env.NEXT_PUBLIC_LINKEDIN_URL),
  termos: ou(process.env.NEXT_PUBLIC_TERMS_URL),
  privacidade: ou(process.env.NEXT_PUBLIC_PRIVACY_URL),
  contato: ou(process.env.NEXT_PUBLIC_CONTACT_URL),
} as const;
