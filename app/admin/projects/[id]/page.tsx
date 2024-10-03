import FormContainer from "@/components/form/FormContainer";
import FormInput from "@/components/form/FormInput";
import ImageInputContainer from "@/components/form/ImageInputContainer";
import { SubmitButton } from "@/components/form/Buttons";
import { updateProjectImageAction, updateProjectAction } from "@/utils/actions";
import TextAreaInput from "@/components/form/TextAreaInput";
import { fetchProjectById } from "@/utils/actions";
import { Project } from "@prisma/client";

async function EditProjectPage({ params }: { params: { id: string } }) {
  const { id } = params;
  const project = await fetchProjectById(id);
  const {
    name: name,
    imageUrl: imageUrl,
    imageAlt: imageAlt,
    text: text,
    clientId: client,
  } = project as Project;
  return (
    <section className="pb-8">
      <h1 className="text-2xl font-semibold mb-8 capitalize">
        Atualizar Projeto
      </h1>
      <div className="border p-8 rounded-md">
        <ImageInputContainer
          action={updateProjectImageAction}
          name="imageUrl"
          image={imageUrl}
          text="atualizar imagem"
        >
          <input type="hidden" name="id" value={id} />
          <input type="hidden" name="url" value={imageUrl} />
        </ImageInputContainer>
        <FormContainer action={updateProjectAction}>
          <input type="hidden" name="id" value={id} />
          <input type="hidden" name="client" value={client} />
          <div className="grid gap-4 md:grid-cols-2 my-4">
            <FormInput
              type="text"
              name="name"
              defaultValue={name}
              label="Nome"
            />
            <FormInput
              type="text"
              name="imageAlt"
              defaultValue={imageAlt}
              label="Descrição Imagem"
            />
          </div>
          <TextAreaInput name="text" defaultValue={text} labelText="Texto" />
          <SubmitButton text="ATUALIZAR" className="mt-8" />
        </FormContainer>
      </div>
    </section>
  );
}
export default EditProjectPage;
