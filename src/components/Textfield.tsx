import React from "react";
interface Fullname{
    label:string,
    inputProps:any,
    register:any,
    onChange:any,
    value:string
}

const Textfield = ({
  label,
  inputProps,
  onChange,
  value,
  register
}:Fullname) => {
  return (
    <>
      <div className="flex flex-col">
        <label className="mb-2  text-base text-gray-800">{label}</label>
        <input
          className="bg-gray-300 py-200 px-3 border-2 outline-none"
          {...inputProps}
          {...register(label, {
            required: true,
            maxLength: 20,
            minLength: 1,
            pattern: /^[A-Za-z]+$/i,
          })}
        />
      </div>
    </>
  );
};
export default Textfield;
