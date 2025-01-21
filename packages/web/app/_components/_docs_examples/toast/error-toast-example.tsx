import { Button, useToast } from 'fatcn-ui';

const ErrorToastExample = () => {
  const { showToast } = useToast();
  return (
    <Button
      onClick={() => {
        showToast('Error toast shown successfully', 'error', 2000);
      }}>
        Show Toast
      </Button>
  );
};

export default ErrorToastExample;