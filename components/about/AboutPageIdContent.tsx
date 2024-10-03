import Container from "@/components/global/Container";
import SectionTitle from "@/components/home/sections/components/SectionTitle";
import Underline from "@/components/global/Underline";
import SectionText from "@/components/home/sections/components/SectionText";
import SectionImage from "@/components/home/sections/components/SectionImage";
import SocialLinks from "@/components/global/SocialLinks";
import { SocialMedia } from "@prisma/client";

function AboutPageIdContent({
  title,
  text,
  imageUrl,
  imageAlt,
  socialMediaLinks,
}: {
  title: string;
  text: string;
  imageUrl: string;
  imageAlt: string;
  socialMediaLinks: SocialMedia[];
}) {
  return (
    <section className="mt-10 mb-20">
      <Container className="flex flex-col md:flex-row">
        <div className="flex justify-center mx-auto ">
          <SectionImage imageUrl={imageUrl} imageAlt={imageAlt} />
        </div>
        <div className="flex flex-col mx-auto w-[85vw] md:w-[40vw] xl:w-[30vw]">
          <SectionTitle title={title} />
          <Underline classes="mt-2 mx-auto" />
          <SectionText text={text} />
          <SocialLinks socialLinks={socialMediaLinks} />
        </div>
      </Container>
    </section>
  );
}
export default AboutPageIdContent;
