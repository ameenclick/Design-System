import SelectPropsType from "./type";

const Select = ({
    value,
    options,
    onChange,
    label,
    classes,
    style,
    children,
    ariaLabel,
    role,
    ariaLabelledby,
    ariaDescribedby,
    ariaHidden,
    tabIndex,
    id,
    title,
    lang,
    dir,
    draggable,
    contentEditable,
    spellCheck,
    hidden,
    accessKey,
    labelClass
}: SelectPropsType) => {
    return (
    <>
        {label && <label htmlFor={id} className={labelClass}>{label}</label>}
        <select
            value={value}
            onChange={onChange}
            className={classes}
            style={style}
            aria-label={ariaLabel}
            role={role}
            aria-labelledby={ariaLabelledby}
            aria-describedby={ariaDescribedby}
            aria-hidden={ariaHidden}
            tabIndex={tabIndex}
            id={id}
            title={title}
            lang={lang}
            dir={dir}
            draggable={draggable}
            contentEditable={contentEditable}
            spellCheck={spellCheck}
            hidden={hidden}
            accessKey={accessKey}
        >
            {options.map((option) => (
                <option key={option.value} value={option.value}>
                    {option.text}
                </option>
            ))}
        </select>
        {children}
    </>
        
    );
}

export default Select;