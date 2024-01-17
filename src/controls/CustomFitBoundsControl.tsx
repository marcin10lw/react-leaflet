import { useMap } from 'react-leaflet';

import { ShrinkOutlined } from '@ant-design/icons';
import { LatLngBoundsExpression } from 'leaflet';
import { useFilteredCitiesStore } from 'src/store/filteredCitiesStore';
import { useGeoFilterStore } from 'src/store/geoFilterStore';
import { useRadiusFilterStore } from 'src/store/radiusFilterStore';
import { Button } from 'src/ui/atoms/Button';
import { getLatLang } from 'src/utils';

export const CustomFitBoundsControl = () => {
  const radiusFilter = useRadiusFilterStore((state) => state.radiusFilter);
  const geoFilter = useGeoFilterStore((state) => state.geoFilter);

  const filteredCities = useFilteredCitiesStore((state) => state.filteredCities);
  const map = useMap();

  const disabled = !geoFilter && !radiusFilter;

  const onFitBounds = () => {
    if (disabled) return;

    const filteredCitiesBounds = filteredCities?.map((city) =>
      getLatLang(city.geometry.coordinates),
    ) as LatLngBoundsExpression;

    if (filteredCitiesBounds) {
      map.fitBounds(filteredCitiesBounds);
    }
  };

  return (
    <Button onClick={onFitBounds} variant="control" disabled={disabled}>
      <ShrinkOutlined />
    </Button>
  );
};
