import type { DefaultProps } from "../../defaultProps.schema";

export interface ButtonProps extends DefaultProps {
  icon?: string;
  text?: string;
  func?: () => void;
  isLink: boolean;
  href?: string;
  target?: string;
}
