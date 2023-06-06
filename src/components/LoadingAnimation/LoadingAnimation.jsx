import React from "react";
import CircularProgress from "@mui/material/CircularProgress";

function LoadingAnimation() {
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <CircularProgress color="success" />
    </div>
  );
}

export default LoadingAnimation;
