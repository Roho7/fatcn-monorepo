'use client';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import {
  Button,
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  Input,
} from '../components';

interface LoginBlockProps {
  onSubmit: (username: string, password: string) => void;
}

const LoginBlock = ({ onSubmit }: LoginBlockProps) => {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(username, password);
  };

  return (
    <div className="flex w-[70vw] overflow-hidden gap-4">
      <Card variant="secondary" className="w-1/2 p-8">
        <CardHeader className="items-center text-center">
          <CardTitle className="mb-2 text-3xl font-bold text-primary-foreground">
            Welcome Back!
          </CardTitle>
          <CardDescription className="text-muted-foreground">
            Log into your account
          </CardDescription>
        </CardHeader>

        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="flex flex-col space-y-2">
              <Input
                id="username"
                placeholder="John Doe"
                required
                label="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
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
              <Link
                href="/forgot-password"
                className="ml-auto flex text-xs hover:underline"
              >
                Forgot password?
              </Link>
            </div>

            <div className="flex flex-col gap-1">
              <Button
                size="sm"
                type="submit"
                className="w-full font-medium"
                variant="default"
              >
                Log in
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
            Don&apos;t have an account?{' '}
            <Button
              variant="link"
              size="sm"
              className="text-primary-foreground hover:text-complimentary-foreground"
            >
              Sign up!
            </Button>
          </p>
        </CardFooter>
      </Card>
      <div className="flex w-1/2 items-center justify-center bg-muted rounded-lg">
        <Image
          src={'/login-01.png'}
          alt="login"
          width={500}
          height={500}
          className="h-full w-full object-cover rounded-lg"
        />
      </div>
    </div>
  );
};

export { LoginBlock };
