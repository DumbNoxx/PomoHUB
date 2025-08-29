import type { DefaultProps } from "../../defaultProps.schema";

export interface TimerProps extends DefaultProps {
  minutes: number;
  seconds: number;
}
