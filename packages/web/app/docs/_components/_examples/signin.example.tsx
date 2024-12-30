import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter, Button } from '@fatcn/ui'
import React from 'react'

const SigninExample = () => {
  return (
    <Card variant="secondary" size="sm" className="w-80 mb-4">
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