import { CustomZoomControl } from './controls/CustomZoomControl';
import { Map } from './map/Map';

function App() {
  return (
    <main className="relative">
      <Map />
      <div className="absolute z-[1000] pl-4 pt-4">
        <CustomZoomControl />
      </div>
    </main>
  );
}

export default App;
