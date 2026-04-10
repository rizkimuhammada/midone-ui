import { RadioGroupRoot, RadioGroupItem } from "@/components/ui/radio-group";

function Main() {
  return (
    <div className="flex flex-col gap-20">
      <div className="grid grid-cols-2">
        <div className="justify-center items-center flex gap-2 border-b border-e border-foreground/10 p-5 flex-wrap">
          <RadioGroupRoot defaultValue="React" label="Framework">
            <RadioGroupItem value="React">React</RadioGroupItem>
            <RadioGroupItem value="Solid">Solid</RadioGroupItem>
            <RadioGroupItem value="Vue">Vue</RadioGroupItem>
            <RadioGroupItem value="Svelte">Svelte</RadioGroupItem>
          </RadioGroupRoot>
        </div>
        <div className="justify-center items-center flex gap-2 border-b border-e border-foreground/10 p-5 flex-wrap">
          <RadioGroupRoot defaultValue="required">
            <RadioGroupItem value="required">
              <div className="font-medium">Required</div>
              <div className="mt-1 text-xs leading-relaxed opacity-70">
                You require the buyer to activate shipping insurance
              </div>
            </RadioGroupItem>
            <RadioGroupItem value="optional">
              <div className="font-medium">Optional</div>
              <div className="mt-1 text-xs leading-relaxed opacity-70">
                You give the buyer the option to activate shipping insurance
              </div>
            </RadioGroupItem>
          </RadioGroupRoot>
        </div>
      </div>
    </div>
  );
}

export default Main;
