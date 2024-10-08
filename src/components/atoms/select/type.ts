import React from "react";

interface SelectPropsType {
    value: string, // validate value is a string that represents the value of the select element.
    options: Array<{ value: string, text: string }>, // validate options is an array of objects that represent the options of the select element.
    onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void, // validate onChange is a function that handles the change event of the select element.
    label?: string, // validate label is a string that represents the label of the select element.
    classes?: string, // validate classes is a string that represents the CSS classes that will be applied to the element.
    style?: React.CSSProperties, // validate style is a CSSProperties that represents the inline styles that will be applied to the element.
    children?: React.ReactNode, // validate children is a ReactNode that represents the child elements of the element.
    ariaLabel?: string, // validate ariaLabel is a string that provides an accessible name for the element.
    role?: string, // validate role is a string that specifies the ARIA role of the element.
    ariaLabelledby?: string, // validate ariaLabelledby is a string that specifies the id of the element that labels the current element.
    ariaDescribedby?: string, // validate ariaDescribedby is a string that specifies the id of the element that describes the current element.
    ariaHidden?: boolean, // validate ariaHidden is a boolean that specifies whether the element is hidden from the accessibility tree.
    tabIndex?: number, // validate tabIndex is a number that specifies the tab order of the element.
    id?: string, // validate id is a string that specifies the id of the element.
    title?: string, // validate title is a string that specifies the title of the element.
    lang?: string, // validate lang is a string that specifies the language of the element.
    dir?: string, // validate dir is a string that specifies the text direction of the element.
    draggable?: boolean, // validate draggable is a boolean that specifies whether the element is draggable.
    contentEditable?: boolean, // validate contentEditable is a boolean that specifies whether the element is editable.
    spellCheck?: boolean, // validate spellCheck is a boolean that specifies whether the element is spell-checked.
    hidden?: boolean, // validate hidden is a boolean that specifies whether the element is hidden.
    accessKey?: string, // validate accessKey is a string that specifies the access key for the element.   
    labelClass?: string, // validate labelClass is a string that represents the CSS classes that will be applied to the label element.

}

export default SelectPropsType;