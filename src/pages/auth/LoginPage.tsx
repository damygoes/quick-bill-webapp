import { Button } from '@components/button';
import { Input } from '@components/input';
import { Label } from '@components/label';
import { Link } from 'react-router-dom';

const LoginPage = () => {
  return (
    <section className="flex flex-col items-center justify-center h-full lg:flex-row">
      <div className="flex items-center justify-center w-full h-full">
        <div className="flex flex-col items-center justify-center w-1/2 gap-6">
          <div className="w-full text-center">
            <h1 className="text-3xl font-bold">Login</h1>
            <p className="text-balance text-muted-foreground">
              Enter your email below to login to your account
            </p>
          </div>
          <div className="flex flex-col w-full gap-5">
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="email@example.com"
                required
              />
            </div>
            <Button type="submit" className="w-full">
              Login
            </Button>
          </div>
          <div className="text-sm text-center">
            Don&apos;t have an account?{' '}
            <Link to="#" className="underline">
              Sign up
            </Link>
          </div>
        </div>
      </div>
      <div className="hidden w-full lg:flex lg:items-center lg:justify-center bg-background">
        <img
          src="https://images.unsplash.com/photo-1554224154-22dec7ec8818?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YWNjb3VudGluZ3xlbnwwfHwwfHx8Mg%3D%3D"
          alt="Image"
          className="h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
        />
      </div>
    </section>
  );
};

export default LoginPage;
