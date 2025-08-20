import Link from "next/link";
import { Button } from "./ui/button";

const Footer = () => {
  return (
    <div className="">
      <div className="md:py-8 md:px-12 py-4 px-6 flex justify-between">
        <div>
          <Link href="/">
            <h1 className="md:text-2xl text-lg font-semibold hover:bg-amber-100 px-2 py-1 rounded-md cursor-pointer">
              <span className="">Arti</span>
              <span className="text-amber-500">Zone</span>
            </h1>
          </Link>
        </div>
        <div>
          <h1 className="font-semibold hover:underline cursor-pointer text-base md:text-xs">
            Terms and Conditions
          </h1>
          <h1 className="font-semibold md:my-4 my-2 md:text-base text-xs">
            Start you're account Today!
          </h1>
          <Link href="/signup">
            <Button className="border border-amber-300 px-8 cursor-pointer">
              Sign Up
            </Button>
          </Link>
        </div>
      </div>
      <h1 className="text-center font-semibold md:my-6 my-3 md:text-base text-xs">
        Built by{" "}
        <Link
          href="https://www.linkedin.com/in/anthony-muuo/"
          className="underline text-amber-700 cursor-pointer"
        >
          Anthony Muuo
        </Link>
        . code is available on{" "}
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
