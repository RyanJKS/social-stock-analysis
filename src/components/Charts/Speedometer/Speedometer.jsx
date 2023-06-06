import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

function Speedometer({ sentiments }) {
  const dataLabels = [
    "Bearish",
    "Somewhat-Bearish",
    "Neutral",
    "Somewhat-Bullish",
    "Bullish",
  ];
  //Function to filter get only the values from the sentimens object. if sentiments is undefined, it will return 0.
  function filterData(dataLabels, obj) {
    const newData = [];
    for (const label of dataLabels) {
      newData.push(obj[label] || 0);
    }

    return newData;
  }

  const votes = filterData(dataLabels, sentiments);

  const data = {
    labels: dataLabels,
    datasets: [
      {
        label: "# of Votes",
        data: votes,
        backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56", "#4BC0C0", "aqua"],
      },
    ],
  };

  const chartOptions = {
    responsive: true, // Enable responsiveness
    maintainAspectRatio: false,
    rotation: 270, // Rotate the chart to start from 270 degrees
    circumference: 180, // Half of the pie chart (180 degrees)
  };

  return <Pie data={data} options={chartOptions} />;
}

export default Speedometer;
