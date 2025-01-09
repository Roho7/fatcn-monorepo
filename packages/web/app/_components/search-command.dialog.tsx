import { getDocumentationLinks } from '@/lib/docs-registry';
import {
  CommandDialog,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from '@fatcn/ui';
import { File01Icon } from 'hugeicons-react';
import React from 'react';

const SearchCommandBox = ({
  open,
  setOpen,
  handleSelect,
}: {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  handleSelect: (link: string) => void;
}) => {
  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if ((e.key === 'k' && (e.metaKey || e.ctrlKey)) || e.key === '/') {
        if (
          (e.target instanceof HTMLElement && e.target.isContentEditable) ||
          e.target instanceof HTMLInputElement ||
          e.target instanceof HTMLTextAreaElement ||
          e.target instanceof HTMLSelectElement
        ) {
          return;
        }

        e.preventDefault();
        setOpen((open) => !open);
      }
    };

    document.addEventListener('keydown', down);
    return () => document.removeEventListener('keydown', down);
  }, []);

  return (
    <CommandDialog open={open} onOpenChange={setOpen}>
      <CommandInput placeholder="Search documentation..." />
      <CommandList className="max-h-[40vh] overflow-y-auto">
        <CommandGroup heading="Documentation">
          {getDocumentationLinks().map((link) => (
            <CommandItem
              key={link.title}
              onSelect={() => handleSelect(link.link)}
              className="flex items-center gap-2 text-sm"
            >
              <File01Icon className="h-4 w-4" />
              <span className="text-sm">{link.title}</span>
            </CommandItem>
          ))}
        </CommandGroup>
      </CommandList>
    </CommandDialog>
  );
};

export default SearchCommandBox;
