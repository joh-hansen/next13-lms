import { BiMenu } from "react-icons/bi";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Sidebar } from "@/components/sidebar";

export const MobileSidebar = () => {
  return (
    <Sheet>
      <SheetTrigger className="md:hidden pr-4">
        <BiMenu size={30} className="text-slate-400 hover:text-slate-600 transition" />
      </SheetTrigger>
      <SheetContent side="left" className="p-0 bg-white w-56">
        <Sidebar />
      </SheetContent>
    </Sheet>
  );
};
