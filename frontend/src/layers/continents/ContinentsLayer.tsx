import { GeoJSON, GeoJSONProps } from 'react-leaflet';

import { continents } from 'src/data/continents';
import { useGeoFilterStore } from 'src/store/geoFilterStore';
import { useRadiusFilterStore } from 'src/store/radiusFilterStore';
import { Continent } from 'src/types';

import { continentsStyles, selectedContinentStyles } from './continentsStyles';

export const ContinentsLayer = () => {
  const setGeoFilter = useGeoFilterStore((state) => state.setGeoFilter);
  const geoFilter = useGeoFilterStore((state) => state.geoFilter);
  const setRadiusFilter = useRadiusFilterStore((state) => state.setRadiusFilter);

  const onContinentClick = (continent: Continent) => {
    const isSelectedContinent = geoFilter?.selectedContinent === continent;

    if (isSelectedContinent) {
      setGeoFilter(null);
    } else {
      setGeoFilter({
        selectedContinent: continent,
      });

      setRadiusFilter(null);
    }
  };

  return (
    <GeoJSON
      data={continents as GeoJSONProps['data']}
      style={(feature) => {
        const continentName = feature?.properties.CONTINENT;
        return geoFilter?.selectedContinent === feature
          ? selectedContinentStyles
          : continentsStyles[continentName];
      }}
      eventHandlers={{
        click: (event) => {
          const feature = event.sourceTarget.feature as Continent;
          onContinentClick(feature);
        },
      }}
    />
  );
};
