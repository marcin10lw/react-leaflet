import { TileLayer } from 'react-leaflet';

import { useSelectedMapProviderStore } from 'src/store/mapProviderStore';

import { mapProviderConfig } from '../controls/configs';

const LayersControlPlugin = () => {
  const selectedLayer = useSelectedMapProviderStore((state) => state.selectedMapProvider);

  return (
    <TileLayer
      attribution={mapProviderConfig[selectedLayer].attribution}
      url={mapProviderConfig[selectedLayer].url}
    />
  );
};
export default LayersControlPlugin;
