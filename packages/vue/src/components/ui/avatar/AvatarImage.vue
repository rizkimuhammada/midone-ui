<script lang="ts" setup>
import { Avatar, type AvatarImageProps } from "@ark-ui/vue/avatar";
import { cn } from "@midoneui/core/utils/cn";
import { avatarImage } from "@midoneui/core/styles/avatar.styles";

const props = defineProps<AvatarImageProps & {
  class?: string;
}>();
</script>

<template>
  <Avatar.Image :class="cn(avatarImage, props.class)" v-bind="props" />
</template>
