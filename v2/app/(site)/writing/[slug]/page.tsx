import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { Section } from "@/components/Section";
import { MetaPanel } from "@/components/MetaPanel";
import { getAllPosts, getPostBySlug } from "@/lib/mdx";

interface WritingPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const posts = await getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: WritingPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    return {
      title: "Post Not Found",
    };
  }

  return {
    title: post.title,
    description: post.excerpt,
  };
}

export default async function WritingDetailPage({ params }: WritingPageProps) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <Section>
      <article>
        <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
        <time className="text-gray mb-8 block" dateTime={post.date}>
          {new Date(post.date).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </time>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="prose prose-lg max-w-none">
              <MDXRemote source={post.content} />
            </div>
          </div>

          <div className="lg:col-span-1">
            <MetaPanel skills={post.skills} concepts={post.topics} tools={[]} />
          </div>
        </div>
      </article>
    </Section>
  );
}
