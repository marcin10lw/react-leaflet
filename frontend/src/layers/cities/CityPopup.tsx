import { useState } from 'react';
import { Popup } from 'react-leaflet';

import { CloseOutlined, FilterOutlined } from '@ant-design/icons';
import { Button } from 'src/components/ui/button';
import { INITIAL_RADIUS_FILTER } from 'src/constants';
import { useRadiusFilterStore } from 'src/store/radiusFilterStore';
import { City } from 'src/types';
import { Card } from 'src/ui/atoms/Card';
import { formatNumber } from 'src/utils';

interface CityPopupProps {
  city: City;
  isSameSelectedCity: boolean;
}
export const CityPopup = ({ city, isSameSelectedCity }: CityPopupProps) => {
  const [radiusInput, setRadiusInput] = useState<number>(INITIAL_RADIUS_FILTER);

  const radiusFilter = useRadiusFilterStore((state) => state.radiusFilter);
  const setRadiusFilter = useRadiusFilterStore((state) => state.setRadiusFilter);

  const isFiltering = radiusFilter && isSameSelectedCity && radiusFilter.radius === radiusInput;

  const onFilterButtonClick = () => {
    if (radiusInput) {
      if (!radiusFilter) {
        setRadiusFilter({ cityFeature: city, radius: radiusInput });
      } else {
        isFiltering
          ? setRadiusFilter(null)
          : setRadiusFilter({ cityFeature: city, radius: radiusInput });
      }
    }
  };

  const { adm0name, name, pop_max } = city.properties;
  return (
    <Popup>
      <Card title="City">
        <p>{`${name}, ${adm0name}`}</p>
      </Card>
      <Card title="Population">
        <p>{formatNumber(pop_max)}</p>
      </Card>

      <div className="mt-6 flex gap-[10px]">
        <input
          className="w-16 rounded border border-slate-300 p-1 outline-none"
          value={radiusInput}
          onChange={({ target }) => setRadiusInput(target.valueAsNumber)}
          type="number"
          min={0}
        />
        <Button className="gap-2" onClick={onFilterButtonClick} disabled={radiusInput === 0}>
          {isFiltering ? <CloseOutlined /> : <FilterOutlined />}
          {isFiltering ? 'Clear filter' : 'Filter by km'}
        </Button>
      </div>
    </Popup>
  );
};
