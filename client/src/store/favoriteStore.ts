import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import { Trail } from '../types/types'; 

interface FavoritesState {
  favoriteTrailIds: string[];
  favoriteTrailsData: Trail[];
}

interface FavoritesActions {
  addFavorite: (trail: Trail) => void;
  removeFavorite: (trailId: string) => void;
  isFavorite: (trailId: string) => boolean;
}

type FavoritesStore = FavoritesState & FavoritesActions;

// The 'persist' middleware will automatically save and load from localStorage
export const useFavoritesStore = create<FavoritesStore>()(
  persist(
    (set, get) => ({ 
      favoriteTrailIds: [],
      favoriteTrailsData: [],

      addFavorite: (trail) => {
        set((state) => {
          if (!state.favoriteTrailIds.includes(trail.id)) {
            return {
              favoriteTrailIds: [...state.favoriteTrailIds, trail.id],
              favoriteTrailsData: [...state.favoriteTrailsData, trail],
            };
          }
          return state; 
        });
      },

      removeFavorite: (trailId) => {
        set((state) => ({
          favoriteTrailIds: state.favoriteTrailIds.filter(id => id !== trailId),
          favoriteTrailsData: state.favoriteTrailsData.filter(trail => trail.id !== trailId),
        }));
      },

      isFavorite: (trailId) => {
        return get().favoriteTrailIds.includes(trailId);
      },
    }),
    {
      name: 'favorite-trails-storage',
      storage: createJSONStorage(() => localStorage), 
    }
  )
);