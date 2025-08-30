import type { LabelProps } from "@/schemas/components";

export const Label = ({
  text,
  className = "",
  id = "",
  isTimer,
}: LabelProps) => {
  return (
    <p
      className={className}
      id={id}>
      {
        isTimer
          ?
          `${text}m`
          :
          `${text}`
      }
    </p>

  )
}
