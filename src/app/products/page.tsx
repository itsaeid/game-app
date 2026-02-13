import AllProducts from "@/components/products/all-products";
import ProductSidebar from "@/components/products/sidebar";
import { SidebarProvider } from "@/components/ui/sidebar";

export default function ProductsPage() {
  return (
    <SidebarProvider>
      <div className="flex px-10 py-10" dir="rtl">
        <ProductSidebar side="right" />
        <AllProducts />
      </div>
    </SidebarProvider>
  );
}
