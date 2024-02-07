import { MapContainer } from 'react-leaflet';

import { LayersPlugin } from './LayersPlugin';
import './style.css';

interface MapProps {
  children?: React.ReactNode;
  zoom?: number;
}

export const Map = ({ children, zoom }: MapProps) => {
  return (
    <MapContainer
      className="absolute z-[100]"
      center={[0, 0]}
      zoom={zoom}
      minZoom={2}
      maxZoom={18}
      attributionControl={false}
      zoomControl={false}
      maxBounds={[
        [90, 180],
        [90, -180],
        [-90, -180],
        [-90, 180],
      ]}
    >
      <LayersPlugin />
      {children}
    </MapContainer>
  );
};
