import { customLayersControlConfig } from 'src/controls/configs';
import { create } from 'zustand';

export type SelectedLayer = keyof typeof customLayersControlConfig;

interface SelectedLayerStore {
  selectedLayer: SelectedLayer;
  setSelectedLayer: (layer: SelectedLayer) => void;
}

export const useSelectedLayerStore = create<SelectedLayerStore>((set) => ({
  selectedLayer: 'OSM Streets',
  setSelectedLayer: (layer: SelectedLayer) => set({ selectedLayer: layer as SelectedLayer }),
}));
