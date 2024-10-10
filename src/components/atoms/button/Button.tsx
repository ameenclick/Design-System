import Loader from "../loaders/Loader";
import ButtonPropsType from "./type"; //validate ButtonPropsType is a type that represents the props of the Button component.
import getBtnClasses from "./utility";

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

  const btnClasses = getBtnClasses({ variant, variantType, classes, isLoading });

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
            <Loader variant="grower" variantType="secondary" size="sm" />
          }
          {children}
        </span>
      </button>
  );
}

export default Button;