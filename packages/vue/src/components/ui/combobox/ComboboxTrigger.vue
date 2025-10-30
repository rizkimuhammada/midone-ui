<script lang="ts" setup>
import { Combobox, type ComboboxTriggerProps } from "@ark-ui/vue/combobox";
import { cn } from "@midoneui/core/utils/cn";
import { Button } from "@/components/ui/button";
import { ChevronsUpDownIcon } from "lucide-vue-next";
import { inject } from "vue";
import { comboboxTrigger } from "@midoneui/core/styles/combobox.styles";
import { ComboboxClearTrigger } from "./index";

const props = defineProps<
  ComboboxTriggerProps & {
    class?: string;
    asChild?: boolean;
  }
>();

const value = inject<string[] | undefined>("comboboxValue", undefined);
</script>

<template>
  <Combobox.Trigger v-bind="props" as-child>
    <template v-if="!props.asChild">
      <Button :class="cn(comboboxTrigger, props.class)">
        <div>
          {{
            value && value[0]?.length ? value.join(", ") : "Select Options..."
          }}
        </div>
        <ComboboxClearTrigger>Clear</ComboboxClearTrigger>
        <ChevronsUpDownIcon />
      </Button>
    </template>
    <template v-else>
      <slot />
    </template>
  </Combobox.Trigger>
</template>
