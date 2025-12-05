// Blog Data Aggregator
// Exports all blog post data with fixes and additions

import { BlogPost } from '../blog-data.schema'
import { placeholder9 } from './placeholder-9.data'
import { placeholder14 } from './placeholder-14.data'
import { placeholder15 } from './placeholder-15.data'

// Import all posts from current blog-data.content
import { blogPosts as allPosts } from '../blog-data.content'

// Replace placeholder-9 with fixed version, add placeholder14 and placeholder15
export const blogPosts: BlogPost[] = [
  ...allPosts.map(post => post.id === 'placeholder-9' ? placeholder9 : post),
  placeholder14,
  placeholder15
]
