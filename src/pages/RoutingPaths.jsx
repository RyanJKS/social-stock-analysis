import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Home/Home";
import News from "./News/News";
import Error from "./Error/Error";
import ComingSoon from "./ComingSoon/ComingSoon";
import Disclaimer from "./Disclaimer/Disclaimer";

function RoutingPaths() {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/news" element={<News />} />
      <Route exact path="/budgeting" element={<ComingSoon />} />
      <Route exact path="/disclaimer" element={<Disclaimer />} />
      <Route exact path="/*" element={<Error />} />
    </Routes>
  );
}

export default RoutingPaths;
