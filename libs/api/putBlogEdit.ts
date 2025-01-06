import { supabase } from "@/libs/api/supabase";

export const putBlogPost = async (
  id: number | null,
  title: string,
  content: string,
) => {
  if (!id) {
    throw new Error(`id is null`);
  }

  const { data, error } = await supabase.rpc("upsert_blog_post", {
    p_id: id,
    p_title: title,
    p_content: content,
  });

  if (error) {
    console.error("Error upserting blog post:", error);
    throw error;
  }

  return data;
};
