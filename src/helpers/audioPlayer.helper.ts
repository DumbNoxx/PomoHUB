import alert from "@/assets/alert.mp3";

interface AudioPlayerReturn {
  audio: HTMLAudioElement;
}

export const audioPlayer = (): AudioPlayerReturn => {
  const audio = new Audio(alert);
  return {
    audio
  }
}
