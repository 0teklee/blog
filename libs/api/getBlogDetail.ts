import { IBlogGetDetail } from "@/components/blog/types";
import { supabase } from "@/libs/api/supabase";

const POST_SELECT = `
  id, 
  title, 
  content, 
  createdAt,
  categories:Category ( name )
` as const;
const getBlogDetail = async (
  params: string | string[],
): Promise<IBlogGetDetail> => {
  const id = Number(params);

  try {
    const [mainPost, prevPost, nextPost] = await Promise.all([
      // 현재 글
      supabase.from("Post").select(POST_SELECT).eq("id", id).single(),

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

    if (mainPost.error) throw mainPost.error;

    // single()을 제거하고 배열의 첫 번째 항목을 사용
    const nav = [prevPost.data?.[0] || null, nextPost.data?.[0] || null].filter(
      Boolean,
    );

    return {
      detail: mainPost.data,
      nav,
    };
  } catch (err) {
    console.error("Error fetching blog detail:", err);
    return { detail: null, nav: [] };
  }
};

export default getBlogDetail;
