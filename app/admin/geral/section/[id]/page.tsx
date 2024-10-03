import { fetchSection } from "@/utils/actions";
import FormContainer from "@/components/form/FormContainer";
import FormInput from "@/components/form/FormInput";
import TextAreaInput from "@/components/form/TextAreaInput";
import { SubmitButton } from "@/components/form/Buttons";
import ImageInputContainer from "@/components/form/ImageInputContainer";
import { HomeSection } from "@prisma/client";
import { updateSectionAction, updateSectionImageAction } from "@/utils/actions";

async function SectionEditPage({ params }: { params: { id: string } }) {
  const { id } = params;
  const section = await fetchSection(id);
  const {
    name: name,
    title: title,
    text: text,
    imageUrl: imageUrl,
    imageAlt: imageAlt,
  } = section as HomeSection;
  return (
    <section>
      <h1 className="text-2xl font-semibold mb-8 capitalize">
        Atualizar Seção
      </h1>
      <div className="border p-8 rounded">
        <h1 className="text-4xl font-bold mb-8 text-center">
          {title === "Maikielli Zulpo" ? "Banner" : title}
        </h1>
        {imageUrl ? (
          <ImageInputContainer
            action={updateSectionImageAction}
            name="imageUrl"
            image={imageUrl}
            text="atualizar Imagem"
          >
            <input type="hidden" name="id" value={id} />
            <input type="hidden" name="url" value={imageUrl} />
          </ImageInputContainer>
        ) : null}
        <FormContainer action={updateSectionAction}>
          <div className="grid gap-4 md:grid-cols-2 my-4">
            <input type="hidden" name="id" value={id} />
            {imageAlt ? (
              <FormInput
                type="text"
                name="alt"
                label="Descrição da imagem"
                defaultValue={imageAlt}
              />
            ) : null}
            {title === "Maikielli Zulpo" ? (
              <FormInput
                type="text"
                name="title"
                defaultValue={title}
                label="Título"
              />
            ) : null}
          </div>
          <TextAreaInput name="text" labelText="Texto" defaultValue={text} />
          <SubmitButton text="ATUALIZAR" className="mt-8" />
        </FormContainer>
      </div>
    </section>
  );
}
export default SectionEditPage;
