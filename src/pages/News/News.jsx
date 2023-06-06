import React, { useContext } from "react";
import { StockContext } from "../../context/StockContext";
import Grid from "@mui/material/Grid";
import NewsCard from "../../components/Cards/NewsCard/NewsCard";
import LoadingAnimation from "../../components/LoadingAnimation/LoadingAnimation";

function News() {
  const { stockSymbol, alphaNewsSentiment, isLoading } =
    useContext(StockContext);

  return (
    <Grid container spacing={3}>
      <Grid item xs={12} sm={12} md={12} lg={12}>
        {isLoading ? (
          <LoadingAnimation />
        ) : (
          <h1
            style={{
              textAlign: "center",
            }}
          >
            Total News Found for {stockSymbol} : {alphaNewsSentiment.length}
          </h1>
        )}
      </Grid>

      {isLoading
        ? null
        : alphaNewsSentiment?.map((news, index) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
              <NewsCard news={news} />
            </Grid>
          ))}
    </Grid>
  );
}

export default News;
