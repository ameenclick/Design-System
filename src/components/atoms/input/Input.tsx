
//import PropTypes from "prop-types";
import InputPropsType from "./props";

const Input = ({
  type,
  placeholder,
  label,
  value,
  onChange,
  id,
  classes,
  style,
  children,
  ariaLabel,
  role,
  ariaLabelledby,
  ariaDescribedby,
  ariaHidden,
  tabIndex,
  title,
  lang,
  dir,
  draggable,
  contentEditable,
  spellCheck,
  hidden,
  accessKey,
  autoCapitalize,
  autoCorrect,
  autoSave,
  autoComplete,
  autoFocus,
  disabled,
  form,
  formAction,
  formEncType,
  formMethod,
  formNoValidate,
  formTarget,
  maxLength,
  minLength,
  name,
  pattern,
  readOnly,
  required,
  size,
  step,
  list,
  max,
  min,
  multiple,
  valid,
 
}: InputPropsType) => {
  return (
    <>
      {label && <label htmlFor={id} className={classes}>{label}</label>}
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        id={id}
        className={classes}
        style={style}
        aria-label={ariaLabel}
        role={role}
        aria-labelledby={ariaLabelledby}
        aria-describedby={ariaDescribedby}
        aria-hidden={ariaHidden}
        tabIndex={tabIndex}
        title={title}
        lang={lang}
        dir={dir}
        draggable={draggable}
        contentEditable={contentEditable}
        spellCheck={spellCheck}
        hidden={hidden}
        accessKey={accessKey}
        autoCapitalize={autoCapitalize}
        autoCorrect={autoCorrect}
        autoSave={autoSave}
        autoComplete={autoComplete}
        autoFocus={autoFocus}
        disabled={disabled}
        form={form}
        formAction={formAction}
        formEncType={formEncType}
        formMethod={formMethod}
        formNoValidate={formNoValidate}
        formTarget={formTarget}
        maxLength={maxLength}
        minLength={minLength}
        name={name}
        pattern={pattern}
        readOnly={readOnly}
        required={required}
        size={size}
        step={step}
        list={list}
        max={max}
        min={min}
        multiple={multiple}
        aria-invalid={!valid}
        aria-required={required}
      >
        {children}
      </input>
    </>
  );
};

// Input.propTypes = {
//   type: PropTypes.string.isRequired,
//   placeholder: PropTypes.string,
//   label: PropTypes.string,
//   value: PropTypes.string.isRequired,
//   onChange: PropTypes.func.isRequired,
//   id: PropTypes.string,
//   classes: PropTypes.string,
//   style: PropTypes.object,
//   children: PropTypes.node,
//   ariaLabel: PropTypes.string,
//   role: PropTypes.string,
//   ariaLabelledby: PropTypes.string,
//   ariaDescribedby: PropTypes.string,
//   ariaHidden: PropTypes.bool,
//   tabIndex: PropTypes.number,
//   title: PropTypes.string,
//   lang: PropTypes.string,
//   dir: PropTypes.string,
//   draggable: PropTypes.bool,
//   contentEditable: PropTypes.bool,
//   spellCheck: PropTypes.bool,
//   hidden: PropTypes.bool,
//   accessKey: PropTypes.string,
//   autoCapitalize: PropTypes.string,
//   autoCorrect: PropTypes.string,
//   autoSave: PropTypes.string,
//   autoComplete: PropTypes.string,
//   autoFocus: PropTypes.bool,
//   disabled: PropTypes.bool,
//   form: PropTypes.string,
//   formAction: PropTypes.string,
//   formEncType: PropTypes.string,
//   formMethod: PropTypes.string,
//   formNoValidate: PropTypes.bool,
//   formTarget: PropTypes.string,
//   maxLength: PropTypes.number,
//   minLength: PropTypes.number,
//   name: PropTypes.string,
//   pattern: PropTypes.string,
//   readOnly: PropTypes.bool,
//   required: PropTypes.bool,
//   size: PropTypes.number,
//   step: PropTypes.number,
//   list: PropTypes.string,
//   max: PropTypes.string,
//   min: PropTypes.string,
//   multiple: PropTypes.bool,
//   patternMismatch: PropTypes.bool,
//   rangeOverflow: PropTypes.bool,
//   rangeUnderflow: PropTypes.bool,
//   stepMismatch: PropTypes.bool,
//   tooLong: PropTypes.bool,
//   tooShort: PropTypes.bool,
//   typeMismatch: PropTypes.bool,
//   valid: PropTypes.bool,
//   valueMissing: PropTypes.bool,
//   customError: PropTypes.bool,
//   validationMessage: PropTypes.string,
//   validity: PropTypes.object,
//   willValidate: PropTypes.bool,
//   checkValidity: PropTypes.func,
//   reportValidity: PropTypes.func,
//   setCustomValidity: PropTypes.func,
//   select: PropTypes.func,
//   selectionDirection: PropTypes.string,
//   selectionStart: PropTypes.number,
//   selectionEnd: PropTypes.number,
//   setRangeText: PropTypes.func,
//   setSelectionRange: PropTypes.func,
//   addEventListener: PropTypes.func,
//   removeEventListener: PropTypes.func,
// };

export default Input;
