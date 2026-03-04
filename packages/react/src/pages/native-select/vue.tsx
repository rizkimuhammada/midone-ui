import {
    NativeSelect,
    NativeSelectOption,
    NativeSelectOptionGroup,
} from "@/components/ui/native-select";
import {
    Preview,
    SectionTitle,
    SectionContent,
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
                                <NativeSelect className="w-56">
                                    <NativeSelectOption value="">
                                        Select status
                                    </NativeSelectOption>
                                    <NativeSelectOption value="todo">Todo</NativeSelectOption>
                                    <NativeSelectOption value="in-progress">
                                        In Progress
                                    </NativeSelectOption>
                                    <NativeSelectOption value="done">Done</NativeSelectOption>
                                    <NativeSelectOption value="cancelled">
                                        Cancelled
                                    </NativeSelectOption>
                                </NativeSelect>
                            </>
                        ),
                        code: (
                            <PreviewCode>
                                {`
<NativeSelect class="w-56">
  <NativeSelectOption value="">Select status</NativeSelectOption>
  <NativeSelectOption value="todo">Todo</NativeSelectOption>
  <NativeSelectOption value="in-progress">In Progress</NativeSelectOption>
  <NativeSelectOption value="done">Done</NativeSelectOption>
  <NativeSelectOption value="cancelled">Cancelled</NativeSelectOption>
</NativeSelect>
                `}
                            </PreviewCode>
                        ),
                    })}
                </Preview>
            </div>
            <div id="installation">
                <SectionTitle>Installation</SectionTitle>
                <SectionContent>
                    Copy and paste the following code into your project.
                </SectionContent>
                <PreviewCode title="components/ui/native-select/NativeSelect.vue">
                    {`
<script lang="ts" setup>
import { cn } from "@midoneui/core/utils/cn";
import { input } from "@midoneui/core/styles/input.styles";
import { nativeSelect } from "@midoneui/core/styles/native-select.styles";

const { class: className, ...props } = defineProps<{
  class?: string;
}>();
</script>

<template>
  <select
    :class="cn(input, nativeSelect, className)"
    v-bind="{ ...props, ...$attrs }"
  >
    <slot />
  </select>
</template>
              `}
                </PreviewCode>
                <PreviewCode title="components/ui/native-select/NativeSelectOption.vue">
                    {`
<script lang="ts" setup>
import { cn } from "@midoneui/core/utils/cn";
import { nativeSelectOption } from "@midoneui/core/styles/native-select.styles";

const { class: className, ...props } = defineProps<{
  class?: string;
}>();
</script>

<template>
  <option
    :class="cn(nativeSelectOption, className)"
    v-bind="{ ...props, ...$attrs }"
  >
    <slot />
  </option>
</template>
              `}
                </PreviewCode>
                <PreviewCode title="components/ui/native-select/NativeSelectOptionGroup.vue">
                    {`
<script lang="ts" setup>
import { cn } from "@midoneui/core/utils/cn";
import { NativeSelectOptGroup } from "@midoneui/core/styles/native-select.styles";

const { class: className, ...props } = defineProps<{
  class?: string;
}>();
</script>

<template>
  <optgroup
    :class="cn(NativeSelectOptGroup, className)"
    v-bind="{ ...props, ...$attrs }"
  >
    <slot />
  </optgroup>
</template>
              `}
                </PreviewCode>
                <PreviewCode title="components/ui/native-select/index.ts">
                    {`
export { default as NativeSelect } from "./NativeSelect.vue";
export { default as NativeSelectOption } from "./NativeSelectOption.vue";
export { default as NativeSelectOptionGroup } from "./NativeSelectOptionGroup.vue";
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
  NativeSelect,
  NativeSelectOption,
  NativeSelectOptionGroup,
} from "@/components/ui/native-select";
                    `}
                </PreviewCode>
                <PreviewCode>
                    {`
<NativeSelect class="w-56">
  <NativeSelectOption value="">Select status</NativeSelectOption>
  <NativeSelectOption value="todo">Todo</NativeSelectOption>
  <NativeSelectOption value="in-progress">In Progress</NativeSelectOption>
  <NativeSelectOption value="done">Done</NativeSelectOption>
  <NativeSelectOption value="cancelled">Cancelled</NativeSelectOption>
</NativeSelect>
                    `}
                </PreviewCode>
            </div>
            <div id="variants">
                <SectionTitle>Variants</SectionTitle>
                <SectionContent>A collection of components you can use.</SectionContent>
                <Preview>
                    {() => ({
                        preview: (
                            <>
                                <NativeSelect className="w-56">
                                    <NativeSelectOption value="">
                                        Select department
                                    </NativeSelectOption>
                                    <NativeSelectOptionGroup label="Engineering">
                                        <NativeSelectOption value="frontend">
                                            Frontend
                                        </NativeSelectOption>
                                        <NativeSelectOption value="backend">
                                            Backend
                                        </NativeSelectOption>
                                        <NativeSelectOption value="devops">
                                            DevOps
                                        </NativeSelectOption>
                                    </NativeSelectOptionGroup>
                                    <NativeSelectOptionGroup label="Sales">
                                        <NativeSelectOption value="sales-rep">
                                            Sales Rep
                                        </NativeSelectOption>
                                        <NativeSelectOption value="account-manager">
                                            Account Manager
                                        </NativeSelectOption>
                                        <NativeSelectOption value="sales-director">
                                            Sales Director
                                        </NativeSelectOption>
                                    </NativeSelectOptionGroup>
                                    <NativeSelectOptionGroup label="Operations">
                                        <NativeSelectOption value="support">
                                            Customer Support
                                        </NativeSelectOption>
                                        <NativeSelectOption value="product-manager">
                                            Product Manager
                                        </NativeSelectOption>
                                        <NativeSelectOption value="ops-manager">
                                            Operations Manager
                                        </NativeSelectOption>
                                    </NativeSelectOptionGroup>
                                </NativeSelect>
                            </>
                        ),
                        code: (
                            <PreviewCode>
                                {`
<NativeSelect class="w-56">
  <NativeSelectOption value="">Select department</NativeSelectOption>
  <NativeSelectOptionGroup label="Engineering">
    <NativeSelectOption value="frontend">Frontend</NativeSelectOption>
    <NativeSelectOption value="backend">Backend</NativeSelectOption>
    <NativeSelectOption value="devops">DevOps</NativeSelectOption>
  </NativeSelectOptionGroup>
  <NativeSelectOptionGroup label="Sales">
    <NativeSelectOption value="sales-rep">Sales Rep</NativeSelectOption>
    <NativeSelectOption value="account-manager">Account Manager</NativeSelectOption>
    <NativeSelectOption value="sales-director">Sales Director</NativeSelectOption>
  </NativeSelectOptionGroup>
  <NativeSelectOptionGroup label="Operations">
    <NativeSelectOption value="support">Customer Support</NativeSelectOption>
    <NativeSelectOption value="product-manager">Product Manager</NativeSelectOption>
    <NativeSelectOption value="ops-manager">Operations Manager</NativeSelectOption>
  </NativeSelectOptionGroup>
</NativeSelect>
                `}
                            </PreviewCode>
                        ),
                    })}
                </Preview>
                <Preview>
                    {() => ({
                        preview: (
                            <>
                                <NativeSelect className="w-56" disabled>
                                    <NativeSelectOption value="">
                                        Select status
                                    </NativeSelectOption>
                                    <NativeSelectOption value="todo">Todo</NativeSelectOption>
                                    <NativeSelectOption value="in-progress">
                                        In Progress
                                    </NativeSelectOption>
                                    <NativeSelectOption value="done">Done</NativeSelectOption>
                                    <NativeSelectOption value="cancelled">
                                        Cancelled
                                    </NativeSelectOption>
                                </NativeSelect>
                            </>
                        ),
                        code: (
                            <PreviewCode>
                                {`
<NativeSelect class="w-56" disabled>
  <NativeSelectOption value="">Select status</NativeSelectOption>
  <NativeSelectOption value="todo">Todo</NativeSelectOption>
  <NativeSelectOption value="in-progress">In Progress</NativeSelectOption>
  <NativeSelectOption value="done">Done</NativeSelectOption>
  <NativeSelectOption value="cancelled">Cancelled</NativeSelectOption>
</NativeSelect>
                `}
                            </PreviewCode>
                        ),
                    })}
                </Preview>
            </div>
        </>
    );
}

export default Main;
