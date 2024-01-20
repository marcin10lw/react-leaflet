import { useState } from 'react';

import { LeftOutlined } from '@ant-design/icons';
import { SelectedLayer, useSelectedLayerStore } from 'src/store/mapSelectedLayerStore';
import { Button } from 'src/ui/atoms/Button';

import { customLayersControlConfig } from './configs';

export const CustomLayersControl = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { selectedLayer, setSelectedLayer } = useSelectedLayerStore();

  const tileLayers = Object.keys(customLayersControlConfig) as SelectedLayer[];

  return (
    <div
      className="relative"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      {isOpen ? (
        <div className="w-[160px] cursor-auto rounded border-2 border-slate-400 bg-white p-2">
          {tileLayers.length > 0 && (
            <ul className="flex flex-col gap-1">
              {tileLayers.map((provider) => (
                <li key={provider} className="flex items-center gap-2">
                  <input
                    type="radio"
                    id={provider}
                    name="tileLayer"
                    defaultChecked={selectedLayer === provider}
                    onChange={() => setSelectedLayer(provider)}
                  />
                  <label htmlFor={provider}>{provider}</label>
                </li>
              ))}
            </ul>
          )}
        </div>
      ) : (
        <Button variant="control">
          <LeftOutlined />
        </Button>
      )}
    </div>
  );
};
