import { supabase } from "@/libs/api/supabase";
import { IBlogGetListResponse } from "@/components/blog/types";

const getBlogList = async (
  page: string | string[],
  category?: string,
  itemsPerPage = 5,
): Promise<IBlogGetListResponse> => {
  try {
    const pageNumber = Number(page) || 1;

    const { data: postsResponse, error } = await supabase.rpc(
      "fetch_blog_posts",
      {
        page_number: pageNumber,
        items_per_page: itemsPerPage,
        category_filter: category,
      },
    );
    if (error) {
      console.error("Error fetching blog posts:", error);
      return { has_next_page: false, posts: [] };
    }

    const postsDB = postsResponse as IBlogGetListResponse | null;

    if (!postsDB) {
      console.error("Unexpected data structure:", postsDB);
      return { has_next_page: false, posts: [] };
    }
    if (error) throw error;

    const safePosts = postsDB.posts.map((post) => ({
      ...post,
      content: post.content.slice(0, 200),
    }));

    return {
      has_next_page: postsDB.has_next_page ?? false,
      posts: safePosts,
    };
  } catch (err) {
    console.error("Error fetching blog list:", err);
    return { has_next_page: false, posts: [] };
  }
};

export default getBlogList;
