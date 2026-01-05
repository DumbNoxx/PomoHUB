export const getVariant = (variant: string): string => {
	let css = "navLink";
	switch (variant) {
		case "icon":
			css += `--${variant}`;
			break;
		case "nav":
			css += `--${variant}`;
			break;
		case "navLogin":
			css += `--${variant}`;
			break;
		default:
			css += "";
			break;
	}
	return css;
};
