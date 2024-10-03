import SingleProject from "./SingleProject";
import { ProjectsClient } from "@/utils/actions";
import Link from "next/link";

function ProjectsPageContent({ projects }: { projects: ProjectsClient[] }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 pb-8">
      {projects
        ? projects.map((project) => (
            <Link href={`/projects/${project.id}`} key={project.id}>
              <SingleProject
                key={project.id}
                title={project.name}
                client={project.client.name}
                imageUrl={project.imageUrl}
                imageAlt={project.imageAlt}
              />
            </Link>
          ))
        : null}
    </div>
  );
}
export default ProjectsPageContent;
