import SocialLinks from "@/components/global/SocialLinks";
import { fetchSocialMediaGeneral } from "@/utils/actions";

async function NavSocialMediaLinks() {
  const date = new Date();
  const year = date.getFullYear();
  const socialLinks = await fetchSocialMediaGeneral();

  return (
    <div>
      <SocialLinks
        socialLinks={socialLinks?.socialMedia ? socialLinks.socialMedia : []}
      />
      <h2 className="text-center font-sans font-semibold mt-4 text-clrPrimary3">
        {year} © Maikielli Zulpo. Todos os direitos reservados.
      </h2>
    </div>
  );
}
export default NavSocialMediaLinks;
