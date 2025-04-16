import { ReactNode } from "react";

type Variant = "primary" | "secondary" | "warning";

type Props = {
  children: ReactNode;
  variant?: Variant;
};

function Button({ children, variant = "primary" }: Props) {
  return <button className={`btn btn-${variant}`}>{children}</button>;
}

export default Button;
