'use client';
import { cva } from 'class-variance-authority';
import { Copy01Icon } from 'hugeicons-react';
import React, { useState } from 'react';
import { cn } from '../../lib';
import { Button } from '../button';
import { Tooltip, TooltipContent, TooltipTrigger } from '../tooltip';

type CodeProps = {
  children?: React.ReactNode;
  className?: string;
  variant?: 'default' | 'secondary';
  showCopyButton?: boolean;
};

const codeVariants = cva(
  'bg-muted p-4 h-16 rounded-lg flex items-center justify-between border border-border',
  {
    variants: {
      variant: {
        default: '',
        secondary: 'bg-secondary',
      },
    },
  }
);
const Code = ({
  children,
  className,
  variant = 'default',
  showCopyButton = false,
  ...props
}: CodeProps & React.HTMLAttributes<HTMLPreElement>) => {
  const [isCopied, setIsCopied] = useState(false);
  const [isTooltipVisible, setIsTooltipVisible] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(children as string);
    setIsCopied(true);
    setIsTooltipVisible(true);

    setTimeout(() => {
      setIsTooltipVisible(false);
    }, 1000);

    setTimeout(() => {
      setIsCopied(false);
    }, 2000);
  };

  return (
    <pre
      className={cn(codeVariants({ variant }), className, 'relative')}
      {...props}
    >
      {showCopyButton && (
        <Tooltip open={isTooltipVisible}>
          <TooltipTrigger
            asChild
            onMouseEnter={() => setIsTooltipVisible(true)}
            onMouseLeave={() => setIsTooltipVisible(false)}
          >
            <Button variant="ghost" size="icon" onClick={handleCopy}>
              <Copy01Icon className="h-4 w-4" />
            </Button>
          </TooltipTrigger>
          <TooltipContent className="transition-opacity duration-150">
            {isCopied ? 'Copied' : 'Copy to clipboard'}
          </TooltipContent>
        </Tooltip>
      )}
      <code className="text-sm text-secondary-foreground">{children}</code>
    </pre>
  );
};

Code.displayName = 'Code';

export { Code };
