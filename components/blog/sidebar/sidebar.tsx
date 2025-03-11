import React, { Suspense } from "react";
import { LoaderCircle } from "lucide-react";
import SidebarRsc from "@/components/blog/sidebar/sidebar.rsc";
import SidebarAside from "@/components/blog/sidebar/aside.default";

// app/blog/@sidebar/page.tsx에서는 이를 import만 함
const Sidebar = ({ className }: { className?: string }) => {
  return (
    <SidebarAside className={className}>
      <Suspense
        fallback={
          <LoaderCircle className={`pt-2 text-gray-300 animate-spin`} />
        }
      >
        <SidebarRsc />
      </Suspense>
    </SidebarAside>
  );
};

export default Sidebar;
