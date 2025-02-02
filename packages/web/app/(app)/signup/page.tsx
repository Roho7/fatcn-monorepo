'use client'
import { useAuthActions } from "@convex-dev/auth/react";
import {
    Button,
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
    Input,
} from '@fatcn-ui';
import { useConvexAuth } from "convex/react";
import { Loading02Icon } from "hugeicons-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const Page = () => {
  const { signIn } = useAuthActions();
  const router = useRouter();
  const { isAuthenticated } = useConvexAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (isAuthenticated) {
      router.push('/');
    }
  }, [isAuthenticated, router]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);
    
    try {
      const formData = new FormData();
      formData.append('email', email);
      formData.append('password', password);
      formData.append('flow', 'signUp');
      await signIn("password", formData);
      router.push('/');
    } catch (error) {
      setError('Registration failed. Please check your details and try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen p-10">
          <Card variant="secondary" className="w-full max-w-[40vw] p-8">
            <CardHeader className="items-center text-center">
              <CardTitle className="mb-2 text-3xl font-bold text-primary-foreground">
                Create Account
              </CardTitle>
              <CardDescription className="text-muted-foreground">
                Get started with your new account
              </CardDescription>
            </CardHeader>

            <CardContent>
              {error && (
                <div className="mb-4 p-3 bg-destructive/10 text-destructive text-sm rounded-md">
                  {error}
                </div>
              )}
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="flex flex-col space-y-4">
                  <Input
                    id="email"
                    placeholder="you@example.com"
                    required
                    label="Email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="[&_label]:text-muted-foreground"
                  />
                  <div className="space-y-2">
                    <Input
                      id="password"
                      type="password"
                      placeholder="********"
                      label="Password"
                      required
                      minLength={8}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="[&_label]:text-muted-foreground"
                    />
                    <p className="text-xs text-muted-foreground">
                      Minimum 8 characters with at least one number and special character
                    </p>
                  </div>
                </div>

                <div className="flex flex-col gap-1">
                  <Button
                    size="sm"
                    type="submit"
                    className="w-full font-medium gap-2"
                    variant="default"
                    disabled={isLoading}
                  >
                    {isLoading && <Loading02Icon className="h-4 w-4 animate-spin" />}
                    Sign Up
                  </Button>
                </div>
              </form>
            </CardContent>

            <CardFooter className="flex flex-col gap-6">
              {/* ... existing social buttons section ... */}

              <p className="text-center text-sm text-muted-foreground">
                Already have an account?{' '}
                <Button
                  variant="link"
                  size="sm"
                  className="text-primary-foreground hover:text-complimentary-foreground"
                  asChild
                >
                  <Link href="/login">
                    Sign in!
                  </Link>
                </Button>
              </p>
            </CardFooter>
          </Card>
    </div>
  )
}

export default Page
