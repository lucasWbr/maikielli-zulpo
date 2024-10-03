import Container from "@/components/global/Container";
import HeroText from "./HeroText";
import HeroImage from "./HeroImage";
import { SocialMedia } from "@prisma/client";

function Hero({
  title,
  text,
  image,
  altImage,
  socialLinks,
}: {
  title: string;
  text: string;
  image: string;
  altImage: string;
  socialLinks: SocialMedia[];
}) {
  return (
    <section className="bg-clrPrimary10 h-[85vh]">
      <Container className="flex justify-between gap-2">
        <HeroText title={title} text={text} socialLinks={socialLinks} />
        <HeroImage image={image} altImage={altImage} />
      </Container>
    </section>
  );
}
export default Hero;
