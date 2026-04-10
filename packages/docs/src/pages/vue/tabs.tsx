import { Box } from "@/components/ui/box";
import {
  TabsRoot,
  TabsList,
  TabsTrigger,
  TabsContent,
} from "@/components/ui/tabs";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { SquareX, Save, ExternalLink } from "lucide-react";
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
                <TabsRoot defaultValue="update-profile">
                  <TabsList>
                    <TabsTrigger value="update-profile">
                      Update Profile
                    </TabsTrigger>
                    <TabsTrigger value="share-profile">
                      Share Profile
                    </TabsTrigger>
                  </TabsList>
                  <Box raised="single" className="w-90">
                    <TabsContent value="update-profile">
                      <div className="grid gap-4 mt-2">
                        <div className="grid gap-2.5">
                          <Label htmlFor="name-1">Name</Label>
                          <Input
                            id="name-1"
                            name="name"
                            defaultValue="Pedro Duarte"
                          />
                        </div>
                        <div className="grid gap-2.5">
                          <Label htmlFor="username-1">Username</Label>
                          <Input
                            id="username-1"
                            name="username"
                            defaultValue="@peduarte"
                          />
                        </div>
                      </div>
                      <div className="flex gap-2 justify-end mt-7">
                        <Button>
                          <SquareX />
                          Close
                        </Button>
                        <Button variant="primary">
                          <Save />
                          Submit
                        </Button>
                      </div>
                    </TabsContent>
                    <TabsContent value="share-profile">
                      <div className="grid gap-4 mt-2">
                        <Input
                          id="name-1"
                          name="name"
                          defaultValue="https://midone-ui.com/docs/installation"
                        />
                      </div>
                      <div className="flex gap-2 mt-5">
                        <Button>
                          <ExternalLink />
                          Share Link
                        </Button>
                      </div>
                    </TabsContent>
                  </Box>
                </TabsRoot>
              </>
            ),
            code: (
              <PreviewCode>
                {`
<TabsRoot defaultValue="update-profile">
  <TabsList>
    <TabsTrigger value="update-profile"> Update Profile </TabsTrigger>
    <TabsTrigger value="share-profile"> Share Profile </TabsTrigger>
  </TabsList>
  <Box raised="single" class="w-90">
    <TabsContent value="update-profile">
      <div class="grid gap-4 mt-2">
        <div class="grid gap-2.5">
          <Label for="name-1">Name</Label>
          <Input id="name-1" name="name" defaultValue="Pedro Duarte" />
        </div>
        <div class="grid gap-2.5">
          <Label for="username-1">Username</Label>
          <Input id="username-1" name="username" defaultValue="@peduarte" />
        </div>
      </div>
      <div class="flex gap-2 justify-end mt-7">
        <Button>
          <SquareX />
          Close
        </Button>
        <Button variant="primary">
          <Save />
          Submit
        </Button>
      </div>
    </TabsContent>
    <TabsContent value="share-profile">
      <div class="grid gap-4 mt-2">
        <Input
          id="name-1"
          name="name"
          defaultValue="https://midone-ui.com/docs/installation"
        />
      </div>
      <div class="flex gap-2 mt-5">
        <Button>
          <ExternalLink />
          Share Link
        </Button>
      </div>
    </TabsContent>
  </Box>
</TabsRoot>
                `}
              </PreviewCode>
            ),
          })}
        </Preview>
      </div>
      <div id="installation">
        <SectionTitle>Installation</SectionTitle>
        <SectionContent>Install the following dependencies:</SectionContent>
        <InstallPackage>add @zag-js/react @zag-js/tabs</InstallPackage>
        <SectionContent>
          Copy and paste the following code into your project.
        </SectionContent>
        <PreviewCode title="components/ui/tabs/TabsContent.vue">
          {`
<script lang="ts" setup>
import { cn } from "@midoneui/core/utils/cn";
import { tabsContent } from "@midoneui/core/styles/tabs.styles";
import type { Api, ContentProps } from "@zag-js/tabs";
import { inject } from "vue";
import { Slot } from "@/components/ui/slot";

const {
  class: className,
  asChild = false,
  ...props
} = defineProps<
  ContentProps & {
    class?: string;
    asChild?: boolean;
  }
>();

const api = inject<Api>("tabsApi");
</script>

<template>
  <Slot
    :class="cn(tabsContent, className)"
    v-bind="{ ...props, ...$attrs, ...api?.getContentProps(props) }"
  >
    <slot v-if="asChild" />
    <div v-else>
      <slot />
    </div>
  </Slot>
</template>
            `}
        </PreviewCode>
        <PreviewCode title="components/ui/tabs/TabsIndicator.vue">
          {`
<script lang="ts" setup>
import { cn } from "@midoneui/core/utils/cn";
import { tabsIndicator } from "@midoneui/core/styles/tabs.styles";
import type { Api } from "@zag-js/tabs";
import { inject } from "vue";
import { Slot } from "@/components/ui/slot";

const {
  class: className,
  asChild = false,
  ...props
} = defineProps<{
  class?: string;
  asChild?: boolean;
}>();

const api = inject<Api>("tabsApi");
</script>

<template>
  <Slot
    :class="cn(tabsIndicator, className)"
    v-bind="{ ...props, ...$attrs, ...api?.getIndicatorProps() }"
  >
    <slot v-if="asChild" />
    <div v-else>
      <slot />
    </div>
  </Slot>
</template>
            `}
        </PreviewCode>
        <PreviewCode title="components/ui/tabs/TabsList.vue">
          {`
<script lang="ts" setup>
import { cn } from "@midoneui/core/utils/cn";
import { tabsList } from "@midoneui/core/styles/tabs.styles";
import type { Api } from "@zag-js/tabs";
import { inject } from "vue";
import { Slot } from "@/components/ui/slot";
import { TabsIndicator } from ".";

const {
  class: className,
  asChild = false,
  ...props
} = defineProps<{
  class?: string;
  asChild?: boolean;
}>();

const api = inject<Api>("tabsApi");
</script>

<template>
  <Slot
    :class="cn(tabsList, className)"
    v-bind="{ ...props, ...$attrs, ...api?.getListProps() }"
  >
    <slot v-if="asChild" />
    <div v-else>
      <slot />
      <TabsIndicator />
    </div>
  </Slot>
</template>
            `}
        </PreviewCode>
        <PreviewCode title="components/ui/tabs/TabsRoot.vue">
          {`
<script lang="ts" setup>
import * as tabs from "@zag-js/tabs";
import type { Props } from "@zag-js/tabs";
import { cn } from "@midoneui/core/utils/cn";
import { tabsRoot } from "@midoneui/core/styles/tabs.styles";
import { normalizeProps, useMachine } from "@zag-js/vue";
import { computed, provide } from "vue";
import { Slot } from "@/components/ui/slot";

const {
  class: className,
  asChild = false,
  ...props
} = defineProps<Partial<Props> & { class?: string; asChild?: boolean }>();

const service = useMachine(tabs.machine, {
  ...props,
  id: crypto.randomUUID(),
});
const api = computed(() => tabs.connect(service, normalizeProps));

provide("tabsApi", api);
</script>

<template>
  <Slot
    :class="cn(tabsRoot, className)"
    v-bind="{ ...props, ...$attrs, ...api?.getRootProps() }"
  >
    <slot v-if="asChild" />
    <div v-else>
      <slot />
    </div>
  </Slot>
</template>
            `}
        </PreviewCode>
        <PreviewCode title="components/ui/tabs/TabsTrigger.vue">
          {`
<script lang="ts" setup>
import { cn } from "@midoneui/core/utils/cn";
import { tabsTrigger } from "@midoneui/core/styles/tabs.styles";
import type { Api, TriggerProps } from "@zag-js/tabs";
import { inject } from "vue";
import { Slot } from "@/components/ui/slot";

const {
  class: className,
  asChild = false,
  ...props
} = defineProps<
  TriggerProps & {
    class?: string;
    asChild?: boolean;
  }
>();

const api = inject<Api>("tabsApi");
</script>

<template>
  <Slot
    :class="cn(tabsTrigger, className)"
    v-bind="{ ...props, ...$attrs, ...api?.getTriggerProps(props) }"
  >
    <slot v-if="asChild" />
    <button v-else>
      <slot />
    </button>
  </Slot>
</template>
            `}
        </PreviewCode>
        <PreviewCode title="components/ui/tabs/index.ts">
          {`
export { default as TabsContent } from "./TabsContent.vue";
export { default as TabsIndicator } from "./TabsIndicator.vue";
export { default as TabsList } from "./TabsList.vue";
export { default as TabsRoot } from "./TabsRoot.vue";
export { default as TabsTrigger } from "./TabsTrigger.vue";
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
  TabsRoot,
  TabsList,
  TabsTrigger,
  TabsContent,
} from "@/components/ui/tabs";
              `}
        </PreviewCode>
        <PreviewCode>
          {`
<TabsRoot defaultValue="update-profile">
  <TabsList>
    <TabsTrigger value="update-profile"> Update Profile </TabsTrigger>
    <TabsTrigger value="share-profile"> Share Profile </TabsTrigger>
  </TabsList>
  <Box raised="single" class="w-90">
    <TabsContent value="update-profile">
      <div class="grid gap-4 mt-2">
        <div class="grid gap-2.5">
          <Label for="name-1">Name</Label>
          <Input id="name-1" name="name" defaultValue="Pedro Duarte" />
        </div>
        <div class="grid gap-2.5">
          <Label for="username-1">Username</Label>
          <Input id="username-1" name="username" defaultValue="@peduarte" />
        </div>
      </div>
      <div class="flex gap-2 justify-end mt-7">
        <Button>
          <SquareX />
          Close
        </Button>
        <Button variant="primary">
          <Save />
          Submit
        </Button>
      </div>
    </TabsContent>
    <TabsContent value="share-profile">
      <div class="grid gap-4 mt-2">
        <Input
          id="name-1"
          name="name"
          defaultValue="https://midone-ui.com/docs/installation"
        />
      </div>
      <div class="flex gap-2 mt-5">
        <Button>
          <ExternalLink />
          Share Link
        </Button>
      </div>
    </TabsContent>
  </Box>
</TabsRoot>
              `}
        </PreviewCode>
      </div>
    </>
  );
}

export default Main;
