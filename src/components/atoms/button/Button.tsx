import ButtonPropsType from "./type"; //validate ButtonPropsType is a type that represents the props of the Button component.
import classNames from "classnames";

const Button = ({
    variant="primary",
    variantType = "filled",
    type="button",
    isLoading=false,
    classes ="",
    style={},
    children,
    onClick,
    disabled,
    ...restProps
 } : ButtonPropsType) => {

  // const getVariantClass = () => {
  //   switch (variant) {
  //     case "primary" : {
  //       return "btn-primary";
  //     }
  //     case "secondary": {
  //       return "btn-secondary"
  //     }
  //     case "tertiary": {
  //       return "btn-light"
  //     }
  //     default: {
  //       return "btn-primary";
  //     }
  //   }
  // }

  // const btnClasses = [
  //   "btn py-2 px-4 ",
  //   getVariantClass(),
  //   classes
  // ].join("");
  
    const btnClasses = classNames("btn py-2 px-4 rounded-pill", {
    "btn-primary" : variant === "primary" && variantType === "filled",
    "btn-secondary" : variant === "secondary" && variantType === "filled",
    "btn-light" : variant === "tertiary" && variantType === "filled",
    "btn-outline-primary" : variant === "primary" && variantType === "outline",
    "btn-outline-secondary" : variant === "secondary" && variantType === "outline",
    "btn-outline-light" : variant === "tertiary" && variantType === "outline",
    "disable" : isLoading
    }, classes)

    return (
      <button
        type={type}
        className={btnClasses}
        style={style}
        onClick={onClick}
        disabled={isLoading}
        {...restProps}
        >
        <span className="d-flex justify-content-center align-items-center gap-2">
          {
            isLoading &&
            <div className="spinner-border spinner-border-sm" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          }
          {children}
        </span>
      </button>
    );
}

export default Button;