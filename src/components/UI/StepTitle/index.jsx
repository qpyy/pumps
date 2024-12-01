import { StyledTitleWrapper } from "./styles";

const StepTitle = ({ number, text }) => {
  return (
    <StyledTitleWrapper>
      <div>{number}</div>
      <span>{text}</span>
    </StyledTitleWrapper>
  );
};

export default StepTitle;
