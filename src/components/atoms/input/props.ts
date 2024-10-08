import React from "react";

interface InputPropsType {
  type: string; // validate type is a string that represents the type of the input element.
  placeholder?: string; // validate placeholder is a string that represents the placeholder text of the input element.
  label?: string; // validate label is a string that represents the label of the input element.
  value?: string; // validate value is a string that represents the value of the input element.
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void; // validate onChange is a function that handles the change event of the input element.
  classes?: string; // validate classes is a string that represents the CSS classes that will be applied to the element.
  style?: React.CSSProperties; // validate style is a CSSProperties that represents the inline styles that will be applied to the element.
  children?: React.ReactNode; // validate children is a ReactNode that represents the child elements of the element.
  ariaLabel?: string; // validate ariaLabel is a string that provides an accessible name for the element.
  role?: string; // validate role is a string that specifies the ARIA role of the element.
  ariaLabelledby?: string; // validate ariaLabelledby is a string that specifies the id of the element that labels the current element.
  ariaDescribedby?: string; // validate ariaDescribedby is a string that specifies the id of the element that describes the current element.
  ariaHidden?: boolean; // validate ariaHidden is a boolean that specifies whether the element is hidden from the accessibility tree.
  tabIndex?: number; // validate tabIndex is a number that specifies the tab order of the element.
  id?: string; // validate id is a string that specifies the id of the element.
  title?: string; // validate title is a string that specifies the title of the element.
  lang?: string; // validate lang is a string that specifies the language of the element.
  dir?: string; // validate dir is a string that specifies the text direction of the element.
  draggable?: boolean; // validate draggable is a boolean that specifies whether the element is draggable.
  contentEditable?: boolean; // validate contentEditable is a boolean that specifies whether the element is editable.
  spellCheck?: boolean; // validate spellCheck is a boolean that specifies whether the element is spell-checked.
  hidden?: boolean; // validate hidden is a boolean that specifies whether the element is hidden.
  accessKey?: string; // validate accessKey is a string that specifies the access key for the element.
  autoCapitalize?: string; // validate autoCapitalize is a string that specifies the auto-capitalization behavior of the element.
  autoCorrect?: string; // validate autoCorrect is a string that specifies the auto-correction behavior of the element.
  autoSave?: string; // validate autoSave is a string that specifies the auto-save behavior of the element.
  autoComplete?: string; // validate autoComplete is a string that specifies the auto-complete behavior of the element.
  autoFocus?: boolean; // validate autoFocus is a boolean that specifies whether the element should automatically get focus when the page loads.
  disabled?: boolean; // validate disabled is a boolean that specifies whether the element is disabled.
  form?: string; // validate form is a string that specifies the form id of the element.
  formAction?: string; // validate formAction is a string that specifies the form action of the element.
  formEncType?: string; // validate formEncType is a string that specifies the form encoding type of the element.
  formMethod?: string; // validate formMethod is a string that specifies the form method of the element.
  formNoValidate?: boolean; // validate formNoValidate is a boolean that specifies whether the form should not be validated when submitted.
  formTarget?: string; // validate formTarget is a string that specifies the form target of the element.
  maxLength?: number; // validate maxLength is a number that specifies the maximum length of the input value.
  minLength?: number; // validate minLength is a number that specifies the minimum length of the input value.
  name?: string; // validate name is a string that specifies the name of the input element.
  pattern?: string; // validate pattern is a string that specifies the pattern of the input value.
  readOnly?: boolean; // validate readOnly is a boolean that specifies whether the input element is read-only.
  required?: boolean; // validate required is a boolean that specifies whether the input element is required.
  size?: number; // validate size is a number that specifies the size of the input element.
  step?: number; // validate step is a number that specifies the step of the input element.
  inputMode?: string; // validate inputMode is a string that specifies the input mode of the input element.
  list?: string; // validate list is a string that specifies the id of the datalist element.
  max?: number; // validate max is a number that specifies the maximum value of the input element.
  min?: number; // validate min is a number that specifies the minimum value of the input element.
  multiple?: boolean; // validate multiple is a boolean that specifies whether the input element can accept multiple values.
  patternMismatch?: boolean; // validate patternMismatch is a boolean that specifies whether the input value does not match the specified pattern.
  rangeOverflow?: boolean; // validate rangeOverflow is a boolean that specifies whether the input value is greater than the maximum value.
  rangeUnderflow?: boolean; // validate rangeUnderflow is a boolean that specifies whether the input value is less than the minimum value.
  stepMismatch?: boolean; // validate stepMismatch is a boolean that specifies whether the input value is not a valid step.
  tooLong?: boolean; // validate tooLong is a boolean that specifies whether the input value is too long.
  tooShort?: boolean; // validate tooShort is a boolean that specifies whether the input value is too short.
  typeMismatch?: boolean; // validate typeMismatch is a boolean that specifies whether the input value is not a valid type.
  valid?: boolean; // validate valid is a boolean that specifies whether the input value is valid.
  valueMissing?: boolean; // validate valueMissing is a boolean that specifies whether the input value is missing.
  customError?: boolean; // validate customError is a boolean that specifies whether a custom error has occurred.
  validationMessage?: string; // validate validationMessage is a string that specifies the validation message of the input element.
  validity?: ValidityState; // validate validity is an object that specifies the validity state of the input element.
  willValidate?: boolean; // validate willValidate is a boolean that specifies whether the input element will be validated.
  checkValidity?: () => boolean; // validate checkValidity is a function that checks the validity of the input element.
  reportValidity?: () => boolean; // validate reportValidity is a function that reports the validity of the input element.
  setCustomValidity?: (error: string) => void; // validate setCustomValidity is a function that sets a custom validity message for the input element.
  selectionStart?: number; // validate selectionStart is a number that specifies the start position of the selected text.
  selectionEnd?: number; // validate selectionEnd is a number that specifies the end position of the selected text.
  selectionDirection?: "forward" | "backward" | "none"; // validate selectionDirection is a string that specifies the direction of the selected text.
  select?: () => void; // validate select is a function that selects the input element.
  setRangeText?: (replacement: string, start?: number, end?: number, selectionMode?: string) => void; // validate setRangeText is a function that sets the range text of the input element.
  setSelectionRange?: (start: number, end: number, direction?: "forward" | "backward" | "none") => void; // validate setSelectionRange is a function that sets the selection range of the input element.
  addEventListener?: (type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions) => void; // validate addEventListener is a function that adds an event listener to the input element.
  removeEventListener?: (type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions) => void; // validate removeEventListener is a function that removes an event listener from the input element.
  itemProp?: string; // validate itemProp is a string that specifies the item property of the element.
  itemScope?: boolean; // validate itemScope is a boolean that specifies the item scope of the element.
  itemType?: string; // validate itemType is a string that specifies the item type of the element.
  itemID?: string; // validate itemID is a string that specifies the item id of the element.
  itemRef?: string; // validate itemRef is a string that specifies the item reference of the element.
  listId?: string; // validate listId is a string that represents the id of the datalist element.
  labelClass?: string; // validate labelClass is a string that represents the CSS classes that will be applied to the label element.
}

export default InputPropsType;
