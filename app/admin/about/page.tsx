import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
  TableCaption,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import { fetchCollaborators } from "@/utils/actions";
import DialogDeleteEdit from "@/components/global/DialogDeleteEdit";
import Link from "next/link";
import Icons from "@/components/global/Icons";

async function page() {
  const collaborators = await fetchCollaborators();

  return (
    <Table>
      <TableCaption>Funcionários</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="hidden w-[100px] sm:table-cell">
            <span className="sr-only">Image</span>
          </TableHead>
          <TableHead>Nome</TableHead>
          <TableHead>Função</TableHead>
          <TableHead className="hidden md:table-cell">texto</TableHead>
          <TableHead className="hidden md:table-cell">
            definição imagem
          </TableHead>
          <TableHead>
            <span className="sr-only">Actions</span>
          </TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {collaborators.map((collaborator) => {
          return (
            <TableRow key={collaborator.id}>
              <TableCell className="hidden sm:table-cell">
                <Image
                  alt={collaborator.imageAlt}
                  className="aspect-square rounded-md object-cover"
                  height="64"
                  src={collaborator.imageUrl}
                  width="64"
                />
              </TableCell>
              <TableCell className="font-medium">{collaborator.name}</TableCell>
              <TableCell>
                <Badge variant="outline">{collaborator.role}</Badge>
              </TableCell>
              <TableCell className="hidden md:table-cell">
                <p className="line-clamp-5">{collaborator.text}</p>
              </TableCell>
              <TableCell className="hidden md:table-cell">
                {collaborator.imageAlt}
              </TableCell>
              <TableCell>
                <DialogDeleteEdit
                  hrefLink={`/admin/about/${collaborator.id}`}
                  idObject={collaborator.id}
                  type="collaboratorAbout"
                />
              </TableCell>
            </TableRow>
          );
        })}
        <TableRow>
          <TableCell colSpan={6}>
            <Link href={`/admin/about/create`} className="flex gap-2">
              <Icons type="FaPlusCircle" />
              Adicionar Novo Funcionário
            </Link>
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
}
export default page;
