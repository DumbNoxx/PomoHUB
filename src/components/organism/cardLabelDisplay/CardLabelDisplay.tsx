import { Label } from "@/components/atom/label/Label"
import { ButtonsWithLabel } from "@/components/molecules/buttonWithLabel/ButtonsWithLabel"
import type { CardLabelDisplayProps } from "@/schemas/components"
import style from "./cardLabelDisplay.module.css";

export const CardLabelDisplay = ({
  textTitle,
  className = "",
  id = "",
  nameIcon1,
  textLabel,
  nameIcon2,
  isTimer,
  isTimerLabel,
  isLinkButton,
  funcButton1,
  funcButton2,
  classLabelButton = "",
}: CardLabelDisplayProps) => {
  return (
    <>
      <div className={`${style.cardLabelDisplay} ${style}.${className}`}
        id={id}>
        <Label
          className="title-card"
          isTimer={isTimer}
          text={textTitle} />
        <ButtonsWithLabel
          classButton="test"
          className={classLabelButton}
          nameIcon1={nameIcon1}
          textLabel={textLabel}
          nameIcon2={nameIcon2}
          isTimerLabel={isTimerLabel}
          isLinkButton={isLinkButton}
          funcButton1={funcButton1}
          funcButton2={funcButton2}
        />
      </div>
    </>
  );
} 
