export interface HomeSection {
  id: string;
  name: string;
  title: string;
  text: string;
  imageUrl?: string;
  imageAlt?: string;
}

export interface GeneralInfo {
  id: string;
  phone: string;
  email?: string;
  messageContact: string;
  totalClients: string;
  totalProjects: string;
  approvedArea: string;
}

export interface SocialMedia {
  id: string;
  name: string;
  url: string;
  collaboratorId: string;
}

export interface Education {
  degree: string;
  institution: string;
  year: string;
}

export interface ExperienceDetail {
  title: string;
  location: string;
  period: string;
  activities: string[];
}

export interface Collaborator {
  id: string;
  name: string;
  role: string;
  crea: string;
  company: string;
  cnpj: string;
  experience: string;
  text: string;
  education: Education[];
  experience_details: ExperienceDetail[];
  imageUrl: string;
  imageAlt: string;
  socialMedia?: SocialMedia[];
}

export interface Services {
  id: string;
  name: string;
  textShort: string;
  textLong: string;
  imageUrl: string;
  imageAlt: string;
  icon: string;
}

export interface Client {
  id: string;
  name: string;
  imageUrl: string;
  imageAlt: string;
}

export interface Project {
  id: string;
  name: string;
  text: string;
  imageUrl: string;
  imageAlt: string;
  clientId: string;
  client?: Client;
}

// Types for projects with client data
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

// Action function type (legacy - not used in static site)
export type actionFunction = (
  prevState: unknown,
  formData: FormData
) => Promise<{ message: string }>;
