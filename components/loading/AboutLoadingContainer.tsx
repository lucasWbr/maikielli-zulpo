import { Skeleton } from "@/components/ui/skeleton";
function AboutLoadingContainer() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mx-auto">
      <Skeleton className="w-[200px] h-[400px] mx-auto" />
      <Skeleton className="w-[200px] h-[400px] mx-auto" />
      <Skeleton className="w-[200px] h-[400px] mx-auto" />
    </div>
  );
}
export default AboutLoadingContainer;
