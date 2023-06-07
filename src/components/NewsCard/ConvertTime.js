// function used to convert timestamp from finhub api to wanted date format
export function ConvertTime(timestamp) {
  // Convert timestamp to milliseconds
  let date = new Date(timestamp * 1000);

  // Array of month names
  let monthNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  // Get day, date, month, and year
  let day = date.toLocaleDateString("en", { weekday: "short" });
  let dateNum = date.getDate();
  let month = monthNames[date.getMonth()];
  let year = date.getFullYear();
  let time = date.toLocaleTimeString("en-US", { hour12: false });

  // Format as "Day, Date Month Year, Time"
  let formattedDate = `${day}, ${dateNum} ${month} ${year}, ${time}`;

  return formattedDate;
}
