import { layersConfig } from 'src/controls/configs';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export type DisplayedLayer = keyof typeof layersConfig;

interface ActiveLayersStore {
  activeLayers: DisplayedLayer[];
  toggleActiveLayer: (layer: DisplayedLayer) => void;
}

export const useActiveLayersStore = create(
  persist<ActiveLayersStore>(
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
    }),
    { name: 'layers' },
  ),
);
