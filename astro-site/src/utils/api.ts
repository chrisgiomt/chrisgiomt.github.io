import { getCollection } from 'astro:content';

/**
 * Fetches all blog posts. In production, filters out drafts.
 * Sorts posts by publication date, newest first.
 */
export async function getBlogPosts() {
  const allPosts = await getCollection('blog', ({ data }) => {
    return import.meta.env.PROD ? data.draft !== true : true;
  });
  
  return allPosts.sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());
}

/**
 * Fetches the most recent blog posts up to the specified limit.
 */
export async function getRecentBlogPosts(limit: number = 3) {
  const allPosts = await getBlogPosts();
  return allPosts.slice(0, limit);
}

/**
 * Fetches all project entries. In production, filters out drafts.
 * Sorts projects by completion date, newest first.
 */
export async function getProjects() {
  const allProjects = await getCollection('projects', ({ data }) => {
    return import.meta.env.PROD ? data.draft !== true : true;
  });
  
  return allProjects.sort((a, b) => b.data.completionDate.valueOf() - a.data.completionDate.valueOf());
}
