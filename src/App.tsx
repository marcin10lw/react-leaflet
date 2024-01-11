import { useState } from 'react';

import { CustomZoomControl } from './controls/CustomZoomControl';
import { Map } from './map/Map';
import { ZoomControlPlugin } from './map/ZoomControlPlugin';

function App() {
  const [zoom, setZoom] = useState(2);

  return (
    <main className="relative">
      <Map zoom={zoom}>
        <ZoomControlPlugin zoom={zoom || 2} />
      </Map>
      <div className="absolute z-[1000] pl-4 pt-4">
        <CustomZoomControl zoom={zoom} setZoom={setZoom} />
      </div>
    </main>
  );
}

export default App;
