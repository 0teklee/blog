import { IBlogGetListItem } from "@/components/blog/types";

const GITHUB_OWNER = "0teklee";
const GITHUB_REPO = "contents-layer";
const GITHUB_BRANCH = "main";
const GITHUB_BLOG_DIR = "blog";

export interface GithubFile {
  name: string;
  path: string;
  sha: string;
  size: number;
  url: string;
  html_url: string;
  git_url: string;
  download_url: string;
  type: string;
}

interface MdxFrontmatter {
  id: string;
  title: string;
  createdAt: string;
  post_id: number;
}

// post_id → category name mapping
const CATEGORY_MAP: Record<number, string> = {
  1: "React",
  2: "Next.js",
  3: "Data Structures & Algorithms",
  4: "TypeScript",
  5: ".etc",
  6: "Recap",
  7: "Error",
  8: "GraphQL",
  9: "Relay",
  11: "JavaScript",
  12: "react-query",
  13: "daily",
  14: "HTTP",
  15: "DevOps",
};

const getHeaders = () => {
  const headers: HeadersInit = {
    Accept: "application/vnd.github.v3+json",
  };
  if (process.env.GITHUB_TOKEN) {
    headers.Authorization = `token ${process.env.GITHUB_TOKEN}`;
  }
  return headers;
};

/** Fetch list of .mdx files from GitHub blog directory */
export const getGithubBlogList = async (): Promise<GithubFile[]> => {
  const res = await fetch(
    `https://api.github.com/repos/${GITHUB_OWNER}/${GITHUB_REPO}/contents/${GITHUB_BLOG_DIR}?ref=${GITHUB_BRANCH}`,
    { headers: getHeaders() },
  );

  if (!res.ok) {
    console.error("Failed to fetch github blog list", await res.text());
    return [];
  }

  const data: GithubFile[] = await res.json();
  return data.filter((file) => file.name.endsWith(".mdx"));
};

/** Fetch raw MDX content for a blog post by id */
export const getGithubBlogDetail = async (id: string): Promise<string> => {
  const res = await fetch(
    `https://raw.githubusercontent.com/${GITHUB_OWNER}/${GITHUB_REPO}/${GITHUB_BRANCH}/${GITHUB_BLOG_DIR}/${id}.mdx`,
    { headers: getHeaders() },
  );

  if (!res.ok) {
    console.error(
      `Failed to fetch github blog detail for ${id}`,
      await res.text(),
    );
    return "";
  }

  return res.text();
};

/** Parse YAML-like frontmatter from MDX content */
const parseFrontmatter = (
  raw: string,
): { frontmatter: Partial<MdxFrontmatter>; body: string } => {
  const match = raw.match(/^---\s*\n([\s\S]*?)\n---\s*\n([\s\S]*)$/);
  if (!match) {
    return { frontmatter: {}, body: raw };
  }

  const yamlBlock = match[1];
  const body = match[2];
  const frontmatter: Record<string, any> = {};

  for (const line of yamlBlock.split("\n")) {
    const colonIdx = line.indexOf(":");
    if (colonIdx === -1) continue;
    const key = line.slice(0, colonIdx).trim();
    let value: string | number = line.slice(colonIdx + 1).trim();
    // Strip surrounding quotes
    if (
      (value.startsWith('"') && value.endsWith('"')) ||
      (value.startsWith("'") && value.endsWith("'"))
    ) {
      value = value.slice(1, -1);
    }
    // Parse numeric values for post_id
    if (key === "post_id") {
      value = Number(value);
    }
    frontmatter[key] = value;
  }

  return { frontmatter: frontmatter as Partial<MdxFrontmatter>, body };
};

/** Parse a raw MDX string into IBlogGetListItem */
export const parseBlogContent = (
  fileId: string,
  rawContent: string,
): IBlogGetListItem => {
  const { frontmatter, body } = parseFrontmatter(rawContent);

  const id = frontmatter.id || fileId;
  const title = frontmatter.title || fileId.replace(/-/g, " ");
  const createdAt = frontmatter.createdAt || new Date().toISOString();
  const categoryName =
    frontmatter.post_id != null
      ? CATEGORY_MAP[frontmatter.post_id] || "Post"
      : "Post";

  return {
    id: id as any,
    title,
    content: body,
    createdAt,
    categories: { name: categoryName },
  };
};

/** Fetch and parse all blog posts */
export const getParsedGithubBlogList = async (): Promise<
  IBlogGetListItem[]
> => {
  const files = await getGithubBlogList();

  const posts = await Promise.all(
    files.map(async (file) => {
      const fileId = file.name.replace(".mdx", "");
      const content = await getGithubBlogDetail(fileId);
      return parseBlogContent(fileId, content);
    }),
  );

  // Sort by createdAt descending (latest first)
  posts.sort(
    (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime(),
  );

  return posts;
};

/** Get prev/next navigation for a blog post */
export const getGithubBlogNav = async (id: string) => {
  const posts = await getParsedGithubBlogList();
  const currentIndex = posts.findIndex((post) => String(post.id) === id);
  if (currentIndex === -1) return [null, null];

  const prev = currentIndex < posts.length - 1 ? posts[currentIndex + 1] : null;
  const next = currentIndex > 0 ? posts[currentIndex - 1] : null;

  return [prev, next];
};
