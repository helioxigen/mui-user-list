import React, { useEffect, useRef } from "react";

interface MapProps {
  center: google.maps.LatLngLiteral;
  zoom: number;
}

export const Map: React.FC<MapProps> = ({ center, zoom }) => {
  const ref = useRef();

  useEffect(() => {
    new window.google.maps.Map(ref.current, {
      center,
      zoom,
      zoomControl: false,
      streetViewControl: false,
      mapTypeControl: false,
    });
  });

  return <div ref={ref} id="map" style={{ height: 200 }} />;
};
