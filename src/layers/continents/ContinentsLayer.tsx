import { GeoJSON, GeoJSONProps } from 'react-leaflet';

import { Continent, ContinentsCollection } from 'src/types';

interface ContinentsLayerProps {
  data: ContinentsCollection;
}

export const ContinentsLayer = ({ data }: ContinentsLayerProps) => {
  const continents = data.features as Continent[];

  return continents.map((continent) => {
    return (
      <GeoJSON
        key="geojson layer"
        data={continent as GeoJSONProps['data']}
        pathOptions={{
          color: 'orange',
          fillColor: '#f03',
        }}
      />
    );
  });
};
