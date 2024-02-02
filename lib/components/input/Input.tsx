
import { useState, PropsWithChildren } from "react";
import { HiXCircle } from "react-icons/hi"
import './Input.css';

export interface InputProps extends PropsWithChildren {
  placeholder?: string;
  className?: string;
  clearable?: boolean;
}
export const Input = ({ children = [], className, placeholder, clearable = false }: InputProps) => {
  const [input, setInput] = useState<string>("")
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => setInput(e.target.value);
  const handleClear = () => setInput("");

  return (
    <span>
      <input
        className={className}
        value={input}
        onChange={handleChange}
        placeholder={placeholder}
        />

      {clearable && input.length > 0 ? (<HiXCircle onClick={handleClear} className="size-5" />) : null}
    </span>
  );
}
