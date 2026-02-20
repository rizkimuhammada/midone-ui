<script lang="ts">
  import { PopoverRoot, PopoverTrigger, PopoverContent } from "@/components/ui/popover";
  import { Button } from "@/components/ui/button";
</script>

<div class="flex gap-4">
  <PopoverRoot>
    <PopoverTrigger>Open Popover</PopoverTrigger>
    <PopoverContent>
      <div class="flex flex-col gap-2">
        <h4 class="font-semibold">Popover Title</h4>
        <p class="text-sm text-foreground/60">This is a popover with some content inside it.</p>
      </div>
    </PopoverContent>
  </PopoverRoot>
</div>
