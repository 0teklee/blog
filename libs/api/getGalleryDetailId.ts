import { supabase } from "@/libs/api/supabase";

const getGalleryDetailId = async (): Promise<{ id: number }[] | undefined> => {
  try {
    const { data: postIds, error } = await supabase
      .from("GalleyPost")
      .select("id");

    if (error) {
      console.error("Error fetching gallery post IDs:", error.message);
      return undefined;
    }

    return postIds || [];
  } catch (err) {
    console.error("Unexpected error fetching gallery post IDs:", err);
    return undefined;
  }
};

export default getGalleryDetailId;
