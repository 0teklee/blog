import { supabase } from "@/libs/api/supabase";
import { NextApiRequest } from "next";

const getBlogEditPost = async (req: NextApiRequest) => {
  const query = req.query;
  const id = Number(query);

  try {
    // Fetch the blog post with related categories
    const { data: post, error } = await supabase
      .from("Post")
      .select(
        `
        id,
        title,
        content,
        createdAt,
        categories:Category ( name )
      `,
      )
      .eq("id", id)
      .single();

    if (error) {
      console.error("Error fetching blog post:", error.message);
      return null;
    }

    return post;
  } catch (err) {
    console.error("Unexpected error:", err);
    return null;
  }
};

export default getBlogEditPost;
