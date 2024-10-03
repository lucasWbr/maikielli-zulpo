import Container from "@/components/global/Container";
import SocialLinks from "@/components/global/SocialLinks";
import { fetchSocialMediaGeneral } from "@/utils/actions";

async function Footer() {
  const date = new Date();
  const year = date.getFullYear();
  const socialLinks = await fetchSocialMediaGeneral();

  return (
    <footer className="bg-clrPrimary1 h-[20vh] content-center">
      <Container className="w-[85w] mx-auto">
        <SocialLinks
          socialLinks={socialLinks?.socialMedia ? socialLinks.socialMedia : []}
        />
        <h2 className="text-center font-sans font-semibold mt-4 text-clrPrimary3">
          {year} © Maikielli Zulpo. Todos os direitos reservados.
        </h2>
      </Container>
    </footer>
  );
}
export default Footer;
