import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";

const styles = {
  card: {
    height: 500,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    boxShadow:
      "rgba(50, 50, 93, 0.25) 0px 30px 60px -12px, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px",
  },
  sourceArea: {
    display: "flex",
    justifyContent: "space-between",
    padding: "2px 10px 0 10px",
  },
  actionArea: {
    zIndex: 1,
    padding: "8px 20px 8px 20px",
    backgroundColor: "white",
  },
};

export default function NewsCard({ news }) {
  const { title, summary, banner_image, source, time_published, url } = news;

  const [year, month, day] = [
    time_published.slice(0, 4),
    time_published.slice(4, 6),
    time_published.slice(6, 8),
  ];
  const date = new Date(year, month - 1, day);
  const dayOfWeek = date.toLocaleString("en-us", { weekday: "long" });
  const monthName = date.toLocaleString("en-us", { month: "long" });

  const template_banner_image =
    "https://media.istockphoto.com/id/1212012012/vector/breaking-news-isolated-vector-icon-sign-of-main-news-on-dark-world-map-background.jpg?s=612x612&w=0&k=20&c=a8gFWIOUbtQYc40M1Fj0r1JRekqBin-7dM2gCvzpa_8=";

  return (
    <Card sx={styles.card}>
      <CardActionArea
        style={{ height: 200, width: "100%" }}
        onClick={() => window.open(url, "_blank")}
      >
        <CardMedia
          component="img"
          height="100%"
          width="100%"
          image={banner_image || template_banner_image}
          alt="banner image news"
        />
        <div style={styles.sourceArea}>
          <Typography variant="body2" color="text.secondary" component="h2">
            {dayOfWeek} {monthName} {date.getDate()} {date.getFullYear()}
          </Typography>
          <Typography variant="body2" color="text.secondary" component="h2">
            {source}
          </Typography>
        </div>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {summary}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions style={styles.actionArea}>
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
