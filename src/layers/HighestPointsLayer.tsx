import { Marker, Tooltip } from 'react-leaflet';

import { mountainIcon } from 'src/icons';
import { HighestPointsCollection } from 'src/types';
import { getLatLang } from 'src/utils/getLatLangExpression';

interface HighestPointsLayerProps {
  data: HighestPointsCollection;
}

export const HighestPointsLayer = ({ data: mountains }: HighestPointsLayerProps) => {
  return mountains.features.map((mountain, i) => {
    const { properties, geometry } = mountain;

    return (
      <>
        <Marker
          eventHandlers={{
            click: (e) => {
              console.log(e);
            },
          }}
          key={i}
          icon={mountainIcon}
          position={getLatLang(geometry.coordinates)}
        >
          <Tooltip>{properties.name}</Tooltip>
        </Marker>
      </>
    );
  });
};
