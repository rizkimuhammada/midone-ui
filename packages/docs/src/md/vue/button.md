# Button

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.

[View on GitHub](#) | [Documentation](#)

## Preview

```vue
<Button variant="primary" size="sm"> Button Small </Button>
<Button variant="primary">Button Medium</Button>
<Button variant="primary" size="lg"> Button Large </Button>
<Button variant="primary" size="xl"> Button Extra Large </Button>
```

## Dependency

No external dependencies.

## Component

### Button.vue

```vue
<script lang="ts" setup>
import { cn } from "@midoneui/core/utils/cn";
import {
  buttonVariants,
  type ButtonVariants,
} from "@midoneui/core/styles/button.styles";
import { Slot } from "@/components/ui/slot";

const {
  class: className,
  look,
  variant,
  size,
  asChild = false,
  ...props
} = defineProps<
  ButtonVariants & {
    class?: string;
    asChild?: boolean;
  }
>();
</script>

<template>
  <Slot
    v-bind="{ ...props, ...$attrs }"
    :class="cn(buttonVariants({ look, variant, size }), className)"
  >
    <slot v-if="asChild" />
    <button v-else>
      <slot />
    </button>
  </Slot>
</template>
```

## Usage

```vue
import { Button } from "@/components/ui/button";
```

```vue
<Button variant="primary" size="sm"> Button Small </Button>
<Button variant="primary">Button Medium</Button>
<Button variant="primary" size="lg"> Button Large </Button>
<Button variant="primary" size="xl"> Button Extra Large </Button>
```

## Examples

### Example 1

```vue
<Button variant="secondary" size="sm"> Button Small </Button>
<Button variant="secondary">Button Medium</Button>
<Button variant="secondary" size="lg"> Button Large </Button>
<Button variant="secondary" size="xl"> Button Extra Large </Button>
```

### Example 2

```vue
<Button variant="success" size="sm"> Button Small </Button>
<Button variant="success">Button Medium</Button>
<Button variant="success" size="lg"> Button Large </Button>
<Button variant="success" size="xl"> Button Extra Large </Button>
```

### Example 3

```vue
<Button variant="danger" size="sm"> Button Small </Button>
<Button variant="danger">Button Medium</Button>
<Button variant="danger" size="lg"> Button Large </Button>
<Button variant="danger" size="xl"> Button Extra Large </Button>
```

### Example 4

```vue
<Button variant="pending" size="sm"> Button Small </Button>
<Button variant="pending">Button Medium</Button>
<Button variant="pending" size="lg"> Button Large </Button>
<Button variant="pending" size="xl"> Button Extra Large </Button>
```

### Example 5

```vue
<Button variant="warning" size="sm"> Button Small </Button>
<Button variant="warning">Button Medium</Button>
<Button variant="warning" size="lg"> Button Large </Button>
<Button variant="warning" size="xl"> Button Extra Large </Button>
```

### Example 6

```vue
<Button look="outline" variant="primary" size="sm">
  Button Small
</Button>
<Button look="outline" variant="primary">Button Medium</Button>
<Button look="outline" variant="primary" size="lg">
  Button Large
</Button>
<Button look="outline" variant="primary" size="xl">
  Button Extra Large
</Button>
```

### Example 7

```vue
<Button look="outline" variant="secondary" size="sm">
  Button Small
</Button>
<Button look="outline" variant="secondary">Button Medium</Button>
<Button look="outline" variant="secondary" size="lg">
  Button Large
</Button>
<Button look="outline" variant="secondary" size="xl">
  Button Extra Large
</Button>
```

### Example 8

```vue
<Button look="outline" variant="success" size="sm">
  Button Small
</Button>
<Button look="outline" variant="success">Button Medium</Button>
<Button look="outline" variant="success" size="lg">
  Button Large
</Button>
<Button look="outline" variant="success" size="xl">
  Button Extra Large
</Button>
```

### Example 9

```vue
<Button look="outline" variant="danger" size="sm">
  Button Small
</Button>
<Button look="outline" variant="danger">Button Medium</Button>
<Button look="outline" variant="danger" size="lg">
  Button Large
</Button>
<Button look="outline" variant="danger" size="xl">
  Button Extra Large
</Button>
```

### Example 10

```vue
<Button look="outline" variant="pending" size="sm">
  Button Small
</Button>
<Button look="outline" variant="pending">Button Medium</Button>
<Button look="outline" variant="pending" size="lg">
  Button Large
</Button>
<Button look="outline" variant="pending" size="xl">
  Button Extra Large
</Button>
```

### Example 11

```vue
<Button look="outline" variant="warning" size="sm">
  Button Small
</Button>
<Button look="outline" variant="warning">Button Medium</Button>
<Button look="outline" variant="warning" size="lg">
  Button Large
</Button>
<Button look="outline" variant="warning" size="xl">
  Button Extra Large
</Button>
```

### Example 12

```vue
<Button look="filled" variant="primary" size="sm">
  Button Small
</Button>
<Button look="filled" variant="primary"> Button Medium </Button>
<Button look="filled" variant="primary" size="lg">
  Button Large
</Button>
<Button look="filled" variant="primary" size="xl">
  Button Extra Large
</Button>
```

### Example 13

```vue
<Button look="filled" variant="secondary" size="sm">
  Button Small
</Button>
<Button look="filled" variant="secondary"> Button Medium </Button>
<Button look="filled" variant="secondary" size="lg">
  Button Large
</Button>
<Button look="filled" variant="secondary" size="xl">
  Button Extra Large
</Button>
```

### Example 14

```vue
<Button look="filled" variant="success" size="sm">
  Button Small
</Button>
<Button look="filled" variant="success"> Button Medium </Button>
<Button look="filled" variant="success" size="lg">
  Button Large
</Button>
<Button look="filled" variant="success" size="xl">
  Button Extra Large
</Button>
```

### Example 15

```vue
<Button look="filled" variant="danger" size="sm"> Button Small </Button>
<Button look="filled" variant="danger"> Button Medium </Button>
<Button look="filled" variant="danger" size="lg"> Button Large </Button>
<Button look="filled" variant="danger" size="xl">
  Button Extra Large
</Button>
```

### Example 16

```vue
<Button look="filled" variant="pending" size="sm">
  Button Small
</Button>
<Button look="filled" variant="pending"> Button Medium </Button>
<Button look="filled" variant="pending" size="lg">
  Button Large
</Button>
<Button look="filled" variant="pending" size="xl">
  Button Extra Large
</Button>
```

### Example 17

```vue
<Button look="filled" variant="warning" size="sm">
  Button Small
</Button>
<Button look="filled" variant="warning"> Button Medium </Button>
<Button look="filled" variant="warning" size="lg">
  Button Large
</Button>
<Button look="filled" variant="warning" size="xl">
  Button Extra Large
</Button>
```

### Example 18

```vue
<Button disabled variant="primary" size="sm"> Button Small </Button>
<Button disabled variant="primary"> Button Medium </Button>
<Button disabled variant="primary" size="lg"> Button Large </Button>
<Button disabled variant="primary" size="xl">
  Button Extra Large
</Button>
```

### Example 19

```vue
<Button disabled variant="secondary" size="sm"> Button Small </Button>
<Button disabled variant="secondary"> Button Medium </Button>
<Button disabled variant="secondary" size="lg"> Button Large </Button>
<Button disabled variant="secondary" size="xl">
  Button Extra Large
</Button>
```

### Example 20

```vue
<Button disabled variant="success" size="sm"> Button Small </Button>
<Button disabled variant="success"> Button Medium </Button>
<Button disabled variant="success" size="lg"> Button Large </Button>
<Button disabled variant="success" size="xl">
  Button Extra Large
</Button>
```

### Example 21

```vue
<Button disabled variant="danger" size="sm"> Button Small </Button>
<Button disabled variant="danger"> Button Medium </Button>
<Button disabled variant="danger" size="lg"> Button Large </Button>
<Button disabled variant="danger" size="xl">
  Button Extra Large
</Button>
```

### Example 22

```vue
<Button disabled variant="pending" size="sm"> Button Small </Button>
<Button disabled variant="pending"> Button Medium </Button>
<Button disabled variant="pending" size="lg"> Button Large </Button>
<Button disabled variant="pending" size="xl">
  Button Extra Large
</Button>
```

### Example 23

```vue
<Button disabled variant="warning" size="sm"> Button Small </Button>
<Button disabled variant="warning"> Button Medium </Button>
<Button disabled variant="warning" size="lg"> Button Large </Button>
<Button disabled variant="warning" size="xl">
  Button Extra Large
</Button>
```

### Example 24

```vue
<Button disabled look="outline" variant="primary" size="sm">
  Button Small
</Button>
<Button disabled look="outline" variant="primary">Button Medium</Button>
<Button disabled look="outline" variant="primary" size="lg">
  Button Large
</Button>
<Button disabled look="outline" variant="primary" size="xl">
  Button Extra Large
</Button>
```

### Example 25

```vue
<Button disabled look="outline" variant="secondary" size="sm">
  Button Small
</Button>
<Button disabled look="outline" variant="secondary"
  >Button Medium</Button
>
<Button disabled look="outline" variant="secondary" size="lg">
  Button Large
</Button>
<Button disabled look="outline" variant="secondary" size="xl">
  Button Extra Large
</Button>
```

### Example 26

```vue
<Button disabled look="outline" variant="success" size="sm">
  Button Small
</Button>
<Button disabled look="outline" variant="success">Button Medium</Button>
<Button disabled look="outline" variant="success" size="lg">
  Button Large
</Button>
<Button disabled look="outline" variant="success" size="xl">
  Button Extra Large
</Button>
```

### Example 27

```vue
<Button disabled look="outline" variant="danger" size="sm">
  Button Small
</Button>
<Button disabled look="outline" variant="danger">Button Medium</Button>
<Button disabled look="outline" variant="danger" size="lg">
  Button Large
</Button>
<Button disabled look="outline" variant="danger" size="xl">
  Button Extra Large
</Button>
```

### Example 28

```vue
<Button disabled look="outline" variant="pending" size="sm">
  Button Small
</Button>
<Button disabled look="outline" variant="pending">Button Medium</Button>
<Button disabled look="outline" variant="pending" size="lg">
  Button Large
</Button>
<Button disabled look="outline" variant="pending" size="xl">
  Button Extra Large
</Button>
```

### Example 29

```vue
<Button disabled look="outline" variant="warning" size="sm">
  Button Small
</Button>
<Button disabled look="outline" variant="warning">Button Medium</Button>
<Button disabled look="outline" variant="warning" size="lg">
  Button Large
</Button>
<Button disabled look="outline" variant="warning" size="xl">
  Button Extra Large
</Button>
```

### Example 30

```vue
<Button disabled look="filled" variant="primary" size="sm">
  Button Small
</Button>
<Button disabled look="filled" variant="primary">
  Button Medium
</Button>
<Button disabled look="filled" variant="primary" size="lg">
  Button Large
</Button>
<Button disabled look="filled" variant="primary" size="xl">
  Button Extra Large
</Button>
```

### Example 31

```vue
<Button disabled look="filled" variant="secondary" size="sm">
  Button Small
</Button>
<Button disabled look="filled" variant="secondary">
  Button Medium
</Button>
<Button disabled look="filled" variant="secondary" size="lg">
  Button Large
</Button>
<Button disabled look="filled" variant="secondary" size="xl">
  Button Extra Large
</Button>
```

### Example 32

```vue
<Button disabled look="filled" variant="success" size="sm">
  Button Small
</Button>
<Button disabled look="filled" variant="success">
  Button Medium
</Button>
<Button disabled look="filled" variant="success" size="lg">
  Button Large
</Button>
<Button disabled look="filled" variant="success" size="xl">
  Button Extra Large
</Button>
```

### Example 33

```vue
<Button disabled look="filled" variant="danger" size="sm">
  Button Small
</Button>
<Button disabled look="filled" variant="danger"> Button Medium </Button>
<Button disabled look="filled" variant="danger" size="lg">
  Button Large
</Button>
<Button disabled look="filled" variant="danger" size="xl">
  Button Extra Large
</Button>
```

### Example 34

```vue
<Button disabled look="filled" variant="pending" size="sm">
  Button Small
</Button>
<Button disabled look="filled" variant="pending">
  Button Medium
</Button>
<Button disabled look="filled" variant="pending" size="lg">
  Button Large
</Button>
<Button disabled look="filled" variant="pending" size="xl">
  Button Extra Large
</Button>
```

### Example 35

```vue
<Button disabled look="filled" variant="warning" size="sm">
  Button Small
</Button>
<Button disabled look="filled" variant="warning">
  Button Medium
</Button>
<Button disabled look="filled" variant="warning" size="lg">
  Button Large
</Button>
<Button disabled look="filled" variant="warning" size="xl">
  Button Extra Large
</Button>
```

### Example 36

```vue
<Button size="sm">
  <LoaderCircle class="size-4 animate-spin" /> Button Small
</Button>
<Button>
  <LoaderCircle class="size-4 animate-spin" /> Button Medium
</Button>
<Button size="lg">
  <LoaderCircle class="size-4 animate-spin" /> Button Large
</Button>
<Button size="xl">
  <LoaderCircle class="size-4 animate-spin" /> Button Extra Large
</Button>
```

### Example 37

```vue
<Button variant="primary" size="sm">
  <LoaderCircle class="size-4 animate-spin" /> Button Small
</Button>
<Button variant="primary">
  <LoaderCircle class="size-4 animate-spin" /> Button Medium
</Button>
<Button variant="primary" size="lg">
  <LoaderCircle class="size-4 animate-spin" /> Button Large
</Button>
<Button variant="primary" size="xl">
  <LoaderCircle class="size-4 animate-spin" /> Button Extra Large
</Button>
```

### Example 38

```vue
<Button variant="secondary" size="sm">
  <LoaderCircle class="size-4 animate-spin" /> Button Small
</Button>
<Button variant="secondary">
  <LoaderCircle class="size-4 animate-spin" /> Button Medium
</Button>
<Button variant="secondary" size="lg">
  <LoaderCircle class="size-4 animate-spin" /> Button Large
</Button>
<Button variant="secondary" size="xl">
  <LoaderCircle class="size-4 animate-spin" /> Button Extra Large
</Button>
```

### Example 39

```vue
<Button variant="success" size="sm">
  <LoaderCircle class="size-4 animate-spin" /> Button Small
</Button>
<Button variant="success">
  <LoaderCircle class="size-4 animate-spin" /> Button Medium
</Button>
<Button variant="success" size="lg">
  <LoaderCircle class="size-4 animate-spin" /> Button Large
</Button>
<Button variant="success" size="xl">
  <LoaderCircle class="size-4 animate-spin" /> Button Extra Large
</Button>
```

### Example 40

```vue
<Button variant="danger" size="sm">
  <LoaderCircle class="size-4 animate-spin" /> Button Small
</Button>
<Button variant="danger">
  <LoaderCircle class="size-4 animate-spin" /> Button Medium
</Button>
<Button variant="danger" size="lg">
  <LoaderCircle class="size-4 animate-spin" /> Button Large
</Button>
<Button variant="danger" size="xl">
  <LoaderCircle class="size-4 animate-spin" /> Button Extra Large
</Button>
```

### Example 41

```vue
<Button variant="pending" size="sm">
  <LoaderCircle class="size-4 animate-spin" /> Button Small
</Button>
<Button variant="pending">
  <LoaderCircle class="size-4 animate-spin" /> Button Medium
</Button>
<Button variant="pending" size="lg">
  <LoaderCircle class="size-4 animate-spin" /> Button Large
</Button>
<Button variant="pending" size="xl">
  <LoaderCircle class="size-4 animate-spin" /> Button Extra Large
</Button>
```

### Example 42

```vue
<Button variant="warning" size="sm">
  <LoaderCircle class="size-4 animate-spin" /> Button Small
</Button>
<Button variant="warning">
  <LoaderCircle class="size-4 animate-spin" /> Button Medium
</Button>
<Button variant="warning" size="lg">
  <LoaderCircle class="size-4 animate-spin" /> Button Large
</Button>
<Button variant="warning" size="xl">
  <LoaderCircle class="size-4 animate-spin" /> Button Extra Large
</Button>
```

### Example 43

```vue
<Button look="outline" size="sm">
  <LoaderCircle class="size-4 animate-spin" /> Button Small
</Button>
<Button look="outline">
  <LoaderCircle class="size-4 animate-spin" /> Button Medium
</Button>
<Button look="outline" size="lg">
  <LoaderCircle class="size-4 animate-spin" /> Button Large
</Button>
<Button look="outline" size="xl">
  <LoaderCircle class="size-4 animate-spin" /> Button Extra Large
</Button>
```

### Example 44

```vue
<Button look="outline" variant="primary" size="sm">
  <LoaderCircle class="size-4 animate-spin" /> Button Small
</Button>
<Button look="outline" variant="primary">
  <LoaderCircle class="size-4 animate-spin" /> Button Medium
</Button>
<Button look="outline" variant="primary" size="lg">
  <LoaderCircle class="size-4 animate-spin" /> Button Large
</Button>
<Button look="outline" variant="primary" size="xl">
  <LoaderCircle class="size-4 animate-spin" /> Button Extra Large
</Button>
```

### Example 45

```vue
<Button look="outline" variant="secondary" size="sm">
  <LoaderCircle class="size-4 animate-spin" /> Button Small
</Button>
<Button look="outline" variant="secondary">
  <LoaderCircle class="size-4 animate-spin" /> Button Medium
</Button>
<Button look="outline" variant="secondary" size="lg">
  <LoaderCircle class="size-4 animate-spin" /> Button Large
</Button>
<Button look="outline" variant="secondary" size="xl">
  <LoaderCircle class="size-4 animate-spin" /> Button Extra Large
</Button>
```

### Example 46

```vue
<Button look="outline" variant="success" size="sm">
  <LoaderCircle class="size-4 animate-spin" /> Button Small
</Button>
<Button look="outline" variant="success">
  <LoaderCircle class="size-4 animate-spin" /> Button Medium
</Button>
<Button look="outline" variant="success" size="lg">
  <LoaderCircle class="size-4 animate-spin" /> Button Large
</Button>
<Button look="outline" variant="success" size="xl">
  <LoaderCircle class="size-4 animate-spin" /> Button Extra Large
</Button>
```

### Example 47

```vue
<Button look="outline" variant="danger" size="sm">
  <LoaderCircle class="size-4 animate-spin" /> Button Small
</Button>
<Button look="outline" variant="danger">
  <LoaderCircle class="size-4 animate-spin" /> Button Medium
</Button>
<Button look="outline" variant="danger" size="lg">
  <LoaderCircle class="size-4 animate-spin" /> Button Large
</Button>
<Button look="outline" variant="danger" size="xl">
  <LoaderCircle class="size-4 animate-spin" /> Button Extra Large
</Button>
```

### Example 48

```vue
<Button look="outline" variant="pending" size="sm">
  <LoaderCircle class="size-4 animate-spin" /> Button Small
</Button>
<Button look="outline" variant="pending">
  <LoaderCircle class="size-4 animate-spin" /> Button Medium
</Button>
<Button look="outline" variant="pending" size="lg">
  <LoaderCircle class="size-4 animate-spin" /> Button Large
</Button>
<Button look="outline" variant="pending" size="xl">
  <LoaderCircle class="size-4 animate-spin" /> Button Extra Large
</Button>
```

### Example 49

```vue
<Button look="outline" variant="warning" size="sm">
  <LoaderCircle class="size-4 animate-spin" /> Button Small
</Button>
<Button look="outline" variant="warning">
  <LoaderCircle class="size-4 animate-spin" /> Button Medium
</Button>
<Button look="outline" variant="warning" size="lg">
  <LoaderCircle class="size-4 animate-spin" /> Button Large
</Button>
<Button look="outline" variant="warning" size="xl">
  <LoaderCircle class="size-4 animate-spin" /> Button Extra Large
</Button>
```

### Example 50

```vue
<Button look="filled" size="sm">
  <LoaderCircle class="size-4 animate-spin" /> Button Small
</Button>
<Button look="filled">
  <LoaderCircle class="size-4 animate-spin" /> Button Medium
</Button>
<Button look="filled" size="lg">
  <LoaderCircle class="size-4 animate-spin" /> Button Large
</Button>
<Button look="filled" size="xl">
  <LoaderCircle class="size-4 animate-spin" /> Button Extra Large
</Button>
```

### Example 51

```vue
<Button look="filled" variant="primary" size="sm">
  <LoaderCircle class="size-4 animate-spin" /> Button Small
</Button>
<Button look="filled" variant="primary">
  <LoaderCircle class="size-4 animate-spin" /> Button Medium
</Button>
<Button look="filled" variant="primary" size="lg">
  <LoaderCircle class="size-4 animate-spin" /> Button Large
</Button>
<Button look="filled" variant="primary" size="xl">
  <LoaderCircle class="size-4 animate-spin" /> Button Extra Large
</Button>
```

### Example 52

```vue
<Button look="filled" variant="secondary" size="sm">
  <LoaderCircle class="size-4 animate-spin" /> Button Small
</Button>
<Button look="filled" variant="secondary">
  <LoaderCircle class="size-4 animate-spin" /> Button Medium
</Button>
<Button look="filled" variant="secondary" size="lg">
  <LoaderCircle class="size-4 animate-spin" /> Button Large
</Button>
<Button look="filled" variant="secondary" size="xl">
  <LoaderCircle class="size-4 animate-spin" /> Button Extra Large
</Button>
```

### Example 53

```vue
<Button look="filled" variant="success" size="sm">
  <LoaderCircle class="size-4 animate-spin" /> Button Small
</Button>
<Button look="filled" variant="success">
  <LoaderCircle class="size-4 animate-spin" /> Button Medium
</Button>
<Button look="filled" variant="success" size="lg">
  <LoaderCircle class="size-4 animate-spin" /> Button Large
</Button>
<Button look="filled" variant="success" size="xl">
  <LoaderCircle class="size-4 animate-spin" /> Button Extra Large
</Button>
```

### Example 54

```vue
<Button look="filled" variant="danger" size="sm">
  <LoaderCircle class="size-4 animate-spin" /> Button Small
</Button>
<Button look="filled" variant="danger">
  <LoaderCircle class="size-4 animate-spin" /> Button Medium
</Button>
<Button look="filled" variant="danger" size="lg">
  <LoaderCircle class="size-4 animate-spin" /> Button Large
</Button>
<Button look="filled" variant="danger" size="xl">
  <LoaderCircle class="size-4 animate-spin" /> Button Extra Large
</Button>
```

### Example 55

```vue
<Button look="filled" variant="pending" size="sm">
  <LoaderCircle class="size-4 animate-spin" /> Button Small
</Button>
<Button look="filled" variant="pending">
  <LoaderCircle class="size-4 animate-spin" /> Button Medium
</Button>
<Button look="filled" variant="pending" size="lg">
  <LoaderCircle class="size-4 animate-spin" /> Button Large
</Button>
<Button look="filled" variant="pending" size="xl">
  <LoaderCircle class="size-4 animate-spin" /> Button Extra Large
</Button>
```

### Example 56

```vue
<Button look="filled" variant="warning" size="sm">
  <LoaderCircle class="size-4 animate-spin" /> Button Small
</Button>
<Button look="filled" variant="warning">
  <LoaderCircle class="size-4 animate-spin" /> Button Medium
</Button>
<Button look="filled" variant="warning" size="lg">
  <LoaderCircle class="size-4 animate-spin" /> Button Large
</Button>
<Button look="filled" variant="warning" size="xl">
  <LoaderCircle class="size-4 animate-spin" /> Button Extra Large
</Button>
```

### Example 57

```vue
<Button size="sm">
  <Copy class="size-4" />
</Button>
<Button>
  <Scissors class="size-4" />
</Button>
<Button size="lg">
  <Trash class="size-4" />
</Button>
<Button size="xl">
  <SquarePlus class="size-4" />
</Button>
```

### Example 58

```vue
<Button variant="primary" size="sm">
  <Copy class="size-4" />
</Button>
<Button variant="primary">
  <Scissors class="size-4" />
</Button>
<Button variant="primary" size="lg">
  <Trash class="size-4" />
</Button>
<Button variant="primary" size="xl">
  <SquarePlus class="size-4" />
</Button>
```

### Example 59

```vue
<Button variant="secondary" size="sm">
  <Copy class="size-4" />
</Button>
<Button variant="secondary">
  <Scissors class="size-4" />
</Button>
<Button variant="secondary" size="lg">
  <Trash class="size-4" />
</Button>
<Button variant="secondary" size="xl">
  <SquarePlus class="size-4" />
</Button>
```

### Example 60

```vue
<Button variant="success" size="sm">
  <Copy class="size-4" />
</Button>
<Button variant="success">
  <Scissors class="size-4" />
</Button>
<Button variant="success" size="lg">
  <Trash class="size-4" />
</Button>
<Button variant="success" size="xl">
  <SquarePlus class="size-4" />
</Button>
```

### Example 61

```vue
<Button variant="danger" size="sm">
  <Copy class="size-4" />
</Button>
<Button variant="danger">
  <Scissors class="size-4" />
</Button>
<Button variant="danger" size="lg">
  <Trash class="size-4" />
</Button>
<Button variant="danger" size="xl">
  <SquarePlus class="size-4" />
</Button>
```

### Example 62

```vue
<Button variant="pending" size="sm">
  <Copy class="size-4" />
</Button>
<Button variant="pending">
  <Scissors class="size-4" />
</Button>
<Button variant="pending" size="lg">
  <Trash class="size-4" />
</Button>
<Button variant="pending" size="xl">
  <SquarePlus class="size-4" />
</Button>
```

### Example 63

```vue
<Button variant="warning" size="sm">
  <Copy class="size-4" />
</Button>
<Button variant="warning">
  <Scissors class="size-4" />
</Button>
<Button variant="warning" size="lg">
  <Trash class="size-4" />
</Button>
<Button variant="warning" size="xl">
  <SquarePlus class="size-4" />
</Button>
```

### Example 64

```vue
<Button look="filled" size="sm">
  <Copy class="size-4" />
</Button>
<Button look="filled">
  <Scissors class="size-4" />
</Button>
<Button look="filled" size="lg">
  <Trash class="size-4" />
</Button>
<Button look="filled" size="xl">
  <SquarePlus class="size-4" />
</Button>
```

### Example 65

```vue
<Button look="filled" variant="primary" size="sm">
  <Copy class="size-4" />
</Button>
<Button look="filled" variant="primary">
  <Scissors class="size-4" />
</Button>
<Button look="filled" variant="primary" size="lg">
  <Trash class="size-4" />
</Button>
<Button look="filled" variant="primary" size="xl">
  <SquarePlus class="size-4" />
</Button>
```

### Example 66

```vue
<Button look="filled" variant="secondary" size="sm">
  <Copy class="size-4" />
</Button>
<Button look="filled" variant="secondary">
  <Scissors class="size-4" />
</Button>
<Button look="filled" variant="secondary" size="lg">
  <Trash class="size-4" />
</Button>
<Button look="filled" variant="secondary" size="xl">
  <SquarePlus class="size-4" />
</Button>
```

### Example 67

```vue
<Button look="filled" variant="success" size="sm">
  <Copy class="size-4" />
</Button>
<Button look="filled" variant="success">
  <Scissors class="size-4" />
</Button>
<Button look="filled" variant="success" size="lg">
  <Trash class="size-4" />
</Button>
<Button look="filled" variant="success" size="xl">
  <SquarePlus class="size-4" />
</Button>
```

### Example 68

```vue
<Button look="filled" variant="danger" size="sm">
  <Copy class="size-4" />
</Button>
<Button look="filled" variant="danger">
  <Scissors class="size-4" />
</Button>
<Button look="filled" variant="danger" size="lg">
  <Trash class="size-4" />
</Button>
<Button look="filled" variant="danger" size="xl">
  <SquarePlus class="size-4" />
</Button>
```

### Example 69

```vue
<Button look="filled" variant="pending" size="sm">
  <Copy class="size-4" />
</Button>
<Button look="filled" variant="pending">
  <Scissors class="size-4" />
</Button>
<Button look="filled" variant="pending" size="lg">
  <Trash class="size-4" />
</Button>
<Button look="filled" variant="pending" size="xl">
  <SquarePlus class="size-4" />
</Button>
```

### Example 70

```vue
<Button look="filled" variant="warning" size="sm">
  <Copy class="size-4" />
</Button>
<Button look="filled" variant="warning">
  <Scissors class="size-4" />
</Button>
<Button look="filled" variant="warning" size="lg">
  <Trash class="size-4" />
</Button>
<Button look="filled" variant="warning" size="xl">
  <SquarePlus class="size-4" />
</Button>
```

