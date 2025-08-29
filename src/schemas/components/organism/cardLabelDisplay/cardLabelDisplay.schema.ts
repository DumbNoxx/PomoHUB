import type { DefaultProps } from "../../defaultProps.schema";

export interface CardLabelDisplayProps extends DefaultProps {
  textTitle: string;
  nameIcon1: string;
  textLabel: string | number;
  textLabel2?: string | number;
  nameIcon2: string;
  isTimer: boolean;
  isTimerLabel: boolean;
  isLinkButton: boolean;
}
