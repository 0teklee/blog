import { IBlogGetListItem } from "@/components/blog/types";
import { supabase } from "@/libs/api/supabase";
import { notFound } from "next/navigation";

const POST_SELECT = `
  id, 
  title, 
  content, 
  createdAt,
  categories:Category ( name )
` as const;
const getBlogDetail = async (
  params: string | string[],
): Promise<IBlogGetListItem> => {
  const id = Number(params);

  try {
    const { data: mainPost, error } = await supabase
      .from("Post")
      .select(POST_SELECT)
      .eq("id", id)
      .single();

    if (!mainPost) {
      notFound();
    }

    if (error) throw error;

    return mainPost;
  } catch (err) {
    console.error("Error fetching blog detail:", err);
    return Promise.reject(err);
  }
};

export default getBlogDetail;
