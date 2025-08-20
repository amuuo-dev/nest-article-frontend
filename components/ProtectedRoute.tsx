"use client";

import { ReactNode } from "react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import useAuth from "@/store/useAuth";

const ProtectedRoute = ({ children }: { children: ReactNode }) => {
  const router = useRouter();
  const { token } = useAuth();

  useEffect(() => {
    if (!token) {
      router.push("/login");
    }
  }, [token, router]);

  if (!token) {
    return (
      <div className="flex justify-center items-center h-screen flex-col">
        <div className="w-10 h-10 border-4 border-amber-400 border-t-transparent rounded-full animate-spin"></div>
        <p className="mt-4 text-gray-600 font-medium">Checking auth...</p>
      </div>
    );
  }

  return <div>{children}</div>;
};

export default ProtectedRoute;
