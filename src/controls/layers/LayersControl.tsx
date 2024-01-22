import { useState } from 'react';

import { LeftOutlined } from '@ant-design/icons';
import { Button } from 'src/ui/atoms/Button';

import MainLayersControl from './MainLayersControl';
import { MapProviderControl } from './MapProviderControl';

export const LayersControl = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="relative"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      {isOpen ? (
        <div className="w-[160px] cursor-auto rounded border-2 border-slate-400 bg-white p-2">
          <MapProviderControl />
          <div className="mt-1.5 border-t border-slate-300 pt-1.5">
            <MainLayersControl />
          </div>
        </div>
      ) : (
        <Button variant="control">
          <LeftOutlined />
        </Button>
      )}
    </div>
  );
};
