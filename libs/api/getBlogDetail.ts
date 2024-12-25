import { IBlogGetDetail } from "@/components/blog/types";
import { supabase } from "@/libs/api/supabase";

const getBlogDetail = async (
  params: string | string[],
): Promise<IBlogGetDetail> => {
  const query = Number(params);
  try {
    const { data: mainPost, error: mainPostError } = await supabase
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
      .eq("id", query)
      .single();

    if (mainPostError) throw mainPostError;

    // Fetch navigation posts (previous and next)
    const [
      { data: prevPost, error: prevPostError },
      { data: nextPost, error: nextPostError },
    ] = await Promise.all([
      supabase
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
        .lt("id", query)
        .neq("categories.name", "daily")
        .order("id", { ascending: false })
        .limit(1)
        .single(),

      supabase
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
        .gt("id", query)
        .neq("categories.name", "daily")
        .order("id", { ascending: true })
        .limit(1)
        .single(),
    ]);

    if (prevPostError)
      console.error("Error fetching previous post:", prevPostError);
    if (nextPostError)
      console.error("Error fetching next post:", nextPostError);

    const nav = [prevPost, nextPost].filter((post) => post !== null);

    return {
      detail: mainPost || null,
      nav,
    };
  } catch (err) {
    console.error("Error fetching blog detail:", err);
    return { detail: null, nav: [] };
  }
};

export default getBlogDetail;
