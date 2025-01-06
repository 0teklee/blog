import { supabase } from "@/libs/api/supabase";
import { TEditItem } from "@/components/blog/types";

const getEditList = async (): Promise<TEditItem[]> => {
  try {
    const { data: postsDB, error } = await supabase.rpc("fetch_edit_posts");

    const edits = postsDB as TEditItem[] | null;

    if (error) {
      console.error("Error fetching editing posts:", error);
      return [];
    }

    if (!edits) {
      console.error("Unexpected data structure:", postsDB);
      return [];
    }

    return edits;
  } catch (err) {
    console.error("Error fetching blog list:", err);
    return [];
  }
};

export default getEditList;
