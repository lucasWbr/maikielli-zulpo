import Container from "@/components/global/Container";
import Logo from "@/components/navbar/Logo";
import NavLinks from "@/components/navbar/NavLinks";
import NavSheet from "./navbarSheet/NavSheet";

function Navbar() {
  return (
    <header className="w-full h-20 bg-gray-50 sticky top-0 shadow-md z-30">
      <Container>
        <nav className="h-20 flex items-center justify-between">
          <Logo />
          <div className="flex-1 flex justify-center">
            <NavLinks direction="row" />
          </div>
          <NavSheet />
        </nav>
      </Container>
    </header>
  );
}
export default Navbar;
