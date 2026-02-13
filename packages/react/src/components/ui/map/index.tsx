import "maplibre-gl/dist/maplibre-gl.css";
import maplibregl, { type MapOptions } from "maplibre-gl";
import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Plus, Minus, MapPin, Compass, Expand, X } from "lucide-react";
import type { FeatureCollection, Point } from "geojson";
import { cn } from "@midoneui/core/utils/cn";
import { map } from "@midoneui/core/styles/map.styles";

function Map({
  className,
  markers,
  ...props
}: Partial<MapOptions> & {
  className?: string;
  markers?: FeatureCollection<Point>;
}) {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstance = useRef<maplibregl.Map>(null);
  const [isFullscreen, setIsFullscreen] = useState(false);

  useEffect(() => {
    if (!mapRef.current) return;

    // Filter out undefined values from props
    const mapOptions = Object.fromEntries(
      Object.entries(props).filter(([_, value]) => value !== undefined)
    );

    mapInstance.current = new maplibregl.Map({
      ...mapOptions,
      style: "https://tiles.openfreemap.org/styles/positron",
      container: mapRef.current,
    });

    markers &&
      mapInstance.current.on("load", () => {
        if (!mapInstance.current) return;

        // Add source with clustering
        mapInstance.current.addSource("markers", {
          type: "geojson",
          data: markers,
          cluster: true,
          clusterMaxZoom: 14,
          clusterRadius: 50,
        });

        // Layer for clusters (circles)
        mapInstance.current.addLayer({
          id: "clusters",
          type: "circle",
          source: "markers",
          filter: ["has", "point_count"],
          paint: {
            "circle-color": [
              "step",
              ["get", "point_count"],
              "#cccccc",
              5,
              "#cccccc",
              10,
              "#cccccc",
            ],
            "circle-radius": [
              "step",
              ["get", "point_count"],
              20,
              5,
              30,
              10,
              40,
            ],
          },
        });

        // Layer for cluster count numbers
        mapInstance.current.addLayer({
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

        // Layer for individual points (unclustered)
        mapInstance.current.addLayer({
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

        // Click on cluster to zoom in
        mapInstance.current.on("click", "clusters", async (e) => {
          if (!mapInstance.current) return;

          const features = mapInstance.current.queryRenderedFeatures(e.point, {
            layers: ["clusters"],
          });

          const clusterId = features[0].properties.cluster_id;
          const source = mapInstance.current.getSource(
            "markers"
          ) as maplibregl.GeoJSONSource;

          try {
            const zoom = await source.getClusterExpansionZoom(clusterId);

            mapInstance.current.easeTo({
              center: (features[0].geometry as any).coordinates,
              zoom: zoom,
            });
          } catch (err) {
            console.error("Error getting cluster expansion zoom:", err);
          }
        });

        // Click on individual point to show popup
        mapInstance.current.on("click", "unclustered-point", (e) => {
          if (!mapInstance.current || !e.features) return;

          const coordinates = (
            e.features[0].geometry as any
          ).coordinates.slice();
          const { name, type } = e.features[0].properties;

          new maplibregl.Popup()
            .setLngLat(coordinates)
            .setHTML(`<h3>${name}</h3><p>${type}</p>`)
            .addTo(mapInstance.current);
        });

        // Change cursor on hover cluster/point
        mapInstance.current.on("mouseenter", "clusters", () => {
          if (!mapInstance.current) return;
          mapInstance.current.getCanvas().style.cursor = "pointer";
        });
        mapInstance.current.on("mouseleave", "clusters", () => {
          if (!mapInstance.current) return;
          mapInstance.current.getCanvas().style.cursor = "";
        });
        mapInstance.current.on("mouseenter", "unclustered-point", () => {
          if (!mapInstance.current) return;
          mapInstance.current.getCanvas().style.cursor = "pointer";
        });
        mapInstance.current.on("mouseleave", "unclustered-point", () => {
          if (!mapInstance.current) return;
          mapInstance.current.getCanvas().style.cursor = "";
        });
      });

    // Cleanup on unmount
    return () => {
      mapInstance.current?.remove();
    };
  }, [markers, props]);

  const zoomIn = () => {
    mapInstance.current?.zoomIn();
  };

  const zoomOut = () => {
    mapInstance.current?.zoomOut();
  };

  const resetNorth = () => {
    mapInstance.current?.easeTo({ bearing: 0, pitch: 0 });
  };

  const locateMe = () => {
    if (!navigator.geolocation) {
      alert("Geolocation is not supported by your browser");
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { longitude, latitude } = position.coords;
        mapInstance.current?.flyTo({
          center: [longitude, latitude],
          zoom: 14,
        });

        if (mapInstance.current) {
          new maplibregl.Marker({ color: "hsl(var(--foreground))" })
            .setLngLat([longitude, latitude])
            .addTo(mapInstance.current);
        }
      },
      (error) => {
        alert("Failed to get location: " + error.message);
      }
    );
  };

  const toggleFullscreen = () => {
    if (!mapRef.current) return;

    if (!isFullscreen) {
      mapRef.current.requestFullscreen?.();
    } else {
      document.exitFullscreen?.();
    }
    setIsFullscreen(!isFullscreen);
  };

  return (
    <div
      data-scope="map"
      data-part="root"
      ref={mapRef}
      className={cn(map, className)}
    >
      <div data-scope="map" data-part="controls">
        <Button
          data-scope="map"
          data-part="zoom-in"
          onClick={zoomIn}
          variant="ghost"
          size="sm"
        >
          <Plus />
        </Button>
        <Button
          data-scope="map"
          data-part="zoom-out"
          onClick={zoomOut}
          variant="ghost"
          size="sm"
        >
          <Minus />
        </Button>
        <Button
          data-scope="map"
          data-part="reset-north"
          onClick={resetNorth}
          variant="ghost"
          size="sm"
        >
          <Compass />
        </Button>
        <Button
          data-scope="map"
          data-part="locate"
          onClick={locateMe}
          variant="ghost"
          size="sm"
        >
          <MapPin />
        </Button>
        <Button
          data-scope="map"
          data-part="toggle-fullscreen"
          onClick={toggleFullscreen}
          variant="ghost"
          size="sm"
        >
          {isFullscreen ? <X /> : <Expand />}
        </Button>
      </div>
    </div>
  );
}

export { Map };
