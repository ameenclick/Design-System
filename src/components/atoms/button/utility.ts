import ButtonPropsType from "./type"; //validate ButtonPropsType is a type that represents the props of the Button component.
import classNames from "classnames";

const getBtnClasses = ({variant, variantType, classes, isLoading}: ButtonPropsType) => {
    const btnClasses = classNames("btn py-2 px-4 rounded-pill", {
        "btn-primary" : variant === "primary" && variantType === "filled",
        "btn-secondary" : variant === "secondary" && variantType === "filled",
        "btn-light" : variant === "tertiary" && variantType === "filled",
        "btn-outline-primary" : variant === "primary" && variantType === "outline",
        "btn-outline-secondary" : variant === "secondary" && variantType === "outline",
        "btn-outline-light" : variant === "tertiary" && variantType === "outline",
        "disable" : isLoading
        }, classes);
    return btnClasses
};

export default getBtnClasses;