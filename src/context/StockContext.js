import { createContext, useState, useEffect } from "react";
import { axiosInstance } from "../config/apiConfig";

export const StockContext = createContext();

export const StockContextProvider = (props) => {
  const [stockSymbol, setStockSymbol] = useState(
    localStorage.getItem("stock") || "TSLA"
  );

  const [isLoading, setIsLoading] = useState(false); //to use for loading animations
  const [alphaNewsSentiment, setAlphaNewsSentiment] = useState([]);

  useEffect(() => {
    let isMounted = true;
    const getNews = async () => {
      try {
        setIsLoading(true);
        let responses = await axiosInstance.get(
          `/alpha/news-sentiment/${stockSymbol}`
        );
        console.log(responses.data);
        if (
          isMounted &&
          responses.data.feed.length > 0 &&
          responses.status === 200
        ) {
          setAlphaNewsSentiment(responses.data.feed);
          setIsLoading(false);
        } else if (responses.status !== 200) {
          alert(
            "Something went wrong whilst fetching data for this stock. Please try searching for another stock. Thanks"
          );
          setIsLoading(false);
        }
      } catch (err) {
        console.log(err);
      }
    };

    getNews();

    return () => {
      isMounted = false;
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
      }}
    >
      {props.children}
    </StockContext.Provider>
  );
};
