import { supabase } from "@/libs/api/supabase";
import { IBlogGetListItem } from "@/components/blog/types";

const POST_SELECT = `
  id, 
  title, 
  content, 
  createdAt,
  categories:Category ( name )
` as const;

const getBlogNav = async (
  postId: string,
): Promise<(IBlogGetListItem | null)[]> => {
  const id = Number(postId);

  try {
    const [prevPost, nextPost] = await Promise.all([
      // 이전 글
      supabase
        .from("Post")
        .select(POST_SELECT)
        .lt("id", id)
        .neq("categories.name", "daily")
        .order("id", { ascending: false })
        .limit(1),

      // 다음 글
      supabase
        .from("Post")
        .select(POST_SELECT)
        .gt("id", id)
        .neq("categories.name", "daily")
        .order("id", { ascending: true })
        .limit(1),
    ]);

    return [prevPost.data?.[0] || null, nextPost.data?.[0] || null];
  } catch (err) {
    console.error("Error fetching blog detail:", err);
    return [];
  }
};

export default getBlogNav;
