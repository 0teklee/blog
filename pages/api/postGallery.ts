import prisma from "libs/prisma";
import { NextApiRequest, NextApiResponse } from "next";
import { IGalleryPost } from "@/components/blog/types";

const postGallery = async (req: NextApiRequest, res: NextApiResponse) => {
  const data: IGalleryPost = req.body;
  const { galleryCategory, ...rest } = data;

  try {
    const result = await prisma.galleyPost.create({
      data: {
        ...rest,
        galleryCategory: {
          connectOrCreate: {
            where: { name: galleryCategory },
            create: { name: galleryCategory },
          },
        },
      },
    });

    res.status(200).json(result);
  } catch (err) {
    res.status(403).json({ message: "Failed to post gallery" });
  }
};

export default postGallery;
