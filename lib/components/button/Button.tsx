
import { PropsWithChildren } from "react";
import './Button.css';

export interface ButtonProps extends PropsWithChildren {
  text?: string;
  className?: string;
  color?: "gray" | "red" | "yellow" | "green" | "blue" | "purple" | "pink";
}
export const Button = ({ children, text, className, color }: ButtonProps) => (
  <span id="badge" className={!!className && !color ? className : `bg-${color}-100 text-pastel-${color} ring-${color}-600`}>
    {text}
    {children}
  </span>
);
