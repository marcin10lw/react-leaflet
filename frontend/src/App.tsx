import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import { MAP_ZOOM_QUERY_PARAM_KEY } from './constants';
import { ActiveFilters } from './controls/ActiveFilters';
import { FitBoundsControl } from './controls/FitBoundsControl';
import { FitWorldControl } from './controls/FitWorldControl';
import { ZoomControl } from './controls/ZoomControl';
import { LayersControl } from './controls/layers/LayersControl';
import { Map } from './map/Map';
import Minimap from './map/Minimap';

function App() {
  const [searchParams] = useSearchParams();

  const zoomQuery = searchParams.get(MAP_ZOOM_QUERY_PARAM_KEY);
  const [zoom, setZoom] = useState(zoomQuery ? Number(zoomQuery) : 2);

  return (
    <main className="relative">
      <Map zoom={zoom}>
        <Minimap />
        <div className="absolute z-[1000] flex flex-col gap-4 pl-4 pt-4">
          <ZoomControl zoom={zoom} setZoom={setZoom} />
        </div>
        <div className="absolute left-[16px] top-28 z-[1000] flex flex-col gap-[2px]">
          <FitBoundsControl />
          <FitWorldControl />
        </div>
        <div className="absolute right-[16px] top-4 z-[1000]">
          <LayersControl />
        </div>
        <ActiveFilters />
      </Map>
    </main>
  );
}

export default App;
