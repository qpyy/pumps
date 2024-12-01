import { StyledCustomSelectWrapper, StyledLabel, StyledSelect } from "./styles";

const CustomSelect = ({ labelText, options, required, maxWidth, handleChangeSelect, name }) => {
  return (
    <StyledCustomSelectWrapper>
      <StyledLabel>
        {labelText}
        {required && <span>*</span>}
      </StyledLabel>
      <StyledSelect name={name} maxWidth={maxWidth} onChange={handleChangeSelect}>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </StyledSelect>
    </StyledCustomSelectWrapper>
  );
};

export default CustomSelect;
