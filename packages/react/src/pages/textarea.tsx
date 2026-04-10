import { Textarea } from "@/components/ui/textarea";

function Main() {
  return (
    <div className="flex flex-col gap-20">
      <div className="grid grid-cols-2">
        <div className="justify-center items-center flex gap-2 border-b border-e border-foreground/10 p-5 flex-wrap">
          <Textarea placeholder="Type your message here." />
        </div>
      </div>
    </div>
  );
}

export default Main;
