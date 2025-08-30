interface ReturnFormatText {
  minutes: number;
  seconds: number;
}

export const formatText = (text: number): ReturnFormatText => {
  const time = text * 60;
  const minutes = Math.floor(time / 60);
  const seconds = Math.floor(time % 60);

  return {
    minutes,
    seconds
  }
}
