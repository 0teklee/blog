import { supabase } from "@/libs/api/supabase";
import { IGalleryPostGetDetail } from "@/components/blog/types";

const getGalleryDetail = async (
  params: string | string[],
): Promise<IGalleryPostGetDetail> => {
  const query = Number(params);

  try {
    // Fetch the gallery post detail from Supabase
    const { data: postDetail, error } = await supabase
      .from("GalleyPost")
      .select(
        `
        id,
        title,
        imgUrl,
        createdAt,
        galleryCategory:GalleryCategory ( name )
      `,
      )
      .eq("id", query)
      .single();

    if (error) {
      console.error("Error fetching gallery detail:", error.message);
      return {
        detail: {
          id: 0,
          title: "",
          imgUrl: "",
          createdAt: "",
          galleryCategory: {
            name: "",
          },
        },
      };
    }

    return { detail: postDetail };
  } catch (err) {
    console.error("Unexpected error:", err);
    return {
      detail: {
        id: 0,
        title: "",
        imgUrl: "",
        createdAt: "",
        galleryCategory: {
          name: "",
        },
      },
    };
  }
};

export default getGalleryDetail;
