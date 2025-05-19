import React from "react";
import { ProgressTrackingProps } from "./Models";
import ProgressTrackingView from "./view";

const ProgressTracking = ({}: ProgressTrackingProps) => {
  return (
    <>
      <ProgressTrackingView />
    </>
  );
};

export default ProgressTracking;
