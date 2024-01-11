import { MinusOutlined, PlusOutlined } from '@ant-design/icons';
import { Button } from 'src/ui/Button';

interface CustomZoomControlPorps {
  zoom: number;
  setZoom: React.Dispatch<React.SetStateAction<number>>;
}

export const CustomZoomControl = ({ zoom, setZoom }: CustomZoomControlPorps) => {
  const increaseZoom = () => setZoom(Math.ceil(zoom) + 1);
  const decreaseZoom = () => {
    setZoom((prevZoom) => {
      if (prevZoom <= 2) return prevZoom;

      return Math.floor(zoom) - 1;
    });
  };

  return (
    <div className="flex flex-col gap-[2px]">
      <Button onClick={increaseZoom}>
        <PlusOutlined />
      </Button>
      <Button onClick={decreaseZoom}>
        <MinusOutlined />
      </Button>
    </div>
  );
};
