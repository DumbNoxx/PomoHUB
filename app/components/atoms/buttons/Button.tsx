import type { MouseEventHandler, ReactNode } from "react";
import { getVariant } from "./func/getVariant";

interface Props {
	variant: string;
	children: ReactNode;
	onAction?: MouseEventHandler<HTMLButtonElement>;
}

export const Button = ({ variant, children, onAction }: Props) => {
	const bVariant = getVariant(variant);

	return (
		<button type="button" className={bVariant} onClick={onAction}>
			{children}
		</button>
	);
};
