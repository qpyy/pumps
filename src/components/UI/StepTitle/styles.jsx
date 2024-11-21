import styled from "styled-components";

const StyledTitleWrapper = styled.h1`
  display: flex;
  align-items: center;
  margin-bottom: 25px;

  div {
    width: 32px;
    height: 32px;
    aspect-ratio: 1 / 1;
    border-radius: 50%;
    background: #53639e;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 700;
    font-size: 21px;
    line-height: 29px;
    color: #fff;
    margin-right: 16px;

    @media (max-width: 800px) {
      width: 28px;
      height: 28px;
      font-size: 18px;
      line-height: 24px;
      margin-right: 12px;
    }

    @media (max-width: 500px) {
      width: 24px;
      height: 24px;
      font-size: 16px;
      line-height: 20px;
      margin-right: 8px;
    }
  }

  span {
    font-size: 24px;
    line-height: 32px;

    @media (max-width: 800px) {
      font-size: 20px;
      line-height: 28px;
    }

    @media (max-width: 500px) {
      font-size: 18px;
      line-height: 24px;
    }
  }
`;
export { StyledTitleWrapper };
