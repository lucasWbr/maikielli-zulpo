"use client";
import Container from "@/components/global/Container";

function loading() {
  return (
    <section className="h-[70vh] bg-clrPrimary10">
      <Container>
        <div className="flex justify-center items-center h-[50vh]">
          <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-clrPrimary4 border-solid border-opacity-50"></div>
        </div>
      </Container>
    </section>
  );
}
export default loading;
