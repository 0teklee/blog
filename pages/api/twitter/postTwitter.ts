import Twitter from "twitter-lite";

const postTwitter = async (link: string, title?: string, category?: string) => {
  const app = new Twitter({
    consumer_key: process.env.TW_API_KEY,
    consumer_secret: process.env.TW_API_KEY_SECRET,
    access_token_key: process.env.TW_ACCESS_TOKEN,
    access_token_secret: process.env.TW_ACCESS_TOKEN_SECRET,
  });

  const result = await app
    .post("statuses/update", {
      status: `${title} ${category ? "#dalle2" : "#photography"} ${link}`,
    })
    .then((res) => res.status(200).json(res))
    .catch((err) => console.log("err", err));
};

export default postTwitter;
