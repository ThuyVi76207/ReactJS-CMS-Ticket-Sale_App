import React from "react";
interface CommonInput {
  name: string;
  field: string;
  value: string;
  onChange: any;
  type?: string;
  maxLength: number;
  placeholder: string;
  required: boolean;
  error: String;
}

export default function CommonInput({
  name,
  field,
  value,
  onChange,
  type = "text",
  maxLength = 50,
  placeholder,
  required,
  error = "",
}: CommonInput) {
  return (
    <div>
      <label className="text-[16px] font-semibold opacity-70" htmlFor={name}>
        {field}
      </label>
      {required && <span className="text-red-600 text-[16px]">*</span>}
      <input
        id={name}
        value={value}
        onChange={onChange}
        type={type}
        placeholder={placeholder}
        maxLength={maxLength}
        className="mt-[5px] w-full rounded-[8px] px-2 border text-[16px] font-medium border-[#A5A8B1] placeholder-shown:border-[#A5A8B1] placeholder:opacity-70 focus:outline-none h-[40px]"
      ></input>
      {error && <p className="text-red-600">{error}</p>}
    </div>
  );
}
