<script lang="ts">
  import { Slider } from "@/components/ui/slider";
</script>

<div class="flex flex-col gap-8 max-w-md">
  <div>
    <h3 class="text-sm font-semibold mb-3">Default Slider</h3>
    <Slider />
  </div>
  <div>
    <h3 class="text-sm font-semibold mb-3">Custom Range</h3>
    <Slider min={0} max={200} value={[75]} />
  </div>
</div>
