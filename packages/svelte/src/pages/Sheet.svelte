<script lang="ts">
  import { SheetRoot, SheetTrigger, SheetContent, SheetCloseTrigger } from "@/components/ui/sheet";
</script>

<div class="flex gap-4">
  <SheetRoot side="right">
    <SheetTrigger>Open Sheet</SheetTrigger>
    <SheetContent>
      <div class="p-6">
        <h3 class="text-lg font-semibold mb-2">Sheet Title</h3>
        <p class="text-foreground/60 mb-4">This is a sheet panel sliding from the right.</p>
        <SheetCloseTrigger />
      </div>
    </SheetContent>
  </SheetRoot>
</div>
