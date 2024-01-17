import { useMap } from 'react-leaflet';

import { FullscreenOutlined } from '@ant-design/icons';
import { Button } from 'src/ui/atoms/Button';

export const CustomFitWorldControl = () => {
  const map = useMap();

  return (
    <Button onClick={() => map.fitWorld()}>
      <FullscreenOutlined />
    </Button>
  );
};
