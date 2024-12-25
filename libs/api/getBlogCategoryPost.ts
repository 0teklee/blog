import { supabase } from "@/libs/api/supabase";
import { IBlogGetCategorySideBar } from "@/components/blog/types";

const getBlogCategoryList = async (): Promise<IBlogGetCategorySideBar[]> => {
  try {
    const { data: categoriesData, error } = await supabase
      .from("Category")
      .select(
        `
        name,
        posts:Post ( id, title )
      `,
      )
      .neq("name", "daily"); // Exclude "daily" category

    if (error) {
      throw new Error(`Supabase error: ${error.message}`);
    }

    // Validate and transform the data
    if (!categoriesData || !Array.isArray(categoriesData)) {
      throw new Error("Invalid data format received from Supabase");
    }

    const categories = categoriesData.map((category) => ({
      name: category.name,
      posts: (category.posts || [])
        .map((post) => ({
          id: post.id,
          title: post.title,
        }))
        .slice(0, 10), // Limit to 10 posts
    }));

    console.log("success >>>>", categories);

    return categories as IBlogGetCategorySideBar[];
  } catch (err) {
    console.error("Error fetching blog categories:", err);
    return [];
  }
};

export default getBlogCategoryList;
