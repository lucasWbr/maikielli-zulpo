import AboutPageIdContent from "@/components/about/AboutPageIdContent";
import {
  fetchCollaborator,
  fetchCollaboratorSocialMedia,
} from "@/utils/actions";
import { Collaborator } from "@prisma/client";

async function AboutPageId({ params }: { params: { id: string } }) {
  const collaborator = await fetchCollaborator(params.id);
  const socialMediaLinks = await fetchCollaboratorSocialMedia(params.id);

  const { socialMedia: socialMediaCollaborator } = socialMediaLinks[0];

  const {
    name: nameCollaborator,
    imageUrl: imageUrlCollaborator,
    imageAlt: imageAltCollaborator,
    text: textCollaborator,
  } = collaborator as Collaborator;

  return (
    <AboutPageIdContent
      title={nameCollaborator}
      text={textCollaborator}
      imageAlt={imageAltCollaborator}
      imageUrl={imageUrlCollaborator}
      socialMediaLinks={socialMediaCollaborator}
    />
  );
}
export default AboutPageId;
