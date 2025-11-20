import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import Button from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Typography from "@/components/ui/typography";
import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div className="flex h-100vh min-w-full w-full p-4 relative pt-28">
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
      <div className="flex flex-col gap-4 w-full">
        <Typography variant="lead">Minuman</Typography>
        <div className="grid grid-cols-2 gap-4">
          <Card className="shadow-none p-0">
            <img
              src="/images/beverage.png"
              alt="beverage.png"
              className="w-full h-40 rounded-2xl"
            />
            <CardContent className="px-3 py-2">
              <Typography variant="small" className="font-semibold">
                Susu Jahe
              </Typography>
              <Typography variant="small" className="text-neutral-dark-light">
                Rp10.000
              </Typography>
            </CardContent>
          </Card>
        </div>
        <div className="fixed w-full bottom-0 left-0 p-4 bg-neutral-light-lighest border-y">
          <Button size={"xl"} className="w-full flex justify-between">
            <Typography variant="small" className="font-semibold">
              Rp10.000
            </Typography>
            <Typography variant="small" className="font-semibold">
              Proses Pesanan (2)
            </Typography>
          </Button>
        </div>
      </div>
    </div>
  );
}
