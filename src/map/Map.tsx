import { LayersControl, MapContainer } from 'react-leaflet';

import MapProviderLayerPlugin from 'src/map/MapProviderLayerPlugin';

import { CitiesMarkerLayer } from '../layers/cities/CitiesMarkerLayer';
import { ContinentsLayer } from '../layers/continents/ContinentsLayer';
import { HighestPointsLayer } from '../layers/highestPoints/HighestPointsLayer';
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
    >
      <LayersControl position="topright">
        <MapProviderLayerPlugin />
        <CitiesMarkerLayer />
        <HighestPointsLayer />
        <ContinentsLayer />
      </LayersControl>
      {children}
    </MapContainer>
  );
};
