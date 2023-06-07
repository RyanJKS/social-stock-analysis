import React, { useState, useContext, useEffect } from "react";
import "./SearchBar.css";
import { StockContext } from "../../context/StockContext";
import { axiosInstance } from "../../config/apiConfig";
import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";

function SearchBar() {
  const { setStockSymbol } = useContext(StockContext); // assign from api results to be used later

  const [stockName, setStockName] = useState(""); //received from user in search bar
  const [results, setResults] = useState([]); //received from API

  //get possible stock names from API
  useEffect(() => {
    const getStockSymbol = async () => {
      try {
        let responses = await axiosInstance.get(`/twelve/stock`);
        if (responses.data.status === "ok") {
          setResults(responses.data.data);
        }
      } catch (err) {
        console.log(err);
      }
    };
    getStockSymbol();
  }, []);

  let filteredResults = results?.filter((result) => {
    if (result.name.toLowerCase().includes(stockName.toLowerCase())) {
      return result;
    }
  });

  const clearInput = () => {
    setStockName("");
    setResults([]);
  };

  const getSymbol = (symbol) => {
    setStockSymbol(symbol);
    localStorage.setItem("stock", symbol);
    setResults([]);
    setStockName("");
    window.location.reload();
  };

  return (
    <>
      <TextField
        label="Search stock...."
        variant="standard"
        size="small"
        value={stockName}
        onChange={(e) => setStockName(e.target.value)}
        className="search-input"
      />
      <button className="search-icon" onClick={clearInput}>
        {results?.length === 0 ? <SearchIcon /> : <CloseIcon id="clearBtn" />}
      </button>
      {/* drop down list starts if there are any results.. */}
      {stockName.length !== 0 && (
        <div className="dataResult">
          <ul>
            {filteredResults?.map((value, index) => {
              return (
                <li
                  className="dataItem"
                  onClick={() => getSymbol(value.symbol)}
                  key={index}
                >
                  {value.name} ({value.symbol})
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </>
  );
}

export default SearchBar;
