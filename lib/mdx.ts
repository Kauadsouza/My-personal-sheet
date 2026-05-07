import fs from "fs";
import path from "path";
import matter from "gray-matter";
import readingTime from "reading-time";

const contentDir = path.join(process.cwd(), "content", "blog");

export type PostFrontmatter = {
  title: string;
  date: string;
  lead: string;
  tags: string[];
  cover?: string;
};

export type Post = PostFrontmatter & {
  slug: string;
  content: string;
  readingTime: string;
  locale: string;
};

export function getAllPosts(locale: string): Post[] {
  const localeDir = path.join(contentDir, locale);

  if (!fs.existsSync(localeDir)) return [];

  const files = fs.readdirSync(localeDir).filter((f) => f.endsWith(".mdx"));

  return files
    .map((filename) => {
      const slug = filename.replace(/\.mdx$/, "");
      const filePath = path.join(localeDir, filename);
      const raw = fs.readFileSync(filePath, "utf-8");
      const { data, content } = matter(raw);
      const rt = readingTime(content);

      return {
        ...(data as PostFrontmatter),
        slug,
        content,
        readingTime: String(Math.ceil(rt.minutes)),
        locale,
      };
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getPostBySlug(slug: string, locale: string): Post | null {
  const filePath = path.join(contentDir, locale, `${slug}.mdx`);

  if (!fs.existsSync(filePath)) return null;

  const raw = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(raw);
  const rt = readingTime(content);

  return {
    ...(data as PostFrontmatter),
    slug,
    content,
    readingTime: String(Math.ceil(rt.minutes)),
    locale,
  };
}
