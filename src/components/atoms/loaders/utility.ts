import classNames from "classnames";
import LoaderPropsType from "./type";

const getLoaderClasses = ({variant, variantType, size="md", classes}: LoaderPropsType) => {
    const loadClasses = classNames({
        "spinner-border" : variant === "spinner",
        "spinner-grow" : variant === "grower",
        "spinner-grow-sm": size === "sm" && variant === "grower",
        "spinner-border-sm": size === "sm" && variant === "spinner",
        "text-primary" : variantType === "primary",
        "text-secondary" : variantType === "secondary",
        "text-success" : variantType === "success",
        "text-danger" : variantType === "danger",
        "text-warning" : variantType === "warning",
        "text-info" : variantType === "info",
        "text-light" : variantType === "light",
        "text-dark" : variantType === "dark",
    }, classes);
    return loadClasses
};

export default getLoaderClasses;