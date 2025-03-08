import { Switch as RadixSwitch } from '@radix-ui/react-switch';
import { cva, type VariantProps } from 'class-variance-authority';
import * as React from 'react';
import { cn } from '../lib';

// Define Switch variants using CVA for different styles
const switchVariants = cva(
  'inline-flex items-center cursor-pointer transition-all', // Default styling
  {
    variants: {
      variant: {
        default: 'bg-primary-foreground text-background border border-border rounded-md',
        success: 'bg-success-foreground text-success border border-success',
        danger: 'bg-danger-foreground text-danger border border-danger',
        muted: 'bg-muted-foreground text-muted-foreground border border-muted',
      },
      size: {
        sm: 'h-6 w-12 rounded-full', // Small size
        md: 'h-8 w-16 rounded-full', // Medium size (default)
        lg: 'h-10 w-20 rounded-full', // Large size
      },
      state: {
        checked: 'bg-accent-foreground text-accent', // When the switch is on
        unchecked: 'bg-muted-foreground text-muted', // When the switch is off
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'md',
      state: 'unchecked',
    },
  }
);

export interface SwitchProps
  extends React.ComponentPropsWithoutRef<typeof RadixSwitch>,
    VariantProps<typeof switchVariants> {
  asChild?: boolean; // Allows the switch to be rendered as a different element
}

const Switch = React.forwardRef<
  React.ElementRef<typeof RadixSwitch>,
  SwitchProps
>(({ className, variant, size, state, asChild = false, ...props }, ref) => {
  return (
    <RadixSwitch
      className={cn(switchVariants({ variant, size, state, className }))}
      ref={ref}
      {...props}
    />
  );
});
Switch.displayName = 'Switch';

export { Switch, switchVariants };
