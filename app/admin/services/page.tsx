import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
  TableCaption,
} from "@/components/ui/table";
import Image from "next/image";
import Icons from "@/components/global/Icons";
import { fetchServices } from "@/utils/actions";
import Link from "next/link";
import DialogDeleteEditModal from "@/components/global/DialogDeleteEdit";

async function page() {
  const collaborators = await fetchServices();

  return (
    <Table>
      <TableCaption>Serviços</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="hidden w-[100px] sm:table-cell">
            <span className="sr-only">Image</span>
          </TableHead>
          <TableHead>Nome</TableHead>
          <TableHead>texto Curto</TableHead>
          <TableHead className="hidden md:table-cell">texto Longo</TableHead>
          <TableHead className="hidden md:table-cell">
            definição imagem
          </TableHead>
          <TableHead className="hidden md:table-cell">Ícone</TableHead>
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
                <p className="line-clamp-5">{collaborator.textShort}</p>
              </TableCell>
              <TableCell className="hidden md:table-cell">
                <p className="line-clamp-5">{collaborator.textLong}</p>
              </TableCell>
              <TableCell className="hidden md:table-cell">
                {collaborator.imageAlt}
              </TableCell>
              <TableCell className="hidden md:table-cell ">
                <Icons type={collaborator.icon} className="h-4 w-4 ml-2" />
              </TableCell>
              <TableCell>
                <DialogDeleteEditModal
                  idObject={collaborator.id}
                  type="service"
                  hrefLink={`/admin/services/${collaborator.id}`}
                />
              </TableCell>
            </TableRow>
          );
        })}
        <TableRow>
          <TableCell colSpan={6}>
            <Link href={`/admin/serices/create`} className="flex gap-2">
              <Icons type="FaPlusCircle" />
              Adicionar Novo Serviço
            </Link>
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
}
export default page;
