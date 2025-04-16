import { ReactNode } from "react";

type Variant = "primary" | "secondary" | "warning";
type buttonType = "button" | "submit";

type Props = {
  children: ReactNode;
  variant?: Variant;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  type?: buttonType;
};

function Button({
  children,
  variant = "primary",
  onClick,
  type = "button",
}: Props) {
  return (
    <button type={type} onClick={onClick} className={`btn btn-${variant}`}>
      {children}
    </button>
  );
}

export default Button;
