import { layersConfig } from 'src/controls/configs';
import { DisplayedLayer, useActiveLayersStore } from 'src/store/layersStore';

export const LayersPlugin = () => {
  const activeLayers = useActiveLayersStore((store) => store.activeLayers);
  const layersMap = Object.keys(layersConfig) as DisplayedLayer[];

  return layersMap
    .filter((layer) => activeLayers.includes(layer))
    .map((layer) => {
      const DisplayedLayer = layersConfig[layer].layerComponent;

      return <DisplayedLayer key={layer} />;
    });
};
