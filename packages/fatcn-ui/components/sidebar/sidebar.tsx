"use client";
import { Logout01Icon } from "hugeicons-react";
import { useRouter } from "next/navigation";
import React, {
  createContext,
  JSX,
  ReactNode,
  useContext,
  useState,
} from "react";
import { cn } from "../../lib";
import { Button } from "../button/button";

interface NavSection{
  title?: string;
  items: NavItem[];
}
interface NavItem {
  icon?: ReactNode;
  title: string;
  href: string;
}

interface SidebarProps {
  header: ReactNode;
  contents: NavSection[];
  footer?: ReactNode;
  showCloseButton?: boolean;
  className?: string;
  position?: "left" | "right";
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
    throw new Error("useSidebar must be used within a SidebarProvider");
  }
  return context;
}

const sidebarAnimationVariants = {
  left: "-translate-x-full",
  right: "translate-x-full",
};

// Sidebar component
export function Sidebar({
  header,
  contents,
  footer,
  showCloseButton = false,
  className = "",
  position = "left",
}: SidebarProps): JSX.Element {
  const { isOpen, toggleSidebar } = useSidebar();
  const router = useRouter();

  return (
    <aside
      className={cn(
        "sticky top-0 h-screen bg-muted/30 border-r transition-all duration-300 ease-in-out flex-shrink-0",
        isOpen ? "w-sidebar-width" : "w-sidebar-width-collapsed",
        position === "right" ? "right-0" : "left-0",
        className,
      )}
    >
      <div className="flex flex-col h-full">
        {/* Header */}
        <div
          className={cn(
            "border-b flex items-center justify-between text-primary-foreground relative",
            isOpen ? "p-4" : "p-2 py-4",
          )}
        >
          <div className="flex items-center justify-between w-full h-10">
            <div
              className={cn(
                "transition-all duration-300 ease-in-out flex-1",
                isOpen
                  ? "opacity-100 translate-x-0"
                  : sidebarAnimationVariants[position] + " opacity-0 absolute",
              )}
            >
              {header}
            </div>
            {showCloseButton && (
              <Button
                variant="ghost"
                size="icon"
                onClick={toggleSidebar}
                className="p-1 mx-auto"
                aria-label="Toggle sidebar"
              >
                <Logout01Icon size={18} className={cn('transition-transform duration-300 ease-in-out', position === "left" ? isOpen ? "rotate-180" : "" : isOpen ? "" : "rotate-180")}/>
              </Button>
            )}
          </div>
        </div>

        {/* Navigation */}
        <nav
          className={cn(
            "flex-1 overflow-y-auto overflow-x-hidden overscroll-contain",
            isOpen ? "p-4" : "px-2 py-4",
          )}
        >
          <ul className="space-y-2">
            {contents.map((section, index) => (
              <div className="border-b pb-4" key={index}>
                <p key={index} className="mb-4 text-sm font-medium text-primary-foreground">{section.title}</p>
                {section.items.map((item, index) => (
                  <li key={index}>
                  <Button
                    size={"md"}
                    variant="ghost"
                    onClick={() => router.push(item.href)}
                    className={cn(
                      "flex items-center gap-2 rounded-lg transition-colors w-full justify-start",
                      isOpen ? "px-3 py-2" : "p-2 justify-center",
                    )}
                  >
                    <div className="no-shrink">{item.icon}</div>
                    <div
                      className={cn(
                        "transition-all duration-100 ease-in-out",
                        isOpen ? "opacity-100 translate-x-0" : sidebarAnimationVariants[position] + " opacity-0 absolute",
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
          <div className="p-4 border-t data-[open=true]:opacity-100 data-[open=false]:opacity-0 transition-opacity duration-300 ease-in-out" data-open={isOpen}>
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
    <div className="min-h-screen">
      <main
        className={`
          transition-all duration-300 ease-in-out flex
        `}
      >
        {children}
      </main>
    </div>
  );
}
