export function formmatedNumber(value: number) {
  const formattedNumber = value.toLocaleString("pt-BR", {
    style: "decimal",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  return formattedNumber;
}
