import alert from "~/assets/alert.mp3";

interface AudioPlayerReturn {
	audio: HTMLAudioElement;
}

export const audioPlayer = (): AudioPlayerReturn => {
	if (typeof window === "undefined") {
		return {
			audio: {} as HTMLAudioElement,
		};
	}
	const audio = new Audio(alert);
	return {
		audio,
	};
};
