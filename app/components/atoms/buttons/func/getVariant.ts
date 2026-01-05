export const getVariant = (variant: string): string => {
	let css = "btn";
	switch (variant) {
		case "icon":
			css += `--${variant}`;
			break;
		case "timer":
			css += `--${variant}`;
			break;
		default:
			css += "";
			break;
	}
	return css;
};
