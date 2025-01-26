import { Link } from "react-router-dom";
import {
  CollapsibleContent,
  CollapsibleTrigger,
} from "@radix-ui/react-collapsible";
import { Collapsible } from "./ui/collapsible";
import {
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from "./ui/sidebar";
import { ClipboardMinus } from "lucide-react";

export default function CollapsibleSidebar() {
  return (
    <Collapsible asChild open className="group/collapsible">
      <SidebarMenuItem>
        <CollapsibleTrigger asChild>
          <SidebarMenuButton>
            <ClipboardMinus />
            <Link to="https://docs.google.com/document/d/1zeMzxPFBoco8N1uz4h4mO9EJPgbz-B0NihZZ4GCJqcw/edit?usp=sharing">
              <span>Reports</span>
            </Link>
            {/* /   <ChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" /> */}
          </SidebarMenuButton>
        </CollapsibleTrigger>
        <CollapsibleContent>
          <SidebarMenuSub>
            <SidebarMenuSubItem>
              <SidebarMenuSubButton asChild>
                <Link to="https://docs.google.com/document/d/1zeMzxPFBoco8N1uz4h4mO9EJPgbz-B0NihZZ4GCJqcw/edit?usp=sharing">
                  <span>Retreiver</span>
                </Link>
              </SidebarMenuSubButton>
            </SidebarMenuSubItem>

            <SidebarMenuSubItem>
              <SidebarMenuSubButton asChild>
                <Link to="https://docs.google.com/document/d/1zeMzxPFBoco8N1uz4h4mO9EJPgbz-B0NihZZ4GCJqcw/edit?usp=sharing">
                  <span>Reader</span>
                </Link>
              </SidebarMenuSubButton>
            </SidebarMenuSubItem>
          </SidebarMenuSub>
        </CollapsibleContent>
      </SidebarMenuItem>
    </Collapsible>
  );
}
