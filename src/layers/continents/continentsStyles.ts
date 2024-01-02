import { PathOptions } from 'leaflet';
import { Continent } from 'src/types';

type ContinentName = Continent['properties']['CONTINENT'];

export const continentsStyles: Record<ContinentName, PathOptions> = {
  Asia: {
    color: '#e3d381',
    fillColor: '#e3d381',
  },
  Africa: {
    color: '#bf7e45',
    fillColor: '#bf7e45',
  },
  Europe: {
    color: '#538be6',
    fillColor: '#538be6',
  },
  'North America': {
    color: '#662399',
    fillColor: '#662399',
  },
  'South America': {
    color: '#18a34e',
    fillColor: '#18a34e',
  },
  Australia: {
    color: '#b05354',
    fillColor: '#b05354',
  },
  Oceania: {
    color: '#b053a4',
    fillColor: '#b053a4',
  },
  Antarctica: {
    color: '#47abb3',
    fillColor: '#47abb3',
  },
};
