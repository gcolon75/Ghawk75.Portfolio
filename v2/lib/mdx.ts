import fs from "fs";
import path from "path";
import matter from "gray-matter";

export interface WritingPost {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  topics: string[];
  skills: string[];
  content: string;
}

const contentDirectory = path.join(process.cwd(), "content/writing");

export async function getAllPosts(): Promise<WritingPost[]> {
  const fileNames = fs.readdirSync(contentDirectory);
  const posts = fileNames
    .filter((fileName) => fileName.endsWith(".mdx"))
    .map((fileName) => {
      const slug = fileName.replace(/\.mdx$/, "");
      const fullPath = path.join(contentDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, "utf8");
      const { data, content } = matter(fileContents);

      return {
        slug,
        title: data.title,
        date: data.date,
        excerpt: data.excerpt,
        topics: data.topics || [],
        skills: data.skills || [],
        content,
      };
    });

  return posts.sort((a, b) => (a.date > b.date ? -1 : 1));
}

export async function getPostBySlug(slug: string): Promise<WritingPost | null> {
  try {
    const fullPath = path.join(contentDirectory, `${slug}.mdx`);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data, content } = matter(fileContents);

    return {
      slug,
      title: data.title,
      date: data.date,
      excerpt: data.excerpt,
      topics: data.topics || [],
      skills: data.skills || [],
      content,
    };
  } catch {
    return null;
  }
}
