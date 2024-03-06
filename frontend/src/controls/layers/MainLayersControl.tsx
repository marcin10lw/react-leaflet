import { Checkbox } from 'src/components/ui/checkbox';
import { Label } from 'src/components/ui/label';
import { DisplayedLayer, useLayersStore } from 'src/store/layersStore';

import { layersConfig } from '../configs';

const MainLayersControl = () => {
  const { activeLayers, toggleActiveLayer } = useLayersStore();
  const layersMap = Object.keys(layersConfig) as DisplayedLayer[];

  return (
    <ul className="flex flex-col gap-2">
      {layersMap.map((layer) => {
        const activeLayer = !!activeLayers.find((activeLayer) => activeLayer === layer);

        return (
          <div key={layer} className="flex items-center gap-2">
            <Checkbox
              id={layer}
              checked={activeLayer}
              onCheckedChange={() => toggleActiveLayer(layer)}
            />
            <Label className="text-xs" htmlFor={layer}>
              {layersConfig[layer].label}
            </Label>
          </div>
        );
      })}
    </ul>
  );
};

export default MainLayersControl;
