// Generated by https://github.com/foxglove/schemas

import { CubeAttributes } from "./CubeAttributes";
import { Duration } from "./Duration";
import { KeyValuePair } from "./KeyValuePair";
import { Time } from "./Time";

/** A marker representing a list of cubes or rectangular prisms */
export type CubeListMarker = {
  /** Timestamp of the marker */
  timestamp: Time;

  /** Frame of reference */
  frame_id: string;

  /** Identifier for the marker. A marker will replace any prior marker on the same topic with the same `id`. */
  id: string;

  /** Length of time (relative to `timestamp`) after which the marker should be automatically removed. Zero value indicates the marker should remain visible until it is replaced or deleted. */
  lifetime: Duration;

  /** Whether the marker should keep its location in the fixed frame (false) or follow the frame specified in `frame_id` as it moves relative to the fixed frame (true) */
  frame_locked: boolean;

  /** Additional user-provided metadata associated with the marker. Keys must be unique. */
  metadata: KeyValuePair[];

  /** Attributes of each cube */
  attributes: CubeAttributes[];
};