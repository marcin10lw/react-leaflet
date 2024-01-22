import { TileLayer } from 'react-leaflet';

import { useSelectedMapProviderStore } from 'src/store/mapProviderStore';

import { mapProviderConfig } from '../controls/configs';

const MapProviderLayerPlugin = () => {
  const selectedMapProvider = useSelectedMapProviderStore((state) => state.selectedMapProvider);

  return (
    <TileLayer
      attribution={mapProviderConfig[selectedMapProvider].attribution}
      url={mapProviderConfig[selectedMapProvider].url}
    />
  );
};
export default MapProviderLayerPlugin;
