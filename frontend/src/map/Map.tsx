import { MapContainer } from 'react-leaflet';
import { useSearchParams } from 'react-router-dom';

import CenterPlugin from './CenterPlugin';
import { LayersPlugin } from './LayersPlugin';
import { extractLatLngFromUrl } from './helpers';
import './style.css';

interface MapProps {
  children?: React.ReactNode;
  zoom?: number;
}

export const Map = ({ children, zoom }: MapProps) => {
  const [searchParams] = useSearchParams();

  const centerQuery = searchParams.get('lat-lng');
  const zoomQuery = searchParams.get('zoom');

  return (
    <MapContainer
      className="absolute z-[100] min-h-screen w-full"
      center={centerQuery ? extractLatLngFromUrl(centerQuery) : [0, 0]}
      zoom={zoomQuery ? Number(zoomQuery) : zoom}
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
      <CenterPlugin />
      <LayersPlugin />
      {children}
    </MapContainer>
  );
};
