import { formatText } from "@/helpers";
import type { LabelProps } from "@/schemas/components";

export const Label = ({
  text,
  className = "",
  id = "",
  isTimer,
}: LabelProps) => {
  let minutesLabel;
  let secondsLabel;
  if (isTimer) {
    const timer = Number(text);
    const { minutes, seconds } = formatText(timer);
    minutesLabel = minutes;
    secondsLabel = seconds;
  }
  return (
    <p
      className={className}
      id={id}>
      {
        isTimer
          ?
          `${String(minutesLabel).padStart(2, "0")}:${String(secondsLabel).padStart(2, "0")}`
          :
          `${text}`
      }
    </p>

  )
}
