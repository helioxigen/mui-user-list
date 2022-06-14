import useScrollTrigger from "@mui/material/useScrollTrigger";
import React from "react";

interface ElevationScrollProps {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
  children: React.ReactElement;
  elevations: [number, number];
}

export const ElevationScroll: React.FC<ElevationScrollProps> = ({
  children,
  window,
  elevations: [min, max],
}) => {
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  return React.cloneElement(children, {
    elevation: trigger ? max : min,
  });
};
