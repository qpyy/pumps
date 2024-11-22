import styled from "styled-components";

const StyledCustomSelectWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
`;

const StyledLabel = styled.label`
  font-size: 13px;
  margin-bottom: 6px;
  font-weight: normal;
  color: #555555;
  flex 1;
  text-align: left;  
`;

const StyledSelect = styled.select`
  background: #f7f7f7;
  border: 1px solid #eeeeee;
  border-radius: 2px;
  color: #383838;
  font-size: 13px;
  padding: 8px 13px;
  max-width: ${({ maxWidth }) => maxWidth || "100%"};
  width: 100%;
  outline: none;
  appearance: none;
  margin-right: 38px;
  transition: border-color 0.3s ease;

  &:focus {
    border-color: #465c9d;
  }
`;

export { StyledCustomSelectWrapper, StyledLabel, StyledSelect };
