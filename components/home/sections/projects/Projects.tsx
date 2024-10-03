import Underline from "@/components/global/Underline";
import SectionTitle from "../components/SectionTitle";
import SectionText from "../components/SectionText";
import ProjectsContent from "./ProjectsContent";
import { ProjectsClient } from "@/utils/actions";
import Container from "@/components/global/Container";
import SectionButton from "../components/SectionButton";

function Projects({
  title,
  text,
  projectsList,
  href,
}: {
  title: string;
  text: string;
  projectsList: ProjectsClient[];
  href: string;
}) {
  return (
    <section className="text-center mt-16 mb-16 w-[85vw] mx-auto">
      <Container className="mx-auto">
        <SectionTitle title={title} />
        <Underline classes="mx-auto mt-2" />
        <SectionText text={text} />
        <ProjectsContent projects={projectsList} />
        <div className="flex justify-center mt-8">
          <SectionButton href={href} />
        </div>
      </Container>
    </section>
  );
}
export default Projects;
