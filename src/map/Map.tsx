import { Circle, LayersControl, MapContainer, TileLayer } from 'react-leaflet';

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
      attributionControl={false}
      zoomControl={false}
    >
      <LayersControl position="topright">
        <LayersControl.BaseLayer checked name="OSM Streets">
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
        </LayersControl.BaseLayer>
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
