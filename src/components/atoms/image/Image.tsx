import ImagePropsType from "./props"; //validate ImagePropsType is a type that represents the props of the Image component.


const Image = ({
    src,
    alt,
    classes,
    height,
    width,
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
    color,
}: ImagePropsType) => {
    return (
        <>
        <img 
            src={src} 
            alt={alt} 
            height={height}
            width={width}
            className={classes} 
            style={style} 
            aria-label={ariaLabel} 
            role={role} 
            aria-labelledby={ariaLabelledby} 
            aria-describedby={ariaDescribedby} 
            aria-hidden={ariaHidden} 
            tabIndex={tabIndex} 
            id={id} 
            title={title} 
            lang={lang} 
            dir={dir} 
            draggable={draggable} 
            contentEditable={contentEditable} 
            spellCheck={spellCheck} 
            hidden={hidden} 
            accessKey={accessKey} 
            autoCapitalize={autoCapitalize} 
            autoCorrect={autoCorrect} 
            autoSave={autoSave} 
            color={color}
            />
        </>
    );
}

export default Image;