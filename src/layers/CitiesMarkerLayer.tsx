import { Marker, Popup } from 'react-leaflet';

import { defaultIcon } from '../icons';
import { CitiesCollection } from '../types';
import { getLatLang } from '../utils/getLatLangExpression';

interface CitiesMarkerLayerProps {
  data: CitiesCollection;
}
export const CitiesMarkerLayer = ({ data: cities }: CitiesMarkerLayerProps) => {
  return cities.features.map((city, i) => {
    const { properties, geometry } = city;

    return (
      <Marker key={i} icon={defaultIcon} position={getLatLang(geometry.coordinates)}>
        <Popup>{properties.name}</Popup>
      </Marker>
    );
  });
};
