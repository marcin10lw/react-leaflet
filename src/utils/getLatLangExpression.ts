import { LatLngExpression } from 'leaflet';

export const getLatLangExpression = (coordinates: number[]) => {
  const [lng, lat] = coordinates;
  return [lat, lng] as LatLngExpression;
};
