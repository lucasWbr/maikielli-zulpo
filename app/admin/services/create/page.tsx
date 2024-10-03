import FormContainer from "@/components/form/FormContainer";
import FormInput from "@/components/form/FormInput";
import ImageInput from "@/components/form/ImageInput";
import { SubmitButton } from "@/components/form/Buttons";
import { createServiceAction } from "@/utils/actions";
import TextAreaInput from "@/components/form/TextAreaInput";
import IconSelectInput from "@/components/form/IconSelectInput";

function CreateServicesPage() {
  return (
    <section className="pb-8">
      <h1 className="text-2xl font-semibold mb-8 capitalize">
        Adicionar Serviço
      </h1>
      <div className="border p-8 rounded-md">
        <FormContainer action={createServiceAction}>
          <div className="grid gap-4 md:grid-cols-2 my-4">
            <FormInput type="text" name="name" label="Nome" />
            <ImageInput />
            <FormInput type="text" name="imageAlt" label="Descrição Imagem" />
            <IconSelectInput name="icon" />
          </div>
          <TextAreaInput name="textShort" labelText="Descrição curta" />
          <TextAreaInput name="textLong" labelText="Texto" />
          <SubmitButton text="ENVIAR" className="mt-8" />
        </FormContainer>
      </div>
    </section>
  );
}
export default CreateServicesPage;
