import { GeoJSON, GeoJSONProps } from 'react-leaflet';

import { useGeoFilterStore } from 'src/store/geoFilterStore';
import { Continent, ContinentsCollection } from 'src/types';

import { continentsStyles, selectedContinentStyles } from './continentsStyles';

interface ContinentsLayerProps {
  data: ContinentsCollection;
}

export const ContinentsLayer = ({ data }: ContinentsLayerProps) => {
  const continents = data.features as Continent[];

  const setGeoFilter = useGeoFilterStore((state) => state.setGeoFilter);
  const geoFilter = useGeoFilterStore((state) => state.geoFilter);

  return continents.map((continent) => {
    const isSelectedContinent = geoFilter?.selectedContinent === continent;

    const onContinentClick = () => {
      if (isSelectedContinent) {
        setGeoFilter(null);
      } else {
        setGeoFilter({
          selectedContinent: continent,
        });
      }
    };

    const pathOptions = isSelectedContinent
      ? selectedContinentStyles
      : continentsStyles[continent.properties.CONTINENT];

    return (
      <GeoJSON
        key={continent.properties.CONTINENT}
        data={continent as GeoJSONProps['data']}
        pathOptions={pathOptions}
        eventHandlers={{
          click: onContinentClick,
        }}
      />
    );
  });
};
