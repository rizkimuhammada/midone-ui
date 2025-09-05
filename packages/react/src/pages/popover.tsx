import {
  PopoverRoot,
  PopoverTrigger,
  PopoverPositioner,
  PopoverContent,
  PopoverTitle,
  PopoverDescription,
} from "@/components/ui/popover";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

function Main() {
  return (
    <div className="flex flex-col gap-20">
      <div className="grid grid-cols-2">
        <div className="justify-center items-center flex gap-2 border-b border-e border-foreground/10 p-5 flex-wrap">
          <PopoverRoot>
            <PopoverTrigger className="w-56">Open Popover</PopoverTrigger>
            <PopoverPositioner>
              <PopoverContent className="w-100">
                <PopoverTitle>Dimensions</PopoverTitle>
                <PopoverDescription>
                  Set the dimensions for the layer.
                </PopoverDescription>
                <div className="grid gap-3 mt-4 mb-2">
                  <div className="grid grid-cols-3 items-center gap-4">
                    <Label htmlFor="width">Width</Label>
                    <Input
                      id="width"
                      defaultValue="100%"
                      className="col-span-2"
                    />
                  </div>
                  <div className="grid grid-cols-3 items-center gap-4">
                    <Label htmlFor="maxWidth">Max. width</Label>
                    <Input
                      id="maxWidth"
                      defaultValue="300px"
                      className="col-span-2"
                    />
                  </div>
                  <div className="grid grid-cols-3 items-center gap-4">
                    <Label htmlFor="height">Height</Label>
                    <Input
                      id="height"
                      defaultValue="25px"
                      className="col-span-2"
                    />
                  </div>
                  <div className="grid grid-cols-3 items-center gap-4">
                    <Label htmlFor="maxHeight">Max. height</Label>
                    <Input
                      id="maxHeight"
                      defaultValue="none"
                      className="col-span-2"
                    />
                  </div>
                </div>
              </PopoverContent>
            </PopoverPositioner>
          </PopoverRoot>
        </div>
      </div>
    </div>
  );
}

export default Main;
