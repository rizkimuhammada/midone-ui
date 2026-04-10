import {
  SliderRoot,
  SliderValueText,
  SliderMarkerGroup,
  SliderMarker,
} from "@/components/ui/slider";

function Main() {
  return (
    <div className="flex flex-col gap-20">
      <div className="grid grid-cols-2">
        <div className="justify-center items-center flex gap-2 border-b border-e border-foreground/10 p-5 flex-wrap">
          <div className="text-sm text-muted-foreground">
            <SliderRoot className="w-72" defaultValue={[20]} label="Max Items">
              <div className="flex items-center text-xs gap-1 font-medium justify-center opacity-70">
                <SliderValueText /> Items
              </div>
            </SliderRoot>
          </div>
        </div>
        <div className="justify-center items-center flex gap-2 border-b border-e border-foreground/10 p-5 flex-wrap">
          <div className="text-sm text-muted-foreground">
            <SliderRoot
              className="w-72"
              value={[20, 80]}
              label="Price Range"
              type="range"
            >
              <SliderMarkerGroup>
                <SliderMarker value={0}>$0</SliderMarker>
                <SliderMarker value={25}>$25</SliderMarker>
                <SliderMarker value={50}>$50</SliderMarker>
                <SliderMarker value={75}>$75</SliderMarker>
                <SliderMarker value={100}>$100</SliderMarker>
              </SliderMarkerGroup>
            </SliderRoot>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
