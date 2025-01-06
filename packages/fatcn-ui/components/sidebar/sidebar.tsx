'use client';
import { Logout01Icon } from 'hugeicons-react';
import { useRouter } from 'next/navigation.js';
import {
  createContext,
  JSX,
  ReactNode,
  useContext,
  useState,
} from 'react';
import { cn } from '../../lib';
import { Button } from '../button/button';

interface NavSection {
  title?: string;
  items: NavItem[];
}
interface NavItem {
  icon?: ReactNode;
  title: string;
  href: string;
}

interface SidebarProps {
  header?: ReactNode;
  contents: NavSection[];
  footer?: ReactNode;
  showCloseButton?: boolean;
  className?: string;
  position?: 'left' | 'right';
}

interface SidebarContextType {
  isOpen: boolean;
  toggleSidebar: () => void;
}

interface SidebarProviderProps {
  children: ReactNode;
}

interface SidebarLayoutProps {
  children: ReactNode;
}

const SidebarContext = createContext<SidebarContextType | undefined>(undefined);

export function SidebarProvider({
  children,
}: SidebarProviderProps): JSX.Element {
  const [isOpen, setIsOpen] = useState<boolean>(true);

  const toggleSidebar = (): void => setIsOpen((prev) => !prev);

  return (
    <SidebarContext.Provider value={{ isOpen, toggleSidebar }}>
      {children}
    </SidebarContext.Provider>
  );
}

export function useSidebar(): SidebarContextType {
  const context = useContext(SidebarContext);
  if (context === undefined) {
    throw new Error('useSidebar must be used within a SidebarProvider');
  }
  return context;
}

const sidebarAnimationVariants = {
  left: '-translate-x-full',
  right: 'translate-x-full',
};

// Sidebar component
export function Sidebar({
  header,
  contents,
  footer,
  showCloseButton = false,
  className = '',
  position = 'left',
}: SidebarProps): JSX.Element {
  const { isOpen, toggleSidebar } = useSidebar();
  const router = useRouter();

  return (
    <aside
      className={cn(
        'sticky left-0 h-full flex-shrink-0 border-r border-border bg-muted/30 transition-all duration-300 ease-in-out',
        isOpen ? 'w-sidebar-width' : 'w-sidebar-width-collapsed',
        position === 'right' ? 'right-0' : 'left-0',
        className
      )}
    >
      <div className="flex h-full flex-col">
        {/* Header */}
        {header && (
          <div
            className={cn(
              'relative flex items-center justify-between border-b border-border text-primary-foreground',
              isOpen ? 'p-4' : 'p-2 py-4'
            )}
          >
            <div className="flex h-10 w-full items-center justify-between">
              <div
                className={cn(
                  'flex-1 transition-all duration-300 ease-in-out',
                  isOpen
                    ? 'translate-x-0 opacity-100'
                    : sidebarAnimationVariants[position] + ' absolute opacity-0'
                )}
              >
                {header}
              </div>
              {showCloseButton && (
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={toggleSidebar}
                  className="mx-auto p-1"
                  aria-label="Toggle sidebar"
                >
                  <Logout01Icon
                    size={18}
                    className={cn(
                      'transition-transform duration-300 ease-in-out',
                      position === 'left'
                        ? isOpen
                          ? 'rotate-180'
                          : ''
                        : isOpen
                          ? ''
                          : 'rotate-180'
                    )}
                  />
                </Button>
              )}
            </div>
          </div>
        )}

        {/* Navigation */}
        <nav
          className={cn(
            'flex-1 overflow-y-auto overflow-x-hidden overscroll-contain',
            isOpen ? 'p-4' : 'px-2 py-4'
          )}
        >
          <ul className="space-y-2">
            {contents.map((section, index) => (
              <div className="border-b border-border pb-4" key={index}>
                <p
                  key={index}
                  className="mb-4 text-sm font-medium text-primary-foreground"
                >
                  {section.title}
                </p>
                {section.items.map((item, index) => (
                  <li key={index}>
                    <Button
                      size={'md'}
                      variant="ghost"
                      onClick={() => router.push(item.href)}
                      className={cn(
                        'flex w-full items-center justify-start gap-2 rounded-lg transition-colors',
                        isOpen ? 'px-3 py-2' : 'justify-center p-2'
                      )}
                    >
                      <div className="no-shrink">{item.icon}</div>
                      <div
                        className={cn(
                          'transition-all duration-100 ease-in-out',
                          isOpen
                            ? 'translate-x-0 opacity-100'
                            : sidebarAnimationVariants[position] +
                                ' absolute opacity-0'
                        )}
                      >
                        {item.title}
                      </div>
                    </Button>
                  </li>
                ))}
              </div>
            ))}
          </ul>
        </nav>

        {/* Footer */}
        {footer && (
          <div
            className="border-t border-border p-4 transition-opacity duration-300 ease-in-out data-[open=false]:opacity-0 data-[open=true]:opacity-100"
            data-open={isOpen}
          >
            {isOpen ? footer : null}
          </div>
        )}
      </div>
    </aside>
  );
}

// Layout component
export function SidebarLayout({ children }: SidebarLayoutProps): JSX.Element {
  const { isOpen } = useSidebar();

  return (
    <div className={`flex h-svh transition-all duration-300 ease-in-out`}>
      {children}
    </div>
  );
}
