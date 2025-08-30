import { Button } from "@/components/atom/button/Button";
import { TimerWithLabel } from "@/components/molecules/timerWithLabel/TimerWithLabel";
import type { CardTimerDisplayProps } from "@/schemas/components";
import style from "./cardTimerDisplay.module.css";

export const CardTimerDisplay = ({
  className = "",
  id = "",
  minutesTimer,
  textLabel,
  buttons = [],
}: CardTimerDisplayProps) => {
  return (
    <>
      <div className={className}
        id={id}>
        <TimerWithLabel
          minutesTimer={minutesTimer}
          textLabel={textLabel}
        />
        <div className={style.containerButtons}>
          {Array.from(buttons).map((button, index) => (
            <Button
              key={index}
              isLink={button.isLink}
              icon={button.icon}
              text={button.text}
              func={button.func}
              id={button.id}
              className={button.className}
            />
          ))}
        </div>
      </div>
    </>
  );
}
