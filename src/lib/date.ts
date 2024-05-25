export function formatDate(date: Date) {
  const options: Intl.DateTimeFormatOptions = {
    month: "short",
    year: "numeric",
  };
  return new Intl.DateTimeFormat("es", options).format(date);
}
