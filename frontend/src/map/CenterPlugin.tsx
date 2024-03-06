import { useMapEvents } from 'react-leaflet';
import { useSearchParams } from 'react-router-dom';

import { MAP_CENTER_QUERY_PARAM_KEY, MAP_ZOOM_QUERY_PARAM_KEY } from 'src/constants';

import { debounce } from './helpers';

const CenterPlugin = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const debouncedOnMove = debounce((event: any) => {
    const { lat, lng } = event[0].target.getCenter();
    const zoom = event[0].target.getZoom();

    searchParams.set(MAP_CENTER_QUERY_PARAM_KEY, `${lat}:${lng}`);
    searchParams.set(MAP_ZOOM_QUERY_PARAM_KEY, zoom);

    setSearchParams(searchParams);
  });

  useMapEvents({
    dragend: debouncedOnMove,
    zoomend: debouncedOnMove,
  });

  return null;
};

export default CenterPlugin;
