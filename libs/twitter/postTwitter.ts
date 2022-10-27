import Client, { auth } from "twitter-api-sdk";

const postTwitter = async () => {
  const bearerToken = process.env.TWITTER_TOKEN as string;
  console.log("bearerToken", bearerToken);

  const client = new Client(bearerToken);

  const postTweet = await client.tweets.findTweetById("1");
  console.log("postTweet", postTweet);

  return postTweet;
};

export default postTwitter;
