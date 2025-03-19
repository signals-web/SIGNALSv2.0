import { Image } from 'sanity'

export interface Project {
  _id: string
  _createdAt: string
  title: string
  type: 'book' | 'signage'
  featured: boolean
  mainImage: Image
  description?: string
  publishedAt: string
  slug: {
    current: string
  }
} 