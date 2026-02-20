<script lang="ts">
  import { BreadcrumbRoot, BreadcrumbItem, BreadcrumbSeparator, BreadcrumbLink } from "@/components/ui/breadcrumb";
</script>

<div class="max-w-md">
  <BreadcrumbRoot>
    <BreadcrumbItem>
      <BreadcrumbLink href="#">Home</BreadcrumbLink>
    </BreadcrumbItem>
    <BreadcrumbSeparator />
    <BreadcrumbItem>
      <BreadcrumbLink href="#">Components</BreadcrumbLink>
    </BreadcrumbItem>
    <BreadcrumbSeparator />
    <BreadcrumbItem active>
      <span>Breadcrumb</span>
    </BreadcrumbItem>
  </BreadcrumbRoot>
</div>
