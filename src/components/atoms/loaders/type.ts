type LoaderVariantType = "primary" | "secondary" | "success" | "danger" | "warning" | "info" | "light" | "dark"
type LoaderType = "spinner" | "grower";
type Size = "sm" | "md";

interface LoaderPropsType{
    variant: LoaderType,
    variantType: LoaderVariantType,
    classes?: string,
    style?: string,
    text?: string,
    size?: Size,
    children?: string,
}

export default LoaderPropsType;