import type { LabelProps } from "@/schemas/components";

export const Label = ({
  text,
  text2,
  className = "",
  id = "",
  isTimer,
}: LabelProps) => {
  const minutes = String(text).padStart(2, "0");
  const seconds = String(text2).padStart(2, "0");
  return (
    <p
      className={className}
      id={id}>
      {
        isTimer
          ?
          `${minutes}:${seconds}`
          :
          `${text}`
      }
    </p>

  )
}
