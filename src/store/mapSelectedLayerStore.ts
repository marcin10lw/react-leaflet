import { SELECTED_TILE_LAYER_LOCAL_STORAGE_KEY } from 'src/constants';
import { customLayersControlConfig } from 'src/controls/configs';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export type SelectedLayer = keyof typeof customLayersControlConfig;

interface SelectedLayerStore {
  selectedLayer: SelectedLayer;
  setSelectedLayer: (layer: SelectedLayer) => void;
}

export const useSelectedLayerStore = create(
  persist<SelectedLayerStore>(
    (set) => ({
      selectedLayer: 'OSM Streets',
      setSelectedLayer: (layer: SelectedLayer) => set({ selectedLayer: layer as SelectedLayer }),
    }),
    {
      name: SELECTED_TILE_LAYER_LOCAL_STORAGE_KEY,
    },
  ),
);
