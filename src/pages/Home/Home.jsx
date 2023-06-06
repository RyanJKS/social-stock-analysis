import React, { useState, useContext } from "react";
import { StockContext } from "../../context/StockContext";
import OverviewDialog from "./OverviewDialog";
import Speedometer from "../../components/Charts/Speedometer/Speedometer";
import Grid from "@mui/material/Grid";
import { AlphaPieChart } from "../../components/Charts/Pie/AlphaPieChart";
import { AlphaSentimentCount } from "../../helper/SentimentCount";

function Home() {
  const { alphaNewsSentiment, stockSymbol } = useContext(StockContext);

  let alphaSentiment = AlphaSentimentCount(alphaNewsSentiment);

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
        <Speedometer sentiments={alphaSentiment} />
      </Grid>
      <Grid item xs={12} lg={6} style={{ height: "40vh" }}>
        <AlphaPieChart />
      </Grid>
    </Grid>
  );
}

export default Home;
