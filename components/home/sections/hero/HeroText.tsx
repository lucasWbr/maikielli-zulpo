import SocialLinks from "@/components/global/SocialLinks";
import HeroTitle from "./HeroTitle";
import HeroUndertitle from "./HeroUndertitle";
import { SocialMedia } from "@/lib/types";

function HeroText({
  title,
  subtitle,
  crea,
  text,
  socialLinks,
}: {
  title: string;
  subtitle?: string;
  crea?: string;
  text: string;
  socialLinks: SocialMedia[];
}) {
  return (
    <div className="flex flex-col justify-center items-center h-[85vh] w-[90vw]  md:w-[40vw] mx-auto text-center">
      <HeroTitle title={title} />
      {subtitle && (
        <h2 className="text-xl md:text-2xl text-clrPrimary3 font-medium mb-2">
          {subtitle}
        </h2>
      )}
      {crea && (
        <p className="text-sm md:text-base text-clrPrimary4 font-light mb-4">
          {crea}
        </p>
      )}
      {text && text.trim() !== "" && <HeroUndertitle text={text} />}
      <SocialLinks socialLinks={socialLinks} />
    </div>
  );
}
export default HeroText;
