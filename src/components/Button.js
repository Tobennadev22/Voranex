function Button({
  textColor,
  bgColor,
  children,
  OnClick,
  Padding,
  BorderRadius,
  hoverBgColor,
}) {
  return (
    <button
      style={{
        color: textColor,
        backgroundColor: bgColor,
        padding: Padding,
        borderRadius: BorderRadius,
        hoverBgColor: hoverBgColor,
      }}
      onClick={OnClick}
    >
      {children}
    </button>
  );
}

export default Button;
