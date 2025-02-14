'use client'
import { CheckmarkCircle01Icon, Copy01Icon } from "hugeicons-react";
import { useState } from "react";
import { Button, cn } from "../../../fatcn-ui";
import { Events } from "./mdx-components";

type Props = {
  value: string;
  src?: string;
  className?: string;
  event?: Events;
};

const CopyButton = ({ value, className }: Props) => {
  const [hasCopied, setHasCopied] = useState(false);

  const copyToClipboard = async () => {
    await navigator.clipboard.writeText(value);
    setHasCopied(true);
    
    setTimeout(() => {
      setHasCopied(false);
    }, 2000);
  };


  return (
    <Button variant="ghost" size="icon" onClick={copyToClipboard} className={cn(
      "absolute z-10 h-6 w-6",
      className
    )}>
      {hasCopied ? <CheckmarkCircle01Icon className="h-3 w-3" /> : <Copy01Icon className="h-3 w-3" />}
    </Button>
  );
};

export default CopyButton;
