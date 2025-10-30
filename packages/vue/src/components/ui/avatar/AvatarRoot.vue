<script lang="ts" setup>
import { Avatar, type AvatarRootProps } from "@ark-ui/vue/avatar";
import { cn } from "@midoneui/core/utils/cn";
import {
  avatarRootVariants,
  type AvatarRootVariants,
} from "@midoneui/core/styles/avatar.styles";

const props = defineProps<AvatarRootProps & AvatarRootVariants & {
  class?: string;
}>();
</script>

<template>
  <Avatar.Root
    :class="cn(avatarRootVariants({ bordered: props.bordered, className: props.class }), props.class)"
    v-bind="props"
  >
    <slot />
  </Avatar.Root>
</template>
