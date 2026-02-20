<script lang="ts">
  import { AvatarRoot, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
</script>

<div class="flex flex-wrap gap-4">
  <AvatarRoot>
    <AvatarImage src="https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?w=128&h=128&fit=crop&crop=face" />
    <AvatarFallback>JD</AvatarFallback>
  </AvatarRoot>
  <AvatarRoot bordered>
    <AvatarImage src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=128&h=128&fit=crop&crop=face" />
    <AvatarFallback>SM</AvatarFallback>
  </AvatarRoot>
  <AvatarRoot>
    <AvatarFallback>AB</AvatarFallback>
  </AvatarRoot>
</div>
