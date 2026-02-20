<script lang="ts">
  import { Select } from "@/components/ui/select";

  const fruits = [
    { label: "Apple", value: "apple" },
    { label: "Banana", value: "banana" },
    { label: "Cherry", value: "cherry" },
    { label: "Grape", value: "grape" },
    { label: "Orange", value: "orange" },
  ];
</script>

<div class="max-w-sm">
  <Select items={fruits} placeholder="Select a fruit..." />
</div>
