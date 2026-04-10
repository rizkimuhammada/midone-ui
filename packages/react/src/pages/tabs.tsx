import {
  TabsRoot,
  TabsList,
  TabsTrigger,
  TabsContent,
} from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Box } from "@/components/ui/box";
import { SquareX, Save, ExternalLink } from "lucide-react";

function Main() {
  return (
    <TabsRoot defaultValue="update-profile">
      <TabsList>
        <TabsTrigger value="update-profile"> Update Profile </TabsTrigger>
        <TabsTrigger value="share-profile"> Share Profile </TabsTrigger>
      </TabsList>
      <Box raised="single" className="w-90">
        <TabsContent value="update-profile">
          <div className="grid gap-4 mt-2">
            <div className="grid gap-2.5">
              <Label htmlFor="name-1">Name</Label>
              <Input id="name-1" name="name" defaultValue="Pedro Duarte" />
            </div>
            <div className="grid gap-2.5">
              <Label htmlFor="username-1">Username</Label>
              <Input id="username-1" name="username" defaultValue="@peduarte" />
            </div>
          </div>
          <div className="flex gap-2 justify-end mt-7">
            <Button look="outline" variant="secondary">
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
            <Button look="outline" variant="secondary">
              <ExternalLink />
              Share Link
            </Button>
          </div>
        </TabsContent>
      </Box>
    </TabsRoot>
  );
}

export default Main;
