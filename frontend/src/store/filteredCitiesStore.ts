import { City } from 'src/types';
import { create } from 'zustand';

interface FilteredCitiesStore {
  filteredCities: City[] | null;
  setFilteredCities: (cities: City[] | null) => void;
}

export const useFilteredCitiesStore = create<FilteredCitiesStore>((set) => ({
  filteredCities: null,
  setFilteredCities: (cities) => set({ filteredCities: cities }),
}));
