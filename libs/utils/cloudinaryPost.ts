import { fetcherImagePost } from "./fetcher";
import process from "process";

const ImageUpload = async (data: FormData) => {
  const cloudName = process.env.CLOUD_NAME;
  return fetcherImagePost(
    `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`,
    data
  );
};

export default ImageUpload;
