import { BlogPost } from '../blog-data.schema'
import { siteConfig } from '../config'

const defaultAuthor = {
  name: siteConfig.author.name,
  bio: siteConfig.author.bio,
  image: siteConfig.author.image,
  role: siteConfig.author.role,
}

export const placeholder9: BlogPost = {
  id: "placeholder-9",
  slug: "project-management-software-ranking-2025",
  title: "The Definitive Project Management Software Ranking 2025: Monday, Asana, ClickUp",
  excerpt: "We've tested and ranked the top three project management platforms for growing teams. Discover which solution delivers the best combination of usability, features, and value for your organization.",
  content: "# Project Management Software Ranking 2025\n\nComprehensive ranking of leading PM platforms.",
  image: "/placeholder.svg?height=800&width=1200",
  category: "Operations",
  subcategory: "Project Management",
  tags: ["Project Management", "Software Ranking", "Productivity Tools", "Operations"],
  date: "January 7, 2025",
  readTime: "16 min read",
  author: defaultAuthor,
  featured: true,
  views: 0,
  relatedPosts: [],
  contentType: "competitor-ranking",
  typeSpecificData: {
    competitorRanking: {
      introduction: [
        "After 90 days of hands-on testing with teams ranging from 10 to 100 members across marketing, product development, and operations departments, we evaluated each platform on 8 critical dimensions: ease of use, feature completeness, automation capabilities, integration ecosystem, collaboration tools, reporting analytics, mobile experience, and value for money.",
        "The three platforms we tested—Monday.com, Asana, and ClickUp—represent different philosophies in project management. Monday.com prioritizes visual workflow management and team adoption. Asana focuses on enterprise-grade capabilities and scalability. ClickUp attempts to be an all-in-one productivity platform. Each has distinct strengths and trade-offs that make them suitable for different organizational needs."
      ],
      competitors: [
        {
          name: "Monday.com",
          rating: 9.2,
          badge: "Best Overall",
          badgeColor: "primary",
          description: "Monday.com delivers exceptional visual workflow management with powerful automation in an interface teams adopt immediately. The platform scales elegantly from simple task tracking to complex portfolio management.",
          specs: [
            { label: "Starting Price", value: "$9/user/mo" },
            { label: "Best For", value: "Growing Teams" },
            { label: "Ease of Use", value: "Excellent" },
            { label: "Automation", value: "Powerful" }
          ]
        },
        {
          name: "Asana",
          rating: 8.8,
          badge: "Enterprise Champion",
          badgeColor: "blue",
          description: "Asana excels at enterprise-grade project management with sophisticated portfolio management and proven scalability. Best for organizations managing complex, interdependent projects across multiple teams.",
          specs: [
            { label: "Starting Price", value: "$13.49/user/mo" },
            { label: "Best For", value: "Enterprises" },
            { label: "Portfolio Mgmt", value: "Advanced" },
            { label: "Scalability", value: "Proven" }
          ]
        },
        {
          name: "ClickUp",
          rating: 8.3,
          badge: "Best Value",
          badgeColor: "green",
          description: "ClickUp provides maximum features per dollar by attempting to replace 5-7 separate tools. Best for budget-conscious teams willing to navigate complexity for comprehensive functionality.",
          specs: [
            { label: "Starting Price", value: "$7/user/mo" },
            { label: "Best For", value: "Power Users" },
            { label: "Features", value: "Extensive" },
            { label: "Complexity", value: "High" }
          ]
        }
      ],
      capabilityComparisons: [
        {
          title: "Core Capabilities Comparison",
          description: "How each platform performs across critical evaluation dimensions",
          dimensions: [
            {
              dimensionName: "Ease of Use & Adoption",
              winnerColor: "primary",
              scores: [
                { provider: "Monday.com", score: 9.5, barWidth: 95, color: "primary" },
                { provider: "Asana", score: 7.5, barWidth: 75, color: "blue-600" },
                { provider: "ClickUp", score: 6.0, barWidth: 60, color: "green-600" }
              ],
              note: "Monday.com wins decisively - teams become productive in days vs weeks with competitors"
            },
            {
              dimensionName: "Feature Completeness",
              winnerColor: "green",
              scores: [
                { provider: "Monday.com", score: 8.5, barWidth: 85, color: "primary" },
                { provider: "Asana", score: 8.0, barWidth: 80, color: "blue-600" },
                { provider: "ClickUp", score: 9.5, barWidth: 95, color: "green-600" }
              ],
              note: "ClickUp offers the most comprehensive feature set"
            },
            {
              dimensionName: "Automation & Workflows",
              winnerColor: "primary",
              scores: [
                { provider: "Monday.com", score: 9.5, barWidth: 95, color: "primary" },
                { provider: "Asana", score: 7.0, barWidth: 70, color: "blue-600" },
                { provider: "ClickUp", score: 8.0, barWidth: 80, color: "green-600" }
              ],
              note: "Monday.com's automation builder is significantly more powerful and intuitive"
            },
            {
              dimensionName: "Enterprise Scalability",
              winnerColor: "blue",
              scores: [
                { provider: "Monday.com", score: 8.0, barWidth: 80, color: "primary" },
                { provider: "Asana", score: 9.5, barWidth: 95, color: "blue-600" },
                { provider: "ClickUp", score: 7.0, barWidth: 70, color: "green-600" }
              ],
              note: "Asana's proven enterprise deployment at scale makes it the clear winner"
            }
          ]
        }
      ],
      keyTakeaways: {
        title: "Which Platform Should You Choose?",
        items: [
          {
            provider: "Monday.com",
            color: "primary",
            summary: "Best for growing companies (50-500 employees) that value usability and adoption. Exceptional for marketing, creative, and operations teams."
          },
          {
            provider: "Asana",
            color: "blue-600",
            summary: "Best for enterprises (500+ employees) needing sophisticated portfolio management, governance, and proven scalability at scale."
          },
          {
            provider: "ClickUp",
            color: "green-600",
            summary: "Best for budget-conscious startups and power users willing to invest in mastering a complex but feature-rich platform."
          }
        ]
      },
      detailedAnalysis: [
        {
          title: "Monday.com: The Adoption Champion",
          paragraphs: [
            "Monday.com earns our top ranking by solving the most critical challenge in project management software: team adoption. While competitors offer powerful features, they often sit unused because teams find them too complex or rigid. Monday.com's visual, flexible interface means teams actually use it.",
            "The platform's strength lies in its board-based system with 20+ view types. Marketing teams visualize campaigns in Kanban view while executives prefer Gantt charts for portfolio overview—all viewing the same underlying data. This flexibility means the tool adapts to your team, not the other way around.",
            "Monday.com's no-code automation builder lets teams create sophisticated workflows in seconds. Our testing showed teams save 8-10 hours weekly on manual status updates and synchronization tasks. The automation isn't just powerful—it's actually usable by non-technical team members."
          ]
        },
        {
          title: "Asana: The Enterprise Solution",
          paragraphs: [
            "Asana distinguishes itself through sophisticated portfolio management and proven enterprise scalability. Where Monday.com prioritizes ease of use, Asana focuses on depth and governance features that large organizations require.",
            "The platform's ability to connect individual tasks to team goals to company objectives creates visibility from daily work to strategic priorities. This goal-tracking and portfolio management capability surpasses competitors, making it indispensable for enterprises managing complex, interdependent initiatives.",
            "Asana's architecture reliably serves organizations from 10 to 10,000+ users without performance degradation. The advanced permissions, audit logs, and SCIM/SAML support satisfy enterprise compliance requirements that smaller competitors can't match."
          ]
        },
        {
          title: "ClickUp: The Value Maximizer",
          paragraphs: [
            "ClickUp attempts to be every productivity tool in one platform—project management, docs, wikis, goals, chat, and whiteboards. For budget-conscious teams, this consolidation can replace 5-7 separate tools, saving $50-100 per user monthly.",
            "The platform's extreme customization allows teams to mold it precisely to their workflows. Custom statuses, fields, views, and permissions mean ClickUp can adapt to virtually any process. This flexibility comes at the cost of significant complexity that undermines adoption.",
            "At $7-12 per user monthly, ClickUp delivers more features per dollar than any competitor. However, our testing showed many teams abandon the platform after 60-90 days, overwhelmed by options. The value proposition only materializes for teams willing to invest heavily in learning and adoption."
          ]
        }
      ]
    }
  }
}
