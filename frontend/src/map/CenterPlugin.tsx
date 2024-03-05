import { useMapEvents } from 'react-leaflet';
import { useSearchParams } from 'react-router-dom';

import { debounce } from './helpers';

const CenterPlugin = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const debouncedOnMove = debounce((event: any) => {
    const { lat, lng } = event[0].target.getCenter();
    const zoom = event[0].target.getZoom();

    searchParams.set('lat-lng', `${lat}-${lng}`);
    searchParams.set('zoom', zoom);

    setSearchParams(searchParams);
  });

  useMapEvents({
    dragend: debouncedOnMove,
    zoomend: debouncedOnMove,
  });

  return null;
};

export default CenterPlugin;
