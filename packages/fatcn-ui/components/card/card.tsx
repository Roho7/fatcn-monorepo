import * as React from 'react';
import { useContext } from 'react';

import { cva, VariantProps } from 'class-variance-authority';
import { cn } from '../../lib';

const cardVariants = cva('flex flex-col space-y-1.5', {
  variants: {
    variant: {
      default: 'bg-primary/50 text-primary-foreground shadow',
      secondary: 'bg-card text-card-foreground shadow',
    },
    size: {
      sm: 'p-4 rounded-sm',
      md: 'p-6 rounded-md',
      lg: 'p-8 rounded-lg',
    },
  },
  defaultVariants: {
    variant: 'default',
    size: 'md',
  },
});

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: 'sm' | 'md' | 'lg' | null;
  variant?: 'default' | 'secondary' | null;
}

const CardContext = React.createContext<CardProps | null>(null);

const Card = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & VariantProps<typeof cardVariants>
>(({ className, size = 'md', variant = 'default', ...props }, ref) => (
  <CardContext.Provider value={{ size, variant }}>
    <div
      ref={ref}
      className={cn(cardVariants({ size, variant, className }))}
      {...props}
    />
  </CardContext.Provider>
));
Card.displayName = 'Card';

const CardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const parentCard = useContext(CardContext);
  const sizeStyles = {
    sm: 'px-2 py-1 text-sm',
    md: 'px-4 py-2 text-md',
    lg: 'px-6 py-4 text-xl',
  }[parentCard?.size || 'md'];

  return (
    <div
      ref={ref}
      className={cn('flex flex-col', sizeStyles, className)}
      {...props}
    />
  );
});
CardHeader.displayName = 'CardHeader';

const CardTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => {
  const parentCard = useContext(CardContext);
  const sizeStyles = {
    sm: 'text-sm',
    md: 'text-lg',
    lg: 'text-xl',
  }[parentCard?.size || 'md'];

  const variantStyles = {
    default: 'text-primary-foreground',
    secondary: 'text-primary-foreground',
  }[parentCard?.variant || 'default'];

  return (
    <h3
      ref={ref}
      className={cn(
        'font-semibold leading-none tracking-tight',
        sizeStyles,
        variantStyles,
        className
      )}
      {...props}
    />
  );
});
CardTitle.displayName = 'CardTitle';

const CardDescription = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const parentCard = useContext(CardContext);
  const variantStyles = {
    default: 'text-primary-foreground/50',
    secondary: 'text-muted-foreground',
  }[parentCard?.variant || 'default'];
  return (
    <div
      ref={ref}
      className={cn('text-sm', variantStyles, className)}
      {...props}
    />
  );
});
CardDescription.displayName = 'CardDescription';

const CardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const parentCard = useContext(CardContext);

  const sizeStyles = {
    sm: 'px-2 py-1 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-4 text-lg',
  }[parentCard?.size || 'md'];

  const variantStyles = {
    default: 'text-primary-foreground',
    secondary: 'text-primary-foreground',
  }[parentCard?.variant || 'default'];

  return (
    <div
      ref={ref}
      className={cn(sizeStyles, variantStyles, className)}
      {...props}
    />
  );
});
CardContent.displayName = 'CardContent';

const CardFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const parentCard = useContext(CardContext);
  const sizeStyles = {
    sm: 'p-2',
    md: 'p-4',
    lg: 'p-6',
  }[parentCard?.size || 'md'];

  return (
    <div
      ref={ref}
      className={cn('flex items-center', sizeStyles, className)}
      {...props}
    />
  );
});
CardFooter.displayName = 'CardFooter';

export {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
};

