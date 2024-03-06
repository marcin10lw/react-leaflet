import { useMap } from 'react-leaflet';

import { FullscreenOutlined } from '@ant-design/icons';
import { Button } from 'src/components/ui/button';

export const FitWorldControl = () => {
  const map = useMap();

  return (
    <Button variant="control" size="icon" onClick={() => map.fitWorld()}>
      <FullscreenOutlined />
    </Button>
  );
};
