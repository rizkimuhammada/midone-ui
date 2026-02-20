<script lang="ts">
  import { Button } from "@/components/ui/button";
</script>

<div class="flex flex-col gap-20">
  <div class="grid grid-cols-2">
    <div class="justify-center items-center flex gap-2 border-b border-e border-foreground/10 p-5 flex-wrap">
      <Button variant="primary" size="sm">Button Small</Button>
      <Button variant="primary">Button Medium</Button>
      <Button variant="primary" size="lg">Button Large</Button>
      <Button variant="primary" size="xl">Button Extra Large</Button>
    </div>
    <div class="justify-center items-center flex gap-2 border-b border-e border-foreground/10 p-5 flex-wrap">
      <Button variant="secondary" size="sm">Button Small</Button>
      <Button variant="secondary">Button Medium</Button>
      <Button variant="secondary" size="lg">Button Large</Button>
      <Button variant="secondary" size="xl">Button Extra Large</Button>
    </div>
    <div class="justify-center items-center flex gap-2 border-b border-e border-foreground/10 p-5 flex-wrap">
      <Button variant="success" size="sm">Button Small</Button>
      <Button variant="success">Button Medium</Button>
      <Button variant="success" size="lg">Button Large</Button>
      <Button variant="success" size="xl">Button Extra Large</Button>
    </div>
    <div class="justify-center items-center flex gap-2 border-b border-e border-foreground/10 p-5 flex-wrap">
      <Button variant="danger" size="sm">Button Small</Button>
      <Button variant="danger">Button Medium</Button>
      <Button variant="danger" size="lg">Button Large</Button>
      <Button variant="danger" size="xl">Button Extra Large</Button>
    </div>
    <div class="justify-center items-center flex gap-2 border-b border-e border-foreground/10 p-5 flex-wrap">
      <Button variant="pending" size="sm">Button Small</Button>
      <Button variant="pending">Button Medium</Button>
      <Button variant="pending" size="lg">Button Large</Button>
      <Button variant="pending" size="xl">Button Extra Large</Button>
    </div>
    <div class="justify-center items-center flex gap-2 border-b border-e border-foreground/10 p-5 flex-wrap">
      <Button variant="warning" size="sm">Button Small</Button>
      <Button variant="warning">Button Medium</Button>
      <Button variant="warning" size="lg">Button Large</Button>
      <Button variant="warning" size="xl">Button Extra Large</Button>
    </div>
  </div>
  <div class="grid grid-cols-2">
    <div class="justify-center items-center flex gap-2 border-b border-e border-foreground/10 p-5 flex-wrap">
      <Button look="outline" variant="primary" size="sm">Button Small</Button>
      <Button look="outline" variant="primary">Button Medium</Button>
      <Button look="outline" variant="primary" size="lg">Button Large</Button>
    </div>
    <div class="justify-center items-center flex gap-2 border-b border-e border-foreground/10 p-5 flex-wrap">
      <Button look="outline" variant="secondary" size="sm">Button Small</Button>
      <Button look="outline" variant="secondary">Button Medium</Button>
      <Button look="outline" variant="secondary" size="lg">Button Large</Button>
    </div>
    <div class="justify-center items-center flex gap-2 border-b border-e border-foreground/10 p-5 flex-wrap">
      <Button look="filled" variant="primary" size="sm">Button Small</Button>
      <Button look="filled" variant="primary">Button Medium</Button>
      <Button look="filled" variant="primary" size="lg">Button Large</Button>
    </div>
    <div class="justify-center items-center flex gap-2 border-b border-e border-foreground/10 p-5 flex-wrap">
      <Button look="filled" variant="danger" size="sm">Button Small</Button>
      <Button look="filled" variant="danger">Button Medium</Button>
      <Button look="filled" variant="danger" size="lg">Button Large</Button>
    </div>
  </div>
  <div class="grid grid-cols-2">
    <div class="justify-center items-center flex gap-2 border-b border-e border-foreground/10 p-5 flex-wrap">
      <Button disabled variant="primary" size="sm">Button Small</Button>
      <Button disabled variant="primary">Button Medium</Button>
      <Button disabled variant="primary" size="lg">Button Large</Button>
    </div>
    <div class="justify-center items-center flex gap-2 border-b border-e border-foreground/10 p-5 flex-wrap">
      <Button disabled variant="secondary" size="sm">Button Small</Button>
      <Button disabled variant="secondary">Button Medium</Button>
      <Button disabled variant="secondary" size="lg">Button Large</Button>
    </div>
  </div>
</div>
