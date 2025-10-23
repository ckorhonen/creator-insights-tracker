// Core types for Creator Insights Tracker

export interface Platform {
  id: string
  name: string
  connected: boolean
  lastSync?: Date
}

export interface ContentPost {
  id: string
  platformId: string
  platformName: string
  title: string
  url: string
  publishedAt: Date
  engagementMetrics: EngagementMetrics
  revenueAttribution: RevenueAttribution
}

export interface EngagementMetrics {
  views: number
  likes: number
  comments: number
  shares: number
  saves?: number
  clickThroughRate?: number
}

export interface RevenueAttribution {
  directRevenue: number
  attributedRevenue: number
  conversions: number
  roi: number
}

export interface CreatorProfile {
  id: string
  whopUserId: string
  connectedPlatforms: Platform[]
  totalRevenue: number
  totalPosts: number
}

export interface DashboardStats {
  totalRevenue: number
  topPerformingPost: ContentPost | null
  avgEngagementRate: number
  platformBreakdown: Record<string, number>
}