import { Button, useToast } from '@fatcn-ui';

const WarningToastExample = () => {
  const { showToast } = useToast();
  return (
    <Button
      onClick={() => {
        showToast('Toast shown successfully', 'warning', 2000);
      }}
    >
      Show Toast
    </Button>
  );
};

export default WarningToastExample;
