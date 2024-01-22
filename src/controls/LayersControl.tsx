import { DisplayedLayer, useActiveLayersStore } from 'src/store/layersStore';

import { layersConfig } from './configs';

const LayersControl = () => {
  const { activeLayers, toggleActiveLayer } = useActiveLayersStore();
  const layersMap = Object.keys(layersConfig) as DisplayedLayer[];

  return (
    <ul className="flex flex-col gap-1">
      {layersMap.map((layer) => {
        const activeLayer = !!activeLayers.find((activeLayer) => activeLayer === layer);

        return (
          <li key={layer} className="flex items-center gap-1">
            <input
              type="checkbox"
              id={layer}
              checked={activeLayer}
              onChange={() => toggleActiveLayer(layer)}
            />
            <label htmlFor={layer}>{layersConfig[layer].label}</label>
          </li>
        );
      })}
    </ul>
  );
};

export default LayersControl;
