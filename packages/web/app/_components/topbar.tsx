import { Button, Input } from "@fatcn/ui/dist";
import { cn } from "@fatcn/ui/lib";
import { useRouter } from "next/navigation";

type Props = {
    className?: string;
};

const Topbar = ({ className }: Props) => {
  const router = useRouter();
  return (
    <header className={cn("sticky top-0 left-0 right-0 z-50 flex justify-between items-center p-4 border-b border-primary-foreground/10 backdrop-blur-lg", className)}>
      <div className="flex items-center gap-4">
        <h2 className="text-2xl font-bold text-primary-foreground cursor-pointer" onClick={() => router.push("/")}>fatcn</h2>
        <Button variant="link" size="sm" onClick={() => router.push("/docs/installation")}>
          Documentation
        </Button>
      </div>
      <Input placeholder="Search" className="w-80" />
    </header>
  );
};

export default Topbar;
