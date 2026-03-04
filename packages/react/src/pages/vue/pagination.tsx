import {
  PaginationContext,
  PaginationRoot,
  PaginationItem,
  PaginationPrevTrigger,
  PaginationNextTrigger,
  PaginationEllipsis,
} from "@/components/ui/pagination";
import {
  Preview,
  SectionTitle,
  SectionContent,
  InstallPackage,
  PreviewCode,
} from "@/components/docs";

function Main() {
  return (
    <>
      <div id="preview" className="-mt-20">
        <Preview>
          {() => ({
            preview: (
              <>
                <PaginationRoot count={5000} pageSize={10} siblingCount={2}>
                  <PaginationPrevTrigger>Previous</PaginationPrevTrigger>
                  <PaginationContext>
                    {(pagination) =>
                      pagination.pages.map((page, index) =>
                        page.type === "page" ? (
                          <PaginationItem key={index} {...page}>
                            {page.value}
                          </PaginationItem>
                        ) : (
                          <PaginationEllipsis key={index} index={index} />
                        )
                      )
                    }
                  </PaginationContext>
                  <PaginationNextTrigger>Next</PaginationNextTrigger>
                </PaginationRoot>
              </>
            ),
            code: (
              <PreviewCode>
                {`
<PaginationRoot :count="5000" :pageSize="10" :siblingCount="2">
  <PaginationPrevTrigger>Previous</PaginationPrevTrigger>
  <PaginationContext v-slot="{ pagination }">
    <template v-for="(page, index) in pagination?.pages" :key="index">
      <PaginationItem v-if="page.type === 'page'" v-bind="{ ...page }">
        {{ page.value }}
      </PaginationItem>
      <PaginationEllipsis v-else :index="index" />
    </template>
  </PaginationContext>
  <PaginationNextTrigger>Next</PaginationNextTrigger>
</PaginationRoot>
                        `}
              </PreviewCode>
            ),
          })}
        </Preview>
      </div>
      <div id="installation">
        <SectionTitle>Installation</SectionTitle>
        <SectionContent>Install the following dependencies:</SectionContent>
        <InstallPackage>add @zag-js/vue @zag-js/pagination</InstallPackage>
        <SectionContent>
          Copy and paste the following code into your project.
        </SectionContent>
        <PreviewCode title="components/ui/pagination/PaginationContext.vue">
          {`
<script setup lang="ts">
import type { Api } from "@zag-js/pagination";
import { inject } from "vue";

const api = inject<Api>("paginationApi");
</script>

<template>
  <slot :pagination="api"></slot>
</template>
            `}
        </PreviewCode>
        <PreviewCode title="components/ui/pagination/PaginationEllipsis.vue">
          {`
<script lang="ts" setup>
import { cn } from "@midoneui/core/utils/cn";
import { paginationEllipsis } from "@midoneui/core/styles/pagination.styles";
import { Slot } from "@/components/ui/slot";
import type { Api, EllipsisProps } from "@zag-js/pagination";
import { inject } from "vue";

const {
  class: className,
  asChild = false,
  ...props
} = defineProps<
  EllipsisProps & {
    class?: string;
    asChild?: boolean;
  }
>();

const api = inject<Api>("paginationApi");
</script>

<template>
  <Slot
    :class="cn(paginationEllipsis, className)"
    v-bind="{ ...api?.getEllipsisProps(props), ...props, ...$attrs }"
  >
    <div v-if="!$slots.default">…</div>
    <template v-else>
      <slot v-if="asChild" />
      <div v-else>
        <slot />
      </div>
    </template>
  </Slot>
</template>
            `}
        </PreviewCode>
        <PreviewCode title="components/ui/pagination/PaginationItem.vue">
          {`
<script lang="ts" setup>
import { cn } from "@midoneui/core/utils/cn";
import { paginationItem } from "@midoneui/core/styles/pagination.styles";
import { Slot } from "@/components/ui/slot";
import type { Api, ItemProps } from "@zag-js/pagination";
import { inject } from "vue";

const {
  class: className,
  asChild = false,
  ...props
} = defineProps<
  ItemProps & {
    class?: string;
    asChild?: boolean;
  }
>();

const api = inject<Api>("paginationApi");
</script>

<template>
  <Slot
    :class="cn(paginationItem, className)"
    v-bind="{ ...api?.getItemProps(props), ...props, ...$attrs }"
  >
    <slot v-if="asChild" />
    <div v-else>
      <slot />
    </div>
  </Slot>
</template>
            `}
        </PreviewCode>
        <PreviewCode title="components/ui/pagination/PaginationNextTrigger.vue">
          {`
<script lang="ts" setup>
import { cn } from "@midoneui/core/utils/cn";
import { paginationNextTrigger } from "@midoneui/core/styles/pagination.styles";
import { Slot } from "@/components/ui/slot";
import type { Api } from "@zag-js/pagination";
import { inject } from "vue";

const {
  class: className,
  asChild = false,
  ...props
} = defineProps<{
  class?: string;
  asChild?: boolean;
}>();

const api = inject<Api>("paginationApi");
</script>

<template>
  <Slot
    :class="cn(paginationNextTrigger, className)"
    v-bind="{ ...api?.getNextTriggerProps(), ...props, ...$attrs }"
  >
    <slot v-if="asChild" />
    <div v-else>
      <slot />
    </div>
  </Slot>
</template>
            `}
        </PreviewCode>
        <PreviewCode title="components/ui/pagination/PaginationPrevTrigger.vue">
          {`
<script lang="ts" setup>
import { cn } from "@midoneui/core/utils/cn";
import { paginationPrevTrigger } from "@midoneui/core/styles/pagination.styles";
import { Slot } from "@/components/ui/slot";
import type { Api } from "@zag-js/pagination";
import { inject } from "vue";

const {
  class: className,
  asChild = false,
  ...props
} = defineProps<{
  class?: string;
  asChild?: boolean;
}>();

const api = inject<Api>("paginationApi");
</script>

<template>
  <Slot
    :class="cn(paginationPrevTrigger, className)"
    v-bind="{ ...api?.getPrevTriggerProps(), ...props, ...$attrs }"
  >
    <slot v-if="asChild" />
    <div v-else>
      <slot />
    </div>
  </Slot>
</template>
            `}
        </PreviewCode>
        <PreviewCode title="components/ui/pagination/PaginationRoot.vue">
          {`
<script lang="ts" setup>
import * as pagination from "@zag-js/pagination";
import type { Props } from "@zag-js/pagination";
import { Slot } from "@/components/ui/slot";
import { cn } from "@midoneui/core/utils/cn";
import { normalizeProps, useMachine } from "@zag-js/vue";
import { computed, provide } from "vue";
import { paginationRoot } from "@midoneui/core/styles/pagination.styles";

const {
  class: className,
  asChild = false,
  count,
  pageSize,
  siblingCount,
  ...props
} = defineProps<Partial<Props> & { class?: string; asChild?: boolean }>();

const service = useMachine(pagination.machine, {
  ...props,
  count,
  pageSize,
  siblingCount,
  id: crypto.randomUUID(),
});
const api = computed(() => pagination.connect(service, normalizeProps));

provide("paginationApi", api);
</script>

<template>
  <Slot
    :class="cn(paginationRoot, className)"
    v-bind="{ ...props, ...$attrs, ...api.getRootProps() }"
  >
    <slot v-if="asChild" />
    <div v-else>
      <slot />
    </div>
  </Slot>
</template>
            `}
        </PreviewCode>
        <PreviewCode title="components/ui/pagination/index.ts">
          {`
export { default as PaginationContext } from "./PaginationContext.vue";
export { default as PaginationEllipsis } from "./PaginationEllipsis.vue";
export { default as PaginationItem } from "./PaginationItem.vue";
export { default as PaginationNextTrigger } from "./PaginationNextTrigger.vue";
export { default as PaginationPrevTrigger } from "./PaginationPrevTrigger.vue";
export { default as PaginationRoot } from "./PaginationRoot.vue";
              `}
        </PreviewCode>
        <SectionContent>
          Update the import paths to match your project setup.
        </SectionContent>
      </div>
      <div id="usage">
        <SectionTitle>Usage</SectionTitle>
        <PreviewCode>
          {`
import {
  PaginationContext,
  PaginationRoot,
  PaginationItem,
  PaginationPrevTrigger,
  PaginationNextTrigger,
  PaginationEllipsis,
} from "@/components/ui/pagination";
              `}
        </PreviewCode>
        <PreviewCode>
          {`
<PaginationRoot :count="5000" :pageSize="10" :siblingCount="2">
  <PaginationPrevTrigger>Previous</PaginationPrevTrigger>
  <PaginationContext v-slot="{ pagination }">
    <template v-for="(page, index) in pagination?.pages" :key="index">
      <PaginationItem v-if="page.type === 'page'" v-bind="{ ...page }">
        {{ page.value }}
      </PaginationItem>
      <PaginationEllipsis v-else :index="index" />
    </template>
  </PaginationContext>
  <PaginationNextTrigger>Next</PaginationNextTrigger>
</PaginationRoot>
              `}
        </PreviewCode>
      </div>
    </>
  );
}

export default Main;
