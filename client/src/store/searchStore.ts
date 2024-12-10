import { create } from 'zustand';

interface SearchStore {
  searchText: string;
  setSearchText: (text: string) => void;
}

export const useSearchStore = create<SearchStore>((set) => ({
  searchText: "",
  setSearchText: (text) => set({ searchText: text }),
}));
