import { ProgressLinearRoot } from "@/components/ui/progress-linear";

function Main() {
  return (
    <ProgressLinearRoot
      defaultValue={42}
      label="Progress Linear"
      trackClass="max-w-72"
      showValueText
    />
  );
}

export default Main;
