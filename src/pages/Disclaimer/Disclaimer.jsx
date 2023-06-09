import React from "react";
import "./Disclaimer.css";

function Disclaimer() {
  return (
    <div className="disclaimer-container">
      <h1 className="disclaimer-title">Disclaimer</h1>
      <h3 className="disclaimer-intro">Welcome to StockSense!</h3>

      <p className="disclaimer-body">
        Please note that StockSense is a personal project and not intended to
        provide financial advice. The information and analyses presented on this
        app are for informational purposes only and should not be considered as
        investment recommendations.
        <br />
        <br />
        It is important to conduct your own due diligence and seek professional
        financial advice before making any investment decisions. The stock
        market involves risks, and investing in stocks carries the potential for
        financial loss. The data and visualizations provided on StockSense may
        not always be accurate, complete, or up-to-date. We strive to ensure the
        information is reliable, but we cannot guarantee its accuracy. By using
        StockSense, you acknowledge and agree that you are solely responsible
        for your investment decisions and their outcomes. The creator of this
        app will not be liable for any losses, damages, or issues arising from
        the use of this app or reliance on the information provided.
      </p>

      <h3 className="disclaimer-footer">
        Enjoy using StockSense and have fun exploring the world of stocks, but
        always remember to exercise caution and make informed decisions!
      </h3>
    </div>
  );
}

export default Disclaimer;
