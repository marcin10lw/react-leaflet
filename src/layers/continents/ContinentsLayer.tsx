import { GeoJSON, GeoJSONProps } from 'react-leaflet';

import { useGeoFilterStore } from 'src/store/geoFilterStore';
import { Continent, ContinentsCollection } from 'src/types';

import { continentsStyles } from './continentsStyles';

interface ContinentsLayerProps {
  data: ContinentsCollection;
}

export const ContinentsLayer = ({ data }: ContinentsLayerProps) => {
  const continents = data.features as Continent[];

  const setGeoFilter = useGeoFilterStore((state) => state.setGeoFilter);
  const geoFilter = useGeoFilterStore((state) => state.geoFilter);
  console.log(geoFilter?.selectedContinent.properties.CONTINENT);
  return continents.map((continent) => {
    const onContinentClick = () => {
      if (geoFilter?.selectedContinent === continent) {
        setGeoFilter(null);
      } else {
        setGeoFilter({
          selectedContinent: continent,
        });
      }
    };

    return (
      <GeoJSON
        key="geojson layer"
        data={continent as GeoJSONProps['data']}
        pathOptions={continentsStyles[continent.properties.CONTINENT]}
        eventHandlers={{
          click: onContinentClick,
        }}
      />
    );
  });
};
