
import { PropsWithChildren } from "react";
import './Label.css';

export interface LabelProps {
  children?: PropsWithChildren<any>;
  text?: string;
  position?: 'HORIZONTAL' | 'VERTICAL';
  className?: string;
}
export const Label = ({ children = [], text, className, position = 'HORIZONTAL' }: LabelProps) => {
  const positionStyle = position === 'HORIZONTAL' ? 'label-wrapper-row' : 'label-wrapper-column';
  if(children.length === 0) {
    return (
      <span id="label" className={className}>{text}</span>
    )
  }

  return (
    <span id="label" className={positionStyle}>
      <span className={className}>
        {text}
      </span>
      {children}
    </span>
  );
}
