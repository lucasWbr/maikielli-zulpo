import Container from "@/components/global/Container";
import Underline from "@/components/global/Underline";
import SectionTitle from "@/components/home/sections/components/SectionTitle";
import ProjectsPageContent from "@/components/projects/ProjectsPageContent";
import { fetchProjects } from "@/utils/actions";
import { Suspense } from "react";
import LoadingContainer from "@/components/loading/LoadingContainer";

async function ProjectsPage() {
  const projects = await fetchProjects();
  return (
    <section className="min-h-[85vh] pt-20 bg-clrPrimary10">
      <Container className="w-[85vw] mx-auto text-center">
        <SectionTitle title="Projetos" />
        <Underline classes="mx-auto mb-20" />
        <Suspense fallback={<LoadingContainer type="projects" />}>
          <ProjectsPageContent projects={projects} />
        </Suspense>
      </Container>
    </section>
  );
}
export default ProjectsPage;
