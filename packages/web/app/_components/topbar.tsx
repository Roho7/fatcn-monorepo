import { Button, Input } from "@fatcn/ui";
import { cn } from "@fatcn/ui/lib";
import { Sun01Icon } from "hugeicons-react";
import { useTheme } from "next-themes";
import { useRouter } from "next/navigation";
type Props = {
  className?: string;
};

const Topbar = ({ className }: Props) => {
  const router = useRouter();
  const { setTheme } = useTheme();
  return (
    <header
      className={cn(
        "sticky top-0 left-0 right-0 z-50 flex justify-between items-center p-4 border-b border-primary-foreground/10 backdrop-blur-lg",
        className,
      )}
    >
      <div className="flex items-center gap-4">
        <h2
          className="text-2xl font-bold text-primary-foreground cursor-pointer"
          onClick={() => router.push("/")}
        >
          fat
        </h2>
        <Button
          variant="link"
          size="sm"
          onClick={() => router.push("/docs/installation")}
        >
          Documentation
        </Button>
      </div>
      <div className="flex gap-2">
        <Input placeholder="Search" className="w-80" />
        <Button
          variant="ghost"
          size="icon"
          onClick={() => {
            setTheme((prev) => (prev === "light" ? "dark" : "light"));
          }}
        >
          <Sun01Icon className="w-4 h-4" />
        </Button>
      </div>
    </header>
  );
};

export default Topbar;
