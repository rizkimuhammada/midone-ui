<script lang="ts" setup>
import {
  SliderRoot,
  SliderLabel,
  SliderValueText,
  SliderControl,
  SliderTrack,
  SliderRange,
  SliderThumb,
  SliderHiddenInput,
  SliderMarkerGroup,
  SliderMarker,
} from "@/components/ui/slider";
</script>

<template>
  <SliderRoot class="w-72" :defaultValue="[20]">
    <SliderLabel>Max Items</SliderLabel>
    <SliderControl>
      <SliderTrack>
        <SliderRange />
      </SliderTrack>
      <SliderThumb :index="0">
        <SliderHiddenInput />
      </SliderThumb>
    </SliderControl>
    <div
      class="flex items-center text-xs gap-1 font-medium justify-center opacity-70"
    >
      <SliderValueText /> Items
    </div>
  </SliderRoot>
</template>
