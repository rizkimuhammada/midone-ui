<script lang="ts" setup>
import {
  MenuRoot,
  MenuTrigger,
  MenuPositioner,
  MenuContent,
  MenuItem,
  // MenuCheckboxItem,
  // MenuSeparator,
  // MenuTriggerItem,
  // MenuRadioItemGroup,
  // MenuItemGroupLabel,
  // MenuRadioItem,
} from "@/components/ui/menu";
import { ref } from "vue";
import { Slot } from "@/components/ui/slot";
import { Button } from "@/components/ui/button";

const react = ref(false);
const solid = ref(false);
const vue = ref(false);
const svelte = ref(false);
const value = ref("react");
</script>

<template>
  <!-- <div class="flex flex-col gap-20">
    <div class="grid grid-cols-2">
      <div
        class="justify-center items-center flex gap-2 border-b border-e border-foreground/10 p-5 flex-wrap"
      >
        <MenuRoot>
          <MenuTrigger class="w-56">Open menu</MenuTrigger>
          <MenuPositioner>
            <MenuContent>
              <MenuItem value="react">React</MenuItem>
              <MenuItem value="solid">Solid</MenuItem>
              <MenuItem value="vue">Vue</MenuItem>
              <MenuItem value="svelte">Svelte</MenuItem>
            </MenuContent>
          </MenuPositioner>
        </MenuRoot>
      </div>
      <div
        class="justify-center items-center flex gap-2 border-b border-e border-foreground/10 p-5 flex-wrap"
      >
        <MenuRoot>
          <MenuTrigger class="w-56">Open menu</MenuTrigger>
          <MenuPositioner>
            <MenuContent>
              <MenuItem value="react">React</MenuItem>
              <MenuItem value="solid">Solid</MenuItem>
              <MenuItem value="vue">Vue</MenuItem>
              <MenuItem value="svelte">Svelte</MenuItem>
              <MenuSeparator />
              <MenuItem value="react">React</MenuItem>
              <MenuItem value="solid">Solid</MenuItem>
              <MenuItem value="vue">Vue</MenuItem>
              <MenuItem value="svelte">Svelte</MenuItem>
            </MenuContent>
          </MenuPositioner>
        </MenuRoot>
      </div>
      <div
        class="justify-center items-center flex gap-2 border-b border-e border-foreground/10 p-5 flex-wrap"
      >
        <MenuRoot>
          <MenuTrigger class="w-56">Open menu</MenuTrigger>
          <MenuPositioner>
            <MenuContent>
              <MenuItem shortcut="⇧⌘P" value="react"> React </MenuItem>
              <MenuItem shortcut="⌘B" value="solid"> Solid </MenuItem>
              <MenuItem shortcut="⌘S" value="vue"> Vue </MenuItem>
              <MenuItem shortcut="⌘K" value="svelte"> Svelte </MenuItem>
              <MenuSeparator />
              <MenuItem value="react">React</MenuItem>
              <MenuItem value="solid">Solid</MenuItem>
              <MenuItem value="vue">Vue</MenuItem>
              <MenuItem shortcut="⇧⌘Q" value="svelte"> Svelte </MenuItem>
            </MenuContent>
          </MenuPositioner>
        </MenuRoot>
      </div>
      <div
        class="justify-center items-center flex gap-2 border-b border-e border-foreground/10 p-5 flex-wrap"
      >
        <MenuRoot>
          <MenuTrigger class="w-56">Open menu</MenuTrigger>
          <MenuPositioner>
            <MenuContent>
              <MenuItem shortcut="⇧⌘P" value="react"> React </MenuItem>
              <MenuItem shortcut="⌘B" value="solid"> Solid </MenuItem>
              <MenuItem shortcut="⌘S" value="vue"> Vue </MenuItem>
              <MenuItem shortcut="⌘K" value="svelte"> Svelte </MenuItem>
              <MenuRoot>
                <MenuTriggerItem>Frameworks</MenuTriggerItem>
                <MenuPositioner>
                  <MenuContent>
                    <MenuItem value="react">React</MenuItem>
                    <MenuItem value="solid">Solid</MenuItem>
                    <MenuItem value="vue">Vue</MenuItem>
                    <MenuItem value="svelte">Svelte</MenuItem>
                  </MenuContent>
                </MenuPositioner>
              </MenuRoot>
              <MenuSeparator />
              <MenuItem disabled value="react"> React </MenuItem>
              <MenuItem value="solid">Solid</MenuItem>
              <MenuItem value="vue">Vue</MenuItem>
              <MenuItem shortcut="⇧⌘Q" value="svelte"> Svelte </MenuItem>
            </MenuContent>
          </MenuPositioner>
        </MenuRoot>
      </div>
      <div
        class="justify-center items-center flex gap-2 border-b border-e border-foreground/10 p-5 flex-wrap"
      >
        <MenuRoot>
          <MenuTrigger class="w-56">Open menu</MenuTrigger>
          <MenuPositioner>
            <MenuContent>
              <MenuCheckboxItem v-model:checked="react" value="false">
                React
              </MenuCheckboxItem>
              <MenuCheckboxItem v-model:checked="solid" value="false">
                Solid
              </MenuCheckboxItem>
              <MenuCheckboxItem v-model:checked="vue" value="false">
                Vue
              </MenuCheckboxItem>
              <MenuCheckboxItem v-model:checked="svelte" value="false">
                Svelte
              </MenuCheckboxItem>
            </MenuContent>
          </MenuPositioner>
        </MenuRoot>
      </div>
      <div
        class="justify-center items-center flex gap-2 border-b border-e border-foreground/10 p-5 flex-wrap"
      >
        <MenuRoot>
          <MenuTrigger class="w-56">Open menu</MenuTrigger>
          <MenuPositioner>
            <MenuContent>
              <MenuRadioItemGroup v-model="value">
                <MenuItemGroupLabel>Frameworks</MenuItemGroupLabel>
                <MenuRadioItem
                  v-for="framework in ['React', 'Solid', 'Vue', 'Svelte']"
                  :key="framework"
                  :value="framework"
                >
                  {{ framework }}
                </MenuRadioItem>
              </MenuRadioItemGroup>
            </MenuContent>
          </MenuPositioner>
        </MenuRoot>
      </div>
    </div>
  </div> -->
  <MenuRoot>
    <MenuTrigger>Open menu</MenuTrigger>
    <MenuPositioner>
      <MenuContent>
        <MenuItem value="edit">Edit</MenuItem>
        <MenuItem value="Duplicate">Duplicate</MenuItem>
        <MenuItem value="delete">Delete</MenuItem>
        <MenuItem value="export">Export...</MenuItem>
      </MenuContent>
    </MenuPositioner>
  </MenuRoot>
</template>
