import styled from "styled-components";

const StyledList = styled.ul`
  list-style: none;
  margin-top: 0;
  margin-bottom: 10px;
  border: 1px solid #f2f2f2;
  padding: 0;
  height: 300px;
  overflow-y: auto;
  overflow-x: hidden;

  ::-webkit-scrollbar {
    width: 6px;
  }

  ::-webkit-scrollbar-track {
    background: transparent;
  }

  ::-webkit-scrollbar-thumb {
    background: #ccc;
    border-radius: 10px;
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  ::-webkit-scrollbar-thumb:hover {
    opacity: 1;
  }
`;

const StyledListItem = styled.div`
  padding: 16px 18px;
  background-color: #f8f8f9;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

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

export { StyledList, StyledListItem, StyledLabel, StyledCheckbox, StyledName };
