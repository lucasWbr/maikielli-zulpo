import Image from "next/image";
import Container from "@/components/global/Container";
import Icons from "@/components/global/Icons";
import { fetchServices, fetchGeneralInfo } from "@/utils/actions";

export default async function ServicesPage() {
  const [services, generalInfoArray] = await Promise.all([
    fetchServices(),
    fetchGeneralInfo(),
  ]);

  const generalInfo = generalInfoArray[0];

  return (
    <main className="min-h-screen pt-20">
      <Container>
        <div className="py-16">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-clrPrimary1 mb-4">
              Meus Serviços
            </h1>
            <p className="text-xl text-clrPrimary3 max-w-3xl mx-auto mb-6">
              Soluções especializadas em engenharia ambiental e segurança do
              trabalho
            </p>
            <div className="w-24 h-1 bg-clrPrimary5 mx-auto"></div>
          </div>

          <div className="space-y-20">
            {services.map((service, index) => (
              <div
                key={service.id}
                className={`grid md:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? "md:grid-flow-col-dense" : ""
                }`}
              >
                <div className={`${index % 2 === 1 ? "md:order-2" : ""}`}>
                  <div className="relative aspect-video rounded-lg overflow-hidden shadow-lg">
                    <Image
                      src={service.imageUrl}
                      alt={service.imageAlt}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>

                <div
                  className={`space-y-6 ${index % 2 === 1 ? "md:order-1" : ""}`}
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div className="bg-clrPrimary6 rounded-full w-16 h-16 flex items-center justify-center">
                      <Icons
                        name={service.icon}
                        className="w-8 h-8 text-white"
                      />
                    </div>
                    <h2 className="text-3xl font-bold text-clrPrimary1">
                      {service.name}
                    </h2>
                  </div>

                  <p className="text-xl text-clrPrimary3 font-medium mb-4">
                    {service.textShort}
                  </p>

                  <div className="text-clrPrimary4 leading-relaxed text-lg space-y-3">
                    {service.textLong.split("\n\n").map((paragraph, idx) => (
                      <p key={idx} className="whitespace-pre-line">
                        {paragraph}
                      </p>
                    ))}
                  </div>

                  <div className="mt-8">
                    <h3 className="text-lg font-semibold text-clrPrimary2 mb-4">
                      O que inclui:
                    </h3>
                    <div className="space-y-3">
                      {(() => {
                        const serviceDetails: { [key: string]: string[] } = {
                          "Licenciamento Ambiental (LP, LI e LO)": [
                            "Análise de viabilidade ambiental para empreendimentos",
                            "Elaboração de estudos técnicos e documentação",
                            "Acompanhamento junto aos órgãos ambientais",
                            "Definição de condicionantes e medidas mitigadoras",
                            "Suporte durante todo o processo de licenciamento",
                          ],
                          "Plano de Gerenciamento de Resíduos (PGRS)": [
                            "Caracterização e classificação dos resíduos",
                            "Definição de procedimentos de segregação e armazenamento",
                            "Especificação de formas de tratamento e destinação",
                            "Elaboração de planilhas de controle e monitoramento",
                            "Treinamento de equipes para implementação",
                          ],
                          "Plano de Recuperação de Áreas Degradadas (PRAD)": [
                            "Diagnóstico da degradação e caracterização da área",
                            "Definição de técnicas de recuperação adequadas",
                            "Planejamento de revegetação e estabilização",
                            "Cronograma de execução e monitoramento",
                            "Relatórios de acompanhamento da recuperação",
                          ],
                          "Plano de Prevenção e Proteção Contra Incêndios (PPCI)":
                            [
                              "Análise de riscos e dimensionamento de sistemas",
                              "Projeto de saídas de emergência e sinalização",
                              "Especificação de equipamentos de combate ao fogo",
                              "Elaboração de procedimentos de emergência",
                              "Acompanhamento na aprovação pelo Corpo de Bombeiros",
                            ],
                          "Laudos Técnicos (Ambiental e Segurança)": [
                            "Medições e análises técnicas especializadas",
                            "Avaliação de conformidade com normas vigentes",
                            "Pareceres técnicos fundamentados",
                            "Recomendações de adequações necessárias",
                            "Acompanhamento profissional qualificado",
                          ],
                        };

                        const items = serviceDetails[service.name] || [];
                        return items.map((item, idx) => (
                          <div key={idx} className="flex items-start space-x-3">
                            <div className="w-2 h-2 bg-clrPrimary5 rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-clrPrimary4">{item}</span>
                          </div>
                        ));
                      })()}
                    </div>
                  </div>

                  <div className="mt-8 pt-6 border-t border-clrPrimary8">
                    <a
                      href={`https://wa.me/55${generalInfo.phone.replace(
                        /\D/g,
                        ""
                      )}?text=${encodeURIComponent(
                        generalInfo.messageContact
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-clrPrimary5 hover:bg-clrPrimary4 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200"
                    >
                      <Icons name="messageCircle" className="w-5 h-5" />
                      Solicitar Orçamento
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-20 bg-clrPrimary10 rounded-lg p-8 text-center">
            <h2 className="text-3xl font-bold text-clrPrimary1 mb-4">
              Precisa de Consultoria Especializada?
            </h2>
            <p className="text-clrPrimary3 text-lg mb-6 max-w-2xl mx-auto">
              Entre em contato para uma análise personalizada das necessidades
              da sua empresa. Oferecemos soluções customizadas e acompanhamento
              completo.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={`https://wa.me/55${generalInfo.phone.replace(
                  /\D/g,
                  ""
                )}?text=${encodeURIComponent(generalInfo.messageContact)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200"
              >
                <Icons name="messageCircle" className="w-5 h-5" />
                WhatsApp
              </a>
              <a
                href={`mailto:${generalInfo.email}`}
                className="inline-flex items-center gap-2 bg-clrPrimary5 hover:bg-clrPrimary4 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200"
              >
                <Icons name="mail" className="w-5 h-5" />
                E-mail
              </a>
            </div>
          </div>
        </div>
      </Container>
    </main>
  );
}
