'use client';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import { cva } from 'class-variance-authority';
import { ArrowRight01Icon } from 'hugeicons-react';
import React from 'react';
import { cn } from '../../lib';
import { Button } from '../button';

const dropdownContentVariants = cva(
  'whitespace-nowrap flex flex-col gap-1 p-2.5 rounded-md text-sm transition-colors disabled:pointer-events-none disabled:opacity-50 w-full',
  {
    variants: {
      variant: {
        default: 'bg-popover text-popover-foreground shadow w-full',
        secondary: 'bg-background text-foreground shadow w-full',
      },
    },
  }
);

const dropdownTriggerVariants = cva(
  'flex items-center justify-center gap-2 px-4 py-2 whitespace-nowrap rounded-md text-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 shadow',
  {
    variants: {
      variant: {
        default:
          'bg-popover text-popover-foreground shadow hover:bg-accent',
        secondary: 'bg-background border border-border text-foreground shadow hover:bg-popover/90',
      },
    },
  }
);

const dropdownSubTriggerVariants = cva(
  'flex items-center justify-between items-center gap-2 pl-4 pr-2 py-2 whitespace-nowrap rounded-md text-sm font-medium focus:bg-accent focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        default: 'bg-popover text-popover-foreground hover:bg-accent',
        secondary: 'bg-popover text-popover-foreground hover:bg-accent',
      },
    },
  }
);

const dropdownItemClassName =
  'px-4 py-2 flex items-center justify-between gap-1 focus-visible:outline-none rounded-md focus:bg-accent cursor-pointer';

const Dropdown = ({
  children,
  options,
  icon,
  variant = 'default',
  alignment = 'start',
  triggerSize = 'md',
  rightSlot,
}: {
  icon?: React.ReactNode;
  alignment?: 'start' | 'end' | 'center';
  variant?: 'default' | 'secondary';
  children: React.ReactNode;
  triggerSize?: 'sm' | 'md' | 'lg';
  rightSlot?: React.ReactNode;
  options: {
    action?: (event: Event) => void;
    element: React.ReactNode;
    icon?: React.ReactNode;
    rightSlot?: React.ReactNode;
    suboptions?: {
      action?: (event: Event) => void;
      element: React.ReactNode;
      icon?: React.ReactNode;
      rightSlot?: React.ReactNode;
    }[];
  }[];
}) => {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <Button
          size={triggerSize}
          className={cn(
            dropdownTriggerVariants({ variant: variant }),
            'group'
            // icon ? 'pl-2' : ''
          )}
          aria-label="Customise options"
        >
          {icon ? icon : null} {children}
          <div className='group-aria-expanded:rotate-90 transition-transform duration-100'>{rightSlot ? rightSlot : null}</div>
        </Button>
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <DropdownMenu.Content
          align={alignment}
          className={dropdownContentVariants({ variant: variant })}
          sideOffset={5}
        >
          {options.map((option, index) =>
            option.suboptions ? (
              <DropdownMenu.Sub key={index}>
                <DropdownMenu.SubTrigger
                  className={dropdownSubTriggerVariants({ variant: variant })}
                >
                  {option.icon ? option.icon : null} {option.element}
                  <ArrowRight01Icon size={16} />
                </DropdownMenu.SubTrigger>
                <DropdownMenu.Portal>
                  <DropdownMenu.SubContent
                    className={dropdownContentVariants({ variant: variant })}
                    sideOffset={2}
                    alignOffset={-5}
                  >
                    {option.suboptions.map((suboption, index) => (
                      <DropdownMenu.Item
                        key={index}
                        className={dropdownItemClassName}
                        onSelect={suboption.action}
                      >
                        <div className="flex items-center gap-1">
                          {suboption.icon ? suboption.icon : null}{' '}
                          {suboption.element}
                        </div>
                        {suboption.rightSlot ? suboption.rightSlot : null}
                      </DropdownMenu.Item>
                    ))}
                  </DropdownMenu.SubContent>
                </DropdownMenu.Portal>
              </DropdownMenu.Sub>
            ) : (
              <DropdownMenu.Item
                key={index}
                className={dropdownItemClassName}
                onSelect={option.action}
              >
                <div className="flex items-center gap-2">
                  {option.icon ? option.icon : null} {option.element}
                </div>
                {option.rightSlot ? option.rightSlot : null}
              </DropdownMenu.Item>
            )
          )}
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
};

Dropdown.displayName = 'Dropdown';
export { Dropdown };
