import React from "react";
import "../Charts.css";
import { Chart as ChartJS, ArcElement, Tooltip, Legend, Title } from "chart.js";
import { Pie } from "react-chartjs-2";
import { alphaLabels, finhubLabels } from "./Labels";

ChartJS.register(ArcElement, Tooltip, Legend, Title);

function PieChart({ sentiments, source }) {
  //determine which data labels to use based on source
  const CheckSentiment = () => {
    if (source === "Alpha Vantage") {
      return alphaLabels;
    } else if (source === "Finhub (Reddit & Twitter)") {
      return finhubLabels;
    }
  };
  const dataLabels = CheckSentiment(); //assign labels

  //Function to filter get only the values from the sentimens object. if sentiments is undefined, it will return 0.
  function filterData(dataLabels, obj) {
    const newData = [];
    for (const label of dataLabels) {
      newData.push(obj[label] || 0);
    }
    return newData;
  }

  //just get the total values from the sentimens object
  const votes = filterData(dataLabels, sentiments);
  //chart title from source
  const chartTitle =
    `Source: ${source} | Total #Votes: ` + votes.reduce((a, b) => a + b, 0);

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
    // rotation: 270, // Rotate the chart to start from 270 degrees
    // circumference: 180, // Half of the pie chart (180 degrees)
    plugins: {
      title: {
        display: true,
        text: chartTitle,
        align: "center",
        padding: {
          top: 10,
          bottom: 30,
        },
      },
      legend: {
        display: true,
        position: "bottom",
      },
    },
  };

  return (
    <div className="chart-container">
      {" "}
      {votes.reduce((a, b) => a + b, 0) === 0 ? (
        <h1 style={{ textAlign: "center" }}>
          Sorry, no sentiment could be collected at this moment, please try
          again later
        </h1>
      ) : (
        <Pie data={data} options={chartOptions} />
      )}
    </div>
  );
}

export default PieChart;
