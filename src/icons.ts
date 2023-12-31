import L from 'leaflet';
import iconUrl from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';
import mountainIconUrl from 'src/images/mountain_icon.svg';

export const defaultIcon = L.icon({
  iconUrl,
  shadowUrl: iconShadow,
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  tooltipAnchor: [16, -28],
  shadowSize: [41, 41],
});

export const mountainIcon = L.icon({
  iconUrl: mountainIconUrl,
  iconSize: [38, 38],
  iconAnchor: [18, 38],
  popupAnchor: [30, -30],
  tooltipAnchor: [20, -26],
});
