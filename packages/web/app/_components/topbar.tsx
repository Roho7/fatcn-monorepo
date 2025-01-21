import {
  Button
} from 'fatcn-ui';
import { cn } from 'fatcn-ui/lib';
import { CommandIcon, Menu01Icon, Search01Icon, Sun01Icon } from 'hugeicons-react';
import { useTheme } from 'next-themes';
import { usePathname, useRouter } from 'next/navigation';
import { useState } from 'react';
import SearchCommandBox from './search-command.dialog';
type Props = {
  className?: string;
};

const Topbar = ({ className }: Props) => {
  const router = useRouter();
  const { setTheme } = useTheme();
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const handleCommandSelect = (value: string) => {
    router.push(value);
    setOpen(false);
  };

  return (
    <header
      className={cn(
        'sticky left-0 right-0 top-0 z-50 flex items-center justify-between border-b border-primary-foreground/10 p-4 backdrop-blur-lg',
        className
      )}
    >
      <div className="flex items-center gap-4">
        {pathname.includes('docs') && (
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => {
              const sidebar = document.querySelector('#docs-sidebar');
              if (sidebar) {
                if (sidebar.classList.contains('-translate-x-[100%]')) {
                  sidebar.classList.remove('-translate-x-[100%]');
                } else {
                  sidebar.classList.add('-translate-x-[100%]');
                }
              }
            }}
          >
            <Menu01Icon className="h-4 w-4" />
          </Button>
        )}
        <h2
          className="cursor-pointer text-2xl font-bold text-primary-foreground"
          onClick={() => router.push('/')}
        >
          fat
        </h2>
        {!pathname.includes('docs') && (
          <Button
            variant="link"
            size="sm"
            className=""
            onClick={() => router.push('/docs/installation')}
          >
            Documentation
          </Button>
        )}
      </div>
      <div className="flex gap-2">
        <SearchCommandBox
          open={open}
          setOpen={setOpen}
          handleSelect={handleCommandSelect}
        />
        <Button
          variant="default"
          size="sm"
          className="h-9 justify-between md:w-[20vw]"
          onClick={() => setOpen(true)}
        >
          <div className="flex items-center gap-2">
            <Search01Icon className="h-4 w-4" />
            Search...
          </div>
          <div className="hidden items-center gap-0.5 text-sm text-primary-foreground/50 md:flex">
            <CommandIcon className="h-3 w-3" /> K
          </div>
        </Button>
        <Button
          variant="ghost"
          size="icon"
          onClick={() => {
            setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
          }}
        >
          <Sun01Icon className="h-4 w-4" />
        </Button>
      </div>
    </header>
  );
};

export default Topbar;
