import React from "react";

interface InputPropsType {
    type: string, // validate type is a string that represents the type of the input element.
    placeholder?: string, // validate placeholder is a string that represents the placeholder text of the input element.
    label?: string, // validate label is a string that represents the label of the input element.
    value?: string, // validate value is a string that represents the value of the input element.
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void, // validate onChange is a function that handles the change event of the input element.
}

export default InputPropsType;