<script lang="ts" setup>
import {
  PopoverRoot,
  PopoverTrigger,
  PopoverContent,
  PopoverTitle,
  PopoverDescription,
} from "@/components/ui/popover";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
</script>

<template>
  <div class="flex flex-col gap-20">
    <div class="grid grid-cols-2">
      <div
        class="justify-center items-center flex gap-2 border-b border-e border-foreground/10 p-5 flex-wrap"
      >
        <PopoverRoot>
          <PopoverTrigger class="w-56"> Open Popover </PopoverTrigger>
          <PopoverContent class="w-100">
            <PopoverTitle>Dimensions</PopoverTitle>
            <PopoverDescription>
              Set the dimensions for the layer.
            </PopoverDescription>
            <div class="grid gap-3 mt-4 mb-2">
              <div class="grid grid-cols-3 items-center gap-4">
                <Label htmlFor="width">Width</Label>
                <Input id="width" defaultValue="100%" class="col-span-2" />
              </div>
              <div class="grid grid-cols-3 items-center gap-4">
                <Label htmlFor="maxWidth">Max. width</Label>
                <Input id="maxWidth" defaultValue="300px" class="col-span-2" />
              </div>
              <div class="grid grid-cols-3 items-center gap-4">
                <Label htmlFor="height">Height</Label>
                <Input id="height" defaultValue="25px" class="col-span-2" />
              </div>
              <div class="grid grid-cols-3 items-center gap-4">
                <Label htmlFor="maxHeight">Max. height</Label>
                <Input id="maxHeight" defaultValue="none" class="col-span-2" />
              </div>
            </div>
          </PopoverContent>
        </PopoverRoot>
      </div>
    </div>
  </div>
</template>
