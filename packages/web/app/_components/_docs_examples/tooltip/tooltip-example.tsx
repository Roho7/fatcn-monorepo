import { Button, Tooltip, TooltipContent, TooltipTrigger } from '@fatcn-ui';
import { InformationCircleIcon } from 'hugeicons-react';

type Props = {};

const TooltipExample = (props: Props) => {
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button size="icon">
          <InformationCircleIcon size={16} />
        </Button>
      </TooltipTrigger>
      <TooltipContent>
        <p>This is an information tooltip</p>
      </TooltipContent>
    </Tooltip>
  );
};

export default TooltipExample;
