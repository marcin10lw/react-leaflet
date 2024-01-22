import { CitiesMarkerLayer } from 'src/layers/cities/CitiesMarkerLayer';
import { ContinentsLayer } from 'src/layers/continents/ContinentsLayer';
import { HighestPointsLayer } from 'src/layers/highestPoints/HighestPointsLayer';

export const mapProviderConfig = {
  ['OSM Streets']: {
    attribution:
      '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  },
  ['ESRI World Imagery']: {
    attribution:
      '&copy; <a href="Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community',
    url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}',
  },
  ['Open Topo Map']: {
    attribution:
      'Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)',
    url: 'https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png',
  },
};

export const layersConfig = {
  cities: {
    name: 'World Popular Cities',
    layer: CitiesMarkerLayer,
  },
  highestPoints: {
    name: 'Highest Points',
    layer: HighestPointsLayer,
  },
  continents: {
    name: 'Highest Points',
    layer: ContinentsLayer,
  },
};
