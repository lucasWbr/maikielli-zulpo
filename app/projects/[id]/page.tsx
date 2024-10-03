import ProjectsIdPage from "@/components/projects/ProjectsIdPage";
import { fetchProjectById, ProjectsClient } from "@/utils/actions";

async function ProjectsPageId({ params }: { params: { id: string } }) {
  const project = await fetchProjectById(params.id);
  const {
    name: nameProject,
    text: textProject,
    imageUrl: imageUrlProject,
    imageAlt: imageAltProject,
  } = project as ProjectsClient;

  return (
    <ProjectsIdPage
      title={nameProject}
      text={textProject}
      imageUrl={imageUrlProject}
      imageAlt={imageAltProject}
    />
  );
}
export default ProjectsPageId;
