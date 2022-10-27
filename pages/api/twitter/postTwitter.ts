import Twitter from "twitter-lite";

const postTwitter = async (req, res) => {
  const data = JSON.parse(req.body);
  const { title, category, link } = data;

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
    .then((result) => res.status(200).json(result))
    .catch((err) => console.log("err", err));
};

export default postTwitter;
