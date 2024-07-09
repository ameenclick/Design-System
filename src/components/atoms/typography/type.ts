import React from "react";

interface TypographyPropsType {
    tag: keyof JSX.IntrinsicElements, // validate keyof JSX.IntrinsicElements is a type that represents all the HTML tags that can be used in JSX.
    text: string, // validate text is a string that represents the text that will be displayed.
    classes?: string, // validate classes is a string that represents the CSS classes that will be applied to the element.
    children?: React.ReactNode // validate children is a ReactNode that represents the children of the element.
    style?: React.CSSProperties // validate style is a CSSProperties that represents the inline styles that will be applied to the element.
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
    color?: string; // validate color is a string that specifies the text color of the element.
    dirName?: string; // validate dirName is a string that specifies the directionality of the element's text.
    itemProp?: string; // validate itemProp is a string that specifies the microdata property of the element.
    itemScope?: boolean; // validate itemScope is a boolean that specifies whether the element is a microdata item.
    itemType?: string; // validate itemType is a string that specifies the microdata type of the element.
    itemID?: string; // validate itemID is a string that specifies the microdata ID of the element.
    itemRef?: string; // validate itemRef is a string that specifies the microdata references of the element.
    itemValue?: string; // validate itemValue is a string that specifies the microdata value of the element.
    itemPropValue?: string; // validate itemPropValue is a string that specifies the microdata property value of the element.
    itemPropName?: string; // validate itemPropName is a string that specifies the microdata property name of the element.
    itemPropID?: string; // validate itemPropID is a string that specifies the microdata property ID of the element.
    itemPropType?: string; // validate itemPropType is a string that specifies the microdata property type of the element.
    itemPropRef?: string; // validate itemPropRef is a string that specifies the microdata property references of the element.
    itemPropScope?: boolean; // validate itemPropScope is a boolean that specifies whether the element is a microdata property.
    itemPropItem?: string; // validate itemPropItem is a string that specifies the microdata property item of the element.
    itemPropItemProp?: string; // validate itemPropItemProp is a string that specifies the microdata property item property of the element.
    itemPropItemRef?: string; // validate itemPropItemRef is a string that specifies the microdata property item references of the element.
    itemPropItemValue?: string; // validate itemPropItemValue is a string that specifies the microdata property item value of the element.
    itemPropItemID?: string; // validate itemPropItemID is a string that specifies the microdata property item ID of the element.
    itemPropItemScope?: boolean; // validate itemPropItemScope is a boolean that specifies whether the element is a microdata property item.
    itemPropItemType?: string; // validate itemPropItemType is a string that specifies the microdata property item type of the element.
}

export default TypographyPropsType;