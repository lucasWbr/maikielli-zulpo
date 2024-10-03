import { Skeleton } from "../ui/skeleton";

function ServicesLoadingContainer() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mx-auto mt-12">
      <Skeleton className="w-[300px] h-[300px] mx-auto" />
      <Skeleton className="w-[300px] h-[300px] mx-auto" />
      <Skeleton className="w-[300px] h-[300px] mx-auto" />
    </div>
  );
}
export default ServicesLoadingContainer;
