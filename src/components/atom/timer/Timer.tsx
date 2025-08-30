import { formatText } from "@/helpers"
import type { TimerProps } from "@/schemas/components"

export const Timer = ({
  timer,
  className = "",
  id = ""
}: TimerProps) => {
  const { minutes, seconds } = formatText(timer);
  return (
    <>
      <p
        className={className}
        id={id}>
        {String(minutes).padStart(2, "0")}
        :
        {String(seconds).padStart(2, "0")}
      </p>
    </>
  )
}
