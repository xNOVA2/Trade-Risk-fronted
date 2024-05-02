import React from "react";

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  // name: string;
  placeholder: string;
  type: string;
}

export const FloatingInput = ({
  name,
  placeholder,
  type,
  ...fields
}: Props) => {
  return (
    <div className="relative w-full">
      <input
        {...fields}
        type={type || "text"}
        id={name}
        className="block px-2.5 pb-2.5 pt-2.5 w-full text-sm text-gray-900 bg-transparent rounded-lg border border-borderCol appearance-none focus:outline-none focus:ring-0 focus:border-text peer"
        placeholder=" "
        name={name}
      />
      <label
        htmlFor={name}
        className="absolute text-sm text-gray-500  duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white  px-2 peer-focus:px-2 peer-focus:text-text peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
      >
        {placeholder}
      </label>
    </div>
  );
};
