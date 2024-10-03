import { fetchCollaboratorSocialMedia } from "@/utils/actions";
import FormContainer from "@/components/form/FormContainer";
import { SubmitButton } from "@/components/form/Buttons";
import { SocialMedia } from "@prisma/client";
import { updateSocialMediaCollaboratorAction } from "@/utils/actions";
import SocialMediaInput from "@/components/form/SocialMediaInput";

async function SocialMediaEditPage({ params }: { params: { id: string } }) {
  const { id } = params;
  const section = await fetchCollaboratorSocialMedia(id);

  return (
    <section>
      <h1 className="text-2xl font-semibold mb-8 capitalize">
        Atualizar Redes Sociais
      </h1>
      <div className="border p-8 rounded">
        <FormContainer action={updateSocialMediaCollaboratorAction}>
          <div className="grid gap-4 md:grid-cols-2 my-4">
            <input type="hidden" name="id" value={id} />
            {section[0].socialMedia.map((socialMedia: SocialMedia, index) => (
              <div
                key={socialMedia.id}
                className="grid grid-cols-12 items-center"
              >
                <input
                  type="hidden"
                  name={`id${index + 1}`}
                  value={socialMedia.id}
                />
                <div className="col-span-11">
                  <SocialMediaInput
                    type="text"
                    name={`socialMediaSelect${index + 1}`}
                    nameUrl={`socialMediaUrl${index + 1}`}
                    placeholder={socialMedia.name}
                    label={`Social Media`}
                    defaultValue={socialMedia.url}
                    mode="edit"
                  />
                </div>
              </div>
            ))}
          </div>
          <SubmitButton text="ATUALIZAR" className="mt-8" />
        </FormContainer>
      </div>
    </section>
  );
}
export default SocialMediaEditPage;
