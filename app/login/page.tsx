import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-label";

const Login = () => {
  return (
    <div className="lg:pt-6 md:pt-12 pt-28">
      <div className="lg:w-3xl md:w-xl w-sm m-auto py-6 border border-gray-200 px-4 rounded-md bg-white shadow-md">
        <h1 className="md:text-xl text-sm font-semibold mt-4">
          Login to your ArtiZone Account
        </h1>
        <p className="md:text-base text-xs text-gray-700">
          Enter your email and password below to login
        </p>
        <form className="py-4">
          <div className="py-2">
            <Label className="md:text-base text-sm font-medium">Email</Label>
            <Input
              className="focus:ring-amber-200"
              placeholder="m@example.com"
            />
          </div>
          <div className="py-2">
            <Label className="md:text-base text-sm font-medium">Password</Label>
            <Input className="focus:ring-amber-200" type="password" />
          </div>
          <Button className="w-full bg-amber-500 hover:bg-amber-600 hover:text-white cursor-pointer">
            Create account
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Login;
