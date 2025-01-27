import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { easing } from "maath";
import { useSnapshot } from "valtio";

import state from "../Store";

const CameraRig = ({ children }) => {
  const group = useRef();
  const snap = useSnapshot(state);

  useFrame((state, delta) => {
    const isBreakpoint = window.innerWidth <= 1260;
    const isMobile = window.innerWidth <= 600;

    // set the inintial postion
    let targetPosition = [-0.4, 0, 2];
    if (snap.intro) {
      if (isBreakpoint) targetPosition = [0, 0, 2];
      if (isMobile) targetPosition = [0, 0.2, 2.5];
    } else {
      if (isMobile) targetPosition = [0, 0, 2.5];
      else targetPosition = [0, 0, 2];
    }

    // set model camera
    easing.damp4(state.camera.position, targetPosition, 2, delta);

    //set the  model rototion
    easing.dampE(
      group.current.rotation,
      [state.pointer.y / 10, -state.pointer.x / 8, 0],
      0.4,
      delta
    );
  });

  return <group ref={group}>{children}</group>;
};

export default CameraRig;
