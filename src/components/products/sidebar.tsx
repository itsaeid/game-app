import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
} from "../ui/sidebar";
import FilterProduct from "./filter-product";

export default function ProductSidebar({
  ...props
}: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar
      collapsible="offcanvas"
      {...props}
      className="mt-10 rounded-3xl border-2 border-gray-200 bg-white p-4"
    >

      <SidebarContent>
        <FilterProduct />
      </SidebarContent>
    </Sidebar>
  );
}
