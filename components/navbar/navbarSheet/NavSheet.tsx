import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Buttons from "@/components/global/Buttons";
import Logo from "@/components/navbar/Logo";
import NavSheetContent from "./NavSheetContent";
import NavSocialMediaLinks from "./NavSocialMediaLinks";

function NavSheet() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Buttons type="hamburger-menu" />
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>
            <Logo />
          </SheetTitle>
        </SheetHeader>
        <NavSheetContent />
        <SheetFooter className="h-[40vh] items-end sm:justify-center">
          <NavSocialMediaLinks />
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
export default NavSheet;
