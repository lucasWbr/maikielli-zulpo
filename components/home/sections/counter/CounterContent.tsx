import CounterCards from "./CounterCards";
function CounterContent({
  totalArea,
  totalClients,
  totalProjects,
}: {
  totalArea: string;
  totalClients: string;
  totalProjects: string;
}) {
  return (
    <div className="flex mx-auto w-[85vw] gap-2 justify-between">
      <CounterCards number={totalClients} text="Clientes Satisfeitos" />
      <CounterCards number={totalProjects} text="Projetos realizados" />
      <CounterCards
        number={totalArea}
        text="metros quadrados de área aprovados"
      />
    </div>
  );
}
export default CounterContent;
