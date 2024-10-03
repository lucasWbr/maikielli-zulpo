"use client";
import { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import Icons from "@/components/global/Icons";
import Link from "next/link";
import {
  deleteCollaboratorSocialMediaAction,
  deleteCollaboratorAction,
  deleteClientAction,
  deleteSocialMediaGeneralAction,
  deleteProjectAction,
  deleteServiceAction,
} from "@/utils/actions";

function DialogDeleteEditModal({
  idLink,
  idObject,
  type,
  hrefLink,
}: {
  idLink?: string;
  idObject: string;
  type: string;
  hrefLink: string;
}) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleDelete = () => {
    switch (type) {
      case "socialMediaAbout":
        deleteCollaboratorSocialMediaAction(idObject, idLink ? idLink : "");
        break;
      case "collaboratorAbout":
        deleteCollaboratorAction(idObject);
        break;
      case "client":
        deleteClientAction(idObject);
        break;
      case "socialMediaGeneral":
        deleteSocialMediaGeneralAction(idObject);
        break;
      case "project":
        deleteProjectAction(idObject);
        break;
      case "service":
        deleteServiceAction(idObject);
        break;
      default:
        break;
    }
    setIsModalOpen(false); // Fechar o modal após confirmar
  };

  return (
    <div className="p-4">
      {/* DropdownMenu */}
      <DropdownMenu>
        <DropdownMenuTrigger>
          <Button aria-haspopup="true" size="icon" variant="ghost">
            <Icons type="IoIosMore" className="h-4 w-4" />
            <span className="sr-only">Toggle menu</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem asChild>
            <Link href={hrefLink}>Editar</Link>
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => setIsModalOpen(true)}>
            Excluir
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      {/* Modal customizado */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white rounded-lg shadow-lg max-w-md w-full p-6">
            <h3 className="text-lg font-semibold">Confirmar Exclusão</h3>
            <p className="mt-2 text-gray-600">
              Você tem certeza que deseja excluir este objeto? Essa ação não
              pode ser desfeita.
            </p>
            <div className="mt-4 flex justify-end space-x-4">
              <Button variant="ghost" onClick={() => setIsModalOpen(false)}>
                Cancelar
              </Button>
              <Button variant="destructive" onClick={handleDelete}>
                Excluir
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default DialogDeleteEditModal;
