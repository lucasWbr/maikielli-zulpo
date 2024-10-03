import { Separator } from "@/components/ui/separator";
import Sidebar from "./Sidebar";
import Container from "@/components/global/Container";

function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <section className="min-h-[75vh] pt-8">
      <Container>
        <h2 className="text-2xl text-center font-bold tracking-wide">
          Dashboard
        </h2>
        <Separator className="mt-2" />
        <section className="grid lg:grid-cols-12 gap-12 mt-12">
          <div className="lg:col-span-2">
            <Sidebar />
          </div>
          <div className="lg:col-span-10 px-4">{children}</div>
        </section>
      </Container>
    </section>
  );
}
export default DashboardLayout;
