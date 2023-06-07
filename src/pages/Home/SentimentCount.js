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

export function FinhubSentimentCount(data) {
  if (Object.keys(data).length !== 0) {
    const RedditPositive = data.reddit.reduce(
      (total, data) => total + data.positiveMention,
      0
    );
    const RedditNegative = data.reddit.reduce(
      (total, data) => total + data.negativeMention,
      0
    );

    const TwitterPositive = data.twitter.reduce(
      (total, data) => total + data.positiveMention,
      0
    );
    const TwitterNegative = data.twitter.reduce(
      (total, data) => total + data.negativeMention,
      0
    );

    return {
      Reddit_Positive_Mentions: RedditPositive,
      Reddit_Negative_Mentions: RedditNegative,
      Twitter_Positive_Mentions: TwitterPositive,
      Twitter_Negative_Mentions: TwitterNegative,
    };
  } else {
    return {
      Reddit_Positive_Mentions: 0,
      Reddit_Negative_Mentions: 0,
      Twitter_Positive_Mentions: 0,
      Twitter_Negative_Mentions: 0,
    };
  }
}
