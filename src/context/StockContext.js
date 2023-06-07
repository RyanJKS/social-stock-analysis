import { createContext, useState, useEffect } from "react";
import axios from "axios";
import { axiosInstance } from "../config/apiConfig";

export const StockContext = createContext();

export const StockContextProvider = (props) => {
  const [stockSymbol, setStockSymbol] = useState(
    localStorage.getItem("stock") || "TSLA"
  );

  const [isLoading, setIsLoading] = useState(false); //to use for loading animations
  const [alphaNewsSentiment, setAlphaNewsSentiment] = useState([]);
  const [finhubNewsSentiment, setFinhubNewsSentiment] = useState({});
  const [recommendationTrends, setRecommendationTrends] = useState([]);

  useEffect(() => {
    const cancelToken = axios.CancelToken.source();

    const fetchSentiment = async () => {
      const request1 = axiosInstance.get(
        `/alpha/news-sentiment/${stockSymbol}`,
        { cancelToken: cancelToken.token }
      );
      const request2 = axiosInstance.get(`/finhub/sentiment/${stockSymbol}`, {
        cancelToken: cancelToken.token,
      });
      const request3 = axiosInstance.get(
        `/finhub/recommendation-trends/${stockSymbol}`,
        {
          cancelToken: cancelToken.token,
        }
      );

      try {
        setIsLoading(true);
        const [response1, response2, response3] = await axios.all([
          request1,
          request2,
          request3,
        ]);

        if (
          response1.status === 200 &&
          response2.status === 200 &&
          response3.status === 200
        ) {
          setAlphaNewsSentiment(response1.data.feed);
          setFinhubNewsSentiment(response2.data);
          setRecommendationTrends(response3.data);
          setIsLoading(false);
        } else {
          alert(
            "Something went wrong whilst fetching data for this stock. Please try searching for another stock. Thanks"
          );
          setIsLoading(false);
        }
      } catch (error) {
        if (axios.isCancel(error)) {
          console.log("Request cancelled:", error.message);
        } else {
          console.log("Error:", error.message);
        }
      }
    };

    fetchSentiment();

    return () => {
      // Cleanup function to cancel the requests
      cancelToken.cancel("Request cancelled due to component unmount");
    };
  }, [stockSymbol]);

  return (
    <StockContext.Provider
      value={{
        stockSymbol,
        setStockSymbol,
        isLoading,
        setIsLoading,
        alphaNewsSentiment,
        finhubNewsSentiment,
        recommendationTrends,
      }}
    >
      {props.children}
    </StockContext.Provider>
  );
};
