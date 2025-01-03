import { Button, Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle, cn } from '@fatcn/ui';

const SigninExample = ({className}: {className?: string}) => {
  return (
    <Card variant="secondary" size="sm" className={cn("w-80", className)}>
    <CardHeader>
      <CardTitle>Welcome back!</CardTitle>
      <CardDescription>Sign in to your account</CardDescription>
    </CardHeader>
    <CardContent>
      <div className="flex flex-col gap-2">
        <input
          type="email"
          placeholder="Email"
          className="p-2 rounded-md border"
        />
        <input
          type="password"
          placeholder="Password"
          className="p-2 rounded-md border"
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
  )
}

export default SigninExample;