import type { Metadata } from "next";
import { Section } from "@/components/Section";
import { Card } from "@/components/Card";
import { getAllPosts } from "@/lib/mdx";

export const metadata: Metadata = {
  title: "Writing",
  description: "Articles and thoughts on design, development, and technology.",
};

export default async function WritingPage() {
  const posts = await getAllPosts();

  return (
    <Section>
      <h1 className="text-4xl font-bold mb-8">Writing</h1>
      <p className="text-xl text-gray mb-12 max-w-3xl">
        Thoughts and insights on design, development, and the creative process.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((post) => (
          <Card
            key={post.slug}
            title={post.title}
            description={post.excerpt}
            href={`/writing/${post.slug}`}
            tags={post.topics}
            date={post.date}
          />
        ))}
      </div>
    </Section>
  );
}
