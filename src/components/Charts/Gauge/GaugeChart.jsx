import React from "react";
import {
  Chart,
  ArcElement,
  Title,
  Tooltip,
  CategoryScale,
  LinearScale,
} from "chart.js";

const GaugeChart = ({ value }) => {
  React.useEffect(() => {
    Chart.register(ArcElement, Title, Tooltip, CategoryScale, LinearScale);

    const data = {
      labels: ["Average Mark"],
      datasets: [
        {
          data: [value],
          backgroundColor: ["rgba(75, 192, 192, 1)"],
          borderWidth: 0,
          hoverOffset: 4,
        },
      ],
    };

    const options = {
      plugins: {
        title: {
          display: true,
          text: "Average Mark",
          font: {
            size: 18,
          },
        },
        tooltip: {
          enabled: false,
        },
      },
      scales: {
        y: {
          min: 0,
          max: 100,
          ticks: {
            display: false,
          },
        },
      },
      elements: {
        arc: {
          borderWidth: 0,
        },
      },
    };

    const ctx = document.getElementById("gaugeChart").getContext("2d");
    new Chart(ctx, {
      type: "bar",
      data: data,
      options: options,
    });
  }, [value]);

  return <canvas id="gaugeChart" />;
};

export default GaugeChart;
