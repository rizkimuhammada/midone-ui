<script lang="ts" setup>
import { Avatar, type AvatarFallbackProps } from "@ark-ui/vue/avatar";
import { cn } from "@midoneui/core/utils/cn";
import { avatarFallback } from "@midoneui/core/styles/avatar.styles";

const props = defineProps<AvatarFallbackProps & {
  class?: string;
}>();
</script>

<template>
  <Avatar.Fallback :class="cn(avatarFallback, props.class)" v-bind="props">
    <slot />
  </Avatar.Fallback>
</template>
