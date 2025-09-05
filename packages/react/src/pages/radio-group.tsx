import {
  RadioGroupRoot,
  RadioGroupLabel,
  RadioGroupItem,
  RadioGroupItemText,
  RadioGroupItemControl,
} from "@/components/ui/radio-group";

function Main() {
  const frameworks = ["React", "Solid", "Vue", "Svelte"];

  return (
    <div className="flex flex-col gap-20">
      <div className="grid grid-cols-2">
        <div className="justify-center items-center flex gap-2 border-b border-e border-foreground/10 p-5 flex-wrap">
          <RadioGroupRoot defaultValue="React">
            <RadioGroupLabel>Framework</RadioGroupLabel>
            {frameworks.map((framework) => (
              <RadioGroupItem key={framework} value={framework}>
                <RadioGroupItemControl />
                <RadioGroupItemText>{framework}</RadioGroupItemText>
              </RadioGroupItem>
            ))}
          </RadioGroupRoot>
        </div>
      </div>
    </div>
  );
}

export default Main;
