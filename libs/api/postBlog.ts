import { supabase } from "@/libs/api/supabase";

export const postBlogPost = async ({
  category,
  title,
  content,
}: {
  category: string;
  title: string;
  content: string;
}) => {
  //@ts-ignore
  const { data, error } = await supabase.rpc("create_blog_post", {
    p_category: category,
    p_title: title,
    p_content: content,
  });

  if (error) {
    console.error("Error creating post:", error);
    throw error;
  }

  return data;
};
