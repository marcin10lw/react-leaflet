import { MapContainer } from 'react-leaflet';
import { useSearchParams } from 'react-router-dom';

import { MAP_CENTER_QUERY_PARAM_KEY } from 'src/constants';

import CenterPlugin from './CenterPlugin';
import { LayersPlugin } from './LayersPlugin';
import Minimap from './Minimap';
import { ZoomControlPlugin } from './ZoomControlPlugin';
import { extractLatLngFromUrl } from './helpers';
import './style.css';

interface MapProps {
  children?: React.ReactNode;
  zoom?: number;
}

export const Map = ({ children, zoom }: MapProps) => {
  const [searchParams] = useSearchParams();

  const centerQuery = searchParams.get(MAP_CENTER_QUERY_PARAM_KEY);

  return (
    <MapContainer
      className="absolute z-[100] min-h-screen w-full"
      center={centerQuery ? extractLatLngFromUrl(centerQuery) : [0, 0]}
      zoom={zoom}
      minZoom={2}
      maxZoom={18}
      attributionControl={false}
      zoomControl={false}
      maxBounds={[
        [90, 240],
        [90, -240],
        [-90, -240],
        [-90, 240],
      ]}
    >
      <Minimap />
      <ZoomControlPlugin zoom={zoom || 2} />
      <CenterPlugin />
      <LayersPlugin />
      {children}
    </MapContainer>
  );
};
