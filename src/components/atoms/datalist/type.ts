import  React from "react";

interface DatalistPropsType {
    id: string, // validate id is a string that represents the id of the datalist element.
    options: Array<{ value: string, text: string }>, // validate options is an array of objects that represent the options of the datalist element.
    children?: React.ReactNode, // validate children is a ReactNode that represents the child elements of the element.
    label?: string, // validate label is a string that represents the label of the datalist element.
    ariaLabel?: string, // validate ariaLabel is a string that provides an accessible name for the element.
    role?: string, // validate role is a string that specifies the ARIA role of the element.
    ariaLabelledby?: string, // validate ariaLabelledby is a string that specifies the id of the element that labels the current element.
    ariaDescribedby?: string, // validate ariaDescribedby is a string that specifies the id of the element that describes the current element.
    ariaHidden?: boolean, // validate ariaHidden is a boolean that specifies whether the element is hidden from the accessibility tree.
    tabIndex?: number, // validate tabIndex is a number that specifies the tab order of the element.
    title?: string, // validate title is a string that specifies the title of the element.
    lang?: string, // validate lang is a string that specifies the language of the element.
    dir?: string, // validate dir is a string that specifies the text direction of the element.
    draggable?: boolean, // validate draggable is a boolean that specifies whether the element is draggable.
    contentEditable?: boolean, // validate contentEditable is a boolean that specifies whether the element is editable.
    spellCheck?: boolean, // validate spellCheck is a boolean that specifies whether the element is spell-checked.
    hidden?: boolean, // validate hidden is a boolean that specifies whether the element is hidden.
    accessKey?: string, // validate accessKey is a string that specifies the access key for the element.
    autoCapitalize?: string, // validate autoCapitalize is a string that specifies the auto-capitalization behavior of the element.
    autoCorrect?: string, // validate autoCorrect is a string that specifies the auto-correction behavior of the element.
    autoSave?: string, // validate autoSave is a string that specifies the auto-save behavior of the element.
    style?: React.CSSProperties, // validate style is a CSSProperties that represents the inline styles that will be applied to the element.
    classes?: string, // validate classes is a string that represents the CSS classes that will be applied to the element.
    itemProp?: string, // validate itemProp is a string that specifies the item property of the element.
    itemScope?: string, // validate itemScope is a string that specifies the item scope of the element.
    itemType?: string, // validate itemType is a string that specifies the item type of the element.
    itemID?: string, // validate itemID is a string that specifies the item id of the element.
    itemRef?: string, // validate itemRef is a string that specifies the item reference of the element.
    itemValue?: string, // validate itemValue is a string that specifies the item value of the element.
    itemPropValue?: string, // validate itemPropValue is a string that specifies the item property value of the element.
    itemPropName?: string, // validate itemPropName is a string that specifies the item property name of the element.
    itemPropID?: string, // validate itemPropID is a string that specifies the item property id of the element.
    itemPropType?: string, // validate itemPropType is a string that specifies the item property type of the element.
    itemPropRef?: string, // validate itemPropRef is a string that specifies the item property reference of the element.
    itemPropScope?: string, // validate itemPropScope is a string that specifies the item property scope of the element.
    itemPropItem?: string, // validate itemPropItem is a string that specifies the item property item of the element.
    itemPropItemProp?: string, // validate itemPropItemProp is a string that specifies the item property item property of the element.
    itemPropItemRef?: string, // validate itemPropItemRef is a string that specifies the item property item reference of the element.
    itemPropItemValue?: string, // validate itemPropItemValue is a string that specifies the item property item value of the element.
    itemPropItemID?: string, // validate itemPropItemID is a string that specifies the item property item id of the element.
    itemPropItemScope?: string, // validate itemPropItemScope is a string that specifies the item property item scope of the element.
    itemPropItemType?: string, // validate itemPropItemType is a string that specifies the item property item type of the element.
}

export default DatalistPropsType;