import { Box } from "@/components/ui/box";
import {
  TabsRoot,
  TabsList,
  TabsTrigger,
  TabsContent,
} from "@/components/ui/tabs";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { SquareX, Save, ExternalLink } from "lucide-react";

function Main() {
  return (
    <div className="flex flex-col gap-20">
      <div className="grid grid-cols-2">
        <div className="justify-center items-center flex gap-2 border-b border-e border-foreground/10 p-5 flex-wrap">
          <TabsRoot defaultValue="update-profile">
            <TabsList>
              <TabsTrigger value="update-profile">Update Profile</TabsTrigger>
              <TabsTrigger value="share-profile">Share Profile</TabsTrigger>
            </TabsList>
            <Box raised="single" className="w-90">
              <TabsContent value="update-profile">
                <div className="grid gap-4 mt-2">
                  <div className="grid gap-2.5">
                    <Label htmlFor="name-1">Name</Label>
                    <Input
                      id="name-1"
                      name="name"
                      defaultValue="Pedro Duarte"
                    />
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
                  <Button>
                    <SquareX />
                    Close
                  </Button>
                  <Button variant="primary">
                    <Save />
                    Submit
                  </Button>
                </div>
              </TabsContent>
              <TabsContent value="share-profile">
                <div className="grid gap-4 mt-2">
                  <Input
                    id="name-1"
                    name="name"
                    defaultValue="https://midone-ui.com/docs/installation"
                  />
                </div>
                <div className="flex gap-2 mt-5">
                  <Button>
                    <ExternalLink />
                    Share Link
                  </Button>
                </div>
              </TabsContent>
            </Box>
          </TabsRoot>
        </div>
      </div>
    </div>
  );
}

export default Main;
