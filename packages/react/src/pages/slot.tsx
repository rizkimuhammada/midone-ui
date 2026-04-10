import { Button } from "@/components/ui/button";
import { Box } from "@/components/ui/box";
import { ChevronLeft, ChevronRight } from "lucide-react";

function Main() {
  return (
    <div className="flex flex-col gap-20">
      <div className="grid sm:grid-cols-2">
        <div className="justify-center items-center flex gap-2 border-b border-e border-foreground/10 p-5 flex-wrap">
          <div className="justify-center items-center flex gap-2">
            <Box asChild>
              <Button variant="ghost" className="me-2 px-2">
                <ChevronLeft className="size-5" />
              </Button>
            </Box>
            <Box asChild>
              <Button variant="ghost" className="px-2">
                <ChevronRight className="size-5" />
              </Button>
            </Box>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
