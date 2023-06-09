import React, { useContext } from "react";
import "../Charts.css";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { StockContext } from "../../../context/StockContext";
import { CalculateTotals, FormatDataArray } from "./DataFormat";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

function StackedBarChart() {
  const { recommendationTrends, isLoading } = useContext(StockContext);

  const labels = FormatDataArray(recommendationTrends);
  const { strongSell, sell, hold, buy, strongBuy } =
    CalculateTotals(recommendationTrends);

  const data = {
    labels,
    datasets: [
      {
        label: "Strong Sell",
        data: strongSell,
        backgroundColor: "rgba(94, 33, 12, 0.8)",
      },
      {
        label: "Sell",
        data: sell,
        backgroundColor: "rgba(238, 12, 26, 0.89)",
      },
      {
        label: "Hold",
        data: hold,
        backgroundColor: "rgb(120, 120, 120)",
      },
      {
        label: "Buy",
        data: buy,
        backgroundColor: "rgba(26, 237, 138, 0.89)",
      },
      {
        label: "Strong Buy",
        data: strongBuy,
        backgroundColor: "rgba(14, 94, 12, 0.8)",
      },
    ],
  };

  const options = {
    plugins: {
      title: {
        display: true,
        text: "Recommendation Trends",
      },
      legend: {
        display: true,
        position: "bottom",
      },
    },
    responsive: true,
    scales: {
      x: {
        stacked: true,
        title: {
          display: true,
          text: "Month/Year",
        },
      },
      y: {
        stacked: true,
        title: {
          display: true,
          text: "Total Number Of Analysis",
        },
      },
    },
  };

  const CheckData = ({ data }) => {
    if (!isLoading && recommendationTrends.length > 0) {
      return <Bar options={options} data={data} />;
    } else if (!isLoading) {
      return (
        <h1 style={{ textAlign: "center", paddingTop: "15%" }}>
          Sorry, no sentiment could be collected at this moment, please try
          again later
        </h1>
      );
    }
  };
  return (
    <div className="chart-container">
      <CheckData data={data} />
    </div>
  );
}

export default StackedBarChart;
