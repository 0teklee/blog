import { supabase } from "@/libs/api/supabase";

const getArchiveList = async () => {
  try {
    // Fetch posts from the Supabase database
    const { data: postsDB, error } = await supabase
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
      .neq("categories.name", "daily")
      .order("createdAt", { ascending: false });
    if (error) throw error;

    return postsDB || [];
  } catch (err) {
    console.error("Error fetching blog list:", err);
    return [];
  }
};

export default getArchiveList;
