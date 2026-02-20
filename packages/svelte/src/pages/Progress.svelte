<script lang="ts">
  import { ProgressCircular } from "@/components/ui/progress-circular";
  import { ProgressLinear } from "@/components/ui/progress-linear";
</script>

<div class="flex flex-col gap-8 max-w-md">
  <div>
    <h3 class="text-sm font-semibold mb-3">Linear Progress</h3>
    <ProgressLinear value={65} />
  </div>
  <div>
    <h3 class="text-sm font-semibold mb-3">Circular Progress</h3>
    <div class="flex gap-4">
      <ProgressCircular value={25} />
      <ProgressCircular value={50} />
      <ProgressCircular value={75} />
    </div>
  </div>
</div>
