import { supabase } from "@/libs/api/supabase";
import { IBlogGetCategorySideBar } from "@/components/blog/types";

const getBlogCategoryList = async (): Promise<IBlogGetCategorySideBar[]> => {
  try {
    // Fetch categories excluding "daily"
    const { data: categories, error: categoryError } = await supabase
      .from("Category")
      .select("id, name")
      .neq("name", "daily")
      .order("name", { ascending: true });

    if (categoryError) {
      console.error("Supabase query error (categories):", categoryError);
      return [];
    }

    if (!categories) {
      console.error("No categories returned from Supabase");
      return [];
    }

    // Fetch posts for each category and map the results
    const results: IBlogGetCategorySideBar[] = await Promise.all(
      categories.map(async (category) => {
        const { data: posts, error: postError } = await supabase
          .from("Post")
          .select("id, title")
          .eq("post_id", category.id)
          .limit(10);

        if (postError) {
          console.error(
            `Supabase query error (posts for category ${category.name}):`,
            postError,
          );
          return { name: category.name, posts: [] };
        }

        return {
          name: category.name,
          posts: posts || [],
        };
      }),
    );

    return results;
  } catch (err) {
    console.error("Failed to fetch blog categories:", err);
    return [];
  }
};

export default getBlogCategoryList;
