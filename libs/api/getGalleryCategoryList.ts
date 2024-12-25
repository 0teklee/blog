import { supabase } from "@/libs/api/supabase";

const getGalleryCategoryList = async (): Promise<{ name: string }[]> => {
  try {
    // Fetch gallery categories from Supabase
    const { data: categories, error } = await supabase
      .from("GalleryCategory")
      .select("name");

    if (error) {
      console.error("Error fetching gallery categories:", error.message);
      return [];
    }

    return categories || [];
  } catch (err) {
    console.error("Unexpected error fetching gallery categories:", err);
    return [];
  }
};

export default getGalleryCategoryList;
