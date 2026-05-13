import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { BlogPostView } from "@/components/templates/blog-post-view";
import { getAllBlogSlugs, getBlogPost } from "@/lib/content/blog";
import { createPageMetadata } from "@/lib/seo/metadata";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return getAllBlogSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) return {};

  return createPageMetadata({
    title: post.title,
    description: post.summary,
    path: `/blog/${post.slug}`,
  });
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) notFound();

  return <BlogPostView post={post} />;
}
