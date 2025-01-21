import {
  Button,
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  Input,
} from '@fatcn-ui';

const DialogExample = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="default">Open Dialog</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Are you sure you want to delete your account?</DialogTitle>
          <DialogDescription>
            This action cannot be undone. This will permanently delete your account
            and remove all of your data from our servers.
          </DialogDescription>
        </DialogHeader>
        <p className="text-sm text-muted-foreground">
          Please type <span className="font-semibold">delete</span> to confirm.
        </p>
        <Input
          type="text"
          placeholder="Type 'delete' to confirm"
        />
        <DialogFooter className="gap-1">
          <Button variant="outline" size='sm'>Cancel</Button>
          <Button variant="destructive" size='sm'>Delete Account</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default DialogExample;
