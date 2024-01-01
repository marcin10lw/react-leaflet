import { useState } from 'react';
import { Popup } from 'react-leaflet';

import { CloseOutlined, FilterOutlined } from '@ant-design/icons';
import { Button, Flex, InputNumber } from 'antd';
import { INITIAL_RADIUS_FILTER } from 'src/constants';
import { useRadiusFilterStore } from 'src/store/radiusFilterStore';
import { City } from 'src/types';

interface CityPopupProps {
  city: City;
  isSameSelectedCity: boolean;
}
export const CityPopup = ({ city, isSameSelectedCity }: CityPopupProps) => {
  const [radiusInput, setRadiusInput] = useState<number | null>(INITIAL_RADIUS_FILTER);

  const radiusFilter = useRadiusFilterStore((state) => state.radiusFilter);
  const setRadiusFilter = useRadiusFilterStore((state) => state.setRadiusFilter);

  const onFilterButtonClick = () => {
    if (radiusInput) {
      if (!radiusFilter) {
        setRadiusFilter({ cityFeature: city, radius: radiusInput });
      } else {
        isSameSelectedCity
          ? setRadiusFilter(null)
          : setRadiusFilter({ cityFeature: city, radius: radiusInput });
      }
    }
  };

  return (
    <Popup>
      <Flex gap={10}>
        <InputNumber min={0} value={radiusInput} onChange={(value) => setRadiusInput(value)} />
        <Button onClick={onFilterButtonClick} type="primary" disabled={radiusInput === 0}>
          {radiusFilter && isSameSelectedCity ? <CloseOutlined /> : <FilterOutlined />}
          {radiusFilter && isSameSelectedCity ? 'Clear filter' : 'Filter by km'}
        </Button>
      </Flex>
    </Popup>
  );
};
