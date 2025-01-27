import { supabase } from "@/libs/api/supabase";

export const putBlogPost = async (payload: {
  id: number | null;
  title: string;
  content: string;
}) => {
  if (!payload?.id) {
    throw new Error(`id is null`);
  }

  const { data, error } = await supabase.rpc("upsert_blog_post", {
    p_id: payload.id,
    p_title: payload.title,
    p_content: payload.content,
  });

  if (error) {
    console.error("Error upserting blog post:", error);
    throw error;
  }

  return data;
};
