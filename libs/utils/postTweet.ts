import { Client } from "twitter-api-sdk";

const postTweet = async (link: string, title?: string) => {
  const bearerToken =
    "AAAAAAAAAAAAAAAAAAAAAP4bigEAAAAAOmfjPAp5tCg418o7d%2FgWl0kaBj4%3D5mTnkAnjV0N9bDbjJpNY6XtTAbc09tRcbpZNT32QgJb2FboqJF";
  const appKey = "cA3xK5P0EaYi3PiUhxgQHOyw6";
  const appSecret = "coNyWJcvaItmrW4uK0ZspOSrTHyzv2diZhBaclhMdDGsRvfDkA";
  const clientId = "M1ZfbWpOamFVbzNfSENrTWgxNmk6MTpjaQ";
  const clientSecret = "lIApSYaWv1XXXlRzYRErn9WCwqdD8ml3vAxO1X1u1kLkKh_7VU";
  const access_token = "1578751878531145728-52jWYWWnAR4lDQj9heUvqTONetklIK";
  const access_token_secret = "IhMSb4BreK7R8kWMKA2c3kiOE6dICjajs5HFJs2tqr32s";

  const client = new Client(bearerToken);
  // const clientStreat = await client.tweets.createTweet();
  // console.log("twitterClient", clientStreat);
  const tweet = await client.tweets.createTweet({
    text: "23213",
  });
  console.log(tweet);

  // await twiterClient.v1.tweet(`${title ? title : ""} #dalle2 ${link} `);
};

export default postTweet;
