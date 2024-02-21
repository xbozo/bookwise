import { formatDistanceToNow } from "date-fns";
import { ptBR } from "date-fns/locale/pt-BR";

export function formatDistanceToNowFn(date: Date) {
  const newDate = formatDistanceToNow(date, {
    locale: ptBR,
    addSuffix: true,
  });

  return newDate.charAt(0).toUpperCase() + newDate.slice(1);
}
