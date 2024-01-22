import { SELECTED_MAP_PROVIDER_LOCAL_STORAGE_KEY } from 'src/constants';
import { mapProviderConfig } from 'src/controls/configs';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export type SelectedLayer = keyof typeof mapProviderConfig;

interface SelectedMapProviderStore {
  selectedMapProvider: SelectedLayer;
  setSelectedMapProvider: (provider: SelectedLayer) => void;
}

export const useSelectedMapProviderStore = create(
  persist<SelectedMapProviderStore>(
    (set) => ({
      selectedMapProvider: 'OSM Streets',
      setSelectedMapProvider: (provider: SelectedLayer) => set({ selectedMapProvider: provider as SelectedLayer }),
    }),
    {
      name: SELECTED_MAP_PROVIDER_LOCAL_STORAGE_KEY,
    },
  ),
);
