import * as React from 'react';
import { cn } from '../../lib';

interface InputProps extends React.ComponentProps<'input'> {
  label?: string;
  inputClassName?: string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, label, inputClassName, ...props }, ref) => {
    return (
      <div className={cn('flex flex-col gap-1 w-full', className)}>
        {label && <label className="text-sm text-muted-foreground">{label}</label>}
        <input
          className={cn(
            'flex min-h-9 w-full rounded-lg border border-input bg-input px-3 py-1 text-base text-primary-foreground shadow transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm',
            inputClassName
          )}
          ref={ref}
          {...props}
        />
      </div>
    );
  }
);
Input.displayName = 'Input';

export { Input };
