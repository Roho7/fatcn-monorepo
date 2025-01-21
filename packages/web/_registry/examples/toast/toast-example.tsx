import { Button, useToast } from '@fatcn-ui';

const ToastExample = () => {
    const { showToast } = useToast();
  return (
      <Button onClick={() => {
        showToast('Toast shown successfully', 'success', 2000);
      }}>
        Show Toast
      </Button>
  );
};

export default ToastExample