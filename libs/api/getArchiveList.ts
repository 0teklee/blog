import { supabase } from "@/libs/api/supabase";
import { IBlogGetListItem } from "@/components/blog/types";

const getBlogList = async (
  page: string | string[],
): Promise<IBlogGetListItem[]> => {
  try {
    const pageNumber = Number(page) || 1;
    const itemsPerPage = 5;
    const offset = (pageNumber - 1) * itemsPerPage;

    // Fetch posts from the Supabase database
    const { data: postsDB, error } = await supabase
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
      .neq("categories.name", "daily") // Exclude "daily" category
      .order("id", { ascending: false }) // Order by descending ID
      .range(offset, offset + itemsPerPage - 1); // Pagination

    if (error) throw error;

    return postsDB || [];
  } catch (err) {
    console.error("Error fetching blog list:", err);
    return [];
  }
};

export default getBlogList;
