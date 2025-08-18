import { Button } from "./ui/button";
import Link from "next/link";

const Header = () => {
  return (
    <div className="bg-white py-8 px-12">
      <header className="flex justify-between">
        <h1 className="text-2xl font-semibold hover:bg-amber-100 px-2 py-1 rounded-md cursor-pointer">
          <span className="">Arti</span>
          <span className="text-amber-500">Zone</span>
        </h1>
        <div className="flex gap-8">
          <Link href="/login">
            <Button className="hover:bg-amber-100 px-12 py-2 rounded-md cursor-pointer flex-1 border border-amber-300 hover:text-amber-500">
              Login
            </Button>
          </Link>
          <Button className="hover:bg-amber-100 px-12 py-2 rounded-md cursor-pointer flex-1 border border-amber-300 hover:text-amber-500">
            Sign Up
          </Button>
        </div>
      </header>
    </div>
  );
};

export default Header;
