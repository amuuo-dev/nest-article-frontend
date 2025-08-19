import Link from "next/link";
import { Button } from "./ui/button";

const Footer = () => {
  return (
    <div className="">
      <div className="py-8 px-12 flex justify-between">
        <div>
          <Link href="/">
            <h1 className="text-2xl font-semibold hover:bg-amber-100 px-2 py-1 rounded-md cursor-pointer">
              <span className="">Arti</span>
              <span className="text-amber-500">Zone</span>
            </h1>
          </Link>
        </div>
        <div>
          <h1 className="font-semibold hover:underline cursor-pointer">
            Terms and Conditions
          </h1>
          <h1 className="font-semibold my-4">Start you're account Today!</h1>
          <Button className="border border-amber-300 px-8 cursor-pointer">
            Sign Up
          </Button>
        </div>
      </div>
      <h1 className="text-center font-semibold my-6">
        Built by{" "}
        <Link
          href="https://www.linkedin.com/in/anthony-muuo/"
          className="underline text-amber-700 cursor-pointer"
        >
          Anthony Muuo
        </Link>
        . The source code is available on{" "}
        <Link
          href="https://github.com/amuuo-dev"
          className="underline text-amber-700 cursor-pointer"
        >
          GitHub
        </Link>
        .
      </h1>
    </div>
  );
};

export default Footer;
