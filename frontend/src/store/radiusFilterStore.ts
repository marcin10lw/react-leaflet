import { City } from 'src/types';
import { create } from 'zustand';

interface RadiusFilter {
  radius: number;
  cityFeature: City;
}

interface RadiusFilterStore {
  radiusFilter: RadiusFilter | null;
  setRadiusFilter: (radiusFilter: RadiusFilter | null) => void;
  clearRadiusFilter: () => void;
}

export const useRadiusFilterStore = create<RadiusFilterStore>((set) => ({
  radiusFilter: null,
  setRadiusFilter: (radiusFilter) => {
    set({ radiusFilter });
  },
  clearRadiusFilter: () => set({ radiusFilter: null }),
}));
