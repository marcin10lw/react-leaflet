import { LAYERS_LOCAL_STORAGE_KEY } from 'src/constants';
import { layersConfig, mapProviderConfig } from 'src/controls/configs';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export type DisplayedLayer = keyof typeof layersConfig;
export type SelectedLayer = keyof typeof mapProviderConfig;

interface LayersStore {
  activeLayers: DisplayedLayer[];
  toggleActiveLayer: (layer: DisplayedLayer) => void;
  selectedMapProvider: SelectedLayer;
  setSelectedMapProvider: (provider: SelectedLayer) => void;
}

export const useLayersStore = create(
  persist<LayersStore>(
    (set) => ({
      activeLayers: [],
      toggleActiveLayer: (layer) =>
        set((store) => {
          const storeActiveLayers = store.activeLayers;

          if (storeActiveLayers.includes(layer)) {
            return {
              activeLayers: storeActiveLayers.filter((storeLayer) => storeLayer !== layer),
            };
          }

          return {
            activeLayers: [...storeActiveLayers, layer],
          };
        }),
      selectedMapProvider: 'OSM Streets',
      setSelectedMapProvider: (provider: SelectedLayer) =>
        set({ selectedMapProvider: provider as SelectedLayer }),
    }),
    { name: LAYERS_LOCAL_STORAGE_KEY },
  ),
);
