import "./button.module.css";
import type { ButtonProps } from "@/schemas/components";

export const Button = ({
  className = "",
  id = "",
  icon,
  text,
  func,
  isLink,
  href,
  target
}: ButtonProps) => {
  const isHttp = target?.startsWith("http") ?? false;
  return (
    <>
      {
        isLink
          ?
          <a
            className={className}
            id={id}
            href={href}
            target={
              isHttp
                ?
                "_blank"
                :
                ""
            }
          >
            <img src={icon} />
            {text}
          </a>
          :
          <button
            onClick={func}
            className={className}
            id={id}>
            <img src={icon} />
            {text}
          </button>
      }
    </>
  )
}
