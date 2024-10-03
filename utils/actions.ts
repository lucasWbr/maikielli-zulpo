"use server";
import { currentUser } from "@clerk/nextjs/server";
import db from "./db";
import { redirect } from "next/navigation";
import { uploadImage, deleteImage } from "./supabase";
import { revalidatePath } from "next/cache";

export const fetchSections = async () => {
  const response = await db.homeSection.findMany();
  return response;
};

export const fetchSection = async (id: string) => {
  const response = await db.homeSection.findFirst({
    where: {
      id,
    },
  });
  return response;
};

export const fetchSocialMediaGeneral = async () => {
  const response = await db.collaborator.findFirst({
    where: {
      name: "Geral",
    },
    select: {
      socialMedia: {
        select: {
          id: true,
          name: true,
          url: true,
          collaboratorId: true,
        },
      },
    },
  });
  return response;
};

export const fetchWhatsapp = async () => {
  const response = await db.generalInfo.findMany();

  return response[0];
};

export const fetchServices = async () => {
  const response = await db.services.findMany();
  return response;
};

export const fetchProjects = async () => {
  const response = await db.project.findMany({
    include: {
      client: true,
    },
  });
  return response;
};

export const fetchGeneralInfo = async () => {
  const response = await db.generalInfo.findMany();
  return response;
};

export const fetchCollaborators = async () => {
  const response = await db.collaborator.findMany({
    where: {
      name: {
        not: "Geral",
      },
    },
  });
  return response;
};

export const fetchCollaborator = async (id: string) => {
  const response = await db.collaborator.findFirst({
    where: {
      id,
    },
  });
  return response;
};

export const fetchCollaboratorSocialMedia = async (id: string) => {
  const response = await db.collaborator.findMany({
    where: {
      id: id,
    },
    select: {
      socialMedia: {
        select: {
          id: true,
          name: true,
          url: true,
          collaboratorId: true,
        },
      },
    },
  });
  return response;
};

export const fetchServiceById = async (id: string) => {
  const response = await db.services.findFirst({
    where: {
      id,
    },
  });
  return response;
};

export const fetchProjectById = async (id: string) => {
  const response = await db.project.findFirst({
    where: {
      id,
    },
    include: {
      client: true,
    },
  });
  return response;
};

export const fetchClients = async () => {
  const response = await db.client.findMany();
  return response;
};

export const fetchClientById = async (id: string) => {
  const response = await db.client.findFirst({
    where: {
      id,
    },
  });
  return response;
};

export const createCollaboratorAction = async (
  prevState: any,
  formData: FormData
): Promise<{ message: string }> => {
  const user = await currentUser();
  if (!user) {
    redirect("/");
  }

  try {
    const name = formData.get("name") as string;
    const role = formData.get("role") as string;
    const text = formData.get("text") as string;
    const image = formData.get("imagem") as File;
    const imageAlt = formData.get("imageAlt") as string;

    const imageUrl = await uploadImage(image);

    await db.collaborator.create({
      data: {
        name,
        role,
        text,
        imageUrl: imageUrl,
        imageAlt,
      },
    });

    const socialMedia: { name: string; url: string }[] = [];
    formData.forEach((value, key) => {
      if (key.includes("socialMediaSelect")) {
        const id = key.split("socialMediaSelect")[1];
        const url = formData.get(`socialMediaUrl${id}`) as string;
        socialMedia.push({ name: value as string, url });
      }
    });

    const collaborator = await db.collaborator.findFirst({
      where: {
        name,
      },
    });

    socialMedia.forEach(async (media) => {
      await db.socialMedia.create({
        data: {
          name: media.name,
          url: media.url,
          Collaborator: {
            connect: {
              id: collaborator?.id,
            },
          },
        },
      });
    });
  } catch (error) {
    return { message: "Erro ao criar Funcionário" };
  }
  redirect("/admin/about");
};

export const createSocialMediaCollaboratorAction = async (
  prevState: any,
  formData: FormData
): Promise<{ message: string }> => {
  const user = await currentUser();
  if (!user) {
    redirect("/");
  }
  try {
    const id = formData.get("id") as string;
    const socialMedia: { name: string; url: string }[] = [];
    formData.forEach((value, key) => {
      if (key.includes("socialMediaSelect")) {
        const id = key.split("socialMediaSelect")[1];
        const url = formData.get(`socialMediaUrl${id}`) as string;
        socialMedia.push({ name: value as string, url });
      }
    });

    const collaborator = await db.collaborator.findFirst({
      where: {
        id,
      },
    });
    socialMedia.forEach(async (media) => {
      await db.socialMedia.create({
        data: {
          name: media.name,
          url: media.url,
          Collaborator: {
            connect: {
              id: collaborator?.id,
            },
          },
        },
      });
    });
  } catch (error) {
    return { message: "Erro ao criar rede social do funcionário" };
  }
  redirect("/admin/about");
};

export const createClientAction = async (
  prevState: any,
  formData: FormData
): Promise<{ message: string }> => {
  const user = await currentUser();
  if (!user) {
    redirect("/");
  }
  try {
    const name = formData.get("name") as string;
    const image = formData.get("imagem") as File;
    const imageAlt = formData.get("imageAlt") as string;

    const imageUrl = await uploadImage(image);

    await db.client.create({
      data: {
        name,
        imageUrl: imageUrl,
        imageAlt,
      },
    });
  } catch (error) {
    return { message: "Erro ao criar Cliente" };
  }
  redirect("/admin/clients");
};

export const createProjectAction = async (
  prevState: any,
  formData: FormData
): Promise<{ message: string }> => {
  const user = await currentUser();
  if (!user) {
    redirect("/");
  }
  try {
    const name = formData.get("name") as string;
    const text = formData.get("text") as string;
    const image = formData.get("imagem") as File;
    const imageAlt = formData.get("imageAlt") as string;
    const client = formData.get("client") as string;

    const imageUrl = await uploadImage(image);

    await db.project.create({
      data: {
        name,
        text,
        imageUrl: imageUrl,
        imageAlt,
        client: {
          connect: {
            id: client,
          },
        },
      },
    });
  } catch (error) {
    return { message: "Erro ao criar Projeto" };
  }
  redirect("/admin/projects");
};

export const createServiceAction = async (
  prevState: any,
  formData: FormData
): Promise<{ message: string }> => {
  const user = await currentUser();
  if (!user) {
    redirect("/");
  }
  try {
    const name = formData.get("name") as string;
    const textShort = formData.get("textShort") as string;
    const textLong = formData.get("textLong") as string;
    const image = formData.get("imagem") as File;
    const imageAlt = formData.get("imageAlt") as string;
    const icon = formData.get("icon") as string;

    const imageUrl = await uploadImage(image);

    await db.services.create({
      data: {
        name,
        textShort,
        textLong,
        imageUrl: imageUrl,
        imageAlt,
        icon,
      },
    });
  } catch (error) {
    return { message: "Erro ao criar Serviço" };
  }
  redirect("/admin/services");
};

export const updateImageCollaboratorAction = async (
  prevState: any,
  formData: FormData
) => {
  const user = await currentUser();
  if (!user) {
    redirect("/");
  }
  try {
    const image = formData.get("imagem") as File;
    const collaboratorId = formData.get("id") as string;
    const oldImageUrl = formData.get("url") as string;

    const fullPath = await uploadImage(image);
    await deleteImage(oldImageUrl);
    await db.collaborator.update({
      where: {
        id: collaboratorId,
      },
      data: {
        imageUrl: fullPath,
      },
    });
    revalidatePath(`/admin/about/${collaboratorId}`);
    return { message: "Imagem atualizada com sucesso" };
  } catch (error) {
    return { message: "Erro ao atualizar imagem" };
  }
};

export const updateCollaboratorAction = async (
  prevState: any,
  formData: FormData
) => {
  const user = await currentUser();
  if (!user) {
    redirect("/");
  }
  try {
    const id = formData.get("id") as string;
    const name = formData.get("name") as string;
    const role = formData.get("role") as string;
    const text = formData.get("text") as string;
    const imageUrl = formData.get("url") as string;
    const imageAlt = formData.get("alt") as string;

    await db.collaborator.update({
      where: {
        id,
      },
      data: {
        name,
        role,
        text,
        imageUrl,
        imageAlt,
      },
    });
    revalidatePath(`/admin/about/${id}`);
    return { message: "Funcionário atualizado com sucesso" };
  } catch (error: any) {
    return { message: "Erro ao atualizar funcionário" };
  }
};

export const updateSocialMediaCollaboratorAction = async (
  prevState: any,
  formData: FormData
) => {
  const user = await currentUser();
  if (!user) {
    redirect("/");
  }
  try {
    const id = formData.get("id") as string;
    const socialMedia: { name: string; url: string; idSocialMedia: string }[] =
      [];
    formData.forEach((value, key) => {
      if (key.includes("socialMediaSelect")) {
        const id = key.split("socialMediaSelect")[1];
        const url = formData.get(`socialMediaUrl${id}`) as string;
        const idSocialMedia = formData.get(`id${id}`) as string;
        socialMedia.push({ name: value as string, url, idSocialMedia });
      }
    });

    socialMedia.forEach(async (media) => {
      await db.socialMedia.update({
        where: {
          id: media.idSocialMedia,
        },
        data: {
          name: media.name,
          url: media.url,
        },
      });
    });
    revalidatePath(`/admin/about/${id}/socialmedia/edit`);
    return { message: "Redes sociais atualizadas com sucesso" };
  } catch (error: any) {
    return { message: "Erro ao atualizar redes sociais" };
  }
};

export const updateClientImageAction = async (
  prevState: any,
  formData: FormData
) => {
  const user = await currentUser();
  if (!user) {
    redirect("/");
  }
  try {
    const image = formData.get("imagem") as File;
    const id = formData.get("id") as string;
    const oldImageUrl = formData.get("url") as string;

    const fullPath = await uploadImage(image);
    await deleteImage(oldImageUrl);
    await db.client.update({
      where: {
        id,
      },
      data: {
        imageUrl: fullPath,
      },
    });
    revalidatePath(`/admin/clients/${id}`);
    return { message: "Imagem atualizada com sucesso" };
  } catch (error) {
    return { message: "Erro ao atualizar imagem" };
  }
};

export const updateClientAction = async (
  prevState: any,
  formData: FormData
) => {
  const user = await currentUser();
  if (!user) {
    redirect("/");
  }
  try {
    const id = formData.get("id") as string;
    const name = formData.get("name") as string;
    const imageAlt = formData.get("imageAlt") as string;

    await db.client.update({
      where: {
        id,
      },
      data: {
        name,
        imageAlt,
      },
    });
    revalidatePath(`/admin/clients/${id}`);
    return { message: "Cliente atualizado com sucesso" };
  } catch (error: any) {
    return { message: "Erro ao atualizar cliente" };
  }
};

export const updateGeneralInfoAction = async (
  prevState: any,
  formData: FormData
) => {
  const user = await currentUser();
  if (!user) {
    redirect("/");
  }
  try {
    const id = formData.get("id") as string;
    const phone = formData.get("phone") as string;
    const messageContact = formData.get("messageContact") as string;
    const totalArea = formData.get("totalArea") as string;
    const totalClients = formData.get("totalClients") as string;
    const totalProjects = formData.get("totalProjects") as string;

    await db.generalInfo.update({
      where: {
        id,
      },
      data: {
        phone,
        messageContact,
        totalArea,
        totalClients,
        totalProjects,
      },
    });
    revalidatePath(`/admin/geral/generalInfo/${id}`);
    return { message: "Informações gerais atualizadas com sucesso" };
  } catch (error: any) {
    return { message: "Erro ao atualizar informações gerais" };
  }
};

export const updateProjectImageAction = async (
  prevState: any,
  formData: FormData
) => {
  const user = await currentUser();
  if (!user) {
    redirect("/");
  }
  try {
    const image = formData.get("imagem") as File;
    const id = formData.get("id") as string;
    const oldImageUrl = formData.get("url") as string;

    const fullPath = await uploadImage(image);
    await deleteImage(oldImageUrl);
    await db.project.update({
      where: {
        id,
      },
      data: {
        imageUrl: fullPath,
      },
    });
    revalidatePath(`/admin/projects/${id}`);
    return { message: "Imagem atualizada com sucesso" };
  } catch (error) {
    return { message: "Erro ao atualizar imagem" };
  }
};

export const updateProjectAction = async (
  prevState: any,
  formData: FormData
) => {
  const user = await currentUser();
  if (!user) {
    redirect("/");
  }
  try {
    const id = formData.get("id") as string;
    const name = formData.get("name") as string;
    const text = formData.get("text") as string;
    const imageAlt = formData.get("imageAlt") as string;
    const client = formData.get("client") as string;

    await db.project.update({
      where: {
        id,
      },
      data: {
        name,
        text,
        imageAlt,
        client: {
          connect: {
            id: client,
          },
        },
      },
    });
    revalidatePath(`/admin/projects/${id}`);
    return { message: "Projeto atualizado com sucesso" };
  } catch (error: any) {
    return { message: "Erro ao atualizar projeto" };
  }
};

export const updateSectionAction = async (
  prevState: any,
  formData: FormData
) => {
  const user = await currentUser();
  if (!user) {
    redirect("/");
  }
  try {
    const id = formData.get("id") as string;
    const text = formData.get("text") as string;
    const imageAlt = formData.get("alt") as string;

    await db.homeSection.update({
      where: {
        id,
      },
      data: {
        text,
        imageAlt,
      },
    });
    revalidatePath(`/admin/geral/section/${id}`);
    return { message: "Seção atualizada com sucesso" };
  } catch (error: any) {
    return { message: "Erro ao atualizar seção" };
  }
};

export const updateSectionImageAction = async (
  prevState: any,
  formData: FormData
) => {
  const user = await currentUser();
  if (!user) {
    redirect("/");
  }
  try {
    const image = formData.get("imagem") as File;
    const id = formData.get("id") as string;
    const oldImageUrl = formData.get("url") as string;

    const fullPath = await uploadImage(image);
    await deleteImage(oldImageUrl);
    await db.homeSection.update({
      where: {
        id,
      },
      data: {
        imageUrl: fullPath,
      },
    });
    revalidatePath(`/admin/geral/section/${id}`);
    return { message: "Imagem atualizada com sucesso" };
  } catch (error) {
    return { message: "Erro ao atualizar imagem" };
  }
};

export const updateServiceImageAction = async (
  prevState: any,
  formData: FormData
) => {
  const user = await currentUser();
  if (!user) {
    redirect("/");
  }
  try {
    const image = formData.get("imagem") as File;
    const id = formData.get("id") as string;
    const oldImageUrl = formData.get("url") as string;

    const fullPath = await uploadImage(image);
    await deleteImage(oldImageUrl);
    await db.services.update({
      where: {
        id,
      },
      data: {
        imageUrl: fullPath,
      },
    });
    revalidatePath(`/admin/services/${id}`);
    return { message: "Imagem atualizada com sucesso" };
  } catch (error) {
    return { message: "Erro ao atualizar imagem" };
  }
};

export const updateServiceAction = async (
  prevState: any,
  formData: FormData
) => {
  const user = await currentUser();
  if (!user) {
    redirect("/");
  }
  try {
    const id = formData.get("id") as string;
    const name = formData.get("name") as string;
    const textShort = formData.get("textShort") as string;
    const textLong = formData.get("textLong") as string;
    const imageAlt = formData.get("imageAlt") as string;
    const icon = formData.get("icon") as string;

    await db.services.update({
      where: {
        id,
      },
      data: {
        name,
        textShort,
        textLong,
        imageAlt,
        icon,
      },
    });
    revalidatePath(`/admin/services/${id}`);
    return { message: "Serviço atualizado com sucesso" };
  } catch (error: any) {
    return { message: "Erro ao atualizar serviço" };
  }
};

export const deleteCollaboratorSocialMediaAction = async (
  idSocialMediaInput: string,
  id: string
) => {
  const user = await currentUser();
  if (!user) {
    redirect("/");
  }
  try {
    const idSocialMedia = idSocialMediaInput;

    await db.socialMedia.delete({
      where: {
        id: idSocialMedia,
      },
    });
    revalidatePath(`/admin/about/${id}/socialmedia/edit`);
    return { message: "Rede social deletada com sucesso" };
  } catch (error: any) {
    return { message: "Erro ao deletar rede social" };
  }
};

export const deleteCollaboratorAction = async (id: string) => {
  const user = await currentUser();
  if (!user) {
    redirect("/");
  }
  try {
    const collaborator = await db.collaborator.findFirst({
      where: {
        id,
      },
      select: {
        imageUrl: true,
        socialMedia: {
          select: {
            id: true,
          },
        },
      },
    });

    const imageUrl = collaborator?.imageUrl;

    imageUrl ? await deleteImage(imageUrl) : null;

    const socialMedia = collaborator?.socialMedia;

    socialMedia?.forEach(async (media) => {
      await db.socialMedia.delete({
        where: {
          id: media.id,
        },
      });
    });

    await db.collaborator.delete({
      where: {
        id,
      },
    });
    revalidatePath("/admin/about");
    return { message: "Funcionário deletado com sucesso" };
  } catch (error: any) {
    return { message: "Erro ao deletar funcionário" };
  }
};

export const deleteClientAction = async (id: string) => {
  const user = await currentUser();
  if (!user) {
    redirect("/");
  }
  try {
    const client = await db.client.findFirst({
      where: {
        id,
      },
      select: {
        imageUrl: true,
        projects: {
          select: {
            id: true,
            imageUrl: true,
          },
        },
      },
    });

    const imageUrl = client?.imageUrl;

    imageUrl ? await deleteImage(imageUrl) : null;

    const projects = client?.projects;

    projects?.forEach(async (project) => {
      await deleteImage(project.imageUrl);

      await db.project.delete({
        where: {
          id: project.id,
        },
      });
    });

    await db.client.delete({
      where: {
        id,
      },
    });
    revalidatePath("/admin/clients");
    return { message: "Cliente deletado com sucesso" };
  } catch (error: any) {
    return { message: "Erro ao deletar cliente" };
  }
};

export const deleteSocialMediaGeneralAction = async (id: string) => {
  const user = await currentUser();
  if (!user) {
    redirect("/");
  }
  try {
    await db.socialMedia.delete({
      where: {
        id,
      },
    });
    revalidatePath("/admin/geral");
    return { message: "Rede social deletada com sucesso" };
  } catch (error: any) {
    return { message: "Erro ao deletar rede social" };
  }
};

export const deleteProjectAction = async (id: string) => {
  const user = await currentUser();
  if (!user) {
    redirect("/");
  }
  try {
    const project = await db.project.findFirst({
      where: {
        id,
      },
      select: {
        imageUrl: true,
      },
    });

    const imageUrl = project?.imageUrl;

    imageUrl ? await deleteImage(imageUrl) : null;

    await db.project.delete({
      where: {
        id,
      },
    });
    revalidatePath("/admin/projects");
    return { message: "Projeto deletado com sucesso" };
  } catch (error: any) {
    return { message: "Erro ao deletar projeto" };
  }
};

export const deleteServiceAction = async (id: string) => {
  const user = await currentUser();
  if (!user) {
    redirect("/");
  }
  try {
    const service = await db.services.findFirst({
      where: {
        id,
      },
      select: {
        imageUrl: true,
      },
    });

    const imageUrl = service?.imageUrl;

    imageUrl ? await deleteImage(imageUrl) : null;

    await db.services.delete({
      where: {
        id,
      },
    });
    revalidatePath("/admin/services");
    return { message: "Serviço deletado com sucesso" };
  } catch (error: any) {
    return { message: "Erro ao deletar serviço" };
  }
};

export type ProjectsClient = {
  id: string;
  name: string;
  text: string;
  imageUrl: string;
  imageAlt: string;
  client: {
    name: string;
  };
};

export type actionFunction = (
  prevState: any,
  formData: FormData
) => Promise<{ message: string }>;
