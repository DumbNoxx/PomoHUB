import type { TimerProps } from "@/schemas/components"

export const Timer = ({
  minutes,
  seconds,
  className = "",
  id = ""
}: TimerProps) => {

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
