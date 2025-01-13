import * as AvatarPrimitive from '@radix-ui/react-avatar';
import { cva } from 'class-variance-authority';
import React from 'react';
import { cn } from '../../lib';

const avatarVariants = cva(
  'bg-primary/50 overflow-hidden flex items-center justify-center',
  {
    variants: {
      size: {
        xs: 'w-4 h-4 rounded-sm',
        sm: 'w-8 h-8',
        md: 'w-10 h-10',
        lg: 'w-12 h-12',
      },
      shape: {
        circle: 'rounded-full',
        square: 'rounded-md',
      },
    },
    defaultVariants: {
      size: 'md',
      shape: 'circle',
    },
  }
);

const avatarRingVariants = cva('ring-ring', {
  variants: {
    size: {
      xs: 'ring-1',
      sm: 'ring-1',
      md: 'ring-2',
      lg: 'ring-[3px]',
    },
  },
});

const avatarFallbackVariants = cva('flex h-full w-full items-center justify-center rounded-full bg-muted', {
  variants: {
    size: {
      xs: 'w-4 h-4 text-[8px]',
      sm: 'w-8 h-8 text-sm',
      md: 'w-10 h-10 text-base',
      lg: 'w-12 h-12 text-lg',
    },
  },
  defaultVariants: {
    size: 'md',
  },
});

const AvatarFallback = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Fallback>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Fallback> & {
    size?: 'xs' | 'sm' | 'md' | 'lg';
  }
>(({ className, size, ...props }, ref) => (
  <AvatarPrimitive.Fallback
    ref={ref}
    className={cn(
      avatarFallbackVariants({ size }),
      className
    )}
    {...props}
  />
));
AvatarFallback.displayName = AvatarPrimitive.Fallback.displayName;

const AvatarImage = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Image>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Image>
>(({ className, ...props }, ref) => (
  <AvatarPrimitive.Image
    ref={ref}
    className={cn('aspect-square h-full w-full', className)}
    {...props}
  />
));
AvatarImage.displayName = AvatarPrimitive.Image.displayName;

const Avatar = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Root> & {
    size: 'xs' | 'sm' | 'md' | 'lg';
    shape: 'circle' | 'square';
    ring?: boolean;
  }
>(({ className, size, shape, children, ring, ...props }, ref) => (
  <AvatarPrimitive.Root
    ref={ref}
    className={cn(
      'relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full',
      avatarVariants({ size, shape }),
      ring && avatarRingVariants({ size }),
      className
    )}
    {...props}
  >
    {React.Children.map(children, child => {
      if (React.isValidElement(child) && child.type === AvatarFallback) {
        return React.cloneElement(child, { size } as any);
      }
      return child;
    })}
  </AvatarPrimitive.Root>
));
Avatar.displayName = 'Avatar';

export { Avatar, AvatarFallback, AvatarImage };
