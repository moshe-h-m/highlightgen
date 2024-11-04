import { create } from 'zustand';
import { SocialAccount, VideoHighlight, AIProcessingOptions } from '../types';

interface Store {
  accounts: SocialAccount[];
  highlights: VideoHighlight[];
  processingOptions: AIProcessingOptions;
  addAccount: (account: SocialAccount) => void;
  removeAccount: (id: string) => void;
  addHighlight: (highlight: VideoHighlight) => void;
  updateHighlight: (id: string, highlight: Partial<VideoHighlight>) => void;
  setProcessingOptions: (options: Partial<AIProcessingOptions>) => void;
}

export const useStore = create<Store>((set) => ({
  accounts: [],
  highlights: [],
  processingOptions: {
    maxDuration: 60,
    style: 'dynamic',
    aspectRatio: '9:16',
    includeSubtitles: true,
    highlightCount: 3,
  },
  addAccount: (account) =>
    set((state) => ({ accounts: [...state.accounts, account] })),
  removeAccount: (id) =>
    set((state) => ({
      accounts: state.accounts.filter((account) => account.id !== id),
    })),
  addHighlight: (highlight) =>
    set((state) => ({ highlights: [...state.highlights, highlight] })),
  updateHighlight: (id, highlight) =>
    set((state) => ({
      highlights: state.highlights.map((h) =>
        h.id === id ? { ...h, ...highlight } : h
      ),
    })),
  setProcessingOptions: (options) =>
    set((state) => ({
      processingOptions: { ...state.processingOptions, ...options },
    })),
}));