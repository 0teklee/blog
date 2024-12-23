import { IGalleryItem } from "@/components/gallery/types";

const getGalleryList = async (
  query: string,
  page?: string,
): Promise<IGalleryItem[] | undefined> => {
  try {
    const response = await fetch(
      `${process.env.BASE_URL}/api/gallery/list?category=${encodeURIComponent(query || "")}&page=${page || 0}`,
    );

    if (!response.ok) {
      throw new Error("Failed to fetch gallery list");
    }

    const data = await response.json();
    return data as Promise<IGalleryItem[]>;
  } catch (error) {
    console.error(`Fetch error gallery list : ${error}`);
  }
};

export default getGalleryList;
