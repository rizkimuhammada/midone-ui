<script lang="ts">
  import { Carousel } from "@/components/ui/carousel";

  const slides = [
    "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=400&fit=crop",
    "https://images.unsplash.com/photo-1454496522488-7a8e488e8606?w=800&h=400&fit=crop",
    "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&h=400&fit=crop",
  ];
</script>

<div class="max-w-2xl">
  <Carousel {slides} />
</div>
