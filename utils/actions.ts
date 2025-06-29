import mockData from "@/lib/data/mockData.json";
import type {
  HomeSection,
  GeneralInfo,
  Collaborator,
  SocialMedia,
  Services,
  Client,
} from "@/lib/types";

// Fetch functions for sections
export const fetchSections = async (): Promise<HomeSection[]> => {
  return mockData.homeSections;
};

export const fetchSection = async (id: string): Promise<HomeSection | null> => {
  return mockData.homeSections.find((section) => section.id === id) || null;
};

export const fetchCollaborators = async (): Promise<Collaborator[]> => {
  return mockData.collaborators;
};

export const fetchSocialMediaGeneral = async (): Promise<{
  collaborator: Collaborator;
  socialMedia: SocialMedia[];
}> => {
  const collaborator = mockData.collaborators[0];
  const socialMedia = mockData.socialMedia.filter(
    (sm) => sm.collaboratorId === collaborator.id
  );

  return {
    collaborator,
    socialMedia,
  };
};

export const fetchServices = async (): Promise<Services[]> => {
  return mockData.services;
};

export const fetchWhatsapp = async (): Promise<GeneralInfo> => {
  return mockData.generalInfo[0];
};

export const fetchGeneralInfo = async (): Promise<GeneralInfo[]> => {
  return mockData.generalInfo;
};

export const fetchServiceById = async (
  id: string
): Promise<Services | null> => {
  return mockData.services.find((s) => s.id === id) || null;
};

export const fetchCollaboratorById = async (
  id: string
): Promise<Collaborator | null> => {
  return mockData.collaborators.find((c) => c.id === id) || null;
};

export const fetchClients = async (): Promise<Client[]> => {
  return mockData.clients;
};

export const fetchClientById = async (id: string): Promise<Client | null> => {
  return mockData.clients.find((c) => c.id === id) || null;
};

// Simple function to get approved area (manual value)
export const fetchApprovedArea = async (): Promise<string> => {
  return mockData.generalInfo[0].approvedArea;
};

export type actionFunction = (
  prevState: any,
  formData: FormData
) => Promise<{ message: string }>;
