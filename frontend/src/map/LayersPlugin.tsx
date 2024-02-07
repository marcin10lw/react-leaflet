import { TileLayer } from 'react-leaflet';

import { layersConfig, mapProviderConfig } from 'src/controls/configs';
import { DisplayedLayer, useLayersStore } from 'src/store/layersStore';

export const LayersPlugin = () => {
  const { activeLayers, selectedMapProvider } = useLayersStore();
  const layersMap = Object.keys(layersConfig) as DisplayedLayer[];

  const layers = layersMap
    .filter((layer) => activeLayers.includes(layer))
    .map((layer) => {
      const DisplayedLayer = layersConfig[layer].layerComponent;

      return <DisplayedLayer key={layer} />;
    });

  const mapProvider = (
    <TileLayer
      attribution={mapProviderConfig[selectedMapProvider].attribution}
      url={mapProviderConfig[selectedMapProvider].url}
    />
  );

  return (
    <>
      {layers}
      {mapProvider}
    </>
  );
};
