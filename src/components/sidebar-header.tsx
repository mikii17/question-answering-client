import { Link } from "react-router-dom";
import {
  SidebarHeader as ShadCnHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from "@/components/ui/sidebar";
import { CircleHelp } from "lucide-react";

export default function SidebarHeader() {
  return (
    <ShadCnHeader>
      <SidebarMenu>
        <SidebarMenuItem>
          <SidebarMenuButton size="lg" asChild>
            <Link to="/">
              <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-primary text-sidebar-primary-foreground">
                <CircleHelp className="size-4" />
              </div>
              <div className="flex flex-col gap-0.5 leading-none">
                <h1 className="font-semibold text-lg text-foreground">
                  Question Answering
                </h1>
              </div>
            </Link>
          </SidebarMenuButton>
        </SidebarMenuItem>
      </SidebarMenu>
    </ShadCnHeader>
  );
}
