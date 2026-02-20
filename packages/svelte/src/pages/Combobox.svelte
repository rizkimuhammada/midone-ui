<script lang="ts">
  import { Combobox } from "@/components/ui/combobox";

  const frameworks = [
    { label: "Svelte", value: "svelte" },
    { label: "React", value: "react" },
    { label: "Vue", value: "vue" },
    { label: "Angular", value: "angular" },
    { label: "Solid", value: "solid" },
    { label: "Qwik", value: "qwik" },
  ];
</script>

<div class="max-w-sm">
  <Combobox items={frameworks} placeholder="Search frameworks..." />
</div>
