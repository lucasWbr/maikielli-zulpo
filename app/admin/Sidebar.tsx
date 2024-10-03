"use client";
import { linksDashboard } from "@/lib/data/links";
import Link from "next/link";
import { Button } from "@/components/ui/button";

function Sidebar() {
  return (
    <aside className="bg-clrPrimary10 ml-2 rounded-lg border-2 border-clrPrimary10 shadow-md">
      {linksDashboard.map((link) => {
        return (
          <Button
            asChild
            className="w-full capitalize font-semibold justify-start hover:shadow-lg hover:bg-clrPrimary8"
            variant={"ghost"}
            key={link.href}
          >
            <Link href={link.href}>{link.label}</Link>
          </Button>
        );
      })}
    </aside>
  );
}
export default Sidebar;
