// Generated by https://github.com/foxglove/foxglove-sdk
// Options: {}

import { Color } from "./Color";
import { Pose } from "./Pose";
import { Vector3 } from "./Vector3";

/** A primitive representing a cylinder, elliptic cylinder, or truncated cone */
export type CylinderPrimitive = {
  /** Position of the center of the cylinder and orientation of the cylinder. The flat face(s) are perpendicular to the z-axis. */
  pose: Pose;

  /** Size of the cylinder's bounding box */
  size: Vector3;

  /** 0-1, ratio of the diameter of the cylinder's bottom face (min z) to the bottom of the bounding box */
  bottom_scale: number;

  /** 0-1, ratio of the diameter of the cylinder's top face (max z) to the top of the bounding box */
  top_scale: number;

  /** Color of the cylinder */
  color: Color;
};
