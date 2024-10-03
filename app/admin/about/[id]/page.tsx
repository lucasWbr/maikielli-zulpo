import {
  fetchCollaborator,
  fetchCollaboratorSocialMedia,
  updateCollaboratorAction,
  updateImageCollaboratorAction,
} from "@/utils/actions";
import FormContainer from "@/components/form/FormContainer";
import FormInput from "@/components/form/FormInput";
import TextAreaInput from "@/components/form/TextAreaInput";
import { SubmitButton } from "@/components/form/Buttons";
import ImageInputContainer from "@/components/form/ImageInputContainer";
import { Collaborator } from "@prisma/client";
import Link from "next/link";
import Icons from "@/components/global/Icons";
import DialogDeleteEdit from "@/components/global/DialogDeleteEdit";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
  TableCaption,
} from "@/components/ui/table";

async function AboutEditPage({ params }: { params: { id: string } }) {
  const { id } = params;
  const section = await fetchCollaborator(id);
  const socialMedia = await fetchCollaboratorSocialMedia(id);
  const {
    name: name,
    role: role,
    text: text,
    imageUrl: imageUrl,
    imageAlt: imageAlt,
  } = section as Collaborator;
  return (
    <section className="mb-8">
      <h1 className="text-2xl font-semibold mb-8 capitalize">
        Atualizar Funcionário
      </h1>
      <div className="border p-8 rounded">
        <h1 className="text-4xl font-bold mb-8 text-center">{name}</h1>
        <ImageInputContainer
          action={updateImageCollaboratorAction}
          name="imageUrl"
          image={imageUrl}
          text="atualizar imagem"
        >
          <input type="hidden" name="id" value={id} />
          <input type="hidden" name="url" value={imageUrl} />
        </ImageInputContainer>
        <FormContainer action={updateCollaboratorAction}>
          <div className="grid gap-4 md:grid-cols-2 my-4">
            <input type="hidden" name="id" value={id} />
            <input type="hidden" name="url" value={imageUrl} />
            <FormInput
              type="text"
              name="alt"
              label="Descrição da imagem"
              defaultValue={imageAlt}
            />
            <FormInput
              type="text"
              name="name"
              defaultValue={name}
              label="nome"
            />
            <FormInput
              type="text"
              name="role"
              defaultValue={role}
              label="Função"
            />
          </div>
          <TextAreaInput name="text" labelText="Texto" defaultValue={text} />
          <Table className="mt-8">
            <TableCaption>Redes Sociais</TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead>Nome</TableHead>
                <TableHead>Url</TableHead>
                <TableHead>
                  <span className="sr-only">Actions</span>
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {socialMedia[0].socialMedia.map((media) => {
                return (
                  <TableRow key={media.id}>
                    <TableCell className="font-medium">{media.name}</TableCell>
                    <TableCell className="hidden md:table-cell">
                      <p className="line-clamp-5">{media.url}</p>
                    </TableCell>
                    <TableCell>
                      <DialogDeleteEdit
                        idLink={id}
                        idObject={media.id}
                        hrefLink={`/admin/about/${id}/socialmedia/edit`}
                        type="socialMediaAbout"
                      />
                    </TableCell>
                  </TableRow>
                );
              })}
              <TableRow>
                <TableCell>
                  <Link
                    href={`/admin/about/${id}/socialmedia/create`}
                    className="flex gap-2"
                  >
                    <Icons type="FaPlusCircle" />
                    Adicionar Nova Rede Social
                  </Link>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
          <SubmitButton text="ATUALIZAR" className="mt-8" />
        </FormContainer>
      </div>
    </section>
  );
}
export default AboutEditPage;
