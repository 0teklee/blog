import { supabase } from "@/libs/api/supabase";

const getBlogDetailId = async (): Promise<string[] | undefined> => {
  try {
    // Fetch all post IDs from the database
    const { data: postIds, error } = await supabase.from("Post").select("id");

    if (error) throw error;

    // Map post IDs to strings
    const res = (postIds || []).map((item) => `${item.id}`);

    return res;
  } catch (err) {
    console.error("Error fetching blog detail IDs:", err);
    return undefined;
  }
};

export default getBlogDetailId;
