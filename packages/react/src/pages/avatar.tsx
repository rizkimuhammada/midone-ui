import {
  AvatarRoot,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar";

function Main() {
  return (
    <div className="flex flex-col gap-20">
      <div className="grid grid-cols-2">
        <div className="justify-center items-center flex gap-2 border-b border-e border-foreground/10 p-5 flex-wrap">
          <AvatarRoot>
            <AvatarFallback>PA</AvatarFallback>
            <AvatarImage src="https://i.pravatar.cc/300" alt="avatar" />
          </AvatarRoot>
        </div>
        <div className="justify-center items-center flex gap-2 border-b border-e border-foreground/10 p-5 flex-wrap">
          <AvatarRoot bordered={false}>
            <AvatarFallback>PA</AvatarFallback>
            <AvatarImage src="https://i.pravatar.cc/300" alt="avatar" />
          </AvatarRoot>
        </div>
        <div className="justify-center items-center flex gap-2 border-b border-e border-foreground/10 p-5 flex-wrap">
          <AvatarRoot className="rounded-full">
            <AvatarFallback>PA</AvatarFallback>
            <AvatarImage src="https://i.pravatar.cc/300" alt="avatar" />
          </AvatarRoot>
        </div>
        <div className="justify-center items-center flex gap-2 border-b border-e border-foreground/10 p-5 flex-wrap">
          <AvatarRoot className="rounded-full" bordered={false}>
            <AvatarFallback>PA</AvatarFallback>
            <AvatarImage src="https://i.pravatar.cc/300" alt="avatar" />
          </AvatarRoot>
        </div>
      </div>
    </div>
  );
}

export default Main;
