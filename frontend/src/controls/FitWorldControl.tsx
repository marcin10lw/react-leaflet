import { useMap } from 'react-leaflet';

import { FullscreenOutlined } from '@ant-design/icons';
import { Button } from 'src/ui/atoms/Button';

export const FitWorldControl = () => {
  const map = useMap();

  return (
    <Button variant="control" onClick={() => map.fitWorld()}>
      <FullscreenOutlined />
    </Button>
  );
};
