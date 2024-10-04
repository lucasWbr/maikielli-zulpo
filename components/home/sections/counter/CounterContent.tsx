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
    <div className="mx-auto w-[85vw] justify-between grid grid-cols-3 gap-1">
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
