import { Button } from "@/components/ui/button";
import Link from "next/link";
import Icons from "./Icons";
import { MouseEventHandler } from "react";

function Buttons({
  type,
  phone,
  message,
  href,
  classes,
  click,
}: {
  type: string;
  phone?: string;
  message?: string;
  href?: string;
  classes?: string;
  click?: MouseEventHandler<HTMLButtonElement>;
}) {
  switch (type) {
    case "whatsapp":
      return (
        <Button
          variant="outline"
          size="lg"
          className="bg-clrPrimary5 rounded-3xl flex items-center gap-2 text-white hover:bg-clrPrimary6 hover:text-white hover:shadow-md"
          asChild
        >
          <Link target="_Blank" href={`https://wa.me/${phone}?text=${message}`}>
            <Icons type="whatsapp" className="w-6 h-6" />
            <span className="uppercase font-bold font-sans">
              Entre em contato
            </span>
          </Link>
        </Button>
      );
    case "hamburger-menu":
      return (
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden text-clrPrimary3"
        >
          <Icons type="hamburger-menu" className="w-6 h-6" />
        </Button>
      );
    case "saiba-mais":
      return (
        <Button
          variant="outline"
          size="lg"
          className="bg-clrPrimary5 rounded-3xl  w-[200px] flex items-center gap-2 text-white hover:bg-clrPrimary6 hover:text-white hover:shadow-md"
          asChild
        >
          <Link href={href ? href : ""}>
            <span className="uppercase font-bold font-sans">Saiba mais</span>
          </Link>
        </Button>
      );
    case "plus":
      return (
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden text-clrPrimary3"
          onClick={click}
        >
          <Icons type="plus" className={`w-6 h-6${classes}`} />
        </Button>
      );

    default:
      return (
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Button
        </button>
      );
  }
}
export default Buttons;
