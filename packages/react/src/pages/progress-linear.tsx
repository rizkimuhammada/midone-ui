import {
  ProgressRoot,
  ProgressLabel,
  ProgressValueText,
  ProgressTrack,
  ProgressRange,
} from "@/components/ui/progress-linear";

function Main() {
  return (
    <div className="flex flex-col gap-20">
      <div className="grid grid-cols-2">
        <div className="justify-center items-center flex gap-2 border-b border-e border-foreground/10 p-5 flex-wrap">
          <ProgressRoot defaultValue={42}>
            <ProgressLabel>Progress Linear</ProgressLabel>
            <ProgressTrack className="max-w-72">
              <ProgressRange />
            </ProgressTrack>
            <ProgressValueText />
          </ProgressRoot>
        </div>
      </div>
    </div>
  );
}

export default Main;
