import { Button, Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle, Input } from '@fatcn/ui';

const SecondaryCardExample = () => {
  return (
    <Card variant="secondary" size="sm" className={"w-80"}>
    <CardHeader>
      <CardTitle>Welcome back!</CardTitle>
      <CardDescription>Sign in to your account</CardDescription>
    </CardHeader>
    <CardContent>
      <div className="flex flex-col gap-2">
        <Input
          type="email"
          placeholder="Email"
        />
        <Input
          type="password"
          placeholder="Password"
        />
      </div>
    </CardContent>
    <CardFooter className="flex justify-between">
      <Button variant="outline" size="sm">
        Sign In
      </Button>
      <Button variant="link" size="sm">
        Forgot Password?
      </Button>
    </CardFooter>
  </Card>
  );
};

export default SecondaryCardExample;
