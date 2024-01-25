
import { PropsWithChildren } from "react";
import './Badge.css';

export interface BadgeProps extends PropsWithChildren {
  text?: string;
  className?: string;
  color?: "gray" | "red" | "yellow" | "green" | "blue" | "purple" | "pink";
}
export const Badge = ({ children, text, className, color }: BadgeProps) => (
  <span id="badge" className={!!className && !color ? className : `bg-${color}-50 text-pastel-${color} ring-${color}-600`}>
    {text}
    {children}
  </span>
);
