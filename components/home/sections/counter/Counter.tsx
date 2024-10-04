import Container from "@/components/global/Container";
import CounterContent from "./CounterContent";
function Counter({
  totalArea,
  totalClients,
  totalProjects,
}: {
  totalArea: string;
  totalClients: string;
  totalProjects: string;
}) {
  return (
    <section className="h-[25vh] bg-clrPrimary4 content-center flex items-center">
      <Container className="flex w-[85vw] mx-auto">
        <CounterContent
          totalArea={totalArea}
          totalClients={totalClients}
          totalProjects={totalProjects}
        />
      </Container>
    </section>
  );
}
export default Counter;
