import { GeoJSON, GeoJSONProps, Tooltip } from 'react-leaflet';

import { useGeoFilterStore } from 'src/store/geoFilterStore';
import { Continent, ContinentsCollection } from 'src/types';

import { continentsStyles, selectedContinentStyles } from './continentsStyles';

interface ContinentsLayerProps {
  data: ContinentsCollection;
}

const ContinenrGeoJSON = ({ continent }: { continent: Continent }) => {
  const setGeoFilter = useGeoFilterStore((state) => state.setGeoFilter);
  const geoFilter = useGeoFilterStore((state) => state.geoFilter);

  const continentName = continent.properties.CONTINENT;

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
    : continentsStyles[continentName];

  return (
    <GeoJSON
      key={continentName}
      data={continent as GeoJSONProps['data']}
      pathOptions={pathOptions}
      eventHandlers={{
        click: onContinentClick,
      }}
    >
      <Tooltip sticky>{continentName}</Tooltip>
    </GeoJSON>
  );
};

export const ContinentsLayer = ({ data }: ContinentsLayerProps) => {
  const continents = data.features as Continent[];

  return continents.map((continent) => {
    return <ContinenrGeoJSON continent={continent} />;
  });
};
