'use client';
import { DialogTitle, type DialogProps } from '@radix-ui/react-dialog';
import { VisuallyHidden } from '@radix-ui/react-visually-hidden';
import { Command as CommandPrimitive } from 'cmdk';
import React from 'react';
import { cn } from '../../lib';
import { Dialog, DialogContent, DialogHeader } from '../dialog';

const Command = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive>
>(({ className, ...props }, ref) => (
  <CommandPrimitive
    ref={ref}
    className={cn(
      'flex h-full w-full flex-col overflow-hidden rounded-md p-2 text-popover-foreground',
      className
    )}
    {...props}
  />
));

const CommandInput = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Input>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Input>
>(({ className, ...props }, ref) => (
  <CommandPrimitive.Input
    ref={ref}
    className={cn(
      'flex h-9 w-full rounded-lg border border-input bg-input px-3 py-1 text-base text-primary-foreground shadow transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm',
      className
    )}
    {...props}
  />
));
CommandInput.displayName = CommandPrimitive.Input.displayName;

const CommandGroup = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Group>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Group>
>(({ className, ...props }, ref) => (
  <CommandPrimitive.Group
    ref={ref}
    className={cn(
      'flex flex-col overflow-hidden rounded-md pt-4 text-xs text-muted-foreground',
      className
    )}
    {...props}
  />
));
CommandGroup.displayName = CommandPrimitive.Group.displayName;

const CommandItem = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Item>
>(({ className, ...props }, ref) => (
  <CommandPrimitive.Item
    ref={ref}
    className={cn(
      'flex cursor-pointer overflow-hidden rounded-md p-2 text-popover-foreground hover:bg-primary-foreground/10',
      className
    )}
    {...props}
  />
));
CommandItem.displayName = CommandPrimitive.Item.displayName;

const CommandList = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.List>
>(({ className, ...props }, ref) => (
  <CommandPrimitive.List
    ref={ref}
    className={cn(
      'flex flex-col overflow-hidden rounded-md text-popover-foreground',
      className
    )}
    {...props}
  />
));
CommandList.displayName = CommandPrimitive.List.displayName;

const CommandBox = ({
  open,
  setOpen,
  loading,
  children,
  title,
  ...props
}: DialogProps & {
  open: boolean;
  setOpen: (open: boolean) => void;
  loading: boolean;
  children: React.ReactNode;
  title?: string;
}) => {
  return (
    <Dialog open={open} onOpenChange={setOpen} {...props}>
      <DialogHeader>
        <VisuallyHidden>
          <DialogTitle>{title}</DialogTitle>
        </VisuallyHidden>
      </DialogHeader>
      <DialogContent className='p-2'>
        <Command>
          {children}
        </Command>
      </DialogContent>
    </Dialog>
  );
};

CommandBox.displayName = 'CommandBox';
export {
  Command,
  CommandBox,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList
};

