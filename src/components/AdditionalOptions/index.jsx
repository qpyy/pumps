import { useNavigate, useSearchParams } from "react-router-dom";
import CustomInput from "../UI/CustomInput";
import CustomSelect from "../UI/CustomSelect";
import CustomButton from "../UI/CustomButton";
import StepTitle from "../UI/StepTitle";
import { updateUrlParams } from "../../helpers/url";
import { StyledWrapper, CustomButtonWrapper } from "./styles";

const options = [
  { value: "1", label: "1" },
  { value: "2", label: "2" },
  { value: "3", label: "3" },
];

const AdditionalOptions = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const seriesParam = searchParams.get("series");
  const hasValidSeriesParam = seriesParam && seriesParam !== "";
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    const updatedParams = { ...Object.fromEntries(searchParams.entries()) };

    if (value) {
      updatedParams[name] = value;
    } else {
      delete updatedParams[name];
    }

    updateUrlParams(searchParams, setSearchParams, updatedParams);
  };

  const handleSelectChange = (e) => {
    const { name, value } = e.target;
    const updatedParams = { ...Object.fromEntries(searchParams.entries()) };

    if (value) {
      updatedParams[name] = value;
    } else {
      delete updatedParams[name];
    }

    updateUrlParams(searchParams, setSearchParams, updatedParams);
  };

  const handleNavigateToResult = () => {
    navigate(`/results?${searchParams.toString()}`);
  };

  return (
    <StyledWrapper>
      <StepTitle number={3} text="Вводимые данные" />

      {hasValidSeriesParam ? (
        <>
          <CustomInput
            labelText="Производительность"
            required={true}
            measurementUnits="м3/ч"
            maxWidth="100px"
            handleChangeInput={handleInputChange}
            name="q"
            inputType="number"
          />
          <CustomInput
            labelText="Напор"
            required={true}
            measurementUnits="м"
            maxWidth="100px"
            handleChangeInput={handleInputChange}
            name="h"
            inputType="number"
          />
          <CustomSelect
            maxWidth="100px"
            labelText="Количество параллельно работающих насосов"
            options={options}
            handleChangeSelect={handleSelectChange}
            name="pumps"
          />
          <CustomButtonWrapper>
            <CustomButton
              onClick={handleNavigateToResult}
              bgColor="#3d5088"
              hoverBgColor="#465c9d"
              padding="12.5px 94px"
            >
              Далее
            </CustomButton>
          </CustomButtonWrapper>
        </>
      ) : (
        <>
          <p>Выберите одну или несколько серий насосов</p>
          <CustomButtonWrapper>
            <CustomButton disabled bgColor="#cccccc" hoverBgColor="#cccccc" padding="12.5px 94px">
              Далее
            </CustomButton>
          </CustomButtonWrapper>
        </>
      )}
    </StyledWrapper>
  );
};

export default AdditionalOptions;
