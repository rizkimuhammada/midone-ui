import { Button } from "@/components/ui/button";
import {
  toaster,
  ToasterContainer,
  ToastRoot,
  ToastTitle,
  ToastDescription,
  ToastCloseTrigger,
} from "@/components/ui/toast";

function Main() {
  return (
    <div className="flex flex-col gap-20">
      <div className="grid grid-cols-2">
        <div className="justify-center items-center flex gap-2 border-b border-e border-foreground/10 p-5 flex-wrap">
          <Button
            onClick={() =>
              toaster.create({
                title: "Event has been created",
                description: "Sunday, December 03, 2023 at 9:00 AM",
                type: "info",
              })
            }
          >
            Show Toast
          </Button>
          <ToasterContainer toaster={toaster}>
            {(toast) => (
              <ToastRoot key={toast.id}>
                <ToastTitle>{toast.title}</ToastTitle>
                <ToastDescription>{toast.description}</ToastDescription>
                <ToastCloseTrigger />
              </ToastRoot>
            )}
          </ToasterContainer>
        </div>
      </div>
    </div>
  );
}

export default Main;
