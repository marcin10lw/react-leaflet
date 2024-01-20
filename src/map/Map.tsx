import { Circle, LayersControl, MapContainer } from 'react-leaflet';

import LayersControlPlugin from 'src/map/LayersControlPlugin';
import { getLatLang } from 'src/utils';

import { cities } from '../data/cities';
import { continents } from '../data/continents';
import { highestPoints } from '../data/highestPoints';
import { CitiesMarkerLayer } from '../layers/cities/CitiesMarkerLayer';
import { ContinentsLayer } from '../layers/continents/ContinentsLayer';
import { HighestPointsLayer } from '../layers/highestPoints/HighestPointsLayer';
import { useRadiusFilterStore } from '../store/radiusFilterStore';
import './style.css';

interface MapProps {
  children?: React.ReactNode;
  zoom?: number;
}

export const Map = ({ children, zoom }: MapProps) => {
  const radiusFilter = useRadiusFilterStore((state) => state.radiusFilter);

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
        <LayersControlPlugin />
        <CitiesMarkerLayer data={cities} />
        <HighestPointsLayer data={highestPoints} />
        {radiusFilter && (
          <Circle
            pathOptions={{
              color: 'red',
              fillColor: '#f03',
            }}
            center={getLatLang(radiusFilter.cityFeature.geometry.coordinates)}
            radius={radiusFilter.radius * 1000}
          />
        )}
        <ContinentsLayer data={continents} />
      </LayersControl>
      {children}
    </MapContainer>
  );
};
