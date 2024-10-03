import { Skeleton } from "../ui/skeleton";

function ProjectsLoadingContainer() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mx-auto">
      <Skeleton className="w-[400px] h-[200px] mx-auto" />
      <Skeleton className="w-[400px] h-[200px] mx-auto" />
      <Skeleton className="w-[400px] h-[200px] mx-auto" />
    </div>
  );
}
export default ProjectsLoadingContainer;
