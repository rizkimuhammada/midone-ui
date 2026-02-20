<script lang="ts">
  import { Badge } from "@/components/ui/badge";
</script>

<div class="flex flex-col gap-6">
  <div class="flex flex-wrap gap-2">
    <Badge variant="primary">Primary</Badge>
    <Badge variant="secondary">Secondary</Badge>
    <Badge variant="success">Success</Badge>
    <Badge variant="danger">Danger</Badge>
    <Badge variant="pending">Pending</Badge>
    <Badge variant="warning">Warning</Badge>
  </div>
  <div class="flex flex-wrap gap-2">
    <Badge look="outline" variant="primary">Outline Primary</Badge>
    <Badge look="outline" variant="secondary">Outline Secondary</Badge>
    <Badge look="outline" variant="success">Outline Success</Badge>
    <Badge look="outline" variant="danger">Outline Danger</Badge>
  </div>
</div>
