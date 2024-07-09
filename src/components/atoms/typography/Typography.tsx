import React from "react";
import TagPropsType from "./type"; //validate TagPropsType is a type that represents the props of the Tag component.

const Tag = ({ 
    type="p",
    text,
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
    autoCapitalize,
    autoCorrect,
    autoSave,
    color,
    dirName,
    itemProp,
    itemScope,
    itemType,
    itemID,
    itemRef,
    itemValue,
    itemPropValue,
    itemPropName,
    itemPropID,
    itemPropType,
    itemPropRef,
    itemPropScope,
    itemPropItem,
    itemPropItemProp,
    itemPropItemRef,
    itemPropItemValue,
    itemPropItemID,
    itemPropItemScope,
    itemPropItemType
}: TagPropsType) => {
    return (
        React.createElement(type // Tag type
            , {
            className: classes,
            style: style, //The style should follow the React.CSSProperties type.
            areaLabel: ariaLabel, //The ariaLabel should follow the string type.
            role: role, //The role should follow the string type.
            ariaLabelledby: ariaLabelledby, //The ariaLabelledby should follow the string type.
            ariaDescribedby: ariaDescribedby, //The ariaDescribedby should follow the string type.
            ariaHidden: ariaHidden, //The ariaHidden should follow the boolean type.
            tabIndex: tabIndex, //The tabIndex should follow the number type.
            id: id, //The id should follow the string type.
            title: title, //The title should follow the string type.
            lang: lang, //The lang should follow the string type.
            dir: dir, //The dir should follow the string type.
            draggable: draggable, //The draggable should follow the boolean type.
            contentEditable: contentEditable, //The contentEditable should follow the boolean type.
            spellCheck: spellCheck, //The spellCheck should follow the boolean type.
            hidden: hidden, //The hidden should follow the boolean type.
            accessKey: accessKey, //The accessKey should follow the string type.
            autoCapitalize: autoCapitalize, //The autoCapitalize should follow the string type.
            autoCorrect: autoCorrect, //The autoCorrect should follow the string type.
            autoSave: autoSave, //The autoSave should follow the string type.
            color: color, //The color should follow the string type.
            dirName: dirName, //The dirName should follow the string type.
            itemProp: itemProp, //The itemProp should follow the string type.
            itemScope: itemScope, //The itemScope should follow the boolean type.
            itemType: itemType, //The itemType should follow the string type.
            itemID: itemID, //The itemID should follow the string type.
            itemRef: itemRef, //The itemRef should follow the string type.
            itemValue: itemValue, //The itemValue should follow the string type.
            itemPropValue: itemPropValue, //The itemPropValue should follow the string type.
            itemPropName: itemPropName, //The itemPropName should follow the string type.
            itemPropID: itemPropID, //The itemPropID should follow the string type.
            itemPropType: itemPropType, //The itemPropType should follow the string type.
            itemPropRef: itemPropRef, //The itemPropRef should follow the string type.
            itemPropScope: itemPropScope, //The itemPropScope should follow the boolean type.
            itemPropItem: itemPropItem, //The itemPropItem should follow the string type.
            itemPropItemProp: itemPropItemProp, //The itemPropItemProp should follow the string type.
            itemPropItemRef: itemPropItemRef, //The itemPropItemRef should follow the string type.
            itemPropItemValue: itemPropItemValue, //The itemPropItemValue should follow the string type.
            itemPropItemID: itemPropItemID, //The itemPropItemID should follow the string type.
            itemPropItemScope: itemPropItemScope, //The itemPropItemScope should follow the boolean type.
            itemPropItemType: itemPropItemType //The itemPropItemType should follow the string type.
        },
        <>
        {text}{children}
        </>)
    );
}

export default Tag;