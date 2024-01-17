import { useMap } from 'react-leaflet';

import { ShrinkOutlined } from '@ant-design/icons';
import { LatLngBoundsExpression } from 'leaflet';
import { useFilteredCitiesStore } from 'src/store/filteredCitiesStore';
import { Button } from 'src/ui/atoms/Button';
import { getLatLang } from 'src/utils';

export const CustomFitBoundsControl = () => {
  const filteredCities = useFilteredCitiesStore((state) => state.filteredCities);
  const map = useMap();

  const onFitBounds = () => {
    const filteredCitiesBounds = filteredCities?.map((city) =>
      getLatLang(city.geometry.coordinates),
    ) as LatLngBoundsExpression;

    if (filteredCitiesBounds) {
      map.fitBounds(filteredCitiesBounds);
    }
  };

  return (
    <Button variant="control" onClick={onFitBounds}>
      <ShrinkOutlined />
    </Button>
  );
};
