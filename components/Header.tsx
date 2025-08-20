import { Button } from "./ui/button";
import Link from "next/link";
import { Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";

const Header = () => {
  return (
    <div className="bg-white md:py-8 md:px-12 py-4 px-6">
      <header className="flex justify-between">
        <Link href="/">
          <h1 className="text-2xl font-semibold hover:bg-amber-100 px-2 py-1 rounded-md cursor-pointer">
            <span className="">Arti</span>
            <span className="text-amber-500">Zone</span>
          </h1>
        </Link>

        <div className="hidden md:flex gap-8">
          <Link href="/login">
            <Button className="hover:bg-amber-100 px-12 py-2 rounded-md cursor-pointer flex-1 border border-amber-300 hover:text-amber-500">
              Login
            </Button>
          </Link>
          <Link href="/signup">
            <Button className="hover:bg-amber-100 px-12 py-2 rounded-md cursor-pointer flex-1 border border-amber-300 hover:text-amber-500">
              Sign Up
            </Button>
          </Link>
        </div>
        {/* mobile */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Menu />
            </SheetTrigger>
            <SheetContent className="bg-[#FCF8FF]">
              <SheetHeader>
                <SheetTitle>Menu</SheetTitle>
                <SheetDescription>
                  Navigate around ArtiZone Pages
                </SheetDescription>
              </SheetHeader>
              <div className="flex flex-col gap-4 items-center justify-center">
                <Link href="/login" className="w-full px-2">
                  <Button className="w-full hover:bg-amber-100 px-12 py-2 rounded-md cursor-pointer flex-1 border border-amber-300 hover:text-amber-500">
                    Login
                  </Button>
                </Link>
                <Link href="/signup" className="w-full px-2">
                  <Button className="w-full hover:bg-amber-100 px-12 py-2 rounded-md cursor-pointer flex-1 border border-amber-300 hover:text-amber-500">
                    Sign Up
                  </Button>
                </Link>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </header>
    </div>
  );
};

export default Header;
