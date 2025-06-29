export default function translateStatus(status: string) {
  switch (status) {
    case "waiting":
      return "Aguardando Abertura";
    case "open":
      return "Sessão Aberta";
    case "closed":
      return "Votação Encerrada";
    default:
      return status;
  }
}
