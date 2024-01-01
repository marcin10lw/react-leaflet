import { Circle, MapContainer, TileLayer } from 'react-leaflet';

import { cities } from './data/cities';
import { highestPoints } from './data/highestPoints';
import { CitiesMarkerLayer } from './layers/CitiesMarkerLayer';
import { HighestPointsLayer } from './layers/HighestPointsLayer';
import { useRadiusFilterStore } from './store/radiusFilterStore';
import { getLatLang } from './utils/getLatLangExpression';

export const Map = () => {
  const radiusFilter = useRadiusFilterStore((state) => state.radiusFilter);

  return (
    <MapContainer center={[0, 0]} zoom={2}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
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
    </MapContainer>
  );
};
