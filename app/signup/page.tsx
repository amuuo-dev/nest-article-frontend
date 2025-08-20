"use client";
import { Alert, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { BASE_URL } from "@/constants";
import { Label } from "@radix-ui/react-label";
import { useMutation } from "@tanstack/react-query";
import { AlertCircleIcon } from "lucide-react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

type UserProp = {
  username: string;
  email: string;
  password: string;
};

async function createUser(user: UserProp) {
  const response = await fetch(`${BASE_URL}/user`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  });
  const data = await response.json();
  return data.user;
}

const SignUp = () => {
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [dbError, setDbError] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const router = useRouter();

  const { mutate, isPending } = useMutation({
    mutationKey: ["createUser"],
    mutationFn: createUser,
    onError: (error: Error) => {
      setDbError(error.message);
      toast.error("Error creating your account");
    },
    onSuccess: () => {
      router.push("/login");
      toast.success("Account Created successfully!");
    },
  });

  function handleCreateUseer(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setDbError("");

    if (confirmPassword !== password) {
      setDbError("password and confirm password should match!");
      return;
    }
    const user = { username, email, password };
    mutate(user);
  }

  return (
    <div className="lg:pt-6 md:pt-12 pt-28">
      <div className="lg:w-3xl md:w-xl w-sm m-auto py-6 border border-gray-200 px-4 rounded-md bg-white shadow-md">
        <h1 className="md:text-xl text-sm font-semibold mt-4">
          Create an ArtiZone Account
        </h1>
        <p className="md:text-base text-xs text-gray-700">
          Enter your username and email below to create your account
        </p>
        <form className="py-4" onSubmit={handleCreateUseer}>
          {dbError && (
            <Alert className="border-none text-red-500 md:text-lg text-sm font-medium flex justify-center items-center">
              <AlertCircleIcon />
              <AlertTitle>{dbError}</AlertTitle>
            </Alert>
          )}
          <div className="py-2">
            <Label className="md:text-base text-sm font-medium">
              Enter Username
            </Label>
            <Input
              className="focus:ring-amber-200"
              onChange={(e) => setUserName(e.target.value)}
              value={username}
            />
          </div>
          <div className="py-2">
            <Label className="md:text-base text-sm font-medium">
              Enter Email
            </Label>
            <Input
              className="focus:ring-amber-200"
              placeholder="m@example.com"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
          </div>
          <div className="py-2">
            <Label className="md:text-base text-sm font-medium">
              Enter Password
            </Label>
            <Input
              className="focus:ring-amber-200"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              type="password"
            />
          </div>
          <div className="py-2">
            <Label className="md:text-base text-sm font-medium">
              Confirm Password
            </Label>
            <Input
              className="focus:ring-amber-200"
              onChange={(e) => setConfirmPassword(e.target.value)}
              value={confirmPassword}
              type="password"
            />
          </div>
          <Button className="w-full bg-amber-500 hover:bg-amber-600 hover:text-white cursor-pointer">
            {isPending ? "Creating Account...." : " Create account"}
          </Button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
