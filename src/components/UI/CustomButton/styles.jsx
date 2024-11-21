import styled from "styled-components";

const StyledButton = styled.button`
  background-color: ${({ bgColor }) => bgColor || "#3d5088"};
  border: 1px solid ${({ borderColor }) => borderColor || "#3d5088"};
  color: ${({ color }) => color || "#ffffff"};
  font-size: ${({ fontSize }) => fontSize || "13px"};
  line-height: ${({ lineHeight }) => lineHeight || "18px"};
  font-weight: ${({ fontWeight }) => fontWeight || "normal"};
  text-transform: ${({ textTransform }) => textTransform || "none"};
  text-decoration: none;
  border-radius: ${({ borderRadius }) => borderRadius || "2px"};
  padding: ${({ padding }) => padding || "12.5px 94px"};
  margin: ${({ margin }) => margin || "0"};
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${({ hoverBgColor }) => hoverBgColor || "#465c9d"};
  }

  &:disabled {
    background-color: #b1b9cf;
    cursor: not-allowed;
    border-color: #ccc;
  }
`;

export { StyledButton };
