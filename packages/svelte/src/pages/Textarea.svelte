<script lang="ts">
  import { Textarea } from "@/components/ui/textarea";
  import { Label } from "@/components/ui/label";
</script>

<div class="flex flex-col gap-6 max-w-md">
  <div class="flex flex-col gap-2">
    <Label>Message</Label>
    <Textarea placeholder="Enter your message..." />
  </div>
  <div class="flex flex-col gap-2">
    <Label>Disabled</Label>
    <Textarea disabled placeholder="This textarea is disabled" />
  </div>
</div>
