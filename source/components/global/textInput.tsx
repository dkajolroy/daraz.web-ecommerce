import React from "react";

type props = {
  onChange?: React.ChangeEventHandler<HTMLInputElement> | undefined;
  type?: React.HTMLInputTypeAttribute | undefined;
  placeholder?: string | undefined;
  className?: string | undefined;
};

function TextInput({ onChange, type, placeholder, className }: props) {
  return (
    <>
      <input
        className={`focus:outline-none w-full px-2 py-1 ${
          className ? className : "bg-slate-200 text-xs border-none"
        }`}
        onChange={onChange}
        type={type || "text"}
        placeholder={placeholder || ""}
      />
    </>
  );
}

export default TextInput;
