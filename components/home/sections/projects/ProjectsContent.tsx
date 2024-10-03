import Link from "next/link";
import { ProjectsClient } from "@/utils/actions";
import Image from "next/image";

function ProjectsContent({ projects }: { projects: ProjectsClient[] }) {
  const projectsListDisplay: ProjectsClient[] = [];

  while (projectsListDisplay.length < 4) {
    const randomIndex = Math.floor(Math.random() * projects.length);
    projectsListDisplay.push(projects[randomIndex]);
    projects.splice(randomIndex, 1);
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
