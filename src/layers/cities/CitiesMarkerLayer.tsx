import { useEffect } from 'react';
import { LayerGroup, LayersControl, Marker, useMap } from 'react-leaflet';

// @ts-expect-error: The type definitions for boolean-point-in-polygon are incomplete.
import booleanPointInPolygon from '@turf/boolean-point-in-polygon';
import { defaultIcon, selectedIcon } from 'src/icons';
import { useFilteredCitiesStore } from 'src/store/filteredCitiesStore';
import { useGeoFilterStore } from 'src/store/geoFilterStore';
import { useRadiusFilterStore } from 'src/store/radiusFilterStore';
import { CitiesCollection } from 'src/types';
import { getLatLang } from 'src/utils';

import { CityPopup } from './CityPopup';

interface CitiesMarkerLayerProps {
  data: CitiesCollection;
}
export const CitiesMarkerLayer = ({ data: cities }: CitiesMarkerLayerProps) => {
  const map = useMap();
  const radiusFilter = useRadiusFilterStore((state) => state.radiusFilter);
  const geoFilter = useGeoFilterStore((state) => state.geoFilter);
  const setFilteredCities = useFilteredCitiesStore((state) => state.setFilteredCities);

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

  useEffect(() => {
    setFilteredCities(filteredCities);
  }, [filteredCities, setFilteredCities]);

  const citiesLayer = filteredCities.map((city) => {
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

  return (
    <LayersControl.Overlay name="World Popular Cities">
      <LayerGroup>{citiesLayer}</LayerGroup>
    </LayersControl.Overlay>
  );
};
