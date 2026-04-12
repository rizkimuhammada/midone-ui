# Map

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.

[View on GitHub](#) | [Documentation](#)

## Preview

```html
<div
  data-component="map-root" class="w-full h-96"
  data-scope="map"
  data-part="root"
  data-center="13.388,52.517"
  data-zoom="9.5"
  data-markers='[
    {"name":"Cafe Berlin","type":"cafe","lng":13.388,"lat":52.517},
    {"name":"Restaurant Alex","type":"restaurant","lng":13.39,"lat":52.518},
    {"name":"Coffee House","type":"cafe","lng":13.385,"lat":52.515},
    {"name":"Pizza Place","type":"restaurant","lng":13.392,"lat":52.519},
    {"name":"Burger Joint","type":"restaurant","lng":13.387,"lat":52.516},
    {"name":"Starbucks","type":"cafe","lng":13.391,"lat":52.52},
    {"name":"Sushi Bar","type":"restaurant","lng":13.395,"lat":52.522},
    {"name":"Bakery","type":"cafe","lng":13.383,"lat":52.514},
    {"name":"Italian Restaurant","type":"restaurant","lng":13.398,"lat":52.525},
    {"name":"Tea House","type":"cafe","lng":13.38,"lat":52.512}
  ]'
>
  <div data-scope="map" data-part="controls">
    <button data-scope="map" data-part="zoom-in"></button>
    <button data-scope="map" data-part="zoom-out"></button>
    <button data-scope="map" data-part="reset-north"></button>
    <button data-scope="map" data-part="locate"></button>
    <button data-scope="map" data-part="toggle-fullscreen"></button>
  </div>
</div>
```

## Dependency

```bash
npm install maplibre-gl
```

## Component

### map.ts

```ts
import "maplibre-gl/dist/maplibre-gl.css";
import maplibregl from "maplibre-gl";
import { cn } from "@midoneui/core/src/utils/cn";
import { map as mapStyles } from "@midoneui/core/src/styles/map.styles";
import { buttonVariants } from "@midoneui/core/src/styles/button.styles";

const PLUS_SVG = `<svg xmlns="http://www.w3.org/2000/svg" class="size-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="M12 5v14"/></svg>`;
const MINUS_SVG = `<svg xmlns="http://www.w3.org/2000/svg" class="size-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/></svg>`;
const COMPASS_SVG = `<svg xmlns="http://www.w3.org/2000/svg" class="size-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"/></svg>`;
const MAPPIN_SVG = `<svg xmlns="http://www.w3.org/2000/svg" class="size-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"/><circle cx="12" cy="10" r="3"/></svg>`;
const EXPAND_SVG = `<svg xmlns="http://www.w3.org/2000/svg" class="size-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m21 21-6-6m6 6v-4.8m0 4.8h-4.8"/><path d="M3 16.2V21m0 0h4.8M3 21l6-6"/><path d="M21 7.8V3m0 0h-4.8M21 3l-6 6"/><path d="M3 7.8V3m0 0h4.8M3 3l6 6"/></svg>`;
const X_SVG = `<svg xmlns="http://www.w3.org/2000/svg" class="size-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>`;

function initMap() {
    document.querySelectorAll<HTMLElement>('[data-component="map-root"]').forEach((root) => {
        // Apply map styles to root
        root.className = cn(mapStyles, root.className);
        root.setAttribute("data-scope", "map");
        root.setAttribute("data-part", "root");

        // Parse props from data attributes
        const centerAttr = root.getAttribute("data-center") ?? "0,0";
        const [lng, lat] = centerAttr.split(",").map(Number);
        const zoom = Number(root.getAttribute("data-zoom") ?? "9");
        const markersAttr = root.getAttribute("data-markers");
        const markersData = markersAttr ? JSON.parse(markersAttr) : null;

        // Init control buttons
        const btnVariant = buttonVariants({ variant: "ghost", size: "sm" });

        const zoomInBtn = root.querySelector<HTMLElement>("[data-part='zoom-in']");
        const zoomOutBtn = root.querySelector<HTMLElement>("[data-part='zoom-out']");
        const resetNorthBtn = root.querySelector<HTMLElement>("[data-part='reset-north']");
        const locateBtn = root.querySelector<HTMLElement>("[data-part='locate']");
        const fullscreenBtn = root.querySelector<HTMLElement>("[data-part='toggle-fullscreen']");

        [zoomInBtn, zoomOutBtn, resetNorthBtn, locateBtn, fullscreenBtn].forEach((btn) => {
            if (btn) btn.className = cn(btnVariant, btn.className);
        });

        if (zoomInBtn) zoomInBtn.innerHTML = PLUS_SVG;
        if (zoomOutBtn) zoomOutBtn.innerHTML = MINUS_SVG;
        if (resetNorthBtn) resetNorthBtn.innerHTML = COMPASS_SVG;
        if (locateBtn) locateBtn.innerHTML = MAPPIN_SVG;
        if (fullscreenBtn) fullscreenBtn.innerHTML = EXPAND_SVG;

        // Init maplibre
        const mapInstance = new maplibregl.Map({
            container: root,
            style: "https://tiles.openfreemap.org/styles/positron",
            center: [lng, lat],
            zoom,
        });

        // Wire up controls
        zoomInBtn?.addEventListener("click", () => mapInstance.zoomIn());
        zoomOutBtn?.addEventListener("click", () => mapInstance.zoomOut());
        resetNorthBtn?.addEventListener("click", () => mapInstance.easeTo({ bearing: 0, pitch: 0 }));

        locateBtn?.addEventListener("click", () => {
            if (!navigator.geolocation) {
                alert("Geolocation is not supported by your browser");
                return;
            }
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    const { longitude, latitude } = position.coords;
                    mapInstance.flyTo({ center: [longitude, latitude], zoom: 14 });
                    new maplibregl.Marker({ color: "var(--color-foreground)" })
                        .setLngLat([longitude, latitude])
                        .addTo(mapInstance);
                },
                (error) => alert("Failed to get location: " + error.message)
            );
        });

        let isFullscreen = false;
        fullscreenBtn?.addEventListener("click", () => {
            if (!isFullscreen) {
                root.requestFullscreen?.();
            } else {
                document.exitFullscreen?.();
            }
            isFullscreen = !isFullscreen;
            if (fullscreenBtn) fullscreenBtn.innerHTML = isFullscreen ? X_SVG : EXPAND_SVG;
        });

        // Add markers with clustering
        if (markersData) {
            mapInstance.on("load", () => {
                const geojson: GeoJSON.FeatureCollection<GeoJSON.Point> = {
                    type: "FeatureCollection",
                    features: markersData.map((m: any) => ({
                        type: "Feature",
                        properties: { name: m.name, type: m.type },
                        geometry: { type: "Point", coordinates: [m.lng, m.lat] },
                    })),
                };

                mapInstance.addSource("markers", {
                    type: "geojson",
                    data: geojson,
                    cluster: true,
                    clusterMaxZoom: 14,
                    clusterRadius: 50,
                });

                mapInstance.addLayer({
                    id: "clusters",
                    type: "circle",
                    source: "markers",
                    filter: ["has", "point_count"],
                    paint: {
                        "circle-color": ["step", ["get", "point_count"], "#cccccc", 5, "#cccccc", 10, "#cccccc"],
                        "circle-radius": ["step", ["get", "point_count"], 20, 5, 30, 10, 40],
                    },
                });

                mapInstance.addLayer({
                    id: "cluster-count",
                    type: "symbol",
                    source: "markers",
                    filter: ["has", "point_count"],
                    layout: {
                        "text-field": "{point_count_abbreviated}",
                        "text-font": ["Open Sans Bold"],
                        "text-size": 12,
                    },
                });

                mapInstance.addLayer({
                    id: "unclustered-point",
                    type: "circle",
                    source: "markers",
                    filter: ["!", ["has", "point_count"]],
                    paint: {
                        "circle-color": "#333333",
                        "circle-radius": 8,
                        "circle-stroke-width": 2,
                        "circle-stroke-color": "#ffffff",
                    },
                });

                // Click cluster → zoom in
                mapInstance.on("click", "clusters", async (e) => {
                    const features = mapInstance.queryRenderedFeatures(e.point, { layers: ["clusters"] });
                    const clusterId = features[0]?.properties.cluster_id;
                    const source = mapInstance.getSource("markers") as maplibregl.GeoJSONSource;
                    try {
                        const zoom = await source.getClusterExpansionZoom(clusterId);
                        mapInstance.easeTo({ center: (features[0]?.geometry as any).coordinates, zoom });
                    } catch (err) {
                        console.error("Error getting cluster expansion zoom:", err);
                    }
                });

                // Click point → popup
                mapInstance.on("click", "unclustered-point", (e) => {
                    const coordinates = (e.features![0]?.geometry as any).coordinates.slice();
                    const { name, type } = (e.features![0]?.properties || {}) as any;
                    new maplibregl.Popup()
                        .setLngLat(coordinates)
                        .setHTML(`<h3>${name}</h3><p>${type}</p>`)
                        .addTo(mapInstance);
                });

                // Cursor pointer on hover
                mapInstance.on("mouseenter", "clusters", () => { mapInstance.getCanvas().style.cursor = "pointer"; });
                mapInstance.on("mouseleave", "clusters", () => { mapInstance.getCanvas().style.cursor = ""; });
                mapInstance.on("mouseenter", "unclustered-point", () => { mapInstance.getCanvas().style.cursor = "pointer"; });
                mapInstance.on("mouseleave", "unclustered-point", () => { mapInstance.getCanvas().style.cursor = ""; });
            });
        }
    });
}

if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initMap);
} else {
    initMap();
}
```

## Usage

```html
<script type="module" src="/src/main.ts"></script>
```

```html
<div
  data-component="map-root" class="w-full h-96"
  data-scope="map"
  data-part="root"
  data-center="13.388,52.517"
  data-zoom="9.5"
  data-markers='[
    {"name":"Cafe Berlin","type":"cafe","lng":13.388,"lat":52.517},
    {"name":"Restaurant Alex","type":"restaurant","lng":13.39,"lat":52.518},
    {"name":"Coffee House","type":"cafe","lng":13.385,"lat":52.515},
    {"name":"Pizza Place","type":"restaurant","lng":13.392,"lat":52.519},
    {"name":"Burger Joint","type":"restaurant","lng":13.387,"lat":52.516},
    {"name":"Starbucks","type":"cafe","lng":13.391,"lat":52.52},
    {"name":"Sushi Bar","type":"restaurant","lng":13.395,"lat":52.522},
    {"name":"Bakery","type":"cafe","lng":13.383,"lat":52.514},
    {"name":"Italian Restaurant","type":"restaurant","lng":13.398,"lat":52.525},
    {"name":"Tea House","type":"cafe","lng":13.38,"lat":52.512}
  ]'
>
  <div data-scope="map" data-part="controls">
    <button data-scope="map" data-part="zoom-in"></button>
    <button data-scope="map" data-part="zoom-out"></button>
    <button data-scope="map" data-part="reset-north"></button>
    <button data-scope="map" data-part="locate"></button>
    <button data-scope="map" data-part="toggle-fullscreen"></button>
  </div>
</div>
```

## Examples

### Example 1

```html
<div
  data-component="map-root" class="w-full h-96"
  data-scope="map"
  data-part="root"
  data-center="13.388,52.517"
  data-zoom="9.5"
  data-markers='[
    {"name":"Cafe Berlin","type":"cafe","lng":13.388,"lat":52.517},
    {"name":"Restaurant Alex","type":"restaurant","lng":13.39,"lat":52.518},
    {"name":"Coffee House","type":"cafe","lng":13.385,"lat":52.515},
    {"name":"Pizza Place","type":"restaurant","lng":13.392,"lat":52.519},
    {"name":"Burger Joint","type":"restaurant","lng":13.387,"lat":52.516},
    {"name":"Starbucks","type":"cafe","lng":13.391,"lat":52.52},
    {"name":"Sushi Bar","type":"restaurant","lng":13.395,"lat":52.522},
    {"name":"Bakery","type":"cafe","lng":13.383,"lat":52.514},
    {"name":"Italian Restaurant","type":"restaurant","lng":13.398,"lat":52.525},
    {"name":"Tea House","type":"cafe","lng":13.38,"lat":52.512}
  ]'
>
  <div data-scope="map" data-part="controls">
    <button data-scope="map" data-part="zoom-in"></button>
    <button data-scope="map" data-part="zoom-out"></button>
    <button data-scope="map" data-part="reset-north"></button>
    <button data-scope="map" data-part="locate"></button>
    <button data-scope="map" data-part="toggle-fullscreen"></button>
  </div>
</div>
```

