import Container from "@/components/global/Container";
import Image from "next/image";
import { Client } from "@/lib/types";

function Clients({
  title,
  text,
  clients,
  href,
}: {
  title: string;
  text: string;
  clients: Client[];
  href: string;
}) {
  // Verificação de segurança
  if (!clients || clients.length === 0) {
    return null;
  }

  return (
    <section id={href} className="bg-clrPrimary10 py-16">
      <Container>
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-clrPrimary1 mb-4">
            {title}
          </h2>
          <p className="text-lg text-clrPrimary3 max-w-2xl mx-auto">{text}</p>
        </div>

        {/* Scroll infinito para todos os tamanhos */}
        <div className="overflow-hidden">
          <div className="flex gap-8 animate-scroll-horizontal">
            {clients.concat(clients).map((client, index) => (
              <div
                key={`${client.id}-${index}`}
                className="flex-shrink-0 flex flex-col items-center"
              >
                <div className="w-32 h-32 rounded-full overflow-hidden border border-clrPrimary3 shadow-lg mb-4">
                  <Image
                    src={client.imageUrl}
                    alt={client.imageAlt}
                    width={128}
                    height={128}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-base font-bold text-clrPrimary2 text-center">
                  {client.name}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

export default Clients;
