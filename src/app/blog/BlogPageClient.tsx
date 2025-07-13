'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { BlogPost } from '@/lib/blog';

interface BlogPageClientProps {
  initialPosts: BlogPost[];
}

export default function BlogPageClient({ initialPosts }: BlogPageClientProps) {
  const [posts] = useState<BlogPost[]>(initialPosts);
  const [filteredPosts, setFilteredPosts] = useState<BlogPost[]>(initialPosts);
  const [selectedTag, setSelectedTag] = useState<string>('all');

  useEffect(() => {
    if (selectedTag === 'all') {
      setFilteredPosts(posts);
    } else {
      setFilteredPosts(posts.filter(post => post.tags.includes(selectedTag)));
    }
  }, [selectedTag, posts]);

  const allTags = Array.from(new Set(posts.flatMap(post => post.tags)));

  return (
    <div className="min-h-screen bg-background">
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-light text-primary mb-6">
              Our Blog
            </h1>
            <p className="text-xl text-muted max-w-3xl mx-auto">
              Insights, tutorials, and thoughts on mobile development
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-12"
          >
            <div className="flex flex-wrap gap-2 justify-center">
              <button
                onClick={() => setSelectedTag('all')}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
                  selectedTag === 'all'
                    ? 'bg-accent text-background'
                    : 'bg-secondary text-foreground hover:bg-accent hover:text-background'
                }`}
              >
                All Posts
              </button>
              {allTags.map(tag => (
                <button
                  key={tag}
                  onClick={() => setSelectedTag(tag)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 capitalize ${
                    selectedTag === tag
                      ? 'bg-accent text-background'
                      : 'bg-secondary text-foreground hover:bg-accent hover:text-background'
                  }`}
                >
                  {tag.replace('-', ' ')}
                </button>
              ))}
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post, index) => (
              <motion.article
                key={post.slug}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-secondary rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300"
              >
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <time className="text-sm text-muted">
                      {new Date(post.date).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}
                    </time>
                    <span className="text-sm text-muted">{post.readingTime}</span>
                  </div>
                  
                  <h2 className="text-xl font-medium text-primary mb-4 line-clamp-2">
                    <Link 
                      href={`/blog/${post.slug}`}
                      className="hover:text-accent transition-colors duration-200"
                    >
                      {post.title}
                    </Link>
                  </h2>
                  
                  <p className="text-muted mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.slice(0, 3).map(tag => (
                      <span
                        key={tag}
                        className="px-2 py-1 bg-accent/10 text-accent text-xs rounded-full capitalize"
                      >
                        {tag.replace('-', ' ')}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted">By {post.author}</span>
                    <Link
                      href={`/blog/${post.slug}`}
                      className="text-accent hover:text-accent/80 transition-colors duration-200 text-sm font-medium"
                    >
                      Read more →
                    </Link>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>

          {filteredPosts.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-12"
            >
              <p className="text-muted text-lg">No posts found for the selected tag.</p>
            </motion.div>
          )}
        </div>
      </section>
    </div>
  );
}