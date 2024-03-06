import { Label } from 'src/components/ui/label';
import { RadioGroup, RadioGroupItem } from 'src/components/ui/radio-group';
import { SelectedLayer, useLayersStore } from 'src/store/layersStore';

import { mapProviderConfig } from '../configs';

export const MapProviderControl = () => {
  const { selectedMapProvider, setSelectedMapProvider } = useLayersStore();

  const tileLayers = Object.keys(mapProviderConfig) as SelectedLayer[];

  return (
    <RadioGroup
      className="flex flex-col gap-2"
      onValueChange={(value) => setSelectedMapProvider(value as SelectedLayer)}
      defaultValue={selectedMapProvider}
    >
      {tileLayers.map((provider) => (
        <div key={provider} className="flex items-center gap-2 ">
          <RadioGroupItem
            id={provider}
            value={provider}
            defaultChecked={selectedMapProvider === provider}
          />
          <Label htmlFor={provider} className="text-xs">
            {provider}
          </Label>
        </div>
      ))}
    </RadioGroup>
  );
};
