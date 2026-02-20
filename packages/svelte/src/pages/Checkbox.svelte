<script lang="ts">
  import { CheckboxRoot, CheckboxControl, CheckboxLabel } from "@/components/ui/checkbox";
</script>

<div class="flex flex-col gap-4 max-w-md">
  <CheckboxRoot>
    <CheckboxControl />
    <CheckboxLabel>Accept terms and conditions</CheckboxLabel>
  </CheckboxRoot>
  <CheckboxRoot checked={true}>
    <CheckboxControl />
    <CheckboxLabel>Pre-checked option</CheckboxLabel>
  </CheckboxRoot>
  <CheckboxRoot>
    <CheckboxControl />
    <CheckboxLabel>Subscribe to newsletter</CheckboxLabel>
  </CheckboxRoot>
</div>
