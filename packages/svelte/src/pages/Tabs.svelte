<script lang="ts">
  import { TabsRoot, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
</script>

<div class="max-w-2xl">
  <TabsRoot value="account">
    <TabsList>
      <TabsTrigger value="account">Account</TabsTrigger>
      <TabsTrigger value="password">Password</TabsTrigger>
      <TabsTrigger value="notifications">Notifications</TabsTrigger>
    </TabsList>
    <TabsContent value="account">
      <div class="p-4">
        <h3 class="font-semibold mb-2">Account Settings</h3>
        <p class="text-foreground/60">Manage your account settings and preferences.</p>
      </div>
    </TabsContent>
    <TabsContent value="password">
      <div class="p-4">
        <h3 class="font-semibold mb-2">Password</h3>
        <p class="text-foreground/60">Change your password here.</p>
      </div>
    </TabsContent>
    <TabsContent value="notifications">
      <div class="p-4">
        <h3 class="font-semibold mb-2">Notifications</h3>
        <p class="text-foreground/60">Configure your notification preferences.</p>
      </div>
    </TabsContent>
  </TabsRoot>
</div>
