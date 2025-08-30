import { Button } from "@/components/atom/button/Button";
import { Label } from "@/components/atom/label/Label";
import type { ButtonsWithLabelProps } from "@/schemas/components";

export const ButtonsWithLabel = ({
  nameIcon1,
  textLabel,
  nameIcon2,
  className = "",
  id = "",
  isTimerLabel,
  isLinkButton,
  idLabel = "",
  classLabel = "",
  funcButton1,
  funcButton2,
}: ButtonsWithLabelProps) => {
  return (
    <>
      <div className={className} id={id}>
        <Button
          func={funcButton1}
          icon={nameIcon1}
          isLink={isLinkButton} />
        <Label
          text={textLabel}
          id={idLabel}
          className={classLabel}
          isTimer={isTimerLabel}
        />
        <Button
          func={funcButton2}
          icon={nameIcon2}
          isLink={isLinkButton} />
      </div>
    </>
  )
}
