import SocialLinks from "@/components/global/SocialLinks";
import HeroTitle from "./HeroTitle";
import HeroUndertitle from "./HeroUndertitle";
import { SocialMedia } from "@prisma/client";

function HeroText({
  title,
  text,
  socialLinks,
}: {
  title: string;
  text: string;
  socialLinks: SocialMedia[];
}) {
  return (
    <div className="flex flex-col justify-center items-center h-[85vh] w-[90vw]  md:w-[40vw] mx-auto text-center">
      <HeroTitle title={title} />
      <HeroUndertitle text={text} />
      <SocialLinks socialLinks={socialLinks} />
    </div>
  );
}
export default HeroText;
