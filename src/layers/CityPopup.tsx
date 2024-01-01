import { useState } from 'react';
import { Popup } from 'react-leaflet';

import { Button, Flex, InputNumber } from 'antd';
import { INITIAL_RADIUS_FILTER } from 'src/constants';
import { useRadiusFilterStore } from 'src/store/radiusFilterStore';

import { City } from '../types';

interface CityPopupProps {
  city: City;
}
export const CityPopup = ({ city }: CityPopupProps) => {
  const [radiusInput, setRadiusInput] = useState<number | null>(INITIAL_RADIUS_FILTER);

  const setRadiusFilter = useRadiusFilterStore((state) => state.setRadiusFilter);

  const onFilterButtonClick = () => {
    if (radiusInput) {
      setRadiusFilter({ cityFeature: city, radius: radiusInput });
    }
  };

  return (
    <Popup>
      <Flex gap={10}>
        <InputNumber min={0} value={radiusInput} onChange={(value) => setRadiusInput(value)} />
        <Button onClick={onFilterButtonClick}>Filter</Button>
      </Flex>
    </Popup>
  );
};
