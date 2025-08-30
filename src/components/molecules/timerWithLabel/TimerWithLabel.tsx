import { Label } from "@/components/atom/label/Label"
import { Timer } from "@/components/atom/timer/Timer"
import type { TimerWithLabelProps } from "@/schemas/components"
import style from "./timerWithLabel.module.css";

export const TimerWithLabel = ({
  minutesTimer,
  textLabel,
  id = "",
}: TimerWithLabelProps) => {
  return (
    <>
      <div className={style.timerLabel}
        id={id}>
        <Timer
          timer={minutesTimer}
        />
        <Label
          isTimer={false}
          text={textLabel} />
      </div>
    </>
  )
}
