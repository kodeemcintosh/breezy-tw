
import { PropsWithChildren } from "react";

export interface BadgeProps extends PropsWithChildren {
  text?: string;
  className?: string;
  color?: "gray" | "red" | "yellow" | "green" | "blue" | "purple" | "pink";
}
export const Badge = ({ children, text, className, color }: BadgeProps) => {
  const styles = !!className && !color ? className : `bg-${color}-50 text-pastel-${color} ring-${color}-600`
  console.log({ styles })
  return (
    <span className={`${styles} inline-flex items-center rounded-md px-2 py-1 sm:text-2xs lg:text-xs font-medium ring-1 ring-inset`}>
      {text}
      {children}
    </span>
  );
}
