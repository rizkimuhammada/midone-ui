<script lang="ts" setup>
import {
  SelectRoot,
  SelectItemGroup,
  SelectItem,
} from "@/components/ui/select";
import { ref } from "vue";

const stateSingle = ref<string[]>([]);
const stateMultiple = ref<string[]>([]);
const stateTimezone = ref<string[]>([]);
</script>

<template>
  <div class="flex flex-col gap-20">
    <div class="grid grid-cols-2">
      <div
        class="justify-center items-center flex gap-2 border-b border-e border-foreground/10 p-5 flex-wrap"
      >
        <SelectRoot
          label="Single"
          v-model:value="stateSingle"
          placeholder="Select a Framework"
          class="w-56"
        >
          <SelectItemGroup label="Frameworks">
            <SelectItem value="React" />
            <SelectItem value="Solid" />
            <SelectItem value="Vue" />
            <SelectItem value="Svelte" />
            <SelectItem value="Vanilla">Vanilla JS</SelectItem>
          </SelectItemGroup>
        </SelectRoot>
      </div>
      <div
        class="justify-center items-center flex gap-2 border-b border-e border-foreground/10 p-5 flex-wrap"
      >
        <SelectRoot
          label="Multiple"
          v-model:value="stateMultiple"
          placeholder="Select Frameworks"
          class="w-56"
          multiple
        >
          <SelectItemGroup label="Frameworks">
            <SelectItem value="React" />
            <SelectItem value="Solid" />
            <SelectItem value="Vue" />
            <SelectItem value="Svelte" />
            <SelectItem value="Vanilla">Vanilla JS</SelectItem>
          </SelectItemGroup>
        </SelectRoot>
      </div>
      <div
        class="justify-center items-center flex gap-2 border-b border-e border-foreground/10 p-5 flex-wrap"
      >
        <SelectRoot
          label="Scrollable"
          v-model:value="stateTimezone"
          placeholder="Select a Timezone"
          class="w-56"
          multiple
        >
          <SelectItemGroup label="North America">
            <SelectItem value="est">Eastern Standard Time (EST)</SelectItem>
            <SelectItem value="cst">Central Standard Time (CST)</SelectItem>
            <SelectItem value="mst">Mountain Standard Time (MST)</SelectItem>
            <SelectItem value="pst">Pacific Standard Time (PST)</SelectItem>
            <SelectItem value="akst">Alaska Standard Time (AKST)</SelectItem>
            <SelectItem value="hst">Hawaii Standard Time (HST)</SelectItem>
          </SelectItemGroup>
          <SelectItemGroup label="Europe & Africa">
            <SelectItem value="gmt">Greenwich Mean Time (GMT)</SelectItem>
            <SelectItem value="cet">Central European Time (CET)</SelectItem>
            <SelectItem value="eet">Eastern European Time (EET)</SelectItem>
            <SelectItem value="west">Western European Summer Time (WEST)</SelectItem>
            <SelectItem value="cat">Central Africa Time (CAT)</SelectItem>
            <SelectItem value="eat">East Africa Time (EAT)</SelectItem>
          </SelectItemGroup>
          <SelectItemGroup label="Asia">
            <SelectItem value="msk">Moscow Time (MSK)</SelectItem>
            <SelectItem value="ist">India Standard Time (IST)</SelectItem>
            <SelectItem value="jst">Japan Standard Time (JST)</SelectItem>
            <SelectItem value="kst">Korea Standard Time (KST)</SelectItem>
          </SelectItemGroup>
        </SelectRoot>
      </div>
    </div>
  </div>
</template>
