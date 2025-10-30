<script lang="ts" setup>
import {
  ComboboxRoot,
  ComboboxLabel,
  ComboboxControl,
  ComboboxInput,
  ComboboxTrigger,
  ComboboxContent,
  ComboboxItemGroup,
  ComboboxItemGroupLabel,
  ComboboxItem,
  ComboboxItemText,
  ComboboxItemIndicator,
} from "@/components/ui/combobox";
import { ref } from "vue";
import { useListCollection, type Combobox } from "@ark-ui/vue/combobox";
import { useFilter } from "@ark-ui/vue/locale";

const stateSingle = ref([""]);
const stateMultiple = ref([""]);
const stateTimezone = ref([""]);

const filters = useFilter({ sensitivity: "base" });
const { collection, filter } = useListCollection({
  initialItems: ["React", "Solid", "Vue", "Svelte"],
  filter: filters.value.contains,
});

const handleInputChange = (details: Combobox.InputValueChangeDetails) => {
  filter(details.inputValue);
};

const collectionTimezone = useListCollection({
  initialItems: [
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
  ],
  filter: filters.value.contains,
});
</script>

<template>
  <div class="flex flex-col gap-20">
    <div class="grid grid-cols-2">
      <div
        class="justify-center items-center flex gap-2 border-b border-e border-foreground/10 p-5 flex-wrap"
      >
        <ComboboxRoot
          :collection="collection"
          @input-value-change="handleInputChange"
          :value="stateSingle"
          @value-change="(details: Combobox.ValueChangeDetails) => stateSingle = details.value"
          class="w-56"
        >
          <ComboboxLabel>Single</ComboboxLabel>
          <ComboboxControl>
            <ComboboxTrigger />
          </ComboboxControl>
          <ComboboxContent>
            <ComboboxInput placeholder="Search frameworks..." />
            <ComboboxItemGroup>
              <ComboboxItemGroupLabel>Frameworks</ComboboxItemGroupLabel>
              <ComboboxItem
                v-for="item in collection.items"
                :key="item"
                :item="item"
              >
                <ComboboxItemText>{{ item }}</ComboboxItemText>
                <ComboboxItemIndicator />
              </ComboboxItem>
            </ComboboxItemGroup>
          </ComboboxContent>
        </ComboboxRoot>
      </div>
      <div
        class="justify-center items-center flex gap-2 border-b border-e border-foreground/10 p-5 flex-wrap"
      >
        <ComboboxRoot
          :collection="collection"
          @input-value-change="handleInputChange"
          :value="stateMultiple"
          @value-change="(details: Combobox.ValueChangeDetails) => stateMultiple = details.value"
          class="w-56"
          multiple
        >
          <ComboboxLabel>Multiple</ComboboxLabel>
          <ComboboxControl>
            <ComboboxTrigger />
          </ComboboxControl>
          <ComboboxContent>
            <ComboboxInput placeholder="Search frameworks..." />
            <ComboboxItemGroup>
              <ComboboxItemGroupLabel>Frameworks</ComboboxItemGroupLabel>
              <ComboboxItem
                v-for="item in collection.items"
                :key="item"
                :item="item"
              >
                <ComboboxItemText>{{ item }}</ComboboxItemText>
                <ComboboxItemIndicator />
              </ComboboxItem>
            </ComboboxItemGroup>
          </ComboboxContent>
        </ComboboxRoot>
      </div>
      <div
        class="justify-center items-center flex gap-2 border-b border-e border-foreground/10 p-5 flex-wrap"
      >
        <ComboboxRoot
          :collection="collection"
          @input-value-change="handleInputChange"
          :value="stateTimezone"
          @value-change="(details: Combobox.ValueChangeDetails) => stateTimezone = details.value"
          class="w-56"
          multiple
        >
          <ComboboxLabel>Scrollable</ComboboxLabel>
          <ComboboxControl>
            <ComboboxTrigger />
          </ComboboxControl>
          <ComboboxContent>
            <ComboboxInput placeholder="Search frameworks..." />
            <ComboboxItemGroup
              v-for="item in collectionTimezone.collection.value"
              :key="item.label"
            >
              <ComboboxItemGroupLabel>Frameworks</ComboboxItemGroupLabel>
              <ComboboxItem
                v-for="timezoneItem in item.items"
                :key="timezoneItem.value"
                :item="timezoneItem.value"
              >
                <ComboboxItemText>{{ timezoneItem.label }}</ComboboxItemText>
                <ComboboxItemIndicator />
              </ComboboxItem>
            </ComboboxItemGroup>
          </ComboboxContent>
        </ComboboxRoot>
      </div>
    </div>
  </div>
</template>
