export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  tags: string[];
  featured?: boolean;
  content: string;
  readingTime: string;
}

export interface SerializedBlogPost extends Omit<BlogPost, 'content'> {
  source: {
    compiledSource: string;
    frontmatter: Record<string, string | string[] | boolean>;
  };
}

// Mock data for the blog posts
const mockPosts: BlogPost[] = [
  {
    slug: 'welcome-to-synchromation',
    title: "Welcome to Synchromation's New Blog",
    excerpt: "Introducing our new blog where we'll share insights, tutorials, and updates about iOS development, best practices, and the latest trends in iPhone and iPad development.",
    date: '2024-01-15',
    author: 'Synchromation Team',
    tags: ['announcement', 'ios-development', 'ios', 'swift'],
    featured: true,
    content: '',
    readingTime: '5 min read',
  },
  {
    slug: 'ios-swiftui-best-practices',
    title: 'SwiftUI Best Practices: Building Maintainable iOS Apps',
    excerpt: 'Learn essential SwiftUI best practices for creating scalable, maintainable iOS applications. From view composition to state management, discover patterns that will improve your development workflow.',
    date: '2024-01-22',
    author: 'Synchromation Team',
    tags: ['ios', 'swiftui', 'best-practices', 'architecture'],
    featured: true,
    content: '',
    readingTime: '8 min read',
  },
  {
    slug: 'ios-app-architecture-guide',
    title: 'iOS App Architecture: Building Scalable Applications',
    excerpt: 'Explore modern iOS architecture patterns including MVVM, Clean Architecture, and Coordinator patterns. Learn how to structure your iOS apps for maintainability and scalability.',
    date: '2024-01-29',
    author: 'Synchromation Team',
    tags: ['ios', 'architecture', 'swift', 'patterns'],
    featured: false,
    content: '',
    readingTime: '12 min read',
  },
];

export function getAllPostSlugs(): string[] {
  return mockPosts.map(post => post.slug);
}

export function getPostBySlug(slug: string): BlogPost | null {
  const post = mockPosts.find(post => post.slug === slug);
  return post || null;
}

export async function getSerializedPost(slug: string): Promise<SerializedBlogPost | null> {
  const post = getPostBySlug(slug);
  if (!post) return null;

  // For now, return a simple mock source object
  const mockSource = {
    compiledSource: `<h1>${post.title}</h1><p>${post.excerpt}</p><p>This is the full content of the blog post about ${post.title}.</p>`,
    frontmatter: {
      title: post.title,
      excerpt: post.excerpt,
      date: post.date,
      author: post.author,
      tags: post.tags,
    },
  };

  return {
    ...post,
    source: mockSource,
  };
}

export function getAllPosts(): BlogPost[] {
  return mockPosts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getFeaturedPosts(): BlogPost[] {
  return getAllPosts().filter((post) => post.featured);
}

export function getPostsByTag(tag: string): BlogPost[] {
  return getAllPosts().filter((post) => post.tags.includes(tag));
}

export function getAllTags(): string[] {
  const tags = new Set<string>();
  mockPosts.forEach((post) => {
    post.tags.forEach((tag) => tags.add(tag));
  });
  return Array.from(tags).sort();
}

