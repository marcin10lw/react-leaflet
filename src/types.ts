import { cities } from './data/cities';

export type CitiesCollection = typeof cities;

export type City = CitiesCollection['features'][number];
