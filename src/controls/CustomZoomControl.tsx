import { Button } from 'src/ui/Button';

export const CustomZoomControl = () => {
  return (
    <div className="flex flex-col gap-[1px]">
      <Button>+</Button>
      <Button>-</Button>
    </div>
  );
};
