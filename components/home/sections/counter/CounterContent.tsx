import CounterCards from "./CounterCards";

function CounterContent({
  totalClients,
  approvedArea,
}: {
  totalClients: string;
  approvedArea: string;
}) {
  return (
    <div className="mx-auto w-[85vw] justify-center grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
      <CounterCards
        number={totalClients}
        text="Clientes Satisfeitos"
        prefix=""
        suffix=""
      />
      <CounterCards
        number={approvedArea}
        text="m² de Área Aprovada"
        prefix=""
        suffix=""
        isArea={true}
      />
    </div>
  );
}
export default CounterContent;
