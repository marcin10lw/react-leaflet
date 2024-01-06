import { Marker, Tooltip, useMap } from 'react-leaflet';

import { mountainIcon } from 'src/icons';
import { HighestPointsCollection } from 'src/types';
import { getLatLang } from 'src/utils/getLatLangExpression';

interface HighestPointsLayerProps {
  data: HighestPointsCollection;
}

export const HighestPointsLayer = ({ data: mountains }: HighestPointsLayerProps) => {
  const map = useMap();

  return mountains.features.map((mountain) => {
    const { properties, geometry } = mountain;

    return (
      <Marker
        eventHandlers={{
          click: (e) => {
            map.flyTo(e.latlng, 6, { animate: true, duration: 2, easeLinearity: 0.5 });
          },
        }}
        key={mountain.id}
        icon={mountainIcon}
        position={getLatLang(geometry.coordinates)}
        zIndexOffset={22}
      >
        <Tooltip>{properties.name}</Tooltip>
      </Marker>
    );
  });
};