import { cva } from 'class-variance-authority';
import {
  AlertCircleIcon,
  CheckmarkCircle01Icon,
  InformationCircleIcon,
  SettingsError01Icon,
} from 'hugeicons-react';
import React from 'react';
import { cn } from '../lib';

type CalloutProps = {
  variant?: 'default' | 'info' | 'warning' | 'error' | 'success';
};

const calloutVariants = cva(
  'rounded-lg border p-4 flex items-center gap-2 w-full callout',
  {
    variants: {
      variant: {
        default: 'bg-primary/10 text-primary-foreground border-border',
        info: 'bg-blue-100 text-blue-800 border-blue-200',
        warning: 'bg-yellow-100 text-yellow-800 border-yellow-200',
        error: 'bg-red-100 text-red-800 border-red-200',
        success: 'bg-green-100 text-green-800 border-green-200',
      },
    },
  }
);

const calloutIcons = {
  default: <InformationCircleIcon className="h-4 w-4 shrink-0" />,
  info: <InformationCircleIcon className="h-4 w-4 shrink-0" />,
  warning: <AlertCircleIcon className="h-4 w-4 shrink-0" />,
  error: <SettingsError01Icon className="h-4 w-4 shrink-0" />,
  success: <CheckmarkCircle01Icon className="h-4 w-4 shrink-0" />,
};

const Callout = ({
  children,
  variant = 'default',
  ...props
}: CalloutProps & React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <div className={cn(calloutVariants({ variant }))} {...props}>
      {calloutIcons[variant]}
      <div className="text-sm">{children}</div>
    </div>
  );
};

Callout.displayName = 'Callout';
export { Callout };
