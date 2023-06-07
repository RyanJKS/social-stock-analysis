import React, { useContext, useState, useEffect } from "react";
import { StockContext } from "../../context/StockContext";
import { axiosInstance } from "../../config/apiConfig";
import Grid from "@mui/material/Grid";
import NewsCard from "../../components/NewsCard/NewsCard";
import LoadingAnimation from "../../components/LoadingAnimation/LoadingAnimation";

function News() {
  const { stockSymbol, isLoading, setIsLoading } = useContext(StockContext);
  const [finhubNews, setFinhubNews] = useState([]);

  useEffect(() => {
    let isMounted = true;

    const getNews = async () => {
      try {
        setIsLoading(true);
        let responses = await axiosInstance.get(`/finhub/news/${stockSymbol}`);
        if (isMounted && responses.status === 200) {
          setFinhubNews(responses.data);
          setIsLoading(false);
        }
      } catch (error) {
        console.log(error);
      }
    };

    getNews();

    return () => {
      isMounted = false;
    };
  }, [stockSymbol]);

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
            Total news found for {stockSymbol} in the last 2 days :
            {finhubNews.length}
          </h1>
        )}
      </Grid>

      {isLoading
        ? null
        : finhubNews?.map((news, index) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
              <NewsCard news={news} />
            </Grid>
          ))}
    </Grid>
  );
}

export default News;
