import type { DefaultProps } from "../../defaultProps.schema";

export interface ButtonsWithLabelProps extends DefaultProps {
  nameIcon1: string;
  textLabel: string | number;
  textLabel2?: string | number;
  nameIcon2: string;
  isTimerLabel: boolean;
  isLinkButton: boolean;
  idLabel?: string;
  classLabel?: string;
}
