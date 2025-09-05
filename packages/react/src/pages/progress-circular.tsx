import {
  ProgressRoot,
  ProgressLabel,
  ProgressValueText,
  ProgressCircle,
  ProgressCircleTrack,
  ProgressCircleRange,
} from "@/components/ui/progress-circular";

function Main() {
  return (
    <div className="flex flex-col gap-20">
      <div className="grid grid-cols-2">
        <div className="justify-center items-center flex gap-2 border-b border-e border-foreground/10 p-5 flex-wrap">
          <ProgressRoot defaultValue={42}>
            <ProgressLabel>Progress Circular</ProgressLabel>
            <ProgressCircle className="max-w-48">
              <ProgressCircleTrack />
              <ProgressCircleRange />
            </ProgressCircle>
            <ProgressValueText />
          </ProgressRoot>
        </div>
      </div>
    </div>
  );
}

export default Main;
