import type { DefaultProps } from "../../defaultProps.schema";

export interface ButtonsWithLabelProps extends DefaultProps {
  nameIcon1: string;
  textLabel: string | number;
  nameIcon2: string;
  isTimerLabel: boolean;
  isLinkButton: boolean;
  idLabel?: string;
  classLabel?: string;
  funcButton1?: () => void;
  funcButton2?: () => void;
}
