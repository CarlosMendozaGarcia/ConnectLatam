import {create} from 'zustand';

interface NewsState {
  news: any[];
  setNews: (news: any[]) => void;
  hasFetched: boolean;
  setHasFetched: (value: boolean) => void;
}

export const useNewsStore = create<NewsState>((set) => ({
  news: [],
  setNews: (news) => set({ news }),
  hasFetched: false,
  setHasFetched: (value) => set({ hasFetched: value }),
}));