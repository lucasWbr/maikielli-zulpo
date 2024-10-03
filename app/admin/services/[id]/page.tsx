import FormContainer from "@/components/form/FormContainer";
import FormInput from "@/components/form/FormInput";
import ImageInputContainer from "@/components/form/ImageInputContainer";
import { SubmitButton } from "@/components/form/Buttons";
import { updateServiceAction, updateServiceImageAction } from "@/utils/actions";
import TextAreaInput from "@/components/form/TextAreaInput";
import IconSelectInput from "@/components/form/IconSelectInput";
import { fetchServiceById } from "@/utils/actions";
import { Services } from "@prisma/client";

async function CreateServicesPage({ params }: { params: { id: string } }) {
  const { id } = params;
  const service = await fetchServiceById(id);
  const {
    name: name,
    imageUrl: imageUrl,
    imageAlt: imageAlt,
    textShort: textShort,
    textLong: textLong,
    icon: icon,
  } = service as Services;

  return (
    <section className="pb-8">
      <h1 className="text-2xl font-semibold mb-8 capitalize">
        Atualizar Serviço
      </h1>
      <div className="border p-8 rounded-md">
        <ImageInputContainer
          action={updateServiceImageAction}
          name="imageUrl"
          image={imageUrl}
          text="atualizar imagem"
        >
          <input type="hidden" name="id" value={id} />
          <input type="hidden" name="url" value={imageUrl} />
        </ImageInputContainer>
        <FormContainer action={updateServiceAction}>
          <div className="grid gap-4 md:grid-cols-2 my-4">
            <input type="hidden" name="id" value={id} />
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
            <IconSelectInput name="icon" icon={icon} />
          </div>
          <TextAreaInput
            name="textShort"
            defaultValue={textShort}
            labelText="Descrição curta"
          />
          <TextAreaInput
            name="textLong"
            defaultValue={textLong}
            labelText="Texto"
          />
          <SubmitButton text="ATUALIZAR" className="mt-8" />
        </FormContainer>
      </div>
    </section>
  );
}
export default CreateServicesPage;
