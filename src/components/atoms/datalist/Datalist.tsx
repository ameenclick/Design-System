import  DatalistPropsTypes  from './type';

const   Datalist = ({
    options,
    id,
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

}: DatalistPropsTypes) => {
    return (
        <>
            {label && <label htmlFor={id}>{label}</label>}
            {children}
            <datalist
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
            >
                {options.map((option) => (
                    <option key={option.value} value={option.value}>
                        {option.text}
                    </option>
                ))}
            </datalist>
        </>
    );
}

export default Datalist;