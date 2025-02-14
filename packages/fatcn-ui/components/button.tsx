import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';
import * as React from 'react';
import { cn } from '../lib';


const buttonVariants = cva(
  'inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:bg-muted disabled:text-muted-foreground',
  {
    variants: {
      variant: {
        default: 'bg-primary text-primary-foreground hover:bg-accent shadow',
        secondary: 'bg-background text-foreground hover:bg-accent shadow border border-border',
        destructive:
          'bg-destructive text-destructive-foreground hover:bg-destructive/90 shadow ',
        outline:
          'text-secondary-foreground hover:bg-secondary/90 shadow ring-ring ring-1',
        ghost: 'text-foreground hover:bg-accent pixel-no-border',
        link: 'text-foreground underline-offset-4 hover:underline pixel-no-border',
        gradient:
          'bg-gradient-complimentary text-complimentary-foreground ring-2 ring-complimentary font-medium transition-[background-position] delay-50 duration-700 bg-[size:200%_200%] hover:bg-[position:100%_100%] shadow',
      },
      size: {
        xs: 'h-6 min-w-6 rounded-md px-1 text-xs',
        sm: 'h-9 rounded-md px-2 text-xs',
        md: 'h-12 px-3 py-2 rounded-lg',
        lg: 'h-14 rounded-xl px-4',
        icon: 'h-9 w-9 shrink-0',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'md',
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button';
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }), 'group-[button]')}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = 'Button';

export { Button, buttonVariants };
