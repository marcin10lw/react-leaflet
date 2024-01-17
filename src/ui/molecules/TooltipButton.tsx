import { Button, type ButtonProps } from '../atoms/Button';

interface TooltipButtonProps extends ButtonProps {
  tooltip: string;
}

export const TooltipButton = ({ tooltip, ...buttonProps }: TooltipButtonProps) => {
  return (
    <div className="relative">
      <div className="absolute right-[calc(100%_+_8px)] top-1/2 -translate-y-1/2 rounded bg-black p-2 text-center text-white">
        {tooltip}
        <span className="absolute bottom-0 left-1/2 -z-[1] h-4 w-4 -translate-x-1/2 rotate-45 bg-black" />
      </div>
      <Button {...buttonProps} />
    </div>
  );
};
