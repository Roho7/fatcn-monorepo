import {
    Button,
    Tooltip,
    TooltipContent,
    TooltipTrigger,
    useToast,
} from 'fatcn-ui';
import { CheckmarkCircle01Icon, Copy01Icon } from 'hugeicons-react';
import { useState } from 'react';

type Props = {};

const HeroCommand = (props: Props) => {
  const { showToast } = useToast();

  const [hasCopied, setHasCopied] = useState(false);

  const copyToClipboard = async (value: string) => {
    await navigator.clipboard.writeText(value);
    setHasCopied(true);

    setTimeout(() => {
      setHasCopied(false);
    }, 2000);
  };
  return (
    <code className="relative mb-8 flex items-center gap-4 whitespace-nowrap rounded-md border border-border bg-background py-2 pl-4 pr-2 font-mono text-sm text-secondary-foreground">
      npx fatcn-ui init{' '}
      <Tooltip>
        <TooltipTrigger asChild>
          <Button
            size="xs"
            variant="ghost"
            onClick={() => {
              copyToClipboard('npx fatcn-ui init');
              showToast('Copied to clipboard', 'success', 3000);
            }}
          >
            {hasCopied ? (
              <CheckmarkCircle01Icon className="h-4 w-4" />
            ) : (
              <Copy01Icon className="h-4 w-4" />
            )}
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>Copy to clipboard</p>
        </TooltipContent>
      </Tooltip>
    </code>
  );
};

export default HeroCommand;
