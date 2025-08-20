"use client";
import { Alert, AlertTitle } from "@/components/ui/alert";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { BASE_URL } from "@/constants";
import { Label } from "@radix-ui/react-label";
import { useMutation } from "@tanstack/react-query";
import { AlertCircleIcon } from "lucide-react";
import { useState } from "react";
import { toast } from "react-toastify";

type LoginUser = {
  email: string;
  password: string;
};

async function loginUser(user: LoginUser) {
  const response = await fetch(`${BASE_URL}/user/login`, {
    method: "POST",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  });
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Failed to login");
  }

  return data.user;
}

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const router = useRouter();

  const { mutate, isPending } = useMutation({
    mutationKey: ["loginUser"],
    mutationFn: loginUser,
    onError: (error: Error) => {
      setError(error.message);
      toast.error("error loggin you in...");
    },
    onSuccess: (data) => {
      localStorage.setItem("token", data.token);
      toast.success("successfully logged you in");
      router.push("/articles");
    },
  });

  function handleLoginUser(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError("");
    const user = { email, password };
    mutate(user);
  }

  return (
    <div className="lg:pt-6 md:pt-12 pt-28">
      <div className="lg:w-3xl md:w-xl w-sm m-auto py-6 border border-gray-200 px-4 rounded-md bg-white shadow-md">
        <h1 className="md:text-xl text-sm font-semibold mt-4">
          Login to your ArtiZone Account
        </h1>
        <p className="md:text-base text-xs text-gray-700">
          Enter your email and password below to login
        </p>
        <form className="py-4" onSubmit={handleLoginUser}>
          {error && (
            <Alert className="border-none text-red-500 md:text-lg text-sm font-medium flex justify-center items-center">
              <AlertCircleIcon />
              <AlertTitle>{error}</AlertTitle>
            </Alert>
          )}
          <div className="py-2">
            <Label className="md:text-base text-sm font-medium">Email</Label>
            <Input
              className="focus:ring-amber-200"
              placeholder="m@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="py-2">
            <Label className="md:text-base text-sm font-medium">Password</Label>
            <Input
              className="focus:ring-amber-200"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <Button className="w-full bg-amber-500 hover:bg-amber-600 hover:text-white cursor-pointer">
            {isPending ? "Logging in..." : "Login"}
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Login;
