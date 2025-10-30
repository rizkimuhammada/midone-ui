<script lang="ts" setup>
import { ChevronDown } from "lucide-vue-next";
import { Badge } from "@/components/ui/badge";
</script>

<template>
  <div class="flex flex-col gap-20">
    <div class="grid grid-cols-2">
      <div class="justify-center items-center flex gap-2 border-b border-e border-foreground/10 p-5 flex-wrap">
        <Badge>12%</Badge>
        <Badge variant="primary">12%</Badge>
        <Badge variant="secondary">12%</Badge>
        <Badge variant="success">12%</Badge>
        <Badge variant="danger">12%</Badge>
        <Badge variant="pending">12%</Badge>
        <Badge variant="warning">12%</Badge>
      </div>
      <div class="justify-center items-center flex gap-2 border-b border-e border-foreground/10 p-5 flex-wrap">
        <Badge>
          12% <ChevronDown />
        </Badge>
        <Badge variant="primary">
          12% <ChevronDown />
        </Badge>
        <Badge variant="secondary">
          12% <ChevronDown />
        </Badge>
        <Badge variant="success">
          12% <ChevronDown />
        </Badge>
        <Badge variant="danger">
          12% <ChevronDown />
        </Badge>
        <Badge variant="pending">
          12% <ChevronDown />
        </Badge>
        <Badge variant="warning">
          12% <ChevronDown />
        </Badge>
      </div>
      <div class="justify-center items-center flex gap-2 border-b border-e border-foreground/10 p-5 flex-wrap">
        <Badge filled>12%</Badge>
        <Badge filled variant="primary">
          12%
        </Badge>
        <Badge filled variant="secondary">
          12%
        </Badge>
        <Badge filled variant="success">
          12%
        </Badge>
        <Badge filled variant="danger">
          12%
        </Badge>
        <Badge filled variant="pending">
          12%
        </Badge>
        <Badge filled variant="warning">
          12%
        </Badge>
      </div>
      <div class="justify-center items-center flex gap-2 border-b border-e border-foreground/10 p-5 flex-wrap">
        <Badge filled>
          12% <ChevronDown />
        </Badge>
        <Badge filled variant="primary">
          12% <ChevronDown />
        </Badge>
        <Badge filled variant="secondary">
          12% <ChevronDown />
        </Badge>
        <Badge filled variant="success">
          12% <ChevronDown />
        </Badge>
        <Badge filled variant="danger">
          12% <ChevronDown />
        </Badge>
        <Badge filled variant="pending">
          12% <ChevronDown />
        </Badge>
        <Badge filled variant="warning">
          12% <ChevronDown />
        </Badge>
      </div>
    </div>
  </div>
</template>
