//import React from "react";
import ButtonPropsType from "./type"; //validate ButtonPropsType is a type that represents the props of the Button component.

const Button = ({
    type="button",
    text,
    classes ="",
    style={},
    children,
    ariaLabel,
    role="button",
    ariaLabelledby,
    ariaDescribedby,
    ariaHidden,
    tabIndex=0,
    id,
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
 } : ButtonPropsType) => {
    return (
      <button
        type={type}
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
        autoCapitalize={autoCapitalize}
        autoCorrect={autoCorrect}
        autoSave={autoSave}
        >
        {children || text}
      </button>
    );
}

export default Button;