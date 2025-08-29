import { Label } from "@/components/atom/label/Label"
import { ButtonsWithLabel } from "@/components/molecules/buttonWithLabel/ButtonsWithLabel"
import type { CardLabelDisplayProps } from "@/schemas/components"

export const CardLabelDisplay = ({
  textTitle,
  nameIcon1,
  textLabel,
  textLabel2,
  nameIcon2,
  isTimer,
  isTimerLabel,
  isLinkButton,
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
          textLabel2={textLabel2}
          isTimerLabel={isTimerLabel}
          isLinkButton={isLinkButton}
        />
      </div>
    </>
  );
} 
