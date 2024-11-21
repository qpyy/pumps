import { StyledCustomInputWrapper, StyledInput, StyledLabel, StyledUnits } from "./styles.jsx";

const CustomInput = ({
  inputType,
  labelText,
  measurementUnits,
  required,
  maxWidth,
  handleChangeInput,
  name,
}) => {
  return (
    <StyledCustomInputWrapper>
      <StyledLabel>
        {labelText}
        {required && <span> *</span>}
      </StyledLabel>
      <div>
        <StyledInput
          type={inputType}
          maxWidth={maxWidth}
          name={name}
          onChange={handleChangeInput}
        />
        {measurementUnits && <StyledUnits>{measurementUnits}</StyledUnits>}
      </div>
    </StyledCustomInputWrapper>
  );
};

export default CustomInput;
