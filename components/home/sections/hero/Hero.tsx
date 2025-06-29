import Container from "@/components/global/Container";
import HeroText from "./HeroText";
import HeroImage from "./HeroImage";
import { SocialMedia } from "@/lib/types";

function Hero({
  title,
  subtitle,
  crea,
  text,
  image,
  altImage,
  socialLinks,
}: {
  title: string;
  subtitle?: string;
  crea?: string;
  text: string;
  image: string;
  altImage: string;
  socialLinks: SocialMedia[];
}) {
  return (
    <section className="bg-clrPrimary10 h-[85vh]">
      <Container className="flex justify-between gap-2">
        <HeroText
          title={title}
          subtitle={subtitle}
          crea={crea}
          text={text}
          socialLinks={socialLinks}
        />
        <HeroImage image={image} altImage={altImage} />
      </Container>
    </section>
  );
}
export default Hero;
