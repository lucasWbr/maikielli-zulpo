import { SocialMedia } from "@prisma/client";
import Link from "next/link";
import Icons from "./Icons";

function SocialLinks({ socialLinks }: { socialLinks: SocialMedia[] }) {
  const lista = socialLinks;
  return (
    <div className="flex justify-center items-center gap-4">
      {lista.map((item) => {
        return (
          <Link key={item.id} href={item.url} target="_blank">
            <Icons
              type={item.name}
              className="w-6 h-6 text-clrPrimary3 hover:text-clrPrimary5"
            />
          </Link>
        );
      })}
    </div>
  );
}
export default SocialLinks;
