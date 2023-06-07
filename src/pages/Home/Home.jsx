import React, { useContext } from "react";
import "./Home.css";
import { StockContext } from "../../context/StockContext";
import OverviewDialog from "./OverviewDialog";
import Grid from "@mui/material/Grid";
import PieChart from "../../components/Charts/Pie/Pie";
import { AlphaSentimentCount, FinhubSentimentCount } from "./SentimentCount";
import LoadingAnimation from "../../components/LoadingAnimation/LoadingAnimation";
import StackedBarChart from "../../components/Charts/StackedBarChart/StackedBarChart";

function Home() {
  const { alphaNewsSentiment, finhubNewsSentiment, stockSymbol, isLoading } =
    useContext(StockContext);

  // get data from api from context page
  // filter the data and output them in appropriate format for pie chart
  let alphaSentiment = AlphaSentimentCount(alphaNewsSentiment);
  let finhubSentiment = FinhubSentimentCount(finhubNewsSentiment);

  //display speicfic pie chart based on api source or put loading animation
  const PieChartSentiment = ({ data, source }) => {
    if (isLoading) {
      return <LoadingAnimation />;
    } else if (data.length === 0 && !isLoading) {
      return (
        <h1 className="no-analysis-warning">
          No analysis was found for this stock from {source}
        </h1>
      );
    } else {
      return <PieChart sentiments={data} source={source} />;
    }
  };

  return (
    <Grid container spacing={4}>
      <Grid item xs={12} lg={12}>
        <OverviewDialog />
      </Grid>
      <Grid item xs={12} lg={12}>
        <h1 style={{ textAlign: "center" }}>
          Stock Analysis for Ticker Symbol : {stockSymbol}
        </h1>
      </Grid>
      <Grid item xs={12} lg={6} style={{ height: "40vh" }}>
        <PieChartSentiment data={alphaSentiment} source="Alpha Vantage" />
      </Grid>
      <Grid item xs={12} lg={6} style={{ height: "40vh" }}>
        <PieChartSentiment
          data={finhubSentiment}
          source="Finhub (Reddit & Twitter)"
        />
      </Grid>
      <Grid item xs={12} lg={12} style={{ height: "40vh" }}>
        <StackedBarChart />
      </Grid>
    </Grid>
  );
}

export default Home;
