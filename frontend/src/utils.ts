import clsx, { ClassValue } from 'clsx';
import { LatLngExpression } from 'leaflet';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const formatNumber = (number: number | string) => {
  const parsedNumber = Number(number);

  return new Intl.NumberFormat().format(parsedNumber);
};

export const getLatLang = (coordinates: number[]) => {
  const [lng, lat] = coordinates;
  return [lat, lng] as LatLngExpression;
};
