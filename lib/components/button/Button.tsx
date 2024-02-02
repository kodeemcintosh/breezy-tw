
import { PropsWithChildren } from "react";
import './Button.css';

export interface ButtonProps extends PropsWithChildren {
  onClick: any;
  text?: string;
  className?: string;
  disabled?: boolean;
}
export const Button = ({ children, text, className, onClick, disabled = false }: ButtonProps) => (
  <button
    onClick={onClick}
    className={`flex flex-row gap-x-2 ${className}`}
    disabled={disabled}
    >
    {text}
    {children}
  </button>
);
