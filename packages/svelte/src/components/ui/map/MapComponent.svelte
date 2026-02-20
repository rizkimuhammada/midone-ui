<script lang="ts">
  import { cn } from "@midoneui/core/utils/cn";
  import { map as mapStyles } from "@midoneui/core/styles/map.styles";
  import maplibregl from "maplibre-gl";
  import "maplibre-gl/dist/maplibre-gl.css";
  import { onMount, onDestroy } from "svelte";

  let {
    class: className,
    center = [0, 0] as [number, number],
    zoom = 9,
    style = "https://demotiles.maplibre.org/style.json",
    ...props
  }: { class?: string; center?: [number, number]; zoom?: number; style?: string } & Record<string, any> = $props();

  let mapContainer: HTMLDivElement;
  let mapInstance: maplibregl.Map | null = null;

  onMount(() => {
    mapInstance = new maplibregl.Map({
      container: mapContainer,
      style,
      center,
      zoom,
    });
  });

  onDestroy(() => {
    mapInstance?.remove();
  });
</script>

<div bind:this={mapContainer} class={cn(mapStyles, "h-64", className)} {...props}></div>
