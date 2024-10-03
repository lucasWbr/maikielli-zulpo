import { Client } from "@prisma/client";
import SingleClient from "./SingleClient";

function ClientsContent({ clients }: { clients: Client[] }) {
  return (
    <div className="pb-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
      {clients
        ? clients.map((client) => (
            <SingleClient
              key={client.id}
              imageUrl={client.imageUrl}
              imageAlt={client.imageAlt}
              title={client.name}
            />
          ))
        : null}
    </div>
  );
}
export default ClientsContent;
