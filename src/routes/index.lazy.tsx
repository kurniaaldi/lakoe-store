import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div className="flex items-center justify-center h-100vh w-full p-4 relative">
      <div className="fixed w-full top-0 left-0 p-4">
        <div className="flex items-center bg-[#F8F9FE] gap-4 p-4 border-[#EBEDF6] rounded-md">
          <Avatar className="w-10 h-10">
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <div>
            <p>Warmindo Cak Tho</p>
            <p>Tebet, Jakarta Selatan</p>
          </div>
        </div>
      </div>
    </div>
  );
}
