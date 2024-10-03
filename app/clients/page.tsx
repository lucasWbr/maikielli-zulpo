import Container from "@/components/global/Container";
import SectionTitle from "@/components/home/sections/components/SectionTitle";
import Underline from "@/components/global/Underline";
import ClientsContent from "@/components/clients/ClientsContent";
import { Client } from "@prisma/client";
import { fetchClients } from "@/utils/actions";
import { Suspense } from "react";
import LoadingContainer from "@/components/loading/LoadingContainer";

async function ClientsPage() {
  const clients: Client[] = await fetchClients();
  return (
    <section className="min-h-[85vh] pt-20 bg-clrPrimary10">
      <Container className="w-[85vw] mx-auto text-center">
        <SectionTitle title="Clientes" />
        <Underline classes="mx-auto mb-20" />
        <Suspense fallback={<LoadingContainer type="clients" />}>
          <ClientsContent clients={clients} />
        </Suspense>
      </Container>
    </section>
  );
}
export default ClientsPage;
