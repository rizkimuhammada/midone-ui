import {
  DialogRoot,
  DialogTrigger,
  DialogContent,
  DialogTitle,
  DialogDescription,
  DialogCloseTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { SquareX, Save, ExternalLink } from "lucide-react";

function Main() {
  return (
    <div className="flex flex-col gap-20">
      <div className="grid grid-cols-2">
        <div className="justify-center items-center flex gap-2 border-b border-e border-foreground/10 p-5 flex-wrap">
          <DialogRoot>
            <DialogTrigger>Open Dialog</DialogTrigger>
            <DialogContent>
              <DialogTitle>Dialog Title</DialogTitle>
              <DialogDescription>
                Make changes to your profile here. Click save when you're done.
              </DialogDescription>
              <div className="grid gap-4 mt-2">
                <div className="grid gap-2.5">
                  <Label htmlFor="name-1">Name</Label>
                  <Input id="name-1" name="name" defaultValue="Pedro Duarte" />
                </div>
                <div className="grid gap-2.5">
                  <Label htmlFor="username-1">Username</Label>
                  <Input
                    id="username-1"
                    name="username"
                    defaultValue="@peduarte"
                  />
                </div>
              </div>
              <div className="flex gap-2 justify-end mt-7">
                <DialogCloseTrigger>
                  <SquareX />
                  Close
                </DialogCloseTrigger>
                <Button variant="primary">
                  <Save />
                  Submit
                </Button>
              </div>
              <DialogCloseTrigger />
            </DialogContent>
          </DialogRoot>
        </div>
        <div className="justify-center items-center flex gap-2 border-b border-e border-foreground/10 p-5 flex-wrap">
          <DialogRoot>
            <DialogTrigger>Custom Close</DialogTrigger>
            <DialogContent>
              <DialogTitle>Share Link</DialogTitle>
              <DialogDescription>
                Anyone who has this link will be able to view this.
              </DialogDescription>
              <div className="grid gap-4 mt-2">
                <Input
                  id="name-1"
                  name="name"
                  defaultValue="https://midone-ui.com/docs/installation"
                />
              </div>
              <div className="flex gap-2 mt-5">
                <DialogCloseTrigger>
                  <ExternalLink />
                  Share Link
                </DialogCloseTrigger>
              </div>
            </DialogContent>
          </DialogRoot>
        </div>
      </div>
    </div>
  );
}

export default Main;
