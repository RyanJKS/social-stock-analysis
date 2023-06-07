import React from "react";
import "./NewsCard.css";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import { ConvertTime } from "./ConvertTime";

export default function NewsCard({ news }) {
  const { headline, summary, image, datetime, source, url } = news;

  let time = ConvertTime(datetime);
  const template_banner_image =
    "https://media.istockphoto.com/id/1212012012/vector/breaking-news-isolated-vector-icon-sign-of-main-news-on-dark-world-map-background.jpg?s=612x612&w=0&k=20&c=a8gFWIOUbtQYc40M1Fj0r1JRekqBin-7dM2gCvzpa_8=";

  return (
    <Card className="card">
      <CardActionArea
        style={{ height: 200, width: "100%" }}
        onClick={() => window.open(url, "_blank")}
      >
        <CardMedia
          component="img"
          height="100%"
          width="100%"
          image={image || template_banner_image}
          alt="banner image news"
        />
        <div className="sourceArea">
          <Typography variant="body2" color="text.secondary" component="h2">
            {time}
          </Typography>
          <Typography variant="body2" color="text.secondary" component="h2">
            {source}
          </Typography>
        </div>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {headline}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {summary}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions className="actionArea">
        <Button
          size="small"
          color="primary"
          onClick={() => window.open(url, "_blank")}
        >
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
}
