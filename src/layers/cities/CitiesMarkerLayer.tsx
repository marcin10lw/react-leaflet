import { Marker, useMap } from 'react-leaflet';

// @ts-expect-error: The type definitions for boolean-point-in-polygon are incomplete.
import booleanPointInPolygon from '@turf/boolean-point-in-polygon';
import { defaultIcon, selectedIcon } from 'src/icons';
import { useGeoFilterStore } from 'src/store/geoFilterStore';
import { useRadiusFilterStore } from 'src/store/radiusFilterStore';
import { CitiesCollection } from 'src/types';
import { getLatLang } from 'src/utils/getLatLangExpression';

import { CityPopup } from './CityPopup';

interface CitiesMarkerLayerProps {
  data: CitiesCollection;
}
export const CitiesMarkerLayer = ({ data: cities }: CitiesMarkerLayerProps) => {
  const map = useMap();
  const radiusFilter = useRadiusFilterStore((state) => state.radiusFilter);
  const geoFilter = useGeoFilterStore((state) => state.geoFilter);

  const filteredCities = cities.features.filter((city) => {
    if (radiusFilter) {
      const { cityFeature, radius } = radiusFilter;

      const distance = map.distance(
        getLatLang(city.geometry.coordinates),
        getLatLang(cityFeature.geometry.coordinates),
      );

      return distance / 1000 <= radius;
    }

    if (geoFilter) {
      return booleanPointInPolygon(city, geoFilter.selectedContinent);
    }

    return true;
  });

  return filteredCities.map((city) => {
    const isSameSelectedCity = radiusFilter?.cityFeature === city;

    return (
      <Marker
        key={city.properties.name}
        eventHandlers={{
          click: () => {},
        }}
        icon={isSameSelectedCity ? selectedIcon : defaultIcon}
        position={getLatLang(city.geometry.coordinates)}
      >
        <CityPopup city={city} isSameSelectedCity={isSameSelectedCity} />
      </Marker>
    );
  });
};
