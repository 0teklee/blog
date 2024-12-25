import { supabase } from "@/libs/api/supabase";
import { IGalleryItem } from "@/components/gallery/types";

const getGalleryList = async (query?: string): Promise<IGalleryItem[]> => {
  try {
    if (!query) {
      return [];
    }

    const { data: posts, error } = await supabase.rpc("fetch_gallery_posts", {
      p_category_name: query,
    });

    if (error || !posts) {
      console.error(`Supabase error >>>  ${JSON.stringify(error)}`);
      throw new Error(error?.message || "No posts found");
    }

    // @ts-expect-error
    return (posts as IGalleryItem[]) || [];
  } catch (err) {
    return [];
  }
};

export default getGalleryList;
