import { ScrollAreaRoot } from "@/components/ui/scroll-area";

function Main() {
  return (
    <div className="flex flex-col gap-20">
      <div className="grid grid-cols-2">
        <div className="justify-center items-center flex gap-2 border-b border-e border-foreground/10 p-5 flex-wrap">
          <ScrollAreaRoot className="h-72 w-70">
            <div className="text-base font-medium mb-4">Scroll Area Example</div>
            {Array.from({ length: 20 }, (_, i) => i + 1).map((i) => (
              <div key={i} className="mb-4 last:mb-0 opacity-80">
                This is line number {i} of the scrollable content. It helps demonstrate
                how the custom scrollbar works within the Midone UI system.
              </div>
            ))}
          </ScrollAreaRoot>
        </div>
      </div>
    </div>
  );
}

export default Main;
