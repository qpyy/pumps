import styled from "styled-components";

const StyledLabel = styled.label`
  display: flex;
  align-items: center;
  width: 100%;
  cursor: pointer;
`;

const StyledCheckbox = styled.input`
  margin-bottom: 4px;
  margin-right: 20px;
  margin-left: 2px;
  width: 18px;
  height: 18px;
  border: 2px solid #f2f2f2;
  border-radius: 4px;
  accent-color: #334374;
`;

const StyledName = styled.span`
  font-size: 13px;
  color: #999999;
  font-weight: 500;
`;

export { StyledLabel, StyledName, StyledCheckbox };
