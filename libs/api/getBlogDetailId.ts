import { supabase } from "@/libs/api/supabase";

const getBlogDetailId = async (): Promise<{ id: string }[] | undefined> => {
  try {
    const { data: postIds, error } = await supabase.from("Post").select("id");

    if (error) throw error;

    const res = (postIds || []).map((item) => ({ id: String(item.id) }));

    return res;
  } catch (err) {
    console.error("Error fetching blog detail IDs:", err);
    return undefined;
  }
};

export default getBlogDetailId;
