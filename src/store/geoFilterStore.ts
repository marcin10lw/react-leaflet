import { Continent } from 'src/types';
import { create } from 'zustand';

interface GeoFilter {
  selectedContinent: Continent;
}

interface GeoFilterStore {
  geoFilter: GeoFilter | null;
  setGeoFilter: (geoFilter: GeoFilter | null) => void;
}

export const useGeoFilterStore = create<GeoFilterStore>((set) => ({
  geoFilter: null,
  setGeoFilter: (geoFilter) => set({ geoFilter }),
}));
