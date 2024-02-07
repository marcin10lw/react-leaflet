import { useEffect } from 'react';
import { useMap } from 'react-leaflet';

interface ZoomControlPluginProps {
  zoom: number;
}

export const ZoomControlPlugin = ({ zoom }: ZoomControlPluginProps) => {
  const map = useMap();

  useEffect(() => {
    map.setZoom(zoom, {
      animate: true,
      duration: 1,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [zoom]);

  return null;
};
