import { MapContainer, TileLayer } from 'react-leaflet';

import { CitiesMarkerLayer } from './layers/CitiesMarkerLayer';
import { cities } from './data/cities';

export const Map = () => {
  return (
    <MapContainer center={[0, 0]} zoom={2}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <CitiesMarkerLayer data={cities} />
    </MapContainer>
  );
};
