import { Command, CommandGroup, CommandInput, CommandItem, CommandList } from 'fatcn-ui';
import { Download01Icon, StarCircleIcon } from 'hugeicons-react';
import { useState } from 'react';

const CommandBoxExample = () => {
  const [open, setOpen] = useState(false);
  return (
    <Command className='border border-border bg-background'>
      <CommandInput  placeholder='Search...' />
      <CommandGroup heading='Quick Actions'>
          <CommandList>
              <CommandItem className='flex justify-between'><div>Save to favorites</div> <StarCircleIcon className='h-4 w-4' /></CommandItem>
              <CommandItem className='flex justify-between'><div>Download</div> <Download01Icon className='h-4 w-4' /></CommandItem>
          </CommandList>
      </CommandGroup>
    </Command>
  );
};

export default CommandBoxExample;
