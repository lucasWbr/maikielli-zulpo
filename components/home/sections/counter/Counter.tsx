import Container from "@/components/global/Container";
import CounterContent from "./CounterContent";

function Counter({
  totalClients,
  approvedArea,
}: {
  totalClients: string;
  approvedArea: string;
}) {
  return (
    <section className="hidden md:flex h-[30vh] bg-gradient-to-r from-clrPrimary4 to-clrPrimary5 content-center items-center">
      <Container className="flex w-[85vw] mx-auto">
        <CounterContent
          totalClients={totalClients}
          approvedArea={approvedArea}
        />
      </Container>
    </section>
  );
}
export default Counter;
