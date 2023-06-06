export function AlphaSentimentCount(data) {
  let sentimentCounts = {};

  for (let i = 0; i < data.length; i++) {
    const sentiment = data[i].overall_sentiment_label;

    if (sentimentCounts[sentiment]) {
      sentimentCounts[sentiment]++;
    } else {
      sentimentCounts[sentiment] = 1;
    }
  }

  return sentimentCounts;
}
