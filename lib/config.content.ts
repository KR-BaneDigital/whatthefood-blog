/**
 * ✅ EDITABLE FILE - AI Can Modify Values Here
 * 
 * Site Configuration Content
 * This file contains all customizable values for the site
 * 
 * AI EDITING RULES:
 * - ✅ CAN update string values (titles, descriptions, URLs, etc.)
 * - ✅ CAN update logoPath to point to new images
 * - ✅ CAN update category names and slugs
 * - ✅ CAN update color values (must stay in oklch() format)
 * - ❌ CANNOT delete any top-level keys
 * - ❌ CANNOT change the structure (add/remove fields)
 * - ❌ CANNOT delete sections or nested objects
 */

import type { SiteConfigSchema, ColorConfigSchema } from './config.schema'

/**
 * EDITABLE: Main site configuration
 * Update values to match your brand
 */
export const siteContent: SiteConfigSchema = {
  // EDITABLE_BRAND: Brand identity
  brand: {
    name: "My Blog",
    description: "A beautiful blog powered by Next.js",
    url: "https://myblog.com",
    logoPath: "/logo.jpg"
  },

  // EDITABLE_HERO: Homepage hero section
  hero: {
    title: "Welcome to My Blog",
    subtitle: "Discover amazing content and insights"
  },

  // EDITABLE_AUTHOR: Default author information
  author: {
    name: "Blog Author",
    bio: "Passionate writer sharing knowledge and experiences",
    role: "Content Creator",
    image: "/placeholder-user.jpg"
  },

  // EDITABLE_SECTIONS: Section headings throughout the site
  sections: {
    topArticles: {
      title: "Featured Articles",
      description: "Handpicked posts just for you"
    },
    recentPosts: {
      title: "Latest Posts"
    },
    categories: {
      title: "Explore Topics"
    }
  },

  // EDITABLE_NEWSLETTER: Newsletter subscription section
  newsletter: {
    title: "Stay Updated",
    description: "Get the latest posts delivered to your inbox",
    disclaimer: "Unsubscribe anytime. We respect your privacy."
  },

  // EDITABLE_CATEGORIES: Blog categories
  categories: [
    { 
      name: "Technology",
      icon: "Shield" as const,
      slug: "technology"
    },
    { 
      name: "Lifestyle",
      icon: "Heart" as const,
      slug: "lifestyle"
    },
    { 
      name: "Tips & Guides",
      icon: "Baby" as const,
      slug: "tips-guides"
    }
  ]
}

/**
 * EDITABLE: Color configuration
 * Brand colors in oklch() format for better color consistency
 * 
 * Format: oklch(lightness chroma hue)
 * - Lightness: 0-1 (0=black, 1=white)
 * - Chroma: 0-0.4 (saturation)
 * - Hue: 0-360 (color angle)
 */
export const colorContent: ColorConfigSchema = {
  // EDITABLE_COLORS_LIGHT: Light mode colors
  light: {
    primary: "oklch(0.55 0.20 250)",      // Blue
    secondary: "oklch(0.70 0.15 200)",    // Cyan
    accent: "oklch(0.65 0.25 30)"         // Orange
  },

  // EDITABLE_COLORS_DARK: Dark mode colors (brighter for contrast)
  dark: {
    primary: "oklch(0.65 0.20 250)",      // Lighter blue
    secondary: "oklch(0.75 0.15 200)",    // Lighter cyan
    accent: "oklch(0.75 0.25 30)"         // Lighter orange
  }
}
