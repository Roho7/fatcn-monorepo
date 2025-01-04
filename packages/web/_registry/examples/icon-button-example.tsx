import { Button } from "@fatcn/ui/components/button";
import { Add01Icon } from "hugeicons-react";

export default function IconButtonExample() {
  return (
    <Button variant="outline" className="gap-2">
      <Add01Icon className="w-4 h-4" />
      Add item
    </Button>
  );
}
