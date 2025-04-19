
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Layout } from "@/components/layout/Layout";

export default function Login() {
  return (
    <Layout>
      <div className="container flex items-center justify-center py-16">
        <div className="mx-auto w-full max-w-md space-y-6">
          <div className="text-center">
            <h1 className="text-3xl font-bold">Welcome back</h1>
            <p className="mt-2 text-muted-foreground">
              Enter your credentials to sign in to your account
            </p>
          </div>
          <div className="space-y-4">
            <div className="space-y-2">
              <label
                htmlFor="email"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Email
              </label>
              <Input
                id="email"
                placeholder="m@example.com"
                type="email"
                autoCapitalize="none"
                autoComplete="email"
                autoCorrect="off"
              />
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Password
                </label>
                <Link
                  to="/forgot-password"
                  className="text-sm text-primary underline-offset-4 hover:underline"
                >
                  Forgot password?
                </Link>
              </div>
              <Input id="password" type="password" />
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="remember" />
              <label
                htmlFor="remember"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Remember me
              </label>
            </div>
            <Button className="w-full">Sign In</Button>
          </div>
          <div className="text-center text-sm">
            Don't have an account?{" "}
            <Link
              to="/signup"
              className="text-primary underline-offset-4 hover:underline"
            >
              Sign up
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
}
