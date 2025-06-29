"use client";
import Link from "next/link";
import { linksNav } from "@/lib/data/links";
import { usePathname } from "next/navigation";
import Icons from "@/components/global/Icons";
import { SheetClose } from "@/components/ui/sheet";

function NavLinks({ direction }: { direction: "row" | "column" }) {
  const currentPath = usePathname();

  const isActiveLink = (href: string) => {
    if (href === "/") {
      return currentPath === "/";
    }
    if (href.startsWith("#")) {
      // Desativar marcação ativa para #contact
      if (href === "#contact") {
        return false;
      }
      return currentPath === "/";
    }
    return currentPath === href;
  };

  const handleLinkClick = (href: string, e: React.MouseEvent) => {
    if (href === "#contact") {
      e.preventDefault();
      // Disparar evento customizado para abrir o modal
      window.dispatchEvent(new CustomEvent("openContactModal"));
    }
  };

  switch (direction) {
    case "row":
      return (
        <ul className="hidden font-sans font-semibold h-20 md:flex md:justify-center md:gap-6 lg:gap-10">
          {linksNav.map((link) => (
            <li
              key={link.id}
              className={
                isActiveLink(link.href)
                  ? ` h-20 flex items-center border-b-2 border-clrPrimary5 hover:text-clrPrimary6 transition-all duration-100 ease-in-out`
                  : ` h-20 flex items-center border-b-2 border-transparent hover:text-clrPrimary6 transition-all duration-100 ease-in-out`
              }
            >
              <Link
                href={link.href}
                onClick={(e) => handleLinkClick(link.href, e)}
              >
                <h4 className="text-base lg:text-lg">{link.label}</h4>
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
              <Link
                href={link.href}
                onClick={(e) => handleLinkClick(link.href, e)}
              >
                <SheetClose className="flex justify-center items-center gap-4 hover:text-clrPrimary5 transition-all duration-200 ease-in-out">
                  <Icons
                    name={link.icon}
                    className={
                      isActiveLink(link.href)
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
