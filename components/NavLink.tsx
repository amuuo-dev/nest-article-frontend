import React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

const NavLink = ({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={`tracking-wide font-semibold transition-colors ${
        isActive
          ? "text-amber-500 border-b-2 border-amber-500"
          : "text-gray-700 hover:text-amber-500"
      }  `}
    >
      {children}
    </Link>
  );
};

export default NavLink;
