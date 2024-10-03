import Link from "next/link";
import Image from "next/image";
import logoImage from "@/app/icon.svg";
function Logo() {
  return (
    <Link href="/" className="h-20 flex items-center justify-center">
      <Image
        src={logoImage}
        alt="Maikielli Zulpo Engenharia"
        className="w-16 h-16"
      />
    </Link>
  );
}
export default Logo;
