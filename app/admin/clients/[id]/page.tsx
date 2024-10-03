import FormContainer from "@/components/form/FormContainer";
import FormInput from "@/components/form/FormInput";
import ImageInputContainer from "@/components/form/ImageInputContainer";
import { SubmitButton } from "@/components/form/Buttons";
import { updateClientAction, updateClientImageAction } from "@/utils/actions";
import { Client } from "@prisma/client";
import { fetchClientById } from "@/utils/actions";

async function EditClientPage({ params }: { params: { id: string } }) {
  const { id } = params;
  const client = await fetchClientById(id);
  const {
    name: name,
    imageUrl: imageUrl,
    imageAlt: imageAlt,
  } = client as Client;

  return (
    <section className="pb-8">
      <h1 className="text-2xl font-semibold mb-8 capitalize">
        Atualizar Cliente
      </h1>
      <div className="border p-8 rounded-md">
        <ImageInputContainer
          action={updateClientImageAction}
          name="imageUrl"
          image={imageUrl}
          text="atualizar imagem"
        >
          <input type="hidden" name="id" value={id} />
          <input type="hidden" name="url" value={imageUrl} />
        </ImageInputContainer>
        <FormContainer action={updateClientAction}>
          <input type="hidden" name="id" value={id} />
          <div className="grid gap-4 md:grid-cols-2 my-4">
            <FormInput
              type="text"
              defaultValue={name}
              name="name"
              label="Nome"
            />
            <FormInput
              type="text"
              defaultValue={imageAlt}
              name="imageAlt"
              label="Descrição Imagem"
            />
          </div>
          <SubmitButton text="ATUALIZAR" className="mt-8" />
        </FormContainer>
      </div>
    </section>
  );
}
export default EditClientPage;
