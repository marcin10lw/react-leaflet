import L from 'leaflet';
import cityIconUrl from 'src/images/city_icon.svg';
import selectedIconUrl from 'src/images/city_icon_selected.svg';
import mountainIconUrl from 'src/images/mountain_icon.svg';

export const defaultIcon = L.icon({
  iconUrl: cityIconUrl,
  iconAnchor: [20, 40],
  popupAnchor: [-1, -40],
  tooltipAnchor: [16, -28],
});

export const selectedIcon = L.icon({
  iconUrl: selectedIconUrl,
  iconAnchor: [20, 40],
  popupAnchor: [-1, -40],
  tooltipAnchor: [16, -28],
});

export const mountainIcon = L.icon({
  iconUrl: mountainIconUrl,
  iconSize: [38, 38],
  iconAnchor: [18, 38],
  popupAnchor: [30, -30],
  tooltipAnchor: [20, -26],
});
