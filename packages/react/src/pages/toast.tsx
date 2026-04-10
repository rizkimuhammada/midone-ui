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
    <>
      <Button
        look="outline"
        variant="secondary"
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
    </>
  );
}

export default Main;
