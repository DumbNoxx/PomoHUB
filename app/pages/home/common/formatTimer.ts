export const formatText = (timer: number): string => {
	const time = timer * 60;
	const minutes = Math.floor(time / 60);
	const seconds = Math.floor(time % 60);

	return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
};
