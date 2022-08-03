import { NextApiRequest, NextApiResponse } from "next";
import client from "../../libs/client";

const handler = async (
  req: NextApiRequest,
  res: NextApiResponse,
  title: string,
  content: string
) => {
  const request = await client.post.create({
    data: {
      title: title,
      content: content,
    },
  });
  const response = res.json({
    ok: true,
  });
};

const sendPost = (title: string, content: string) => {};

export default handler;
