import { SelectedLayer, useSelectedMapProviderStore } from 'src/store/mapProviderStore';

import { mapProviderConfig } from './configs';

export const MapProviderControl = () => {
  const { selectedMapProvider, setSelectedMapProvider } = useSelectedMapProviderStore();

  const tileLayers = Object.keys(mapProviderConfig) as SelectedLayer[];

  return (
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
  );
};
