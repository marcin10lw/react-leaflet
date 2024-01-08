import { createRoot } from 'react-dom/client';

import { BorderOuterOutlined } from '@ant-design/icons';
import { createControlComponent } from '@react-leaflet/core';
import { Button } from 'antd';
import { Control, DomUtil, Map } from 'leaflet';

const node = DomUtil.create('div');

const FitBoundsToDataControlClass = Control.extend({
  options: {
    position: 'topleft',
  },
  onAdd: function (map: Map) {
    const root = createRoot(node);
    root.render(
      <Button
        className="leaflet-control-layers"
        title="Fit bounds to world"
        icon={<BorderOuterOutlined />}
        style={{
          width: 34,
          height: 34,
        }}
        onClick={() => map.fitWorld()}
      ></Button>,
    );

    return node;
  },
  onRemove: function (map: Map) {
    console.log(map);
  },
});

export const FitBoundsToDataControl = createControlComponent(
  (props) => new FitBoundsToDataControlClass(props),
);
