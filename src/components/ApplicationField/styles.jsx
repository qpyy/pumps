import styled from "styled-components";

const StyledCatalog = styled.div`
  display: flex;
  flex-direction: column;

  button {
    font-size: 13px;
    text-align: left;
    line-height: 1;
    font-weight: 400;
    margin-bottom: 0px;
    background-color: #fff;
    border: 1px solid #f2f2f2;
    cursor: pointer;
    padding: 16px;
    width: 100%;
    position: relative;
    overflow: hidden;
    transition: background-color 0.3s ease, color 0.3s ease;

    &::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      height: 100%;
      width: 0;
      background-color: #334374;
      opacity: 0;
      transition: width 0.3s ease, opacity 0.3s ease;
    }

    &:hover {
      background-color: #f5f5f5;

      &::before {
        width: 4px;
        opacity: 1;
      }
    }

    &.active {
      background-color: #334374;
      color: #fff;
    }
  }
`;

const StyledWrapper = styled.div`
  padding: 30px 20px 24px 20px;
`;

export { StyledWrapper, StyledCatalog };
