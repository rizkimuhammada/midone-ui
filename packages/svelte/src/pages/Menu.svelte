<script lang="ts">
  import { MenuRoot, MenuTrigger, MenuContent, MenuItem, MenuSeparator } from "@/components/ui/menu";
</script>

<div class="flex gap-4">
  <MenuRoot>
    <MenuTrigger>Open Menu</MenuTrigger>
    <MenuContent>
      <MenuItem value="edit">Edit</MenuItem>
      <MenuItem value="duplicate">Duplicate</MenuItem>
      <MenuSeparator />
      <MenuItem value="archive">Archive</MenuItem>
      <MenuItem value="delete">Delete</MenuItem>
    </MenuContent>
  </MenuRoot>
</div>
