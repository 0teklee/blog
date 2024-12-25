import { supabase } from "@/libs/api/supabase";
import { IBlogMainItem } from "@/components/blog/types";

const getMainPosts = async (): Promise<IBlogMainItem[]> => {
  try {
    const { data: posts, error } = await supabase
      .from("Post")
      .select(
        `
        id,
        title,
        createdAt,
        content,
        categories:Category ( name )
      `,
      )
      .neq("title", "")
      .neq("content", "")
      .neq("categories.name", "daily")
      .order("createdAt", { ascending: false })
      .limit(6);

    if (error) {
      console.error("Error fetching main posts:", error.message);
      return [];
    }

    if (!posts) {
      return [];
    }

    // Map data to match IBlogMainItem structure
    const mainPosts = posts.map((post) => ({
      id: post.id,
      title: post.title,
      createdAt: post.createdAt,
      content: post.content,
    }));

    return mainPosts;
  } catch (err) {
    console.error("Unexpected error fetching main posts:", err);
    return [];
  }
};

export default getMainPosts;
