import type { DefaultProps } from "../../defaultProps.schema";

export interface TimerWithLabelProps extends DefaultProps {
  minutesTimer: number;
  textLabel: string;
  isRest?: boolean;
  restTimer: number;
}
