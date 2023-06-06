import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Home/Home";
import News from "./News/News";
import Error from "./Error/Error";
import ComingSoon from "./ComingSoon/ComingSoon";

function RoutingPaths() {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/news" element={<News />} />
      <Route exact path="/budgeting" element={<ComingSoon />} />
      <Route exact path="/*" element={<Error />} />
    </Routes>
  );
}

export default RoutingPaths;
