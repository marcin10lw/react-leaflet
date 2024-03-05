import { useEffect } from 'react';
import { useMap } from 'react-leaflet';

import L from 'leaflet';
import { MiniMap } from 'leaflet-control-mini-map';

import { mapProviderConfig } from './controls/configs';
import { useLayersStore } from './store/layersStore';

const Minimap = () => {
  const map = useMap();
  const { selectedMapProvider } = useLayersStore();

  useEffect(() => {
    const basemap = new L.TileLayer(mapProviderConfig[selectedMapProvider].url, {
      attribution: mapProviderConfig[selectedMapProvider].attribution,
    });

    const minimap = new MiniMap(basemap, {
      width: 200,
      height: 200,
      aimingRectOptions: {
        color: 'purple',
        interactive: true,
        weight: 1,
      },
      toggleDisplay: true,
      autoToggleDisplay: true,
    }).addTo(map);

    return () => {
      minimap.remove();
    };
  }, [map, selectedMapProvider]);

  return null;
};

export default Minimap;
