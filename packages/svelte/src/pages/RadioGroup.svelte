<script lang="ts">
  import { RadioGroup } from "@/components/ui/radio-group";

  const items = [
    { label: "Option A", value: "a" },
    { label: "Option B", value: "b" },
    { label: "Option C", value: "c" },
  ];
</script>

<div class="max-w-md">
  <RadioGroup {items} value="a" />
</div>
