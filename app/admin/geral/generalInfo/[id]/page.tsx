import { fetchGeneralInfo } from "@/utils/actions";
import FormContainer from "@/components/form/FormContainer";
import FormInput from "@/components/form/FormInput";
import { SubmitButton } from "@/components/form/Buttons";
import { GeneralInfo } from "@prisma/client";
import { updateGeneralInfoAction } from "@/utils/actions";

async function EditGeneralInfoPage({ params }: { params: { id: string } }) {
  const { id } = params;
  const section = await fetchGeneralInfo();
  const {
    phone: phone,
    messageContact: phoneMessage,
    totalArea: totalArea,
    totalClients: totalClients,
    totalProjects: totalProjects,
  } = section[0] as GeneralInfo;
  return (
    <section>
      <div className="border p-8 rounded">
        <h1 className="text-2xl font-semibold mb-8 capitalize">
          Atualizar Informações Gerais
        </h1>
        <FormContainer action={updateGeneralInfoAction}>
          <div className="grid gap-4 md:grid-cols-2 my-4">
            <input type="hidden" name="id" value={id} />
            <FormInput
              type="text"
              name="phone"
              defaultValue={phone}
              label="Telefone"
            />
            <FormInput
              type="text"
              name="messageContact"
              defaultValue={phoneMessage}
              label="Mensagem de contato"
            />
            <FormInput
              type="text"
              name="totalArea"
              defaultValue={totalArea}
              label="Área total"
            />
            <FormInput
              type="text"
              name="totalClients"
              defaultValue={totalClients}
              label="Total de clientes"
            />
            <FormInput
              type="text"
              name="totalProjects"
              defaultValue={totalProjects}
              label="Total de projetos"
            />
          </div>
          <SubmitButton text="ATUALIZAR" className="mt-8" />
        </FormContainer>
      </div>
    </section>
  );
}
export default EditGeneralInfoPage;
