import { SwitchRoot, SwitchControl, SwitchLabel } from "@/components/ui/switch";

function Main() {
  return (
    <div className="flex flex-col gap-20">
      <div className="grid grid-cols-2">
        <div className="justify-center items-center flex gap-2 border-b border-e border-foreground/10 p-5 flex-wrap">
          <SwitchRoot>
            <SwitchControl />
            <SwitchLabel>Airplane Mode</SwitchLabel>
          </SwitchRoot>
        </div>
      </div>
    </div>
  );
}

export default Main;
