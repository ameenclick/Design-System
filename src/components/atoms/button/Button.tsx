import ButtonPropsType from "./type"; //validate ButtonPropsType is a type that represents the props of the Button component.

const Button = ({
    type="button",
    classes ="",
    style={},
    children,
    onClick,
    ...restProps
 } : ButtonPropsType) => {
    return (
      <button
        type={type}
        className={classes}
        style={style}
        onClick={onClick}
        {...restProps}
        >
        {children}
      </button>
    );
}

export default Button;