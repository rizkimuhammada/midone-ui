<script lang="ts" setup>
import { cn } from "@midoneui/core/utils/cn";
import {
  fileIconRoot,
  fileIconIcon,
  fileIconLabel,
  fileIconImage,
  fileIconImg,
} from "@midoneui/core/styles/file-icon.styles";
import { Slot } from "@/components/ui/slot";

const {
  class: className,
  variant,
  type,
  src,
  asChild = false,
  ...props
} = defineProps<{
  class?: string;
  variant?: "empty-directory" | "directory" | "file" | "image";
  type?: string;
  src?: string;
  asChild?: boolean;
}>();
</script>

<template>
  <Slot
    :class="cn(fileIconRoot, className)"
    data-scope="file-icon"
    data-part="root"
    v-bind="{ ...props, ...$attrs }"
  >
    <slot v-if="asChild" />
    <div v-else>
      <slot v-if="$slots.default" />
      <div
        v-else
        :class="cn(fileIconIcon({ variant }))"
        data-scope="file-icon"
        data-part="icon"
      >
        <div
          v-if="variant === 'file'"
          :class="cn(fileIconLabel)"
          data-scope="file-icon"
          data-part="label"
        >
          {{ type }}
        </div>
        <div
          v-else-if="variant === 'image'"
          :class="cn(fileIconImage)"
          data-scope="file-icon"
          data-part="image"
        >
          <img
            :class="cn(fileIconImg)"
            :src="src"
            :alt="variant"
            data-scope="file-icon"
            data-part="img"
          />
        </div>
      </div>
    </div>
  </Slot>
</template>
