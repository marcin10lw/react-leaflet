import { LatLngExpression } from 'leaflet';

export const getLatLang = (coordinates: number[]) => {
  const [lng, lat] = coordinates;
  return [lat, lng] as LatLngExpression;
};
