import React from "react";
import InputPropsType from "./props"

const Input = ({ 
    type, 
    placeholder, 
    label,
    value, 
    onChange,
  }: InputPropsType) => {
  return (
    <>
      <label>{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </>
    
  );
}

export default Input;