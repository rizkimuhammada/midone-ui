<script lang="ts">
  import { SwitchRoot } from "@/components/ui/switch";
</script>

<div class="flex flex-col gap-4 max-w-md">
  <SwitchRoot>Enable notifications</SwitchRoot>
  <SwitchRoot checked={true}>Dark mode</SwitchRoot>
  <SwitchRoot>Auto-save</SwitchRoot>
</div>
