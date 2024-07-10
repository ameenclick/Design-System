import React from "react";
import ListPropsType from './type';

const List = ({ 
    type,
    text,
    children,
    classes,
    style,
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
    autoCapitalize,
    autoCorrect,
    autoSave,
 }: ListPropsType) => {

return (
    React.createElement(type, {
        className: classes,
        style: style,
        ariaLabel: ariaLabel,
        role: role,
        ariaLabelledby: ariaLabelledby,
        ariaDescribedby: ariaDescribedby,
        ariaHidden: ariaHidden,
        tabIndex: tabIndex,
        id: id,
        title: title,
        lang: lang,
        dir: dir,
        draggable: draggable,
        contentEditable: contentEditable,
        spellCheck: spellCheck,
        hidden: hidden,
        accessKey: accessKey,
        autoCapitalize: autoCapitalize,
        autoCorrect: autoCorrect,
        autoSave: autoSave,
    }, 
    <>
    {text}{children}
    </>)
)
};

export default List;