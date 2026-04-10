import { CircleGauge } from "lucide-react";
import { Box } from "@/components/ui/box";

function Main() {
  return (
    <div className="flex flex-col gap-20">
      <div className="grid sm:grid-cols-2">
        <div className="justify-center items-center flex gap-2 border-b border-e border-foreground/10 p-5 flex-wrap">
          <Box className="w-70">
            <CircleGauge className="size-7 stroke-1 fill-foreground/10" />
            <div className="mt-6 text-2xl font-medium leading-8">$724,091.47</div>
            <div className="mt-1.5 text-xs uppercase opacity-70">Item Sales</div>
          </Box>
        </div>
        <div className="justify-center items-center flex gap-2 border-b border-e border-foreground/10 p-5 flex-wrap">
          <Box raised="single" className="w-70">
            <CircleGauge className="size-7 stroke-1 fill-foreground/10" />
            <div className="mt-6 text-2xl font-medium leading-8">$724,091.47</div>
            <div className="mt-1.5 text-xs uppercase opacity-70">Item Sales</div>
          </Box>
        </div>
        <div className="justify-center items-center flex gap-2 border-b border-e border-foreground/10 p-5 flex-wrap">
          <Box raised="double" className="w-70">
            <CircleGauge className="size-7 stroke-1 fill-foreground/10" />
            <div className="mt-6 text-2xl font-medium leading-8">$724,091.47</div>
            <div className="mt-1.5 text-xs uppercase opacity-70">Item Sales</div>
          </Box>
        </div>
      </div>
    </div>
  );
}

export default Main;
