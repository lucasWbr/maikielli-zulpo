import { Collaborator } from "@prisma/client";
import AboutSingleCard from "./AboutSingleCard";
import Link from "next/link";

function AboutPageContent({
  collaborators,
}: {
  collaborators: Collaborator[];
}) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mx-auto pb-8">
      {collaborators.map((collaborator) => (
        <Link
          href={`/about/${collaborator.id}`}
          key={collaborator.id}
          className="mx-auto"
        >
          <AboutSingleCard
            id={collaborator.id}
            imageUrl={collaborator.imageUrl}
            imageAlt={collaborator.imageAlt}
            name={collaborator.name}
            role={collaborator.role}
          />
        </Link>
      ))}
    </div>
  );
}
export default AboutPageContent;
