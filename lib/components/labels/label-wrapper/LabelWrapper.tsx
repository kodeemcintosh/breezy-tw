
import { PropsWithChildren } from "react";
import './LabelWrapper.css';

export interface LabelWrapperProps extends PropsWithChildren {
  text?: string;
  className?: string;
  color?: "gray" | "red" | "yellow" | "green" | "blue" | "purple" | "pink";
}
export const LabelWrapper = ({ children, text, className, color }: LabelWrapperProps) => {
  const styles = !!className && !color ? className : `bg-${color}-50 text-pastel-${color} ring-${color}-600`
  console.log({ styles })
  return (
    <span id="badge" className={styles}>
      {text}
      {children}
    </span>
  );
}
