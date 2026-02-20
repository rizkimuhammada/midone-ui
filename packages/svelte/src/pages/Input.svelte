<script lang="ts">
  import { Input } from "@/components/ui/input";
  import { Label } from "@/components/ui/label";
</script>

<div class="flex flex-col gap-6 max-w-md">
  <div class="flex flex-col gap-2">
    <Label>Default Input</Label>
    <Input placeholder="Enter text..." />
  </div>
  <div class="flex flex-col gap-2">
    <Label>Email</Label>
    <Input type="email" placeholder="you@example.com" />
  </div>
  <div class="flex flex-col gap-2">
    <Label>Password</Label>
    <Input type="password" placeholder="••••••••" />
  </div>
  <div class="flex flex-col gap-2">
    <Label>Disabled</Label>
    <Input disabled placeholder="Disabled input" />
  </div>
</div>
