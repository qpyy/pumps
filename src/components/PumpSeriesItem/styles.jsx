import styled from "styled-components";

const StyledListItem = styled.li`
  padding-top: 8px;
  padding-bottom: 8px;
  border-bottom: 1px solid #f2f2f2;
`;

const StyledLabel = styled.label`
  display: flex;
  flex-direction: row;
  align-items: center;
  cursor: pointer;
`;

const StyledCheckbox = styled.input`
  margin-bottom: 4px;
  margin-right: 20px;
  margin-left: 20px;
  width: 18px;
  height: 18px;
  border: 2px solid #f2f2f2;
  border-radius: 4px;
  accent-color: #334374;
`;

const StyledImage = styled.img`
  width: 48px;
  height: 48px;
  margin-right: 16px;
  object-fit: contain;
`;

const StyledName = styled.span`
  font-size: 1rem;
  color: #333;
`;

export { StyledName, StyledImage, StyledCheckbox, StyledLabel, StyledListItem };
