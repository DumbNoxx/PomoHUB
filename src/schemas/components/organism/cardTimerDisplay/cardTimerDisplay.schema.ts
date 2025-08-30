import type { DefaultProps } from "../../defaultProps.schema";
import type { TimerWithLabelProps } from "../../molecules";
import type { ButtonProps } from "../../atom";

export interface CardTimerDisplayProps extends DefaultProps, TimerWithLabelProps {
  buttons: ButtonProps[];
}
