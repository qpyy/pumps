import styled from "styled-components";

const StyledWrapper = styled.section`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 1fr;
  border: 1px solid #f2f2f2;

  & > * {
    padding: 30px 20px 24px 20px;
  }

  & > *:nth-child(even) {
    border-left: 1px solid #f2f2f2;
    border-right: 1px solid #f2f2f2;
  }

  @media (max-width: 800px) {
    grid-template-columns: 1fr;
    grid-template-rows: repeat(3, 1fr);

    & > *:nth-child(even) {
      border-left: none;
      border-right: none;
    }
  }
`;

export { StyledWrapper };
