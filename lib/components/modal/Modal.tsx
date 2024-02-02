
import { PropsWithChildren } from "react";
import './Modal.css';

export interface ModalProps extends PropsWithChildren {
  title?: string;
  className?: string;
}
export const Modal = ({ children, className, title = "" }: ModalProps) => (
  <section id="card" className={className}>
    {!!title ?
      <span className="flex w-full border-b-2">
        <h3 className="text-xl font-bold px-4 py-2">{title}</h3>
      </span> :
    null}

    <div className="w-full p-2">
      {children}
    </div>
  </section>
);
