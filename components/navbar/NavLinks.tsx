"use client";
import Link from "next/link";
import { linksNav } from "@/lib/data/links";
import { usePathname } from "next/navigation";
import Icons from "@/components/global/Icons";
import { SheetClose } from "@/components/ui/sheet";

function NavLinks({ direction }: { direction: "row" | "column" }) {
  const currentPath = usePathname();
  switch (direction) {
    case "row":
      return (
        <ul className="hidden font-sans font-semibold h-20 md:flex md:justify-center md:gap-4 lg:gap-8">
          {linksNav.map((link) => (
            <li
              key={link.id}
              className={
                `/${currentPath.split("/")[1]}` === link.href
                  ? ` h-20 flex items-center border-b-2 border-clrPrimary5  hover:text-clrPrimary6 transition-all duration-100 ease-in-out
              `
                  : ` h-20 flex items-center border-b-2 border-transparent hover:text-clrPrimary6 transition-all duration-100 ease-in-out
              `
              }
            >
              <Link href={link.href}>
                <h4>{link.label}</h4>
              </Link>
            </li>
          ))}
        </ul>
      );
    case "column":
      return (
        <ul className="font-sans font-semibold flex flex-col ml-4 items-start justify-center">
          {linksNav.map((link) => (
            <li key={link.id} className="py-3">
              <Link href={link.href}>
                <SheetClose className="flex justify-center items-center gap-4 hover:text-clrPrimary5 transition-all duration-200 ease-in-out">
                  <Icons
                    type={link.icon}
                    className={
                      currentPath === link.href
                        ? `w-6 h-6 text-clrPrimary5`
                        : `w-6 h-6`
                    }
                  />
                  <h4 className="text-lg">{link.label}</h4>
                </SheetClose>
              </Link>
            </li>
          ))}
        </ul>
      );
    default:
      throw new Error("Invalid direction");
  }
}

export default NavLinks;
