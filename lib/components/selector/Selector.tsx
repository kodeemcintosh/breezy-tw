
import { PropsWithChildren } from "react";
import { Menu } from '@headlessui/react';
import './Selector.css';

interface SelectorOption {
  values: any[];
  fn: (value: any) => void;
}
export interface SelectorProps extends PropsWithChildren {
  className?: string;
  items?: SelectorOption[];
}
export const Selector = ({ children, className, items }: SelectorProps) => {
  return (
    <Menu>
      <Menu.Button className={className}>{children}</Menu.Button>

      <Menu.Items className="flex flex-col w-full">
        {items?.map((item, index) => (
            <Menu.Item key={index}>
              {({ active }) => (
                <span
                  className={`flex flex-row ${active && 'bg-blue-500'}`}
                  onClick={item.fn}
                >
                  {item.values}
                </span>
              )}
            </Menu.Item>
          ))}
      </Menu.Items>
    </Menu>
  );
}
