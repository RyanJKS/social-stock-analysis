export function CalculateTotals(data) {
  const result = {
    strongBuy: [],
    buy: [],
    hold: [],
    sell: [],
    strongSell: [],
  };

  for (const entry of data) {
    result.strongBuy.push(entry.strongBuy);
    result.buy.push(entry.buy);
    result.hold.push(entry.hold);
    result.sell.push(entry.sell);
    result.strongSell.push(entry.strongSell);
  }

  return result;
}

function formatDate(dateString) {
  const date = new Date(dateString);

  // Check if the date is invalid
  if (isNaN(date)) {
    return "Invalid date";
  }

  const year = date.getFullYear().toString().substr(-2);
  const month = date.toLocaleString("default", { month: "short" });

  return `${month} '${year}`;
}

export function FormatDataArray(dataArray) {
  return dataArray.map((data) => formatDate(data.period));
}
