interface ReturnFormatText {
  minutes: number;
  seconds: number;
}

export const formatText = (text: number): ReturnFormatText => {
  const time = Number(text) * 60;
  let minutes = Math.floor(Number(time) / 60);
  let seconds = Number(time) % 60;
  return {
    minutes,
    seconds
  }
}
