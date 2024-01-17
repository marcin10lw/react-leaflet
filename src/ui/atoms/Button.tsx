import { ButtonHTMLAttributes, forwardRef } from 'react';

import { VariantProps, cva } from 'class-variance-authority';
import { cn } from 'src/utils';

// eslint-disable-next-line react-refresh/only-export-components
export const buttonVariants = cva('shadow flex items-center justify-center', {
  variants: {
    variant: {
      default: 'bg-slate-600 text-white hover:scale-95',
    },
    size: {
      default: 'w-[40px] h-[40px]',
    },
  },
  defaultVariants: {
    variant: 'default',
    size: 'default',
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
