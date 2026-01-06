import type { ReactNode } from "react";
import { getVariant } from "./func/getVariant";

interface NavLinkProps {
	href: string;
	isBlank: boolean;
	children: ReactNode;
	variant: string;
}

export const NavLink = ({ href, isBlank, children, variant }: NavLinkProps) => {
	const nVariant = getVariant(variant);

	return (
		<a className={nVariant} href={href} target={isBlank ? "_blank" : ""}>
			{children}
		</a>
	);
};
