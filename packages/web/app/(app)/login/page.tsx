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
  const { isAuthenticated } = useConvexAuth();
  const [step, setStep] = useState<"signUp" | "signIn">("signIn");
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    if (isAuthenticated) {
      router.push('/');
    }
  }, [isAuthenticated, router]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      setIsLoading(true);
      const formData = new FormData();
      formData.append('email', email);
      formData.append('password', password);
      const result = await signIn("password", formData);
      
      if (result?.signingIn) {
        router.push('/');
      }
    } catch (error) {
      console.error('Login failed:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
      <div className="w-full flex justify-center items-center h-screen">
          <Card variant="secondary" className="w-full max-w-[40vw] p-8">
            <CardHeader className="items-center text-center">
              <CardTitle className="mb-2 text-3xl font-bold text-primary-foreground">
                Welcome Back!
              </CardTitle>
              <CardDescription className="text-muted-foreground">
                {step === "signIn" ? "Log into your account" : "Create an account"}
              </CardDescription>
            </CardHeader>

            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="flex flex-col space-y-2">
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
                  <Input
                    id="password"
                    type="password"
                    placeholder="********"
                    label="Password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="[&_label]:text-muted-foreground"
                  />
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
                    {step === "signIn" ? "Log in" : "Sign up"}
                  </Button>
                </div>
              </form>
            </CardContent>

            <CardFooter className="flex flex-col gap-6">
              <div className="relative flex w-full items-center gap-2 text-xs">
                <span className="w-full border-t border-border" />
                <span className="whitespace-nowrap px-4 text-muted-foreground">
                  or continue with
                </span>
                <span className="w-full border-t border-border" />
              </div>

              <div className="flex w-full gap-4">
                <Button
                  variant="outline"
                  className="h-11 w-full text-muted-foreground"
                  type="button"
                >
                  Google
                </Button>
                <Button
                  variant="outline"
                  className="h-11 w-full text-muted-foreground"
                  type="button"
                >
                  GitHub
                </Button>
              </div>

              <p className="text-center text-sm text-muted-foreground">
                {step === "signIn" ? "Don't have an account?" : "Already have an account?"}{' '}
                <Button
                  variant="link"
                  size="sm"
                  className="text-primary-foreground hover:text-complimentary-foreground"
                  asChild
                >
                  <Link href={step === "signIn" ? "/signup" : "/login"}>
                    {step === "signIn" ? "Sign up!" : "Sign in!"}
                  </Link>
                </Button>
              </p>
            </CardFooter>
          </Card>
      </div>
  )
}

export default Page