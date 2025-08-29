import type { DefaultProps } from "../../defaultProps.schema";


export interface LabelProps extends DefaultProps {
  text: string | number;
  text2?: string | number;
  isTimer: boolean;
}

