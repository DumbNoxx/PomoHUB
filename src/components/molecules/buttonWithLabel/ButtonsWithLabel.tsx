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
  textLabel2,
  isLinkButton,
  idLabel = "",
  classLabel = "",
}: ButtonsWithLabelProps) => {
  return (
    <>
      <div className={className} id={id}>
        <Button
          icon={nameIcon1}
          isLink={isLinkButton} />
        <Label
          text={textLabel}
          text2={textLabel2}
          id={idLabel}
          className={classLabel}
          isTimer={isTimerLabel}
        />
        <Button
          icon={nameIcon2}
          isLink={isLinkButton} />
      </div>
    </>
  )
}
