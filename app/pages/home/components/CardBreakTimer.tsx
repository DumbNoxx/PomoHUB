import type { MouseEventHandler } from "react";
import { IconButton } from "~/components/atoms/buttons/IconButton";

interface cardBreakTimerProps {
	title: string;
	fButton1: MouseEventHandler<HTMLButtonElement>;
	fButton2: MouseEventHandler<HTMLButtonElement>;
	time: number;
}

export const CardBreakTimer = ({
	title,
	fButton1,
	fButton2,
	time,
}: cardBreakTimerProps) => {
	return (
		<>
			<p>{title}</p>
			<div className="flex items-center justify-center gap-4">
				<IconButton icon="/icons/minus.svg" onAction={fButton1} />
				<p>{time}m</p>
				<IconButton icon="/icons/plus.svg" onAction={fButton2} />
			</div>
		</>
	);
};
