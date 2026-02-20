<script lang="ts">
  import { TooltipRoot, TooltipTrigger, TooltipPositioner, TooltipContent } from "@/components/ui/tooltip";
  import { Button } from "@/components/ui/button";
</script>

<div class="flex gap-4 items-center">
  <TooltipRoot>
    <TooltipTrigger>
      <Button variant="primary">Hover me</Button>
    </TooltipTrigger>
    <TooltipPositioner>
      <TooltipContent>This is a tooltip!</TooltipContent>
    </TooltipPositioner>
  </TooltipRoot>
  <TooltipRoot>
    <TooltipTrigger>
      <Button variant="secondary" look="outline">Another tooltip</Button>
    </TooltipTrigger>
    <TooltipPositioner>
      <TooltipContent>Here's more information</TooltipContent>
    </TooltipPositioner>
  </TooltipRoot>
</div>
