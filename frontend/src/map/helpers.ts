/* eslint-disable @typescript-eslint/no-explicit-any */
import { LatLngExpression } from 'leaflet';

export const debounce = (cb: (...args: any) => void, delay: number = 1000) => {
  let timeout = 0;

  return (...args: any) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      cb(args);
    }, delay);
  };
};

export const extractLatLngFromUrl = (centerQuery: string): LatLngExpression => {
  const lat = Number(centerQuery.split('-')[0]);
  const lng = Number(centerQuery.split('-')[1]);

  return [lat, lng];
};
