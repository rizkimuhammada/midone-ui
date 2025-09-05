import {
  AlertRoot,
  AlertTitle,
  AlertDescription,
  AlertCloseTrigger,
} from "@/components/ui/alert";
import { Compass } from "lucide-react";

function Main() {
  return (
    <div className="flex flex-col gap-20">
      <div className="grid grid-cols-2">
        <div className="justify-center items-center flex gap-2 border-b border-e border-foreground/10 p-5 flex-wrap">
          <AlertRoot>
            <Compass />
            <AlertTitle>Success! Your changes have been saved</AlertTitle>
            <AlertDescription>
              This is an alert with icon, title and description.
            </AlertDescription>
            <AlertCloseTrigger />
          </AlertRoot>
          <AlertRoot variant="primary">
            <Compass />
            <AlertTitle>Success! Your changes have been saved</AlertTitle>
            <AlertDescription>
              This is an alert with icon, title and description.
            </AlertDescription>
            <AlertCloseTrigger />
          </AlertRoot>
          <AlertRoot variant="secondary">
            <Compass />
            <AlertTitle>Success! Your changes have been saved</AlertTitle>
            <AlertDescription>
              This is an alert with icon, title and description.
            </AlertDescription>
            <AlertCloseTrigger />
          </AlertRoot>
          <AlertRoot variant="success">
            <Compass />
            <AlertTitle>Success! Your changes have been saved</AlertTitle>
            <AlertDescription>
              This is an alert with icon, title and description.
            </AlertDescription>
            <AlertCloseTrigger />
          </AlertRoot>
          <AlertRoot variant="danger">
            <Compass />
            <AlertTitle>Success! Your changes have been saved</AlertTitle>
            <AlertDescription>
              This is an alert with icon, title and description.
            </AlertDescription>
            <AlertCloseTrigger />
          </AlertRoot>
          <AlertRoot variant="pending">
            <Compass />
            <AlertTitle>Success! Your changes have been saved</AlertTitle>
            <AlertDescription>
              This is an alert with icon, title and description.
            </AlertDescription>
            <AlertCloseTrigger />
          </AlertRoot>
          <AlertRoot variant="warning">
            <Compass />
            <AlertTitle>Success! Your changes have been saved</AlertTitle>
            <AlertDescription>
              This is an alert with icon, title and description.
            </AlertDescription>
            <AlertCloseTrigger />
          </AlertRoot>
        </div>
        <div className="justify-center items-center flex gap-2 border-b border-e border-foreground/10 p-5 flex-wrap">
          <AlertRoot filled>
            <Compass />
            <AlertTitle>Success! Your changes have been saved</AlertTitle>
            <AlertDescription>
              This is an alert with icon, title and description.
            </AlertDescription>
            <AlertCloseTrigger />
          </AlertRoot>
          <AlertRoot filled variant="primary">
            <Compass />
            <AlertTitle>Success! Your changes have been saved</AlertTitle>
            <AlertDescription>
              This is an alert with icon, title and description.
            </AlertDescription>
            <AlertCloseTrigger />
          </AlertRoot>
          <AlertRoot filled variant="secondary">
            <Compass />
            <AlertTitle>Success! Your changes have been saved</AlertTitle>
            <AlertDescription>
              This is an alert with icon, title and description.
            </AlertDescription>
            <AlertCloseTrigger />
          </AlertRoot>
          <AlertRoot filled variant="success">
            <Compass />
            <AlertTitle>Success! Your changes have been saved</AlertTitle>
            <AlertDescription>
              This is an alert with icon, title and description.
            </AlertDescription>
            <AlertCloseTrigger />
          </AlertRoot>
          <AlertRoot filled variant="danger">
            <Compass />
            <AlertTitle>Success! Your changes have been saved</AlertTitle>
            <AlertDescription>
              This is an alert with icon, title and description.
            </AlertDescription>
            <AlertCloseTrigger />
          </AlertRoot>
          <AlertRoot filled variant="pending">
            <Compass />
            <AlertTitle>Success! Your changes have been saved</AlertTitle>
            <AlertDescription>
              This is an alert with icon, title and description.
            </AlertDescription>
            <AlertCloseTrigger />
          </AlertRoot>
          <AlertRoot filled variant="warning">
            <Compass />
            <AlertTitle>Success! Your changes have been saved</AlertTitle>
            <AlertDescription>
              This is an alert with icon, title and description.
            </AlertDescription>
            <AlertCloseTrigger />
          </AlertRoot>
        </div>
        <div className="justify-center items-center flex gap-2 border-b border-e border-foreground/10 p-5 flex-wrap">
          <AlertRoot raised="single">
            <Compass />
            <AlertTitle>Success! Your changes have been saved</AlertTitle>
            <AlertCloseTrigger />
          </AlertRoot>
          <AlertRoot raised="single" variant="primary">
            <Compass />
            <AlertTitle>Success! Your changes have been saved</AlertTitle>
            <AlertCloseTrigger />
          </AlertRoot>
          <AlertRoot raised="single" variant="secondary">
            <Compass />
            <AlertTitle>Success! Your changes have been saved</AlertTitle>
            <AlertCloseTrigger />
          </AlertRoot>
          <AlertRoot raised="single" variant="success">
            <Compass />
            <AlertTitle>Success! Your changes have been saved</AlertTitle>
            <AlertCloseTrigger />
          </AlertRoot>
          <AlertRoot raised="single" variant="danger">
            <Compass />
            <AlertTitle>Success! Your changes have been saved</AlertTitle>
            <AlertCloseTrigger />
          </AlertRoot>
          <AlertRoot raised="single" variant="pending">
            <Compass />
            <AlertTitle>Success! Your changes have been saved</AlertTitle>
            <AlertCloseTrigger />
          </AlertRoot>
          <AlertRoot raised="single" variant="warning">
            <Compass />
            <AlertTitle>Success! Your changes have been saved</AlertTitle>
            <AlertCloseTrigger />
          </AlertRoot>
        </div>
        <div className="justify-center items-center flex gap-2 border-b border-e border-foreground/10 p-5 flex-wrap">
          <AlertRoot filled raised="double">
            <Compass />
            <AlertTitle>Success! Your changes have been saved</AlertTitle>
          </AlertRoot>
          <AlertRoot filled raised="double" variant="primary">
            <Compass />
            <AlertTitle>Success! Your changes have been saved</AlertTitle>
          </AlertRoot>
          <AlertRoot filled raised="double" variant="secondary">
            <Compass />
            <AlertTitle>Success! Your changes have been saved</AlertTitle>
          </AlertRoot>
          <AlertRoot filled raised="double" variant="success">
            <Compass />
            <AlertTitle>Success! Your changes have been saved</AlertTitle>
          </AlertRoot>
          <AlertRoot filled raised="double" variant="danger">
            <Compass />
            <AlertTitle>Success! Your changes have been saved</AlertTitle>
          </AlertRoot>
          <AlertRoot filled raised="double" variant="pending">
            <Compass />
            <AlertTitle>Success! Your changes have been saved</AlertTitle>
          </AlertRoot>
          <AlertRoot filled raised="double" variant="warning">
            <Compass />
            <AlertTitle>Success! Your changes have been saved</AlertTitle>
          </AlertRoot>
        </div>
      </div>
    </div>
  );
}

export default Main;
