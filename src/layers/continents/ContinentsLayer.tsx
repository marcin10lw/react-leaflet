import { GeoJSON, GeoJSONProps } from 'react-leaflet';

import { useGeoFilterStore } from 'src/store/geoFilterStore';
import { Continent, ContinentsCollection } from 'src/types';

import { continentsStyles, selectedContinentStyles } from './continentsStyles';

interface ContinentsLayerProps {
  data: ContinentsCollection;
}

export const ContinentsLayer = ({ data: continents }: ContinentsLayerProps) => {
  const setGeoFilter = useGeoFilterStore((state) => state.setGeoFilter);
  const geoFilter = useGeoFilterStore((state) => state.geoFilter);

  const onContinentClick = (continent: Continent) => {
    const isSelectedContinent = geoFilter?.selectedContinent === continent;

    if (isSelectedContinent) {
      setGeoFilter(null);
    } else {
      setGeoFilter({
        selectedContinent: continent,
      });
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
