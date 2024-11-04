export type Platform = 'tiktok' | 'youtube' | 'facebook' | 'instagram';

export interface SocialAccount {
  id: string;
  platform: Platform;
  username: string;
  connected: boolean;
  avatar?: string;
}

export interface VideoHighlight {
  id: string;
  title: string;
  duration: string;
  thumbnail: string;
  videoUrl: string;
  createdAt: Date;
  platforms: Platform[];
  status: 'draft' | 'scheduled' | 'published';
  scheduledFor?: Date;
}

export interface AIProcessingOptions {
  maxDuration: number;
  style: 'dynamic' | 'informative' | 'funny';
  aspectRatio: '9:16' | '16:9' | '1:1';
  includeSubtitles: boolean;
  highlightCount: number;
}