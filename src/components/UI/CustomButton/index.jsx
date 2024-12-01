import { StyledButton } from "./styles";

const CustomButton = ({
  children,
  onClick,
  disabled,
  bgColor,
  borderColor,
  color,
  fontSize,
  lineHeight,
  fontWeight,
  textTransform,
  borderRadius,
  padding,
  margin,
  hoverBgColor,
  ...props
}) => {
  return (
    <StyledButton
      onClick={onClick}
      disabled={disabled}
      $bgColor={bgColor}
      borderColor={borderColor}
      color={color}
      fontSize={fontSize}
      lineHeight={lineHeight}
      fontWeight={fontWeight}
      textTransform={textTransform}
      borderRadius={borderRadius}
      padding={padding}
      margin={margin}
      $hoverBgColor={hoverBgColor}
      {...props}
    >
      {children}
    </StyledButton>
  );
};

export default CustomButton;
