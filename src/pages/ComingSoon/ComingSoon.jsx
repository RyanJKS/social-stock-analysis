import React from "react";
import { Button, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import Grow from "@mui/material/Grow";
import { useNavigate } from "react-router-dom";

export default function ComingSoon() {
  const navigate = useNavigate();
  return (
    <Grow in>
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
        spacing={4}
      >
        <Grid item xs={12} sm={6} md={4} lg={6}>
          <Typography variant="h3">Under Development</Typography>
          <Typography variant="h6">Feature is coming soon......</Typography>
          <br />
          <Button variant="contained" onClick={() => navigate("/")}>
            Back Home
          </Button>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={6}>
          <img
            src="https://cdn.pixabay.com/photo/2017/08/11/08/07/under-construction-2629935_1280.jpg"
            alt=""
            width={500}
            height={300}
          />
        </Grid>
      </Grid>
    </Grow>
  );
}
