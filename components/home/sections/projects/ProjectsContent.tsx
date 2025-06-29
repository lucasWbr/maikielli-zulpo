import Link from "next/link";
import { ProjectsClient } from "@/utils/actions";
import Image from "next/image";

function ProjectsContent({ projects }: { projects: ProjectsClient[] }) {
  // Verificar se projects existe e tem elementos
  if (!projects || projects.length === 0) {
    return (
      <div className="section-center projects-center">
        <p>Nenhum projeto encontrado.</p>
      </div>
    );
  }

  // Criar cópia dos projetos para não modificar o array original
  const projectsCopy = [...projects];
  const projectsListDisplay: ProjectsClient[] = [];
  const maxProjects = Math.min(4, projectsCopy.length);

  while (projectsListDisplay.length < maxProjects && projectsCopy.length > 0) {
    const randomIndex = Math.floor(Math.random() * projectsCopy.length);
    projectsListDisplay.push(projectsCopy[randomIndex]);
    projectsCopy.splice(randomIndex, 1);
  }

  return (
    <div className="section-center projects-center">
      {projectsListDisplay.map((project, index) => {
        return (
          <Link
            key={project.id}
            href={`/projects/${project.id}`}
            className={`project-${index}`}
          >
            <article className="project font-sans">
              <Image
                src={project.imageUrl}
                alt={project.imageAlt}
                objectFit="cover"
                fill
                className="project-img shadow-lg"
              />
              <div className="project-info">
                <h4 className="font-sans font-bold capitalize tracking-wider">
                  {project.name}
                </h4>
                <p className="font-sans ">{project.client.name}</p>
              </div>
            </article>
          </Link>
        );
      })}
    </div>
  );
}
export default ProjectsContent;
