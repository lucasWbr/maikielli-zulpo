import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
  TableCaption,
} from "@/components/ui/table";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Icons from "@/components/global/Icons";
import { fetchClients } from "@/utils/actions";
import Link from "next/link";
import DialogDeleteEdit from "@/components/global/DialogDeleteEdit";

async function page() {
  const collaborators = await fetchClients();

  return (
    <Table>
      <TableCaption>Clientes</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="hidden w-[100px] sm:table-cell">
            <span className="sr-only">Image</span>
          </TableHead>
          <TableHead>Nome</TableHead>
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
              <TableCell className="hidden md:table-cell">
                {collaborator.imageAlt}
              </TableCell>
              <TableCell>
                <DialogDeleteEdit
                  idObject={collaborator.id}
                  type="client"
                  hrefLink={`/admin/clients/${collaborator.id}`}
                />
              </TableCell>
            </TableRow>
          );
        })}
        <TableRow>
          <TableCell colSpan={6}>
            <Link href={`/admin/clients/create`} className="flex gap-2">
              <Icons type="FaPlusCircle" />
              Adicionar Novo Cliente
            </Link>
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
}
export default page;
