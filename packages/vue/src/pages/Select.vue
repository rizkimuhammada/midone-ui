<script lang="ts" setup>
import {
  SelectRoot,
  SelectLabel,
  SelectControl,
  SelectTrigger,
  SelectValueText,
  SelectContent,
  SelectItemGroup,
  SelectItemGroupLabel,
  SelectItem,
  SelectItemText,
} from "@/components/ui/select";
import { ref } from "vue";

const comboboxData = [
  { label: "React", code: "react" },
  { label: "Solid", code: "solid" },
  { label: "Vue", code: "vue" },
  { label: "Svelte", code: "svelte" },
];

const timezoneData = [
  {
    label: "North America",
    items: [
      { value: "est", label: "Eastern Standard Time (EST)" },
      { value: "cst", label: "Central Standard Time (CST)" },
      { value: "mst", label: "Mountain Standard Time (MST)" },
      { value: "pst", label: "Pacific Standard Time (PST)" },
      { value: "akst", label: "Alaska Standard Time (AKST)" },
      { value: "hst", label: "Hawaii Standard Time (HST)" },
    ],
  },
  {
    label: "Europe & Africa",
    items: [
      { value: "gmt", label: "Greenwich Mean Time (GMT)" },
      { value: "cet", label: "Central European Time (CET)" },
      { value: "eet", label: "Eastern European Time (EET)" },
      { value: "west", label: "Western European Summer Time (WEST)" },
      { value: "cat", label: "Central Africa Time (CAT)" },
      { value: "eat", label: "East Africa Time (EAT)" },
    ],
  },
  {
    label: "Asia",
    items: [
      { value: "msk", label: "Moscow Time (MSK)" },
      { value: "ist", label: "India Standard Time (IST)" },
      { value: "cst_china", label: "China Standard Time (CST)" },
      { value: "jst", label: "Japan Standard Time (JST)" },
      { value: "kst", label: "Korea Standard Time (KST)" },
      {
        value: "ist_indonesia",
        label: "Indonesia Central Standard Time (WITA)",
      },
    ],
  },
  {
    label: "Australia & Pacific",
    items: [
      { value: "awst", label: "Australian Western Standard Time (AWST)" },
      { value: "acst", label: "Australian Central Standard Time (ACST)" },
      { value: "aest", label: "Australian Eastern Standard Time (AEST)" },
      { value: "nzst", label: "New Zealand Standard Time (NZST)" },
      { value: "fjt", label: "Fiji Time (FJT)" },
    ],
  },
  {
    label: "South America",
    items: [
      { value: "art", label: "Argentina Time (ART)" },
      { value: "bot", label: "Bolivia Time (BOT)" },
      { value: "brt", label: "Brasilia Time (BRT)" },
      { value: "clt", label: "Chile Standard Time (CLT)" },
    ],
  },
];

const stateSingle = ref<string[]>([]);
const stateMultiple = ref<string[]>([]);
const stateTimezone = ref<string[]>([]);
</script>

<template>
  <div class="flex flex-col gap-20">
    <div class="grid grid-cols-2">
      <!-- Full static items -->
      <div
        class="justify-center items-center flex gap-2 border-b border-e border-foreground/10 p-5 flex-wrap"
      >
        <SelectRoot v-model:value="stateSingle" class="w-56">
          <SelectLabel>Single</SelectLabel>
          <SelectControl placeholder="Select a Framework" />
          <SelectContent>
            <SelectItemGroup>
              <SelectItemGroupLabel>Frameworks</SelectItemGroupLabel>
              <SelectItem value="React" />
              <SelectItem value="Solid" />
              <SelectItem value="Vue" />
              <SelectItem value="Svelte" />
              <SelectItem value="Vanilla" text="Vanilla JS" />
            </SelectItemGroup>
          </SelectContent>
        </SelectRoot>
      </div>
      <!-- Dynamic items + static Vanilla -->
      <div
        class="justify-center items-center flex gap-2 border-b border-e border-foreground/10 p-5 flex-wrap"
      >
        <SelectRoot :items="comboboxData" v-model:value="stateSingle" class="w-56" v-slot="{ items }">
          <SelectLabel>Single</SelectLabel>
          <SelectControl placeholder="Select a Framework" />
          <SelectContent>
            <SelectItemGroup>
              <SelectItemGroupLabel>Frameworks</SelectItemGroupLabel>
              <SelectItem v-for="item in items" :key="item.code" :item="item">
                <SelectItemText>{{ item.label }}</SelectItemText>
              </SelectItem>
              <SelectItem value="Vanilla" />
            </SelectItemGroup>
          </SelectContent>
        </SelectRoot>
      </div>
      <!-- Multiple -->
      <div
        class="justify-center items-center flex gap-2 border-b border-e border-foreground/10 p-5 flex-wrap"
      >
        <SelectRoot :items="comboboxData" v-model:value="stateMultiple" class="w-56" multiple v-slot="{ items }">
          <SelectLabel>Multiple</SelectLabel>
          <SelectControl placeholder="Select a Framework" />
          <SelectContent>
            <SelectItemGroup>
              <SelectItemGroupLabel>Frameworks</SelectItemGroupLabel>
              <SelectItem v-for="item in items" :key="item.code" :item="item">
                <SelectItemText>{{ item.label }}</SelectItemText>
              </SelectItem>
            </SelectItemGroup>
          </SelectContent>
        </SelectRoot>
      </div>
      <!-- Scrollable timezone -->
      <div
        class="justify-center items-center flex gap-2 border-b border-e border-foreground/10 p-5 flex-wrap"
      >
        <SelectRoot v-model:value="stateTimezone" class="w-56" multiple>
          <SelectLabel>Scrollable</SelectLabel>
          <SelectControl>
            <SelectTrigger>
              <SelectValueText placeholder="Select a Timezone" />
            </SelectTrigger>
          </SelectControl>
          <SelectContent>
            <SelectItemGroup v-for="group in timezoneData" :key="group.label">
              <SelectItemGroupLabel>{{ group.label }}</SelectItemGroupLabel>
              <SelectItem
                v-for="tzItem in group.items"
                :key="tzItem.value"
                :value="tzItem.value"
                :text="tzItem.label"
              />
            </SelectItemGroup>
          </SelectContent>
        </SelectRoot>
      </div>
    </div>
  </div>
</template>
