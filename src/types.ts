import { cities } from './data/cities';
import { continents } from './data/continents';
import { highestPoints } from './data/highestPoints';

export type CitiesCollection = typeof cities;
export type City = CitiesCollection['features'][number];

export type HighestPointsCollection = typeof highestPoints;
export type HighestPoint = HighestPointsCollection['features'][number];

export type ContinentsCollection = typeof continents;
export type Continent = ContinentsCollection['features'][number];
