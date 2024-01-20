import { TileLayer } from 'react-leaflet';

import { useSelectedLayerStore } from 'src/store/mapSelectedLayerStore';

import { customLayersControlConfig } from './configs';

const CustomLayersControl = () => {
  const selectedLayer = useSelectedLayerStore((state) => state.selectedLayer);

  return (
    <TileLayer
      attribution={customLayersControlConfig[selectedLayer].attribution}
      url={customLayersControlConfig[selectedLayer].url}
    />
  );
};
export default CustomLayersControl;
