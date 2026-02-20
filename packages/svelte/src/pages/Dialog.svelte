<script lang="ts">
  import { DialogRoot, DialogTrigger, DialogContent, DialogTitle, DialogDescription, DialogCloseTrigger } from "@/components/ui/dialog";
  import { Input } from "@/components/ui/input";
  import { Label } from "@/components/ui/label";
  import { Button } from "@/components/ui/button";
</script>

<div class="flex flex-col gap-4 max-w-md">
  <DialogRoot>
    <DialogTrigger>Open Dialog</DialogTrigger>
    <DialogContent>
      <DialogCloseTrigger />
      <DialogTitle>Edit Profile</DialogTitle>
      <DialogDescription>Make changes to your profile here. Click save when you're done.</DialogDescription>
      <div class="flex flex-col gap-4 mt-4">
        <div class="flex flex-col gap-2">
          <Label>Name</Label>
          <Input placeholder="Enter your name" />
        </div>
        <div class="flex flex-col gap-2">
          <Label>Email</Label>
          <Input type="email" placeholder="Enter your email" />
        </div>
        <div class="flex justify-end gap-2 mt-2">
          <DialogCloseTrigger>Cancel</DialogCloseTrigger>
          <Button variant="primary">Save Changes</Button>
        </div>
      </div>
    </DialogContent>
  </DialogRoot>
</div>
