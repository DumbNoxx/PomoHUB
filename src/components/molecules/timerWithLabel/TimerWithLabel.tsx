import { Label } from "@/components/atom/label/Label"
import { Timer } from "@/components/atom/timer/Timer"
import type { TimerWithLabelProps } from "@/schemas/components"

export const TimerWithLabel = ({
  minutesTimer,
  textLabel,
  className = "",
  id = "",
  isRest,
}: TimerWithLabelProps) => {
  return (
    <>
      <div className={className}
        id={id}>
        <Label
          isTimer={false}
          text={textLabel} />
        {
          isRest
            ?
            ""
            :
            <Timer
              timer={minutesTimer}
            />
        }
      </div>
    </>
  )
}
