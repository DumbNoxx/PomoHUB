import { Label } from "@/components/atom/label/Label"
import { ButtonsWithLabel } from "@/components/molecules/buttonWithLabel/ButtonsWithLabel"
import type { CardLabelDisplayProps } from "@/schemas/components"

export const CardLabelDisplay = ({
  textTitle,
  nameIcon1,
  textLabel,
  nameIcon2,
  isTimer,
  isTimerLabel,
  isLinkButton,
  funcButton1,
  funcButton2,
}: CardLabelDisplayProps) => {
  return (
    <>
      <div>
        <Label
          className="title-card"
          isTimer={isTimer}
          text={textTitle} />
        <ButtonsWithLabel
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
