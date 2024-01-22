import { useState } from 'react';

import { LeftOutlined } from '@ant-design/icons';
import { SelectedLayer, useSelectedMapProviderStore } from 'src/store/mapProviderStore';
import { Button } from 'src/ui/atoms/Button';

import { mapProviderConfig } from './configs';

export const CustomLayersControl = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { selectedMapProvider, setSelectedMapProvider } = useSelectedMapProviderStore();

  const tileLayers = Object.keys(mapProviderConfig) as SelectedLayer[];

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
                    defaultChecked={selectedMapProvider === provider}
                    onChange={() => setSelectedMapProvider(provider)}
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
