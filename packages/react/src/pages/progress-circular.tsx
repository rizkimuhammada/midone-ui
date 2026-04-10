import { ProgressCircularRoot } from "@/components/ui/progress-circular";

function Main() {
  return (
    <ProgressCircularRoot
      defaultValue={42}
      label="Progress Circular"
      circleClass="max-w-48"
      showValueText
    />
  );
}

export default Main;
