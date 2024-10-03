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
import { fetchProjects, fetchClientById } from "@/utils/actions";
import Link from "next/link";
import DialogDeleteEditModal from "@/components/global/DialogDeleteEdit";

async function page() {
  const projects = await fetchProjects();
  const clients = async (id: string) => {
    const clients = await fetchClientById(id);
    if (!clients) return "Cliente não encontrado";
    return clients.name;
  };

  return (
    <Table>
      <TableCaption>Projetos</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="hidden w-[100px] sm:table-cell">
            <span className="sr-only">Image</span>
          </TableHead>
          <TableHead>Nome</TableHead>
          <TableHead>Texto</TableHead>
          <TableHead className="hidden md:table-cell">
            Definição imagem
          </TableHead>
          <TableHead className="hidden md:table-cell">Cliente</TableHead>
          <TableHead>
            <span className="sr-only">Actions</span>
          </TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {projects.map((project) => {
          return (
            <TableRow key={project.id}>
              <TableCell className="hidden sm:table-cell">
                <Image
                  alt={project.imageAlt}
                  className="aspect-square rounded-md object-cover"
                  height="64"
                  src={project.imageUrl}
                  width="64"
                />
              </TableCell>
              <TableCell className="font-medium">{project.name}</TableCell>
              <TableCell>
                <p className="line-clamp-5">{project.text}</p>
              </TableCell>
              <TableCell className="hidden md:table-cell">
                <p className="line-clamp-5">{project.imageAlt}</p>
              </TableCell>
              <TableCell className="hidden md:table-cell">
                {clients(project.clientId)}
              </TableCell>
              <TableCell>
                <DialogDeleteEditModal
                  idObject={project.id}
                  type="project"
                  hrefLink={`/admin/projects/${project.id}`}
                />
              </TableCell>
            </TableRow>
          );
        })}
        <TableRow>
          <TableCell colSpan={6}>
            <Link href={`/admin/projects/create`} className="flex gap-2">
              <Icons type="FaPlusCircle" />
              Adicionar Novo Projeto
            </Link>
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
}
export default page;
