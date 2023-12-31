import { cities } from './data/cities';
import { highestPoints } from './data/highestPoints';

export type CitiesCollection = typeof cities;
export type City = CitiesCollection['features'][number];

export type HighestPointsCollection = typeof highestPoints;
export type HighestPoint = HighestPointsCollection['features'][number];
