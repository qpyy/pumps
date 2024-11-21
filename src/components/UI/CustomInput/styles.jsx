import styled from "styled-components";

const StyledCustomInputWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;

  div {
    display: flex;
    flex-direction: row;
    align-items: center;
  }
`;

const StyledLabel = styled.span`
  font-size: 13px;
  margin: 0 40px 6px 0;
  font-weight: normal;
  color: #555555;

  span {
    color: red;
  }
`;

const StyledUnits = styled.span`
  font-size: 13px;
  margin-left: 8px;
  width: 30px;
  height: 20px;
  white-space: nowrap;
`;

const StyledInput = styled.input`
  background: #f7f7f7;
  border: 1px solid #eeeeee;
  border-radius: 2px;
  box-shadow: none;
  color: #383838;
  height: auto;
  font-size: 13px;
  padding: 8px 13px 7px;
  width: 100%;
  max-width: ${({ maxWidth }) => maxWidth || "100%"};
  outline: none;
`;

export { StyledCustomInputWrapper, StyledInput, StyledUnits, StyledLabel };
