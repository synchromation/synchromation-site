import { notFound } from 'next/navigation';
import { getSerializedPost } from '@/lib/blog';
import BlogPostClient from './BlogPostClient';

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

// Disable static generation for blog posts to avoid MDX SSG issues
export const dynamic = 'force-dynamic';

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = await getSerializedPost(slug);

  if (!post) {
    notFound();
  }

  return <BlogPostClient post={post} />;
}