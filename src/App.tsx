import { useState } from 'react';

import { CustomFitBoundsControl } from './controls/CustomFitBoundsControl';
import { CustomFitWorldControl } from './controls/CustomFitWorldControl';
import { CustomZoomControl } from './controls/CustomZoomControl';
import { Map } from './map/Map';
import { ZoomControlPlugin } from './map/ZoomControlPlugin';

function App() {
  const [zoom, setZoom] = useState(2);

  return (
    <main className="relative">
      <Map zoom={zoom}>
        <ZoomControlPlugin zoom={zoom || 2} />
        <div className="absolute z-[1000] flex flex-col gap-4 pl-4 pt-4">
          <CustomZoomControl zoom={zoom} setZoom={setZoom} />
        </div>
        <div className="absolute right-[14px] top-20 z-[1000] flex flex-col gap-[2px]">
          <CustomFitBoundsControl />
          <CustomFitWorldControl />
        </div>
      </Map>
    </main>
  );
}

export default App;
