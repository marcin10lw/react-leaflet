import { Marker, Tooltip, useMap } from 'react-leaflet';

import { highestPoints } from 'src/data/highestPoints';
import { mountainIcon } from 'src/icons';
import { getLatLang } from 'src/utils';

export const HighestPointsLayer = () => {
  const mountains = highestPoints;
  const map = useMap();

  const highestPointsLayer = mountains.features.map((mountain) => {
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

  return <>{highestPointsLayer}</>;
};
