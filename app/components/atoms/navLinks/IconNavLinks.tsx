import { ReactSVG } from "react-svg";
import { NavLink } from "./NavLink";

interface IconNavLinksProps {
	href: string;
	isBlank: boolean;
	icon: string;
}

export const IconNavLinks = ({ href, isBlank, icon }: IconNavLinksProps) => {
	return (
		<NavLink variant="icon" href={href} isBlank={isBlank}>
			<ReactSVG className="svg" src={icon} />
		</NavLink>
	);
};
