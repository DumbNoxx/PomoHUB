import { Button } from "@/components/atom/button/Button";
import { TimerWithLabel } from "@/components/molecules/timerWithLabel/TimerWithLabel";
import type { CardTimerDisplayProps } from "@/schemas/components";

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
        <div>
          {Array.from(buttons).map((button, index) => (
            <Button
              key={index}
              isLink={button.isLink}
              icon={button.icon}
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
