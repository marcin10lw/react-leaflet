import { MinusOutlined, PlusOutlined } from '@ant-design/icons';
import { Button } from 'src/components/ui/button';

interface ZoomControlPorps {
  zoom: number;
  setZoom: React.Dispatch<React.SetStateAction<number>>;
}

export const ZoomControl = ({ zoom, setZoom }: ZoomControlPorps) => {
  const increaseZoom = () => setZoom(Math.ceil(zoom) + 1);
  const decreaseZoom = () => {
    setZoom((prevZoom) => {
      if (prevZoom <= 2) return prevZoom;

      return Math.floor(zoom) - 1;
    });
  };

  return (
    <div className="flex flex-col gap-[2px]">
      <Button variant="control" size="icon" onClick={increaseZoom}>
        <PlusOutlined />
      </Button>
      <Button variant="control" size="icon" onClick={decreaseZoom}>
        <MinusOutlined />
      </Button>
    </div>
  );
};
