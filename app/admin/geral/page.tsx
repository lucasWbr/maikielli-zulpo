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
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import Icons from "@/components/global/Icons";
import {
  fetchGeneralInfo,
  fetchSocialMediaGeneral,
  fetchSections,
} from "@/utils/actions";
import Link from "next/link";
import DialogDeleteEditModal from "@/components/global/DialogDeleteEdit";

async function page() {
  const collaborators = await fetchGeneralInfo();
  const socialMedia = await fetchSocialMediaGeneral();
  const sections = await fetchSections();

  return (
    <section className="mb-8">
      <Table>
        <TableCaption>Geral</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Telefone</TableHead>
            <TableHead>Mensagem Whatsapp</TableHead>
            <TableHead className="hidden md:table-cell">Total Área</TableHead>
            <TableHead className="hidden md:table-cell">
              Total de clientes
            </TableHead>
            <TableHead className="hidden md:table-cell">
              Total de Projetos
            </TableHead>
            <TableHead>
              <span className="sr-only">Actions</span>
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {collaborators.map((info) => {
            return (
              <TableRow key={info.id}>
                <TableCell className="hidden sm:table-cell"></TableCell>
                <TableCell className="font-medium">{info.phone}</TableCell>
                <TableCell>{info.messageContact}</TableCell>
                <TableCell className="hidden md:table-cell">
                  <p className="line-clamp-5">{info.totalArea}</p>
                </TableCell>
                <TableCell className="hidden md:table-cell">
                  {info.totalClients}
                </TableCell>
                <TableCell className="hidden md:table-cell">
                  {info.totalProjects}
                </TableCell>
                <TableCell>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button aria-haspopup="true" size="icon" variant="ghost">
                        <Icons type="IoIosMore" className="h-4 w-4" />
                        <span className="sr-only">Toggle menu</span>
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem asChild>
                        <Link href={`/admin/geral/generalInfo/${info.id}`}>
                          Editar
                        </Link>
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
      <Table>
        <TableCaption>Seções</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="hidden w-[100px] sm:table-cell">
              <span className="sr-only">Image</span>
            </TableHead>
            <TableHead>título</TableHead>
            <TableHead>texto</TableHead>
            <TableHead className="hidden md:table-cell">
              definição imagem
            </TableHead>
            <TableHead>
              <span className="sr-only">Actions</span>
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {sections.map((info) => {
            return (
              <TableRow key={info.id}>
                {info.imageUrl && info.imageAlt ? (
                  <TableCell className="hidden sm:table-cell">
                    <Image
                      alt={info.imageAlt}
                      className="aspect-square rounded-md object-cover"
                      height="64"
                      src={info.imageUrl}
                      width="64"
                    />
                  </TableCell>
                ) : (
                  <TableCell className="hidden sm:table-cell"></TableCell>
                )}
                <TableCell className="font-medium">{info.title}</TableCell>
                <TableCell>
                  <p className="line-clamp-5">{info.text}</p>
                </TableCell>
                <TableCell className="hidden md:table-cell">
                  {info.imageAlt}
                </TableCell>
                <TableCell>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button aria-haspopup="true" size="icon" variant="ghost">
                        <Icons type="IoIosMore" className="h-4 w-4" />
                        <span className="sr-only">Toggle menu</span>
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem asChild>
                        <Link href={`/admin/geral/section/${info.id}`}>
                          Editar
                        </Link>
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
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
          {socialMedia?.socialMedia.map((media) => {
            return (
              <TableRow key={media.id}>
                <TableCell className="font-medium">{media.name}</TableCell>
                <TableCell className="hidden md:table-cell">
                  <p className="line-clamp-5">{media.url}</p>
                </TableCell>
                <TableCell>
                  <DialogDeleteEditModal
                    idObject={media.id}
                    type="socialMediaGeneral"
                    hrefLink={`/admin/geral/socialmedia/${media.id}`}
                  />
                </TableCell>
              </TableRow>
            );
          })}
          <TableRow>
            <TableCell>
              <Link
                href={`/admin/geral/socialmedia/create`}
                className="flex gap-2"
              >
                <Icons type="FaPlusCircle" />
                Adicionar Nova Rede Social
              </Link>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </section>
  );
}
export default page;
