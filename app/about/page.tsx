import Image from "next/image";
import Container from "@/components/global/Container";
import { fetchCollaborators } from "@/utils/actions";

export default async function AboutPage() {
  const collaborators = await fetchCollaborators();
  const collaborator = collaborators[0]; // Maikielli Zulpo

  return (
    <main className="min-h-screen pt-20">
      <Container>
        <div className="py-16">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-clrPrimary1 mb-4">
              Sobre Mim
            </h1>
            <div className="w-24 h-1 bg-clrPrimary5 mx-auto"></div>
          </div>

          {/* Content */}
          <div className="grid md:grid-cols-2 gap-12 items-start max-w-6xl mx-auto">
            {/* Photo */}
            <div className="order-2 md:order-1">
              <div className="relative w-full h-[500px] max-w-md mx-auto rounded-lg overflow-hidden shadow-lg">
                <Image
                  src={collaborator.imageUrl}
                  alt={collaborator.imageAlt}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>

            {/* Content */}
            <div className="order-1 md:order-2 space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-clrPrimary1 mb-2">
                  {collaborator.name}
                </h2>
                <p className="text-xl text-clrPrimary3 mb-2">
                  {collaborator.role}
                </p>
                <p className="text-lg text-clrPrimary4 mb-2">
                  {collaborator.crea}
                </p>
                <p className="text-base text-clrPrimary4 mb-2">
                  {collaborator.company}
                </p>
                <p className="text-base text-clrPrimary4">
                  {collaborator.cnpj}
                </p>
              </div>

              <div>
                <p className="text-clrPrimary4 leading-relaxed text-lg">
                  {collaborator.text}
                </p>
              </div>

              <div className="prose prose-lg max-w-none">
                <h3 className="text-2xl font-semibold text-clrPrimary2 mb-6">
                  🎓 Formação Acadêmica
                </h3>
                <div className="space-y-4">
                  {collaborator.education?.map((edu: any, index: number) => (
                    <div key={index} className="bg-clrPrimary10 p-4 rounded-lg">
                      <h4 className="font-bold text-clrPrimary1 text-lg mb-1">
                        {edu.degree}
                      </h4>
                      <p className="text-clrPrimary3 mb-1">{edu.institution}</p>
                      <p className="text-clrPrimary4 text-sm">
                        Concluído em {edu.year}
                      </p>
                    </div>
                  ))}
                </div>

                <h3 className="text-2xl font-semibold text-clrPrimary2 mb-6 mt-10">
                  💼 Experiência Profissional
                </h3>
                <div className="space-y-6">
                  {collaborator.experience_details?.map(
                    (exp: any, index: number) => (
                      <div
                        key={index}
                        className="border-l-4 border-clrPrimary5 pl-6 pb-6"
                      >
                        <h4 className="font-bold text-clrPrimary1 text-lg mb-1">
                          {exp.title}
                        </h4>
                        <p className="text-clrPrimary3 mb-1">
                          📍 {exp.location}
                        </p>
                        <p className="text-clrPrimary4 text-sm mb-3">
                          {exp.period}
                        </p>
                        <ul className="space-y-2">
                          {exp.activities.map(
                            (activity: string, actIndex: number) => (
                              <li
                                key={actIndex}
                                className="flex items-start space-x-2"
                              >
                                <div className="w-2 h-2 bg-clrPrimary5 rounded-full mt-2 flex-shrink-0"></div>
                                <span className="text-clrPrimary4">
                                  {activity}
                                </span>
                              </li>
                            )
                          )}
                        </ul>
                      </div>
                    )
                  )}
                </div>

                <h3 className="text-2xl font-semibold text-clrPrimary2 mb-6 mt-10">
                  📋 Áreas de Especialização
                </h3>
                <div className="grid sm:grid-cols-2 gap-4 text-clrPrimary4">
                  <div className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-clrPrimary5 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Licenciamento Ambiental (LP, LI, LO)</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-clrPrimary5 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Planos de Gerenciamento de Resíduos</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-clrPrimary5 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Recuperação de Áreas Degradadas</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-clrPrimary5 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Prevenção e Proteção Contra Incêndios</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-clrPrimary5 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Laudos Técnicos Ambientais</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-clrPrimary5 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Segurança do Trabalho</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-clrPrimary5 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Treinamentos e Capacitação</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-clrPrimary5 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Consultoria Técnica</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </main>
  );
}
