import { useState } from 'react';

import { LeftOutlined } from '@ant-design/icons';
import { Button } from 'src/components/ui/button';

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
        <div className="w-[160px] cursor-auto rounded border-2 border-slate-800 bg-secondary p-2">
          <MapProviderControl />
          <div className="my-2 h-[1px] bg-slate-800" />
          <MainLayersControl />
        </div>
      ) : (
        <Button variant="control" size="icon">
          <LeftOutlined />
        </Button>
      )}
    </div>
  );
};
