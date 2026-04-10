import {
  AlertRoot,
  AlertTitle,
  AlertDescription,
  AlertCloseTrigger,
  AlertIcon,
} from "@/components/ui/alert";
import { Compass } from "lucide-react";
import { Box } from "@/components/ui/box";

function Main() {
  return (
    <div className="flex flex-col gap-20">
      <div className="grid grid-cols-2">
        <div className="justify-center items-center flex gap-2 border-b border-e border-foreground/10 p-5 flex-wrap">
          <AlertRoot variant="primary">
            <AlertIcon>
              <Compass />
            </AlertIcon>
            <AlertTitle>Success! Your changes have been saved</AlertTitle>
            <AlertDescription>
              This is an alert with icon, title and description.
            </AlertDescription>
            <AlertCloseTrigger />
          </AlertRoot>
          <AlertRoot variant="secondary">
            <AlertIcon>
              <Compass />
            </AlertIcon>
            <AlertTitle>Success! Your changes have been saved</AlertTitle>
            <AlertDescription>
              This is an alert with icon, title and description.
            </AlertDescription>
            <AlertCloseTrigger />
          </AlertRoot>
          <AlertRoot variant="success">
            <AlertIcon>
              <Compass />
            </AlertIcon>
            <AlertTitle>Success! Your changes have been saved</AlertTitle>
            <AlertDescription>
              This is an alert with icon, title and description.
            </AlertDescription>
            <AlertCloseTrigger />
          </AlertRoot>
          <AlertRoot variant="danger">
            <AlertIcon>
              <Compass />
            </AlertIcon>
            <AlertTitle>Success! Your changes have been saved</AlertTitle>
            <AlertDescription>
              This is an alert with icon, title and description.
            </AlertDescription>
            <AlertCloseTrigger />
          </AlertRoot>
          <AlertRoot variant="pending">
            <AlertIcon>
              <Compass />
            </AlertIcon>
            <AlertTitle>Success! Your changes have been saved</AlertTitle>
            <AlertDescription>
              This is an alert with icon, title and description.
            </AlertDescription>
            <AlertCloseTrigger />
          </AlertRoot>
          <AlertRoot variant="warning">
            <AlertIcon>
              <Compass />
            </AlertIcon>
            <AlertTitle>Success! Your changes have been saved</AlertTitle>
            <AlertDescription>
              This is an alert with icon, title and description.
            </AlertDescription>
            <AlertCloseTrigger />
          </AlertRoot>
        </div>
        <div className="justify-center items-center flex gap-2 border-b border-e border-foreground/10 p-5 flex-wrap">
          <AlertRoot look="filled" variant="primary">
            <AlertIcon>
              <Compass />
            </AlertIcon>
            <AlertTitle>Success! Your changes have been saved</AlertTitle>
            <AlertDescription>
              This is an alert with icon, title and description.
            </AlertDescription>
            <AlertCloseTrigger />
          </AlertRoot>
          <AlertRoot look="filled" variant="secondary">
            <AlertIcon>
              <Compass />
            </AlertIcon>
            <AlertTitle>Success! Your changes have been saved</AlertTitle>
            <AlertDescription>
              This is an alert with icon, title and description.
            </AlertDescription>
            <AlertCloseTrigger />
          </AlertRoot>
          <AlertRoot look="filled" variant="success">
            <AlertIcon>
              <Compass />
            </AlertIcon>
            <AlertTitle>Success! Your changes have been saved</AlertTitle>
            <AlertDescription>
              This is an alert with icon, title and description.
            </AlertDescription>
            <AlertCloseTrigger />
          </AlertRoot>
          <AlertRoot look="filled" variant="danger">
            <AlertIcon>
              <Compass />
            </AlertIcon>
            <AlertTitle>Success! Your changes have been saved</AlertTitle>
            <AlertDescription>
              This is an alert with icon, title and description.
            </AlertDescription>
            <AlertCloseTrigger />
          </AlertRoot>
          <AlertRoot look="filled" variant="pending">
            <AlertIcon>
              <Compass />
            </AlertIcon>
            <AlertTitle>Success! Your changes have been saved</AlertTitle>
            <AlertDescription>
              This is an alert with icon, title and description.
            </AlertDescription>
            <AlertCloseTrigger />
          </AlertRoot>
          <AlertRoot look="filled" variant="warning">
            <AlertIcon>
              <Compass />
            </AlertIcon>
            <AlertTitle>Success! Your changes have been saved</AlertTitle>
            <AlertDescription>
              This is an alert with icon, title and description.
            </AlertDescription>
            <AlertCloseTrigger />
          </AlertRoot>
        </div>
        <div className="justify-center items-center flex gap-2 border-b border-e border-foreground/10 p-5 flex-wrap">
          <AlertRoot variant="primary">
            <AlertIcon>
              <Compass />
            </AlertIcon>
            <AlertTitle>Success! Your changes have been saved</AlertTitle>
            <AlertCloseTrigger />
          </AlertRoot>
          <AlertRoot variant="secondary">
            <AlertIcon>
              <Compass />
            </AlertIcon>
            <AlertTitle>Success! Your changes have been saved</AlertTitle>
            <AlertCloseTrigger />
          </AlertRoot>
          <AlertRoot variant="success">
            <AlertIcon>
              <Compass />
            </AlertIcon>
            <AlertTitle>Success! Your changes have been saved</AlertTitle>
            <AlertCloseTrigger />
          </AlertRoot>
          <AlertRoot variant="danger">
            <AlertIcon>
              <Compass />
            </AlertIcon>
            <AlertTitle>Success! Your changes have been saved</AlertTitle>
            <AlertCloseTrigger />
          </AlertRoot>
          <AlertRoot variant="pending">
            <AlertIcon>
              <Compass />
            </AlertIcon>
            <AlertTitle>Success! Your changes have been saved</AlertTitle>
            <AlertCloseTrigger />
          </AlertRoot>
          <AlertRoot variant="warning">
            <AlertIcon>
              <Compass />
            </AlertIcon>
            <AlertTitle>Success! Your changes have been saved</AlertTitle>
            <AlertCloseTrigger />
          </AlertRoot>
        </div>
        <div className="justify-center items-center flex gap-2 border-b border-e border-foreground/10 p-5 flex-wrap">
          <AlertRoot look="filled" variant="primary">
            <AlertIcon>
              <Compass />
            </AlertIcon>
            <AlertTitle>Success! Your changes have been saved</AlertTitle>
          </AlertRoot>
          <AlertRoot look="filled" variant="secondary">
            <AlertIcon>
              <Compass />
            </AlertIcon>
            <AlertTitle>Success! Your changes have been saved</AlertTitle>
          </AlertRoot>
          <AlertRoot look="filled" variant="success">
            <AlertIcon>
              <Compass />
            </AlertIcon>
            <AlertTitle>Success! Your changes have been saved</AlertTitle>
          </AlertRoot>
          <AlertRoot look="filled" variant="danger">
            <AlertIcon>
              <Compass />
            </AlertIcon>
            <AlertTitle>Success! Your changes have been saved</AlertTitle>
          </AlertRoot>
          <AlertRoot look="filled" variant="pending">
            <AlertIcon>
              <Compass />
            </AlertIcon>
            <AlertTitle>Success! Your changes have been saved</AlertTitle>
          </AlertRoot>
          <AlertRoot look="filled" variant="warning">
            <AlertIcon>
              <Compass />
            </AlertIcon>
            <AlertTitle>Success! Your changes have been saved</AlertTitle>
          </AlertRoot>
        </div>
        <div className="justify-center items-center flex gap-2 border-b border-e border-foreground/10 p-5 flex-wrap">
          <Box className="p-0">
            <AlertRoot variant="ghost">
              <AlertIcon>
                <Compass />
              </AlertIcon>
              <AlertTitle>Success! Your changes have been saved</AlertTitle>
              <AlertDescription>
                This is an alert with icon, title and description.
              </AlertDescription>
              <AlertCloseTrigger />
            </AlertRoot>
          </Box>
          <Box className="p-0" raised="single">
            <AlertRoot variant="ghost">
              <AlertIcon>
                <Compass />
              </AlertIcon>
              <AlertTitle>Success! Your changes have been saved</AlertTitle>
              <AlertDescription>
                This is an alert with icon, title and description.
              </AlertDescription>
              <AlertCloseTrigger />
            </AlertRoot>
          </Box>
          <Box className="p-0" raised="double">
            <AlertRoot variant="ghost">
              <AlertIcon>
                <Compass />
              </AlertIcon>
              <AlertTitle>Success! Your changes have been saved</AlertTitle>
              <AlertDescription>
                This is an alert with icon, title and description.
              </AlertDescription>
              <AlertCloseTrigger />
            </AlertRoot>
          </Box>
        </div>
      </div>
    </div>
  );
}

export default Main;
