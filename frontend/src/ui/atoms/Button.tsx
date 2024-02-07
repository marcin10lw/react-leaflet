import { ButtonHTMLAttributes, forwardRef } from 'react';

import { VariantProps, cva } from 'class-variance-authority';
import { cn } from 'src/utils';

// eslint-disable-next-line react-refresh/only-export-components
export const buttonVariants = cva('shadow flex items-center justify-center', {
  variants: {
    variant: {
      control:
        'bg-white disabled:transform-none disabled:cursor-not-allowed disabled:opacity-50 text-slate-700 border-2 rounded border-slate-400 hover:scale-95 w-[40px] h-[40px]',
      primary:
        'bg-blue-600 text-white py-1 px-2 rounded hover:opacity-95 transition-all duration-200',
    },
    size: {
      default: 'w-full',
    },
  },
  defaultVariants: {
    variant: 'primary',
  },
});

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, size, variant, ...props }, ref) => {
    return (
      <button ref={ref} className={cn(buttonVariants({ variant, size, className }))} {...props} />
    );
  },
);
