import styled from "styled-components";

const StyledWrapper = styled.div`
  padding: 30px 20px 24px 20px;
  position: relative;

  p {
    color: #555;
    text-align: left;
  }
`;

const CustomButtonWrapper = styled.div`
  position: absolute;
  bottom: 20px;
  right: 20px;
  padding-bottom: 14px;
`;

export { StyledWrapper, CustomButtonWrapper };
