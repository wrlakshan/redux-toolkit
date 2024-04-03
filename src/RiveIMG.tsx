import React from "react";
import { useRive } from "@rive-app/react-canvas";

export const RiveIMG = () => {
  const { rive, RiveComponent } = useRive({
    src: "https://cdn.rive.app/animations/vehicles.riv",
    stateMachines: "bumpy",
    autoplay: false,
  });

  return (
    <RiveComponent
      style={{ width: "500px", height: "500px" }}
      onMouseEnter={() => rive && rive.play()}
      onMouseLeave={() => rive && rive.pause()}
    />
  );
};
