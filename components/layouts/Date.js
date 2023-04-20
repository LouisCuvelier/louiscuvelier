import { parseISO, format } from "date-fns";
import { fr } from "date-fns/locale";

export default function Date({ dateString, isPubDate = false }) {
  const date = parseISO(dateString);
  return (
    <time {...(isPubDate && { pubdate: "pubdate" })} dateTime={dateString}>
      {format(date, "d MMMM yyyy", { locale: fr })}
    </time>
  );
}
