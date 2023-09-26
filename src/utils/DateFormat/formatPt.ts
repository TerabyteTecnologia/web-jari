export function formatarDataParaPtBr(data: string) {
  const options = { year: 'numeric', month: '2-digit', day: '2-digit' }
  // @ts-ignore
  return new Date(data).toLocaleDateString('pt-BR', options)
}
