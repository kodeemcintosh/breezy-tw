
import { PropsWithChildren, Fragment } from "react";
import { Menu, Transition } from '@headlessui/react';
import './LinkMenu.css';

interface LinkMenuOption {
  text: string;
  href: string;
  icon?: any;
  className?: string;
}
export interface LinkMenuProps extends PropsWithChildren {
  items?: LinkMenuOption[];
  className?: string;
}
export const LinkMenu = ({ children, items, className }: LinkMenuProps) => {
  return (
    <Menu as="div" className="relative inline-block text-left">
      <Menu.Button className={`inline-flex w-full h-10 rounded-md text-lg bg-neutral-100 hover:bg-neutral-200 text-neutral-500 font-semibold items-center px-4 py-2 ${className}`}>{children}</Menu.Button>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 mt-2 max-w-56 w-fit text-neutral-500 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg">
          {items?.map(({ icon, text, href, className }) => (
            <Menu.Item>
              {({ active }) => (
                <a
                  className={`flex flex-row h-fit gap-x-2 align-middle font-semibold ${active && 'bg-neutral-200'} ${className}`}
                  href={href}
                >
                  {!!icon ? <span className="h-fit w-fit self-center">{icon}</span> : null}
                  {text}
                </a>
              )}
            </Menu.Item>
          ))}
        </Menu.Items>
      </Transition>
    </Menu>
  );
}
