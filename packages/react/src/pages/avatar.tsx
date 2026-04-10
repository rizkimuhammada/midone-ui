import { AvatarRoot } from "@/components/ui/avatar";

function Main() {
  return (
    <div className="flex flex-col gap-20">
      <div className="grid grid-cols-2">
        <div className="justify-center items-center flex gap-2 border-b border-e border-foreground/10 p-5 flex-wrap">
          <AvatarRoot fallbackText="PA" src="https://i.pravatar.cc/300" />
        </div>
        <div className="justify-center items-center flex gap-2 border-b border-e border-foreground/10 p-5 flex-wrap">
          <AvatarRoot bordered={false} fallbackText="PA" src="https://i.pravatar.cc/300" />
        </div>
        <div className="justify-center items-center flex gap-2 border-b border-e border-foreground/10 p-5 flex-wrap">
          <AvatarRoot className="rounded-full" fallbackText="PA" src="https://i.pravatar.cc/300" />
        </div>
        <div className="justify-center items-center flex gap-2 border-b border-e border-foreground/10 p-5 flex-wrap">
          <AvatarRoot className="rounded-full" bordered={false} fallbackText="PA" src="https://i.pravatar.cc/300" />
        </div>
      </div>
    </div>
  );
}

export default Main;
