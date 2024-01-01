import { Marker, useMap } from 'react-leaflet';

import { useRadiusFilterStore } from 'src/store/radiusFilterStore';

import { defaultIcon, selectedIcon } from '../icons';
import { CitiesCollection } from '../types';
import { getLatLang } from '../utils/getLatLangExpression';
import { CityPopup } from './CityPopup';

interface CitiesMarkerLayerProps {
  data: CitiesCollection;
}
export const CitiesMarkerLayer = ({ data: cities }: CitiesMarkerLayerProps) => {
  const map = useMap();
  const radiusFilter = useRadiusFilterStore((state) => state.radiusFilter);

  const filteredCities = cities.features.filter((city) => {
    if (radiusFilter) {
      const { cityFeature, radius } = radiusFilter;

      const distance = map.distance(
        getLatLang(city.geometry.coordinates),
        getLatLang(cityFeature.geometry.coordinates),
      );

      return distance / 1000 <= radius;
    }

    return true;
  });

  return filteredCities.map((city, i) => {
    const isSameSelectedCity = radiusFilter?.cityFeature === city;

    return (
      <Marker
        key={city.properties.name + i}
        eventHandlers={{
          click: () => {},
        }}
        icon={isSameSelectedCity ? selectedIcon : defaultIcon}
        position={getLatLang(city.geometry.coordinates)}
      >
        <CityPopup city={city} />
      </Marker>
    );
  });
};
