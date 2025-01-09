import { Button, useToast } from '@fatcn/ui';

const InfoToastExample = () => {
  const { showToast } = useToast();
  return (
    <Button
      onClick={() => {
        showToast('Info toast shown successfully', 'info', 2000);
      }}
    >
      Show Toast
    </Button>
  );
};

export default InfoToastExample;
