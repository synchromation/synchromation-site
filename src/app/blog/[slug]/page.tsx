import { notFound } from 'next/navigation';
import { getAllPostSlugs, getSerializedPost } from '@/lib/mdx';
import Link from 'next/link';

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const slugs = getAllPostSlugs();
  return slugs.map((slug) => ({ slug }));
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = await getSerializedPost(slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-background">
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <header className="mb-12">
          <Link
            href="/blog"
            className="text-accent hover:text-accent/80 transition-colors duration-200 mb-8 inline-flex items-center"
          >
            ← Back to Blog
          </Link>
          
          <div className="mb-6">
            <div className="flex flex-wrap gap-2 mb-4">
              {post.tags.map(tag => (
                <span
                  key={tag}
                  className="px-3 py-1 bg-accent/10 text-accent text-sm rounded-full capitalize"
                >
                  {tag.replace('-', ' ')}
                </span>
              ))}
            </div>
            
            <h1 className="text-3xl md:text-4xl font-light text-primary mb-4">
              {post.title}
            </h1>
            
            <div className="flex items-center justify-between text-muted">
              <div className="flex items-center space-x-4">
                <span>By {post.author}</span>
                <span>•</span>
                <time>
                  {new Date(post.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </time>
              </div>
              <span>{post.readingTime}</span>
            </div>
          </div>
          
          <div className="h-px bg-secondary mb-8" />
        </header>

        <div className="prose prose-lg max-w-none">
          <div 
            className="text-foreground leading-relaxed"
            dangerouslySetInnerHTML={{ __html: post.source.compiledSource }}
          />
        </div>

        <footer className="mt-12 pt-8 border-t border-secondary">
          <div className="bg-secondary p-6 rounded-lg">
            <h3 className="text-lg font-medium text-primary mb-3">
              Ready to Start Your Mobile Project?
            </h3>
            <p className="text-muted mb-4">
              Our team of mobile development experts is ready to help you bring your ideas to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="bg-accent text-background px-6 py-3 rounded-lg font-medium hover:bg-accent/90 transition-colors duration-200 text-center"
              >
                Get In Touch
              </Link>
              <Link
                href="/services"
                className="bg-transparent border-2 border-primary text-primary px-6 py-3 rounded-lg font-medium hover:bg-primary hover:text-background transition-colors duration-200 text-center"
              >
                View Our Services
              </Link>
            </div>
          </div>
        </footer>
      </article>
    </div>
  );
}