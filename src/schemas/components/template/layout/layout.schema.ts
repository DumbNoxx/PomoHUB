import type { JSX } from "react";
import type { DefaultProps } from "../../defaultProps.schema";

export interface LayoutProps extends DefaultProps {
  headerContent: JSX.Element;
  mainContent: JSX.Element;
  footerContent: JSX.Element;
}
