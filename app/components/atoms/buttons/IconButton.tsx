import type { MouseEventHandler } from "react";
import { ReactSVG } from "react-svg";
import { Button } from "./Button";

interface IconButtonProps {
	icon: string;
	onAction?: MouseEventHandler<HTMLButtonElement>;
}

export const IconButton = ({ icon, onAction }: IconButtonProps) => {
	return (
		<Button variant="icon" onAction={onAction}>
			<ReactSVG className="svg" src={icon} />
		</Button>
	);
};
