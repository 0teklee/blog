import Client from "twitter-api-sdk";

const postTweet = async () => {
  const bearerToken = process.env.TWITTER_TOKEN as string;
  console.log("bearerToken", bearerToken);

  const client = new Client(bearerToken);

  const postTweet = await client.tweets.findTweetById("1");
  console.log("postTweet", postTweet);

  return postTweet;
};

export default postTweet;
